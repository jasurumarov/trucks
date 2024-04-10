import React from 'react'

const Services = () => {
    const data = [
        {
            "id": 1,
            "image": "./images/servicesImg1.png",
            "title": "Предложение от продавца",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. "
        },
        {
            "id": 2,
            "image": "./images/servicesImg2.png",
            "title": "Доставка",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. "
        },
        {
            "id": 3,
            "image": "./images/servicesImg3.png",
            "title": "Установка у клиента",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. "
        }
    ]
    let card = data.map((el) => (
        <div key={el.id} className="services-section__card">
            <img src={el.image} alt="CardImg" />
            <div className="services-section__card-title">
                <h3>{el.title}</h3>
                <div></div>
                <p>{el.description}</p>
            </div>
        </div>
    ))
  return (
    <div className='services-section'>
        <div className="container">
            <div className="services-section__content">
                <h2>Этапы поставки </h2>
                <div className="services-section__cards">
                    {card}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services