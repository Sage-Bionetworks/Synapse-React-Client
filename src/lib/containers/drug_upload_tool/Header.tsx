import * as React from 'react';

export type HeaderProps = {
  bodyText?: string; //should never take user input only use cardcoded text from a parent component. Uses dangerouslySetInnerHTML
  title: string;
};

export default function Header(props: HeaderProps) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.bodyText && (
        <div dangerouslySetInnerHTML={{ __html: props.bodyText }}></div>
      )}
      <hr></hr>
    </>
  );
}
