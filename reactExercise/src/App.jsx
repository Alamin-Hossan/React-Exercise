import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp'
import React from 'react';
import StudentList from './StudentList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentList />
    </>
  )
}

export default App
