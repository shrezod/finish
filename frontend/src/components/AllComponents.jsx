import { useLocation, Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation"
import About from "./About"
import Exc from "./Excursion"
import Dom from "./Kabinet"
import First from "./First"
import NoPage from "./NoPage"
import New from './New'
import Footer from './Footer'
import Contacts from './Contacts'
import Photo from './Photo'



function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<First />} />
                <Route path="/about" element={<About />} />
                <Route path="/Exc" element={<Exc/>} />
                <Route path="/Dom" element={<Dom/>} />
                <Route path="*" element={<NoPage />} />
                <Route path="/New" element= {<New />} />
                <Route path='Footer' element= {<Footer/>} />
                <Route path="Contacts" element= {<Contacts />} />
                <Route path="Photo" element= {< Photo />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;