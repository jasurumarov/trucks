import React from 'react'

const Delivery = () => {
    const data = [
        {
            "id": 1,
            "image": "./images/deliveryIcon1.png",
            "title": "Поиск производителей по товару",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut. " 
        },
        {
            "id": 2,
            "image": "./images/deliveryIcon2.png",
            "title": "Поиск производителей по товару",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut. " 
        },
        {
            "id": 3,
            "image": "./images/deliveryIcon3.png",
            "title": "Поиск производителей по товару",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut. " 
        }
    ]
    let cards = data.map((el) => (
        <div className="delivery-section__card">
            <img src={el.image} alt="Delivery icon" />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
        </div>
    ))
  return (
    <div className='delivery-section'>
        <div className="container">
            <div className="delivery-section__content">
                <div className="delivery-section__cards">
                    {cards[0]}
                    <div className='deliveryLine'></div>
                    {cards[1]}
                    <div className='deliveryLine'></div>
                    {cards[2]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery