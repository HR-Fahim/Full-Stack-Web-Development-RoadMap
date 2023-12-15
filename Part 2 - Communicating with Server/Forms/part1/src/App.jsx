/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import React from 'react';

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const App = (props) => {
  const [notes] = useState(props.notes)


  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App