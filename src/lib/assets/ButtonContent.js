import React from 'react'

export default ({ children, icon }) => (
  <span style={{ paddingRight: 10, fontWeight: 500, paddingLeft: icon ? 0 : 10, paddingTop: 10, paddingBottom: 10 }}>{children}</span>
)
