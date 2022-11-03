import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {
  useCreateThread,
  useUpdateThreadTitle,
  useUpdateThreadMessage,
} from '../../utils/hooks/SynapseAPI/forum/useForum'
import { CreateDiscussionThread } from '../../utils/synapseTypes/DiscussionBundle'
import { MarkdownEditor } from '../markdown/MarkdownEditor'

export type ForumThreadEditorProps = {
  initialTitle?: string
  initialText?: string
  id: string
  onClose: () => void
}

export const ForumThreadEditor: React.FunctionComponent<
  ForumThreadEditorProps
> = ({ initialText, initialTitle, id, onClose }) => {
  const [title, setTitle] = useState<string>(initialTitle ?? '')
  const [text, setText] = useState<string>(initialText ?? '')
  const { mutate: updateTitle } = useUpdateThreadTitle()
  const { mutate: updateMessage } = useUpdateThreadMessage()
  const { mutate: postThread } = useCreateThread()

  const onSave = (text: string, title: string) => {
    if (initialTitle) {
      updateTitle({
        title: title,
        threadId: id,
      })
      updateMessage({
        messageMarkdown: text,
        threadId: id,
      })
    } else {
      const request: CreateDiscussionThread = {
        forumId: id,
        title: title,
        messageMarkdown: text,
      }
      postThread(request)
    }
  }

  const handleSave = () => {
    onSave(text, title)
    onClose()
  }

  return (
    <div className="bootstrap-4-backport">
      <input
        placeholder="Title"
        type="text"
        style={{ width: '100%', padding: '4px' }}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <MarkdownEditor text={text} setText={setText} />
      <div style={{ float: 'right' }}>
        <Button onClick={onClose} variant="light">
          Cancel
        </Button>
        <Button onClick={() => handleSave()} variant="primary">
          Save
        </Button>
      </div>
    </div>
  )
}
