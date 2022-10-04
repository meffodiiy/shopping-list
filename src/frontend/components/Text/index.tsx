/* Text */

import React, { ChangeEvent, useEffect, useState } from 'react'
import * as Styles from './styles'
import { TTextProps } from './types'
import { PwC } from '../../types'
import { FONT_SIZE } from '../../constants/numbers'


const Text: React.FC<PwC<TTextProps, string | undefined>> = ({
  editable = false,
  size = 1,
  bold = false,
  onChange,
  placeholder,
  children
}) => {
  const [text, setText] = useState(children)

  useEffect(() => {
    setText(children)
  }, [children])

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setText(value)
    onChange?.(value)
  }

  return (
    <Styles.RootContainer
      fontSize={FONT_SIZE[size]}
      boldText={bold}
    >
      { editable ? (
        <Styles.Input
          value={text}
          onChange={onTextChange}
          placeholder={placeholder}
        />
      ) : children }
    </Styles.RootContainer>
  )
}


export default Text
