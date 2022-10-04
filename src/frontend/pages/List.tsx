import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TListPageProps } from './types'
import { TItem } from '../../backend/types'


const List: React.FC<TListPageProps> = ({
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
      text
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

  const changeTitle = () => {
    fetch(`/list/${listId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title
      })
    })
      .catch(({ error }) => console.error(error))
  }

  return (
    <>
      <h1>{title || 'No Title'}</h1>
      { edit ? (
        <>
          <h3>Change Title</h3>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button
            onClick={changeTitle}
            disabled={!title}
          >
            Change
          </button>
        </>
      ) : (
        <>
          <h3>Add Item</h3>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            onClick={addItem}
            disabled={!text}
          >
            Add
          </button>
        </>
      ) }
      <h3>Items</h3>
      <ol>
        { items
          .sort(({ index: idx1 }, { index: idx2 }) => idx1 < idx2 ? -1 : 1)
          .map(({ id, text }) => (
            <li key={id}>
              { text }
            </li>
          )) }
      </ol>
    </>
  )
}


export default List
