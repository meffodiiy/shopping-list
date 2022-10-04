import React, { useEffect, useState } from 'react'
import { AddButton, List, ListItem, Page, Text } from '../components'
import { TList } from '../../backend/types'


const Main: React.FC = () => {
  const [lists, setLists] = useState<Array<TList>>([])

  const loadLists = () => {
    fetch('/list')
      .then(response => response.json())
      .then(setLists)
      .catch(({ error }) => console.error(error))
  }

  useEffect(() => {
    loadLists()
  }, [])

  const openList = (id: string) => () => {
    window.open(`/${id}`, '_self')
  }

  const openListForEdit = (id: string) => () => {
    window.open(`/${id}/edit`, '_self')
  }

  const createAndOpenList = () => {
    fetch('/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'New List'
      })
    })
      .then(response => response.json())
      .then(({ id }) => openListForEdit(id)())
      .catch(({ error }) => console.error(error))
  }

  const removeList = (id: string) => () => {
    fetch(`/list/${id}`, {
      method: 'DELETE'
    })
      .then(loadLists)
      .catch(({ error }) => console.error(error))
  }

  return (
    <Page>
      <Text size={2} bold editable>My lists</Text>
      <List
        items={lists}
        render={({ id, title }) => (
          <ListItem
            key={id}
            onClick={openList(id)}
            edit onEditClick={openListForEdit(id)}
            remove onRemoveClick={removeList(id)}
          >
            { title }
          </ListItem>
        )}
      />
      <AddButton onClick={createAndOpenList}>Add list</AddButton>
    </Page>
  )
}


export default Main
