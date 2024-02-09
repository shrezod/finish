import './style.scss'
import about from "../../assets/images/About.png";
function About() {
    return (  
        <div className="first-content">
            <div className="second-content">
                <img src={about} alt="About"/>
                <div className="about">
                    <h1>О нас</h1>
                    <br /> 
                    <br />
                    <p>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <br />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default About;