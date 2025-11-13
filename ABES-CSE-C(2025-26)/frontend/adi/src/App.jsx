import React, { useEffect, useState } from 'react'
import Fashon from './Component/Fashon'

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
        books.map((b, i) => (
          <Fashon key={i} props={b} />
        ))
      }

    </div>
  )
}

export default App