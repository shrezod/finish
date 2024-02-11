import './gallery-div111.scss'

import React from 'react'
import gallery2 from '../assets/images/2.png'
import gallery1 from '../assets/images/1.png'
import gallery3 from '../assets/images/3.png'
import gallery4 from '../assets/images/4.png'
import gallery5 from '../assets/images/5.png'
import gallery6 from '../assets/images/6.png'
import gallery7 from '../assets/images/7.png'
import gallery8 from '../assets/images/8.png'
export default function GalleryDiv() {
    return (
            <div className="main-container">
                <div className="first-con">
                    <h2>Фильтры</h2>
                    <div className="price">
                        <b>Стоимость</b>
                        <br /><br /><div className="input">
                            <input type="text" value={"1600"} />
                            <input type="text" value={'4000'} />
                        </div>
                        <div className="range">
                            <br /><br /><input type="range" />
                        </div>
                    </div>
                    <hr />
                    <div className="people">
                        <h3>Количество человек</h3>

                        <div>
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                            <input type="text" value={"1 чел."} />
                        </div>
                    </div>
                    <hr />
                    <div className="radio-input">
                        <b>Место</b>
                        <div>
                            <input type="radio" name="city" checked />
                            <label htmlFor="">Абхазия</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Америка</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Сочи</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Адлер</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Адлер</label>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr />
                    <div className="b"><b>Длительность</b></div>
                    <br />
                    <br />
                    <br />
                    <hr />
                    <div className="b2"><b>Дата</b></div>

                </div>
            </div>
            )
}
