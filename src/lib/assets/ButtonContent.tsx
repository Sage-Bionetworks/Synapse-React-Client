import * as React from 'react'

export default ({ children, icon }: { children: any, icon: any }) => {
  const style = { paddingRight: 10, fontWeight: 500, paddingLeft: icon ? 0 : 10, paddingTop: 10, paddingBottom: 10 }
  return (
    <span
      style={style}
    >
      {children}
    </span>
  )
}
