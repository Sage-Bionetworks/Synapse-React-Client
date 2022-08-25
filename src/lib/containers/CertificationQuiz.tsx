import React, { useEffect, useState } from 'react'
import { SynapseClient } from '../utils'
import { useSynapseContext } from '../utils/SynapseContext'
import {
  PassingRecord,
  QuizResponse,
  Quiz,
} from '../utils/synapseTypes/CertificationQuiz/Quiz'
import {
  MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
  QuestionResponse,
} from '../utils/synapseTypes/CertificationQuiz/Questions'
import parse from 'html-react-parser'
import { displayToast } from './ToastMessage'
import { Button } from 'react-bootstrap'
import { MarkdownPopover } from './MarkdownPopover'
import { HelpOutlineTwoTone } from '@material-ui/icons'
import Typography from '../utils/typography/Typography'

const CertificationQuiz: React.FunctionComponent = () => {
  const { accessToken } = useSynapseContext()
  const [quiz, setQuiz] = useState<Quiz | undefined>()
  const [questionResponse, setQuestionResponse] = useState<QuestionResponse[]>(
    [],
  )
  const [passingRecord, setPassingRecord] = useState<PassingRecord>()

  const gettingStartedUrl =
    'https://help.synapse.org/docs/Getting-Started.2055471150.html'

  const getQuiz = async () => {
    try {
      setQuiz(await SynapseClient.getCertifyQuiz(accessToken))
    } catch (err: any) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (accessToken) {
      getQuiz()
    }
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) {
      new Error('Please sign in to take certification quiz')
    }
  }, [accessToken])

  const onUpdateAnswer = (questionIndex: number, answer: number) => {
    const newState = [
      ...questionResponse.filter(obj => obj.questionIndex !== questionIndex),
      {
        questionIndex,
        answerIndex: [answer],
        concreteType: MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
      },
    ]
    setQuestionResponse(newState)
  }

  const handleRetakeQuiz = () => {
    window.location.reload()
  }

  const handleSubmit = async () => {
    try {
      if (quiz && quiz.questions.length === questionResponse.length) {
        const quizResponse: QuizResponse = {
          quizId: quiz.id,
          questionResponses: questionResponse,
        }
        const passRec = await SynapseClient.postCertifiedUserTestResponse(
          accessToken,
          quizResponse,
        )
        setPassingRecord(passRec)
        window.scrollTo(0, 0)
      } else {
        displayToast(
          'Please answer all of the questions and try again.',
          'warning',
        )
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const actionButtonConfig = (helpUrl: string) =>
    helpUrl
      ? {
          content: <>More info</>,
          closePopoverOnClick: true,
          onClick: () => window.open(helpUrl, '_blank'),
          variant: 'primary',
        }
      : undefined

  return (
    <div className="bootstrap-4-backport CertificationQuiz">
      {passingRecord && (
        <div>
          {passingRecord.passed == false && (
            <div className="failBanner">Quiz Failed</div>
          )}
          <Typography variant="hintText">
            Score: {passingRecord.score} / 15
          </Typography>
          {passingRecord.passed ? (
            displayToast(
              `You passed the Synapse Certification Quiz on ${passingRecord.passedOn}`,
            )
          ) : (
            <Typography variant="body1">
              Please review the items shown in red below, and{' '}
              <a style={{ color: '#407ba0' }} onClick={handleRetakeQuiz}>
                try again
              </a>
              .
            </Typography>
          )}
        </div>
      )}
      <div className="CertificationQuiz__container">
        <Button
          onClick={() => window.open(gettingStartedUrl, '_blank')}
          className="help-button"
          variant="light-secondary"
        >
          <HelpOutlineTwoTone
            className="HelpButton"
            style={{ marginRight: '4px' }}
          />
          Help
        </Button>
        {quiz ? parse(quiz.header) : ''}
        <form onSubmit={e => e.preventDefault()}>
          <ol>
            {quiz?.questions.map((question, index) => (
              <li key={question.questionIndex}>
                <Typography
                  variant="body1"
                  color={
                    passingRecord &&
                    (passingRecord.corrections.find(
                      quest =>
                        quest.question.questionIndex === question.questionIndex,
                    )?.isCorrect
                      ? 'inherit'
                      : 'error')
                  }
                >
                  {parse(question.prompt)}
                </Typography>
                {question.answers.map(choice => (
                  <div key={`${question.questionIndex}-${choice.answerIndex}`}>
                    <input
                      id={`${question.questionIndex}-${choice.answerIndex}`}
                      name={`${question.questionIndex}`}
                      type={question.exclusive ? 'radio' : 'checkbox'}
                      value={choice.answerIndex}
                      onChange={e =>
                        onUpdateAnswer(
                          question.questionIndex,
                          Number(e.target.value),
                        )
                      }
                      disabled={!!passingRecord}
                    />
                    <label
                      style={{ fontWeight: 400 }}
                      htmlFor={`${question.questionIndex}-${choice.answerIndex}`}
                    >
                      {choice.prompt}
                    </label>
                  </div>
                ))}
                <MarkdownPopover
                  contentProps={{ markdown: question.helpText }}
                  placement="right"
                  actionButton={actionButtonConfig(question.docLink)}
                  showCloseButton={true}
                >
                  <Typography variant="hintText" color="primary">
                    <HelpOutlineTwoTone
                      className="HelpButton"
                      style={{ marginRight: '4px' }}
                    />
                    Need help answering this question?
                  </Typography>
                </MarkdownPopover>
              </li>
            ))}
          </ol>
        </form>
        <Button
          className="help-button"
          variant="primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default CertificationQuiz
