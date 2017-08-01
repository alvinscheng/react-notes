import React, { Component } from 'react'

export default class NotesList extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
  }

  async componentDidMount() {
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
          this.state.notes.map((note, i) => {
            return <a
              href={'#' + note.title}
              className='list-group-item'
              key={ i }>
              { note.title }
            </a>
          })
        }
      </div>
    )
  }
}
