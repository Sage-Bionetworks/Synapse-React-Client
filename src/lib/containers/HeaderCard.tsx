import { CardFooter, Icon } from './row_renderers/utils'
import { MarkdownValue } from './CardContainerLogic'
import MarkdownSynapse from './MarkdownSynapse'
import React, { useState, useEffect } from 'react'
import getColorPallette from './ColorGradient'

export type IconOptions = {
  [index: string]: string
}
export type HeaderCardProps = {
  iconOptions?: IconOptions
  backgroundColor?: string
  rgbIndex?: number
  type: string
  title: string
  subTitle: string
  description: string
  iconValue: string
  secondaryLabelLimit?: number
  values?: string[][]
  isAlignToLeftNav?: boolean
  descriptionLinkConfig?: MarkdownValue
  linkDisplay?: string
  target?: string
}

const HeaderCard: React.FunctionComponent<HeaderCardProps> = ({
  type,
  title,
  subTitle,
  description,
  iconOptions,
  iconValue,
  backgroundColor,
  values,
  secondaryLabelLimit,
  isAlignToLeftNav,
  descriptionLinkConfig,
  linkDisplay,
  target,
  rgbIndex,
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

  const backgroundColorUsed =
    rgbIndex !== undefined
      ? getColorPallette(rgbIndex, 1).colorPalette[0]
      : backgroundColor
  const style: React.CSSProperties = {
    background: backgroundColorUsed,
  }
  return (
    <div
      style={style}
      className={`SRC-portalCardHeader ${
        isAlignToLeftNav ? 'isAlignToLeftNav' : ''
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div
            className={`iconContainer${
              isAlignToLeftNav ? ' col-md-offset-1 col-md-2' : ' col-md-1'
            }`}
          >
            <Icon value={iconValue} iconOptions={iconOptions} type={type} />
          </div>
          <div
            className={`SRC-cardContent${
              isAlignToLeftNav ? ' col-md-8' : ' col-md-10'
            }`}
          >
            <div className="SRC-type">{type}</div>
            <div>
              <h3
                className="SRC-boldText SRC-blackText"
                style={{ margin: 'none' }}
              >
                {linkDisplay ? (
                  <a target={target} href={linkDisplay}>
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
                {descriptionLinkConfig ? (
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
    </div>
  )
}

export default HeaderCard
