import React, { useState } from 'react'


const NewList: React.FC = () => {
  const [title, setTitle] = useState('')

  const createAndOpenList = () => {
    fetch('/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title
      })
    })
      .then(response => response.json())
      .then(({ id }) => window.location.replace(`/${id}/edit`))
      .catch(({ error }) => console.error(error))
  }

  return (
    <>
      <h1>New List</h1>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        onClick={createAndOpenList}
        disabled={!title}
      >
        Create
      </button>
    </>
  )
}


export default NewList
