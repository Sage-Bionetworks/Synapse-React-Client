import * as React from 'react'

export type HeaderProps = {
  isSubmitted?: boolean
  bodyText?: string //should never take user input only use cardcoded text from a parent component. Uses dangerouslySetInnerHTML
  title: string
}

export default function Header(props: HeaderProps) {
  const bodyText = props.isSubmitted ? (
    <div>Your information has been submitted</div>
  ) : props.bodyText ? (
    <div dangerouslySetInnerHTML={{ __html: props.bodyText }}></div>
  ) : (
    <></>
  )
  return (
    <div
      className={`submission-header${props.isSubmitted ? ' submitted' : ''}`}
    >
      <h2>{props.title}</h2>
      {bodyText}
      <hr></hr>
    </div>
  )
}
