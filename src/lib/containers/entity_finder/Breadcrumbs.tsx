import React from 'react'

export type BreadcrumbItem = {
  name: string
  isCurrent: boolean
  action?: () => void
}

export type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  items,
}: BreadcrumbsProps) => {
  const truncateBreadcrumbs = items.length > 4
  if (truncateBreadcrumbs) {
    items = items.slice(-4)
  }
  return (
    <div className="Breadcrumbs">
      {items.length > 0 && <span>You are in: </span>}
      {truncateBreadcrumbs && (
        <>
          <button className="BreadcrumbItem Current">...</button>
          <span>&gt;</span>
        </>
      )}
      {items.map((item, index) => (
        <>
          <button
            className={`BreadcrumbItem ${item.isCurrent ? 'Current' : ''}`}
            key={index}
            onClick={event => {
              event.preventDefault()
              if (item.action) {
                item.action()
              }
            }}
          >
            {item.name}
          </button>
          {index !== items.length - 1 && <span>&gt;</span>}
        </>
      ))}
    </div>
  )
}
