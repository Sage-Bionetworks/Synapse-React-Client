import * as React from 'react'

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
  icon: string
}

const HeaderCard:React.FunctionComponent<HeaderCardProps> = ({
  type,
  title,
  subTitle,
  description,
  iconOptions,
  icon,
  backgroundColor
}) => {
  const style: React.CSSProperties = {
    background: backgroundColor,
  }
  return (
    <div
      style={style}
      className={'SRC-portalCardHeader'}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 iconContainer">
            <img src={iconOptions![icon]} className="iconImg"/>
          </div>
          <div className="SRC-cardContent col-md-10">
            <div className="SRC-type">{type}</div>
            <div className="SRC-title">
              <h3 className="SRC-boldText SRC-blackText" style={{ margin: 'none' }}>
                {title}
              </h3>
            </div>
            {subTitle && <div className="SRC-author"> {subTitle} </div>}
            <span className="SRC-font-size-base">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCard
