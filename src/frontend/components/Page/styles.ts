/* Page */

import styled from 'styled-components'
import { YELLOW } from '../../constants/colors'
import { MIN_PAGE_WIDTH_Px } from '../../constants/numbers'


export const RootContainer = styled.div`
  display: flex;
	justify-content: center;
	
	width: 100%;
	height: 100%;
	
	background-color: ${YELLOW};
`

export const Center = styled.div`
	min-width: ${MIN_PAGE_WIDTH_Px}px;
`
