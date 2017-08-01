import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.saveNote = this.saveNote.bind(this)
  }

  saveNote(event) {
    event.preventDefault()
    console.log('saving...')
  }

  render() {
    return (
      <form onSubmit={ this.saveNote }>
        <input type='text'/>
        <textarea rows='4'></textarea>
        <button type='submit'>Save</button>
      </form>
    )
  }
}
