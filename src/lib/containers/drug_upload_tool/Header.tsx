import * as React from 'react';

export type HeaderProps = {
  copy?: string;
  title: string;
};

export default function Header(props: HeaderProps) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.copy && (
        <div dangerouslySetInnerHTML={{ __html: props.copy }}></div>
      )}
      <hr></hr>
    </>
  );
}
