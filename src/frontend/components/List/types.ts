/* List */

import React from 'react'

export type TListProps <Item> = {
	items: Array<Item>
	render: (item: Item, index: number) => React.ReactElement
}
