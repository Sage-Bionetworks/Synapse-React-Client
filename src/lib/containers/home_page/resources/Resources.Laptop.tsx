import { Data } from './Resources'
import React, { useState } from 'react'
import MarkdownSynapse from 'lib/containers/MarkdownSynapse'

export type ResourcesLaptopProps = {
  data: Data
  token?: string
}

export default function ResourcesLaptop({ data, token }: ResourcesLaptopProps) {
  const [index, setIndex] = useState(0)
  return (
    <div className="control-container">
      <div className="button-container">
        {data?.map((el, curIndex) => {
          return (
            <button
              className={index === curIndex ? 'isSelected' : ''}
              onClick={() => setIndex(curIndex)}
              key={el.name}
            >
              {el.name}
            </button>
          )
        })}
        {/* 
            This button keeps the border line in the button container running from top to bottom,
            it doesn't have any functionality.
          */}
        <button className="gap-fill" />
      </div>
      <div className="content-container">
        {data?.map((el, curIndex) => {
          const { wikiValue } = el
          const split = wikiValue.split('/')
          const ownerId = split[0]
          const wikiId = split[2]
          return (
            <span key={ownerId} className={index === curIndex ? '' : 'hide'}>
              <MarkdownSynapse
                token={token}
                ownerId={ownerId}
                wikiId={wikiId}
              />
            </span>
          )
        })}
      </div>
    </div>
  )
}
