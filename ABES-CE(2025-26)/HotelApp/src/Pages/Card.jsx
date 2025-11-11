import React from 'react'
import "./card.css"
const Card = (props) => {
    return (
        <div>
            <div id="hotel-menu-card">
                <img src={props.img} alt="" height={200} width={200} />
                <h3>Item:{props.Item}</h3>
                <h3>Price:{props.price}</h3>
            </div>
        </div>
    )
}

export default Card