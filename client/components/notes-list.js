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
      : <ul>
        {
          this.state.notes.map((note, i) => {
            return <li key={ i }>{ note.title }</li>
          })
        }
      </ul>
    )
  }
}
