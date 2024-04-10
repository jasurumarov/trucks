import React from 'react'

const Employess = () => {
    const data = [
        {
            "id": 1,
            "image": "./images/employee1.png",
            "title": "Антон Макаров",
            "description": "Руководитель компании",
            "instagram": "https://www.instagram.com/",
            "vk": "https://www.vkontakte.com/",
            "linkedin": "https://www.linkedin.com/"
        },
        {
            "id": 2,
            "image": "./images/employee2.png",
            "title": "Елена Валерьева",
            "description": "Главный бухгалтер",
            "instagram": "https://www.instagram.com/",
            "vk": "https://www.vkontakte.com/",
            "linkedin": "https://www.linkedin.com/"
        },
        {
            "id": 3,
            "image": "./images/employee3.png",
            "title": "Иван Аркадьев",
            "description": "Менеджер по закупкам",
            "instagram": "https://www.instagram.com/",
            "vk": "https://www.vkontakte.com/",
            "linkedin": "https://www.linkedin.com/"
        },
        {
            "id": 4,
            "image": "./images/employee4.png",
            "title": "Борис Вавилов",
            "description": "Бухгалтер",
            "instagram": "https://www.instagram.com/",
            "vk": "https://www.vkontakte.com/",
            "linkedin": "https://www.linkedin.com/"
        },
        {
            "id": 5,
            "image": "./images/employee5.png",
            "title": "Алина Кравец",
            "description": "Сотрудник отдела кадров",
            "instagram": "https://www.instagram.com/",
            "vk": "https://www.vkontakte.com/",
            "linkedin": "https://www.linkedin.com/"
        },
        {
            "id": 6,
            "image": "./images/employee6.png",
            "title": "Виктор Козуб",
            "description": "Менеджер по закупкам",
            "instagram": "https://www.instagram.com/",
            "vk": "https://www.vkontakte.com/",
            "linkedin": "https://www.linkedin.com/"
        }
    ]
    let employee = data.map((el) => (
        <div key={el.id} className="employees-section__card">
            <img src={el.image} alt="Employer img" />
            <div className="employees-section__card-title">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <article></article>
                <div>
                    <a target='_blank' href={el.instagram}>
                        <img src="./images/instagram.svg" alt="" />
                    </a>
                    <a target='_blank' href={el.vk}>
                        <img src="./images/Vector.svg" alt="" />
                    </a>
                    <a target='_blank' href={el.linkedin}>
                        <img src="./images/linkedin.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className='employees-section__card-bg'></div>
        </div>
    ))
  return (
    <div className='employees-section'>
        <div className="container">
            <div className="employees-section__content">
                <h2>Сотрудники компании</h2>
                <div className="employees-section__cards">
                    {employee}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employess