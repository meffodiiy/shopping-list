import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, List, NewList } from './pages'


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/new" element={<NewList/>}/>
      <Route path="/:id" element={<List/>}/>
      <Route path="/:id/edit" element={<List edit/>}/>
    </Routes>
  </BrowserRouter>
)
