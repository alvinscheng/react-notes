import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.saveNote = this.saveNote.bind(this)
  }

  saveNote(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const note = {
      title: data.get('title'),
      content: data.get('content')
    }
    fetch('/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    }).then(() => event.target.reset())
  }

  render() {
    return (
      <form onSubmit={ this.saveNote }>
        <input type='text' name='title'/>
        <textarea rows='4' name='content'></textarea>
        <button type='submit'>Save</button>
      </form>
    )
  }
}
