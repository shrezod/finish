import './calendar.scss'

function Calendar() {
    return (
        <>
            <div className="calendar-wrapper">
                <h2>Ноябрь 2021</h2>
                <div className="weeks">
                    <b>ПН</b>
                    <b>ВТ</b>
                    <b>СР</b>
                    <b>ЧТ</b>
                    <b>ПТ</b>
                    <b>СБ</b>
                    <b>ВС</b>
                </div>
                <div className="days">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                    <span>17</span>
                    <span>18</span>
                    <span>19</span>
                    <span>20</span>
                    <span>21</span>
                    <span>22</span>
                    <span>23</span>
                    <span>24</span>
                    <span>25</span>
                    <span>26</span>
                    <span>27</span>
                    <span>28</span>
                    <span>29</span>
                    <span>30</span>
                </div>
            </div>
        </>
    );
}

export default Calendar;











import './style.scss'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import firstImg from '../../../assets/images/Rectangle-26-1.png'
import secondImg from '../../../assets/images/Rectangle-26-2.png'
import { Link, useNavigate } from 'react-router-dom';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function CarouselComponent() {
    const navigate = useNavigate()

    const goToTeamsHash = () => {
        navigate('/third')

    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };

    return (
        <div className="carousel2">

            <h2>Отзывы</h2>
            <Slider {...settings}>
                <div className="main-card">
                    <div className="card">
                        <img src={firstImg} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                 </div>

                 <div className="main-card">
                    <div className="card">
                        <img src={secondImg} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <img src={firstImg} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <Link to={'/third'} onClick={goToTeamsHash} >
                            </Link>
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <img src={secondImg} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <img src={firstImg} width={200} alt="" />
                        <div className="text-slides">
                            <b>Иван Иванов</b>
                            <br />
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, a architecto ducimus temporibus sequi aspernatur numquam, perferendis, deserunt laboriosam similique possimus beatae. Eum aliquam unde consequuntur consequatur? Repudiandae laboriosam perferendis rem quidem minima eveniet illum officiis unde! Molestias ducimus mollitia repellat amet beatae totam, iure commodi, architecto dignissimos, excepturi voluptatem!</p>
                        </div>
                    </div>
                </div>

             </Slider>


        </div>
    );
}

export default CarouselComponent;