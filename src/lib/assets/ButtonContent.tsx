import * as React from 'react'

export default ({ children, icon }: { children: any; icon?: any }) => {
  const style: React.CSSProperties = {
    paddingRight: 10,
    fontWeight: 500,
    paddingLeft: icon ? 0 : 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    width: '100%',
  }
  return <span style={style}>{children}</span>
}
