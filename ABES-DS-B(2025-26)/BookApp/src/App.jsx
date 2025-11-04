import React from 'react'
import Book from './components/Book'
import './App.css'
function App() {
  return (
    <div id="adi">
      <Book title="Math" price="400" />
      <Book title="Physice" price="700" />
      <Book title="Chemistry" price="800" />
    </div>
  )
}

export default App