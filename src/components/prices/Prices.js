import React from 'react'

const Prices = () => {
    const data = [
        {
            "id": 1,
            "image": "./images/pricesImg1.png",
            "title": "Станки и оборудование",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
            "price": "20 000"
        },
        {
            "id": 2,
            "image": "./images/pricesImg2.png",
            "title": "Компоненты и запчасти",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
            "price": "18 000"
        },
        {
            "id": 3,
            "image": "./images/pricesImg3.png",
            "title": "Станки и оборудование",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
            "price": "20 000"
        }
    ]
    let card = data.map((el) => (
        <div key={el.id} className="prices-section__card">
            <img src={el.image} alt="Card image"/>
            <div className="prices-section__cards-title">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <a href="./index.html">{el.price} руб.</a>
            </div>
        </div>  
    ))
  return (
    <div className='prices-section'>
        <div className="container">
            <div className="prices-section__content">
                <div className="prices-section__title">
                    <h2>Выполненные работы</h2>
                    <p>Мы собрали информацию по грузам, которые мы уже доставили. <br/> У нас специальный подход к каждому виду товаров.</p>
                </div>
                <div className="prices-section__cards">
                    {card}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prices