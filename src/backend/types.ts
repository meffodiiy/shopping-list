/* backend */

export type TList = {
	id: string
	title: string
	items: Array<TItem>
}

export type TItem = {
	id: string
	index: number
	text: string
}

export type TItemWithoutId = Omit<TItem, 'id'>
