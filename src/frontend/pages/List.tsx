import React from 'react'
import { TListPageProps } from './types'


const List: React.FC<TListPageProps> = ({
  edit
}) => {
  return (
    <h1>{edit ? 'EDIT' : 'READ'}</h1>
  )
}


export default List
