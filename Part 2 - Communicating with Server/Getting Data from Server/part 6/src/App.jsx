/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import React from 'react';

import axios from 'axios'

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  // const [notes] = useState(props.notes)
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App
