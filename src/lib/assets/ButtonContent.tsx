import * as React from 'react'

const ButtonContent = ({ children, icon }: { children: any; icon?: any }) => {
  const style: React.CSSProperties = {
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    width: '100%',
  }
  return <div style={style}>{children}</div>
}

export default ButtonContent
