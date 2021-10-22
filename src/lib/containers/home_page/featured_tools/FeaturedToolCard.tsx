import React from 'react'

export type FeaturedToolCardProps = {
  id: string
  name: string
  description: string
  type: string
  toolDetailPageURL: string
}

export const FeaturedToolCard: React.FunctionComponent<
FeaturedToolCardProps & React.HTMLAttributes<HTMLDivElement>
> = ({ id, name, description, type, toolDetailPageURL, ...domProps }) => {
  return (
    <div
      {...domProps}
      className={`cardContainer FeaturedToolCard bootstrap-4-backport ${
        domProps.className ?? ''
      }`}
    >
      <div>
        <div className="FeaturedToolCard__Name">{name}</div>
        <div className="FeaturedToolCard__Description">
          {description}
        </div>
        <div className="FeaturedToolCard__Description">
          {type}
        </div>
      </div>
      <a
        className="FeaturedToolCard__ViewToolButton"
        href={`${toolDetailPageURL}${id}`}
      >
        View Tool
      </a>
    </div>
  )
}
