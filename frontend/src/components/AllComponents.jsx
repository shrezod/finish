import { useLocation, Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation"
import About from "./About"
import Excursion from "./Exk"
import Kabinet from "./Dom"
import First from "./main"
import NoPage from "./NoPage"


function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<First />} />
                <Route path="/about" element={<About />} />
                <Route path="/excursions" element={<Excursion/>} />
                <Route path="/kabinet" element={<Kabinet/>} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;