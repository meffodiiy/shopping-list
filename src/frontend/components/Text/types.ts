/* Text */

import { FONT_SIZE } from '../../constants/numbers'


export type TTextProps = {
	editable?: boolean
	size?: keyof typeof FONT_SIZE
	bold?: boolean
	onChange?: (text: string) => void
	placeholder?: string
}
