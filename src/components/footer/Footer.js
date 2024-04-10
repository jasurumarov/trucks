import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <img className='footer-logo' src="./images/footer-logo.svg" alt="site logo" />
                <ul className='footer-list'>
                    <li>
                        <a href="./index.html">Каталог</a>
                    </li>
                    <li>
                        <a href="./index.html">о компании</a>
                    </li>
                    <li>
                        <a href="./index.html">Индивидуальная</a>
                    </li>
                    <li>
                        <a href="./index.html">Партнерам</a>
                    </li>
                </ul>
                <ul className='footer-list footer-list1'>
                    <li>
                        <a href="./index.html">2D, 3D модели</a>
                    </li>
                    <li>
                        <a href="./index.html">Шоу-румы</a>
                    </li>
                    <li>
                        <a href="./index.html">Дилерам</a>
                    </li>
                    <li>
                        <a href="./index.html">Контакты</a>
                    </li>
                    <li>
                        <a href="./index.html">Конфигуратор</a>
                    </li>
                </ul>
                <div className="footer-form">
                    <div className="footer-socials">
                        <img src="./images/footer1.svg" alt="footer img"/>
                        <img src="./images/footer2.svg" alt="footer img"/>
                    </div>
                    <p>+38 (099)-638-45-37</p>
                    <button>
                        Персональная консультация
                        <img src="./images/arrow.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
            <p className="footer-bottom">© 1993–2021 Интернет-магазин «LOGO» — truck</p>
        </div>
    </footer>
  )
}

export default Footer