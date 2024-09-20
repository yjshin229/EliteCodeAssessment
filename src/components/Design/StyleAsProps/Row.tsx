import React from 'react'
import { Div, DivPropsType } from '../StyleAsProps'

export const Row = (props: DivPropsType) => {
  return <Div {...props} flexRow />
}
