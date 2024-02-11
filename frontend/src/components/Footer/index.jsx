import './style.scss'
import React, { Link } from 'react-router-dom'
import IconWH from '../../assets/icons/wh 1f.png'
import IconTG from '../../assets/icons/tg 2f.png'
import IconEl from '../../assets/icons/mail 1f.png'
import FooterFace from '../../assets/icons/facebook 1f.png'
import FooterInst from '../../assets/icons/inst 1f.png'
import FooterVk from '../../assets/icons/vk 1f.png'
import ColorLogo from "../../assets/icons/logo_color 1f.png"

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className="footer-content-1">
                <Link path={'/about'}>
                    <img src={ColorLogo} alt="" />
                </Link>
            </div>
            <div className="footer-content-2">
                <Link to='/about'>
                    Главная
                </Link>
                <br />
                <Link to={'/blog'}>
                    Экскурсия
                </Link>
                <br />
                <Link to={'/'}>
                    Личный кабинет
                </Link>
            </div>
            <div className="footer-content-3">
                <Link>
                <div>
                    <img src={IconWH} alt="" />
                    <span>+7 964 944 18 74</span>
                </div>
                </Link>

                <Link>
                <div>
                    <img src={IconTG} alt="" />
                    <span>+7 964 944 18 74</span>
                </div>
                </Link>
                <Link>
                <div>
                    <img src={IconTG} alt="" />
                    <span>+7 964 944 18 74</span>
                </div>
                </Link>
                <Link>
                <div>
                    <img src={IconEl} alt="" />
                    <span>Telegram bot PERO-TRAVEL</span>
                </div>
                </Link>
            </div>
            <div className="footer-content-4">
                <span>
                    <img src={IconEl} alt="" />
                    office@perotravel.com
                </span>
                <div className="social-media">
                    <img className='img-1' src={FooterVk} alt="" />
                    <img className='img-2' src={FooterInst} alt="" />
                    <img className='img-3' src={FooterFace} alt="" />
                </div>

            </div>
        </div>
    )
}
