import React, { Component } from 'react'
import store from '../store'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', content: '' }
    this.saveNote = this.saveNote.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { value, name } = event.target
    name === 'title'
      ? this.setState({ title: value })
      : this.setState({ content: value })
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
    })
    .then(() => {
      store.dispatch({ type: 'NOTE_ADDED' })
      this.setState({ title: '', content: '' })
    })
  }

  render() {
    const { title, content } = this.state
    return (
      <form onSubmit={ this.saveNote }>
        <input type='text' name='title' onChange={ this.handleChange } value={ title }/>
        <textarea rows='4' name='content' onChange={ this.handleChange } value={ content }></textarea>
        <button type='submit'>Save</button>
      </form>
    )
  }
}
