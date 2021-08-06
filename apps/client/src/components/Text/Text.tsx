import React from 'react'

import { Component, IComponetProps } from './styled.text'

export function Text(props: IComponetProps) {
  const { text } = props

  return <Component {...props}>{text}</Component>
}
