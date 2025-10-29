import React from 'react'
import './card.css'
function Card(props) {
    return (
        <div id="adi">
            <img src="https://media.istockphoto.com/id/1681388313/vector/cute-baby-panda-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=qFrzn8TqONiSfwevvkYhys1z80NAmDfw3o-HRdwX0d8=" alt="" height={200} width={200} />
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
        </div>
    )
}

export default Card