import React, { Component } from 'react'
import NotesList from './components/notes-list'
import Form from './components/form'
import { render } from 'react-dom'

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <h1 className='text-center'>Notes</h1>
          </div>
          <div className='row'>
            <div className='col-sm-3'>
              <NotesList />
            </div>
            <div className='col-sm-6'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(
  <MainPage />,
  document.querySelector('#app')
)
