import './style.scss'
import ThirdItem from './ThirdItem';
import SecondImg from '../../assets/images/изобр-1.png'

import Calendar from './Calendar';



function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", background: "blue", position: 'absolute',
                top: '700px', borderRadius: '50%'
            }}
            onClick={onClick}
        />
    );
}


function Third() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };


    return (
        <div className="thrid-container">
            <div className="third-item">
                <ThirdItem />
            </div>

            <div className="img-calendar">
                <img src={SecondImg} alt="" />

                <div className="calendar2">
                    <Calendar />
                </div>
            </div>
        </div>
    );
}

export default Third;