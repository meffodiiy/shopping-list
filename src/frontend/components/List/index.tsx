/* List */

import React from 'react'
import * as Styles from './styles'
import { TListProps } from './types'


const List = <T, > ({
  items,
  render
}: TListProps<T>) => {
  return (
    <Styles.RootContainer>
      { items.map((item, index) => render(item, index)) }
    </Styles.RootContainer>
  )
}


export default List
