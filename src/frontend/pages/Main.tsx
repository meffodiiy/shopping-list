import React, { useEffect, useState } from 'react'


const Main: React.FC = () => {
  const [lists, setLists] = useState([])

  const loadLists = () => {
    fetch('/list')
      .then(response => response.json())
      .then(setLists)
      .catch(({ error }) => console.error(error))
  }

  useEffect(() => {
    loadLists()
  }, [])

  const removeList = (id: string) => () => {
    fetch(`/list/${id}`, {
      method: 'DELETE'
    })
      .then(loadLists)
      .catch(({ error }) => console.error(error))
  }

  return (
    <>
      <h1>My lists</h1>
      <a href="/new">NEW</a>
      <h3>Lists</h3>
      { lists.map(({ id, title }) => (
        <div key={id}>
          <a href={`/${id}`}>{title}</a>
          <a href={`/${id}/edit`}>Edit</a>
          <button onClick={removeList(id)}>Remove</button>
        </div>
      )) }
    </>
  )
}


export default Main
