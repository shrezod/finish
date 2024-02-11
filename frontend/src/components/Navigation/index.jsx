import './style.scss'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import { useState } from 'react'

function Navigation() {
    const [burgerMenuOpened, setBurgerMenuOpen] = useState(false)

    return (

        <div>
            <div className={burgerMenuOpened ? "burger-menu-wrapper opened" : "burger-menu-wrapper"}>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </div>
            <input
                id='burger-menu-toggler' 
                type="checkbox"
                onClick={(e) => {setBurgerMenuOpen(e.target.checked)}}
                />
                <Nav />
            <div id='outlet'>
                <Outlet />
            </div>

        </div>
    )
}

export default Navigation;