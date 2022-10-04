/* ListItem */

export type TListItemProps = {
	editable?: boolean
	onEditText?: (text: string) => void
	edit?: boolean
	onEditClick?: () => void
	remove?: boolean
	onRemoveClick?: () => void
	dragAndDrop?: boolean
	onClick?: () => void
	placeholder?: string
}
