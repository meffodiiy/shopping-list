/* Text */

import styled from 'styled-components'
import { LIGHT_YELLOW } from '../../constants/colors'


export const RootContainer = styled.p<{
	fontSize: number
	boldText: boolean
}>`
	flex: 1;
	font-size: ${({ fontSize }) => `${fontSize}px`};
	font-weight: ${({ boldText }) => boldText ? 'bold' : 'unset'};
	
	margin-block: 10px;
	
	outline: none;
`

export const Input = styled.input`
	background: none;
	border: none;
	outline: none;
	padding: unset;
	
	font-size: inherit;
	font-weight: inherit;
	
	&::placeholder {
		color: ${LIGHT_YELLOW};
	}
`
