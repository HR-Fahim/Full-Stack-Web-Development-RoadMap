/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import React from 'react';

import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )


  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App
