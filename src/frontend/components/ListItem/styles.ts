/* ListItem */

import styled from 'styled-components'


export const RootContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`

export const Circle = styled.span`
	width: 8px;
	height: 8px;
	
	border-radius: 100%;
	background-color: black;
	
	margin-right: 10px;
`

export const DragAndDropIcon = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 5px;
	
  cursor: grabbing;
`

export const EditIcon = styled.img`
	width: 13px;
	height: 13px;
  margin-inline: 10px;
	
	cursor: pointer;
`

export const RemoveIcon = styled.img`
  width: 20px;
  height: 20px;
	margin-inline: 5px;
  cursor: pointer;
`
