/* AddButton */

import React from 'react'
import * as Styles from './styles'
import { TAddButtonProps } from './types'
import { PwC } from '../../types'


const AddButton: React.FC<PwC<TAddButtonProps, string>> = ({
  onClick,
  children
}) => {
  return (
    <Styles.RootContainer onClick={onClick}>
      + { children }
    </Styles.RootContainer>
  )
}


export default AddButton
