import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function BlogProductCarousel() {
    const navigate = useNavigate()

    const goToTeamsHash = () => {
        navigate('/blog')

    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1920, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 474 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 474, min: 0 },
            items: 1
        }
    };
    return (
        <div className="BlogProductCarousel">
            <h2>Популярные экскурсии</h2>
            <Carousel
                infiniteLoop={true}
                responsive={responsive}
            >
                <div className="card-1">
                    <span className="name-1">Автобусный тур</span>
                    <h4 className="name--2">Обзорная по Сочи (из Адлера)</h4>
                    <small className="time-1">6 часов</small> <small className="price-1">618рублей</small>
                    <p className="info-1">Приглашаем вас на экскурсию
                        "Обзорная по Большому Сочи":
                        Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...</p>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        <button className="btn">Подробнее</button>
                    </Link>

                </div>

                <div className="card-2">
                    <span className="name-2">Конный тур</span>
                    <h4 className="name--3">Конные прогулки</h4>
                    <small className="time-2">1,5 часов</small> <small className="price-2">1809 рублей</small>
                    <p className="info-2">Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...</p>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        <button className="btn">Подробнее</button>
                    </Link>
                </div>

                <div className="card-3">
                    <span className="name-3">Квадротур</span>
                    <h4 className="name--4">Пасть дракона</h4>
                    <small className="time-3">2,5 часов</small> <small className="price-3">3515 рублей</small>
                    <p className="info-3">Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или "Пасть Дракона" (экскурсионное название).
                        Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        <button className="btn">Подробнее</button>
                    </Link>
                </div>
                <div className="card-4">
                    <span className="name-4">Автобусный тур</span>
                    <h4 className="name--5">Женский монастырь </h4>
                    <small className="time-4">4 часов</small> <small className="price-4">618 рублей</small>
                    <p className="info-4">Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека.
                        Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах

                    </p>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        <button className="btn">Подробнее</button>
                    </Link>

                </div>
                <div className="card-1">
                    <span className="name-1">Автобусный тур</span>
                    <h4 className="name--2">Обзорная по Сочи (из Адлера)</h4>
                    <small className="time-1">6 часов</small> <small className="price-1">618рублей</small>
                    <p className="info-1">Приглашаем вас на экскурсию
                        "Обзорная по Большому Сочи":
                        Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...</p>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        <button className="btn">Подробнее</button>
                    </Link>

                </div>
                <div className="card-2">
                    <span className="name-2">Конный тур</span>
                    <h4 className="name--3">Конные прогулки</h4>
                    <small className="time-2">1,5 часов</small> <small className="price-2">1809 рублей</small>
                    <p className="info-2">Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...</p>

                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        <button className="btn">Подробнее</button>
                    </Link>
                </div>
                <div className="card-3">
                    <span className="name-3">Квадротур</span>
                    <h4 className="name--4">Пасть дракона</h4>
                    <small className="time-3">2,5 часов</small> <small className="price-3">3515 рублей</small>
                    <p className="info-3">Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или "Пасть Дракона" (экскурсионное название).
                        Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        <button className="btn">Подробнее</button>
                    </Link>
                </div>

            </Carousel>
        </div>

    )
}

