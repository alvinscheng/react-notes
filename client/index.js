import React from 'react'
import NotesList from './components/notes-list'
import { render } from 'react-dom'

render(
  <NotesList />,
  document.querySelector('#app')
)
