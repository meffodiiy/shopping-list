import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TListPageProps } from './types'
import { TItem } from '../../backend/types'
import { Page, Text, List, ListItem, AddButton } from '../components'


const ListPage: React.FC<TListPageProps> = ({
  edit
}) => {
  const { id: listId } = useParams()
  const [title, setTitle] = useState('')
  const [items, setItems] = useState<Array<TItem>>([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetch(`/list/${listId}`)
      .then(response => response.json())
      .then(({ title, items }) => {
        setTitle(title)
        setItems(items)
      })
      .catch(({ error }) => console.error(error))
  }, [])


  const addItem = () => {
    const newItem = {
      index: items.length,
      text: ''
    }
    fetch(`/item/${listId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(response => response.json())
      .then(({ id }) => setItems(prevItems => [...prevItems, { id, ...newItem }]))
      .catch(({ error }) => console.error(error))
  }

  const changeTitle = (newTitle: string) => {
    fetch(`/list/${listId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newTitle
      })
    })
      .catch(({ error }) => console.error(error))
  }

  const updateItem = (id: string) => (params: { text?: string, index?: number }) => {
    fetch(`/item/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .catch(({ error }) => console.error(error))
  }

  const updateItemText = (id: string) => (text: string) => updateItem(id)({ text })
  const updateItemIndex = (id: string) => (index: number) => updateItem(id)({ index })

  const removeItem = (id: string) => () => {
    fetch(`/item/${id}`, {
      method: 'DELETE'
    })
      .then(() => setItems(prevItems => prevItems.filter(({ id: prevId }) => prevId !== id )))
      .catch(({ error }) => console.error(error))
  }

  return (
    <Page>
      <Text
        size={2} bold
        editable={edit}
        onChange={changeTitle}
      >
        {title}
      </Text>
      <List
        items={items.sort(({ index: idx1 }, { index: idx2 }) => idx1 < idx2 ? -1 : 1)}
        render={({ id, text }) => (
          <ListItem
            key={id}
            editable={edit} onEditText={updateItemText(id)}
            remove={edit} onRemoveClick={removeItem(id)}
            dragAndDrop={edit}
            placeholder="New item..."
          >
            { text }
          </ListItem>
        )}
      />
      { edit && <AddButton onClick={addItem}>Add Item</AddButton> }
    </Page>
  )
}


export default ListPage
