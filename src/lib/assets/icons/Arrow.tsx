import React from 'react'

const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className={`SRC-arrow-icon ${props.className ?? ''}`}
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 15.2904L0 19.7096L26.5152 19.7096L14.3624 31.8624L17.5 35L35 17.5L17.5 -1.68579e-07L14.3624 3.13763L26.5152 15.2904L0 15.2904Z" />
  </svg>
)

export default Arrow
