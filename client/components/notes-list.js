import React, { Component } from 'react'

export default class NotesList extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.getNotes = this.getNotes.bind(this)
  }

  componentDidMount() {
    this.getNotes()
  }

  componentWillReceiveProps() {
    this.getNotes()
  }

  async getNotes() {
    const res = await fetch('/notes')
    const notes = await res.json()
    this.setState({ notes })
  }

  render() {
    return (
      (!this.state.notes[0])
      ? <p>Loading...</p>
      : <div className='list-group'>
        {
          this.state.notes.map(note => {
            return <a
              href={'#' + note.title}
              className='list-group-item'
              key={ note.id }>
              { note.title }
            </a>
          })
        }
      </div>
    )
  }
}
