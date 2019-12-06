import * as React from 'react'
import { CardFooter, Icon } from './row_renderers/utils'

export type IconOptions = {
  [index: string]: string
}
export type HeaderCardProps = {
  iconOptions?: IconOptions
  backgroundColor?: string
  type: string
  title: string
  subTitle: string
  description: string
  iconValue: string
  secondaryLabelLimit?: number
  values?: string[][]
  isAlignToLeftNav?: boolean
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
  isAlignToLeftNav
}) => {
  const style: React.CSSProperties = {
    background: backgroundColor,
  }
  return (
    <div style={style} className={`SRC-portalCardHeader${isAlignToLeftNav ? ' isAlignToLeftNav': ''}`}>
      <div className="container-fluid">
        <div className="row">
          <div className={`iconContainer${isAlignToLeftNav ? ' col-md-offset-1 col-md-2': ' col-md-1'}`}>
            <Icon value={iconValue} iconOptions={iconOptions} type={type} />
          </div>
          <div className={`SRC-cardContent${isAlignToLeftNav ? ' col-md-8': ' col-md-10'}`}>
            <div className="SRC-type">{type}</div>
            <div>
              <h3
                className="SRC-boldText SRC-blackText"
                style={{ margin: 'none' }}
              >
                {title}
              </h3>
            </div>
            {subTitle && <div className="SRC-author"> {subTitle} </div>}
            <span className="SRC-font-size-base">{description}</span>
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
