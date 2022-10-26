import { useState } from 'react'
import { Router } from './Router'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div>
        <ToastContainer autoClose={3000}/>
        <Router/>
      </div>
    </div>
  )
}

export default App
