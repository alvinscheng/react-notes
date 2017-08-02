import React, { Component } from 'react'
import NotesList from './notes-list'
import Form from './form'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <h1 className='text-center'>Notes</h1>
          </div>
          <div className='row'>
            <div className='col-sm-3'>
              <NotesList update={this.props.update}/>
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
