import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './style.scss'
import logo from '../../assets/logo white.png'
function Item(props) {
    const [burgerMenuOpened, setBurgerMenuOpen] = useState(false)

    const navigate = useNavigate()

    const goToTeamsHash = () => {
        navigate('/blog')

    }

    return (
        <>
            <div className={burgerMenuOpened ? "burger-menu-wrapper opened" : "burger-menu-wrapper"}>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </div>
            <input
                id='burger-menu-toggler'
                type="checkbox"
                onClick={(e) => { setBurgerMenuOpen(e.target.checked) }}
            />
            <div className="nav-wrapper2">
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>


                <div className="nav-links">
                    <Link onClick={goToTeamsHash} to={'/about'}>
                        Главная
                    </Link>
                    <Link>
                        Экскурсия 
                    </Link>
                    <Link to={'/third'}>
                        Личный кабинет
                    </Link>
                </div>



            </div>
            <div className="travel-text">
                <h2>НАШИ ЭКСКУРСИИ</h2>
            </div>





        </>
    );
}

export default Item;