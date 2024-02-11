import { Link, useNavigate } from 'react-router-dom';
import vkontakte from '../../assets/icons/vk 1.png'
import instagram from '../../assets/icons/inst 1.png'
import facebook from '../../assets/icons/facebook 1.png'
import videoImg from '../../assets/images/video.png'
import logo from '../../assets/logo white.png'
function Nav(props) {
    const navigate = useNavigate()

    const goToTeamsHash = () => {
        navigate('/about')

    }

    return (
        <div className="nav-container">

            <div className="nav-wrapper">
                <div className="logo">
                    <Link to={'/about'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu">
                    <div className="nav-links">
                        <Link to='/' >
                            Главная
                        </Link>

                        <Link onClick={goToTeamsHash} to={'/blog'}>
                            Экскурсия 
                        </Link>

                        <Link to={'/blog'} >
                            Личный кабинет
                        </Link>
                    </div>
                </div>

                <div className="travel-text">
                    <h2>Путешествуй</h2>
                    <span className='together'>вместе с</span>
                    <h1>Pero travel</h1>
                    <Link onClick={goToTeamsHash} to={'/blog'} >
                    <button className='btn'>К экскурсиям</button>
                    </Link>
                </div>


                <div className="icons">
                    <Link to={'/'}>
                        <img className='icon-1' src={vkontakte} alt="" />
                    </Link>

                    <Link to={'/'}>
                        <img className='icon-2' src={instagram} alt="" />
                    </Link>
                    <Link to={'/'}>
                        <img className='icon-3' src={facebook} alt="" />
                    </Link>
                </div>
                <div className="video-img">
                    <img className='video-image' src={videoImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Nav;