/* ListItem */

import React, { MouseEvent } from 'react'
import * as Styles from './styles'
import { TListItemProps } from './types'
import { PwC } from '../../types'
import { Text } from '../index'

import DragAndDropIcon from '../../../../assets/img/9034361_drag_handle_dots_2_icon.svg'
import EditIcon from '../../../../assets/img/326602_create_edit_pencil_write_icon.svg'
import RemoveIcon from '../../../../assets/img/9104213_close_cross_remove_delete_icon.svg'


const ListItem: React.FC<PwC<TListItemProps, string>> = ({
  editable = false,
  onEditText,
  edit = false,
  onEditClick,
  remove = false,
  onRemoveClick,
  dragAndDrop = false,
  onClick,
  placeholder,
  children
}) => {
  const onEditClicked = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    onEditClick?.()
  }

  const onRemoveClicked = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    onRemoveClick?.()
  }

  return (
    <Styles.RootContainer
      onClick={onClick}
      draggable={editable}
    >
      { dragAndDrop ? (
        <Styles.DragAndDropIcon
          src={DragAndDropIcon}
          draggable={false}
        />
      ) : <Styles.Circle/> }
      <Text
        editable={editable}
        onChange={onEditText}
        placeholder={placeholder}
      >
        { children }
      </Text>
      { edit && <Styles.EditIcon src={EditIcon} onClick={onEditClicked}/> }
      { remove && <Styles.RemoveIcon src={RemoveIcon} onClick={onRemoveClicked}/> }
    </Styles.RootContainer>
  )
}


export default ListItem
