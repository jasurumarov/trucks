import React from 'react'

const Partners = () => {
    const data = [
        {
            "id": 1,
            "image": "./images/partnerLogo1.svg",
            "title": "Росатом",
            "description": "Корпорация атомной энергии"
        },
        {
            "id": 2,
            "image": "./images/partnerLogo2.svg",
            "title": "Газпром",
            "description": "Энергетическая компания"
        },
        {
            "id": 3,
            "image": "./images/partnerLogo3.svg",
            "title": "Роснефть",
            "description": "Нефтегазовая компания"
        },
        {
            "id": 4,
            "image": "./images/partnerLogo4.svg",
            "title": "Роскосмос",
            "description": "Корпорация в космической отрасли"
        },
        {
            "id": 5,
            "image": "./images/partnerLogo5.svg",
            "title": "Лукойл",
            "description": "Нефтяная компания"
        },
        {
            "id": 6,
            "image": "./images/partnerLogo6.svg",
            "title": "Интер РАО",
            "description": "Энергетическая компания"
        },
        {
            "id": 7,
            "image": "./images/partnerLogo7.svg",
            "title": "Ростех",
            "description": "Промышленная корпорация"
        },
        {
            "id": 8,
            "image": "./images/partnerLogo8.svg",
            "title": "Банк ВТБ",
            "description": "Коммерческий банк"
        },
    ]
    let card = data.map((el) => (
        <div key={el.id} className="partners-section__partner">
            <img src={el.image} alt="Partner icon" />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
        </div>
    ))

  return (
    <div className='partners-section'>
        <div className="container">
            <div className="partners-section__content">
                <h2>Нам доверяют</h2>
                <div className="partners-section__partners">
                    {card[0]}
                    <div className="partnersLine"></div>
                    {card[1]}
                    <div className="partnersLine"></div>
                    {card[2]}
                    <div className="partnersLine"></div>
                    {card[3]}
                    <div className="partnersLine"></div>
                    {card[4]}
                    <div className="partnersLine"></div>
                    {card[5]}
                    <div className="partnersLine"></div>
                    {card[6]}
                    <div className="partnersLine"></div>
                    {card[7]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners