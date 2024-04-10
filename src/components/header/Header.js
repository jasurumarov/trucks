import React, {useState} from 'react'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    console.log(toggleMenu);

    const data = ["Home", "About", "Blog", "Contact", "Help"]
    let items = data.map((el, i) => (
        <li key={i}>
            <a href="./index.html">{el}</a>
        </li>
    ))

  return (
    <div>
        <header>
            <div className="container">
                <nav className="navbar">
                    <a className='navbar__logo' href="./index.html">грузовик</a>
                    <ul className={`navbar__list  ${toggleMenu ? "show" : ""}`}>
                        {items}
                    </ul>
                    <button onClick={() => setToggleMenu(!toggleMenu)} className='menu-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header