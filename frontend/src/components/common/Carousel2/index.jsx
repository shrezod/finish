import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import firstImg from '../../../assets/images/Rectangle-26-1.png'
import secondImg from '../../../assets/images/Rectangle-26-2.png'


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

                <div className="card-2">
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

                <div className="card-3">
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
                <div className="card-4">
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
                <div className="card-1">
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
                <div className="card-2">
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
                <div className="card-3">
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

            </Carousel>
        </div>

    )
}

