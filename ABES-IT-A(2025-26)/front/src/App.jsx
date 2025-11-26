import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {
  const [show, setShow] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/api/about')
      .then((res) => {
        setShow(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  return (
    <div>
      <h1>data show</h1>
      {
        show.map((show, index) => (
          <div key={show.id}>
            <h3>{show.name}</h3>
            <h3>{show.class}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default App
