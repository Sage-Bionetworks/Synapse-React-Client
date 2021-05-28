import { CardFooter } from './row_renderers/utils'
import { DescriptionConfig } from './CardContainerLogic'
import MarkdownSynapse from './MarkdownSynapse'
import React, { useState, useEffect } from 'react'

export type IconOptions = {
  [index: string]: string
}
export type HeaderCardProps = {  
  rgbIndex?: number
  type: string
  title: string
  subTitle: string
  description: string
  secondaryLabelLimit?: number
  values?: string[][]
  isAlignToLeftNav?: boolean
  descriptionConfig?: DescriptionConfig
  href?: string
  target?: string
  icon: JSX.Element
}

const HeaderCard: React.FunctionComponent<HeaderCardProps> = ({
  type,
  title,
  subTitle,
  description,
  values,
  secondaryLabelLimit,
  isAlignToLeftNav,
  descriptionConfig,
  href,
  target,
  rgbIndex,
  icon,
}) => {
  // store old document title and description so that we can restore when this component is removed
  const descriptionElement: Element | null = document.querySelector(
    'meta[name="description"]',
  )
  const [docTitle] = useState<string>(document.title)
  const [docDescription] = useState<string>(
    descriptionElement ? descriptionElement.getAttribute('content')! : '',
  )
  useEffect(() => {
    // update page title and description based on header card values
    if (title && document.title !== title) {
      document.title = title
    }

    if (description || subTitle) {
      descriptionElement?.setAttribute(
        'content',
        description ? description : subTitle,
      )
    }

    return function cleanup() {
      document.title = docTitle
      descriptionElement?.setAttribute('content', docDescription)
    }
  })

  return (
    <div      
      className={`SRC-portalCard SRC-portalCardHeader ${
        isAlignToLeftNav ? 'isAlignToLeftNav' : ''
      }`}
    >
      <div className="SRC-portalCardMain">
        {icon}
        <div className="SRC-cardContent">
          <div className="SRC-type">{type}</div>
          <div>
            <h3
              className="SRC-boldText"
              style={{ margin: 'none' }}
            >
              {href ? (
                <a target={target} href={href}>
                  {title}
                </a>
              ) : (
                <span> {title} </span>
              )}
            </h3>
          </div>
          {subTitle && <div className="SRC-author"> {subTitle} </div>}
          {description && (
            <span className="SRC-font-size-base">
              {descriptionConfig?.isMarkdown ? (
                <MarkdownSynapse markdown={description} />
              ) : (
                description
              )}
            </span>
          )}
          <div
            style={{
              borderTop: '1px solid rgba(26, 28, 41, 0.2)',
              marginTop: '15px',
              paddingTop: '5px',
            }}
          >
            {values && (
              <CardFooter
                isHeader={true}
                secondaryLabelLimit={secondaryLabelLimit}
                values={values}
              />
            )}
          </div>
        </div>
      </div>
    </div>    
  )
}

export default HeaderCard
