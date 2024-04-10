import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="container">
            <div className="hero-section__content">
                <div className="hero-section__title">
                    <h1>Поставщик Дальнего Востока</h1>
                    <p>Наши клиенты получают полный спектр услуг по работе с Китаем.  Начиная с подбора производителя заканчивая доставкой товара до двери.  Настолько прозрачных сделок с Китаем вы еще не осуществляли.</p>
                    <a href="./index.hmtl">Узнать больше</a>
                </div>
                <img src="./images/heroTruck.png" alt="Truck image" />
            </div>
        </div>
    </div>
  )
}

export default Hero