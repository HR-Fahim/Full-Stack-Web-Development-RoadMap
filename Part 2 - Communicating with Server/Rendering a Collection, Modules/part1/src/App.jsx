/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import React from 'react';

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>

      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )
}

export default App
