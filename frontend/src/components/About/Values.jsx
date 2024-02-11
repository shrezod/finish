import './style.scss'
import valuesDB from '../db/values.json'
import first from '../../assets/icons/1.png'
import second from '../../assets/icons/2.png'
import third from '../../assets/icons/3.png'
import fourth from '../../assets/icons/4.png'
import ValueItem from './ValueItem'

function Values() {
    const images = [first, second, third, fourth]

    return (
        <>
            <div className="values-wrapper">
                <h2>Виды экскурсий</h2>

                <div className="values-content">
                    {
                        valuesDB.map((item, index) => {
                            return (
                                <ValueItem
                                    key={index}
                                    image={images[index]}

                                    title={item.title}
                                    subtitle={item.subtitle}
                                />
                            )
                        })
                    }
                </div>
                <div className="value-text">
                    <p>Выбирайте на нашем сайте экскурсию, которая подходит именно вам и записывайтесь онлайн без очередей, просто и быстро!</p>
                    <br />
                    <button className='info-btn'>
                        <b> К Экскурсиям</b>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Values;