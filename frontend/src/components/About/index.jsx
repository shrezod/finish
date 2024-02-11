import './style.scss'
// import CompanyBlog from './CompanyBlog'
import CarouselComponent from '../common/Carousel'
import CarouselComponent2 from '../common/Carousel2'
import GalleryDiv from './Gallery-div.jsx'
import Values from './Values'
import Blog1 from '../../assets/images/Rectangle-13-3.png'
import Blog2 from '../../assets/images/Rectangle-13-2.png'
import Blog3 from '../../assets/images/Rectangle-13-1.png'
import Blog4 from '../../assets/images/Rectangle-13-4.png'
import ContactsForm from '../ContactsForm'
import Footer from '../Footer'
function About() {
    const images = [Blog1, Blog2, Blog3, Blog4]
    return (
        <div className='container'>
            <div className="carousel">
                <CarouselComponent images={images}>
                </CarouselComponent>
            </div>

            <div className="about-container">

                <div className='about-wrapper'>
                    <div className="company-blog">
                    </div>
                    <div className='about-bgImage'>
                        <div className="about-text">
                            <h2>О нас</h2>
                            <p>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов. <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="values-wrapper">
                <Values />
            </div>
            <div className="gallery-divs">
                <GalleryDiv />
            </div>
            <div className="contacts-form">
                <ContactsForm />
            </div>
            <div className="carousel-2">
                <CarouselComponent2 />
            </div>
            <div className="footer">
            {/* <Footer /> */}
            <Footer />
            </div>
        </div>
    )
}

export default About;