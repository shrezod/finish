import './style.scss'
import play1 from "../../assets/images/play1.png";
import play2 from "../../assets/images/play2.png";
import { Link } from 'react-router-dom';
import NewExcurc from '../NewExcurs';
import About from '../About';




function First() {
    return ( 
        <div className="first-page">
            <div className="second-page">
                 <div className="name-page">
                <h1 className='h1'>Путешествуй</h1>
                <h3>вместе с</h3>
                <h1 className="pero">PERO TRAVEL</h1>
                <Link to={"/excursions"}>
                <button className="excursion">К экскурсиям ➡</button>
                </Link>
                
            </div>
    <div className="images">
                <img src={play1} alt="play1" />
                <img src={play2} alt="play2" />
            </div>
            </div>

         <NewExcurc/>
         
         <br />
            <About/>
            </div>
     );
}

export default First;