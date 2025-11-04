import React from 'react'
import './book.css'
function Book(props) {
    return (
        <div id="book">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORsIzVw7wBHAUAoSM3lV2VvGROK437zk3xA&s" alt="" height={100} width={100} />
            <h1>Title:{props.title}</h1>
            <h1>Price:{props.price}</h1>
        </div>
    )
}

export default Book