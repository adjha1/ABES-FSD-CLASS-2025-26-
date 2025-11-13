import React, { useEffect, useState } from 'react'
import Fashon from './components/Fashon'
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
      })
  }, [])
  return (
    <div>

      {
        books.map((f, i) => (
          <Fashon key={i} props={f} />

        ))
      }
    </div>
  )
}

export default App