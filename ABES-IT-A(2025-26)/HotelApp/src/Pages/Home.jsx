import React from 'react'
import './home.css'
import Card from './Card'
const Home = () => {
    return (
        <div>
            <div id="main-text">
                MY HOTEL
            </div>
            <div id="displayflex">
                <Card Item="Pizza" price="800" img="https://img.freepik.com/premium-vector/pizza-logo-vector_25327-119.jpg" />
                <Card Item="Bugger" price="1200" img="https://www.shutterstock.com/image-photo/chicken-burger-cheese-leaves-600nw-1552086476.jpg" />
                <Card Item="Drink" price="400" img="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?cs=srgb&dl=pexels-fotios-photos-109275.jpg&fm=jpg" />
                <Card Item="Momos" price="600" img="https://media.istockphoto.com/id/1292635321/photo/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and.jpg?s=612x612&w=0&k=20&c=NyxQvDnBq7Ki09Zi21JEMxpuZ_uVr45ZBSavqXJ2T1s=" />
                <Card Item="Franch fry" price="200" img="https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=" />
            </div>
        </div>
    )
}

export default Home