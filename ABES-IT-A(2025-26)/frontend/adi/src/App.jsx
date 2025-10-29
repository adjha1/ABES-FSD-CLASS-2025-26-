import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Card name="Aditya" age={18} />
      <br />
      <Card name="Deepak" age={20} />
      <br />
      <Card name="Rupak" age={30} />
    </div>
  )
}
export default App