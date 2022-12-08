import React from 'react'

// TODO: Strong typing for the generic
type ConditionalWrapperProps<T extends Record<string, unknown> = any> = {
  condition: boolean
  wrapper: React.ComponentType<React.PropsWithChildren<T>>
  wrapperProps?: T
  children: React.ReactNode
}

export default function ConditionalWrapper(props: ConditionalWrapperProps) {
  const { condition, wrapper: Wrapper, wrapperProps, children } = props

  return condition ? (
    <Wrapper {...wrapperProps}>{children}</Wrapper>
  ) : (
    <>{children}</>
  )
}
