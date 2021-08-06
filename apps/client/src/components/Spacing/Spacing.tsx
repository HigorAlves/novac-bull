import React from 'react'

import { Component, ISpacingProps } from './styled.spacing'

export function Spacing(props: ISpacingProps): JSX.Element {
  const { children } = props

  return <Component {...props}>{children}</Component>
}
