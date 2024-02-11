import './index.scss'
// import About from './components/About'
// import Navigation from './components/Navigation'
import AllComponents from './components/AllComponents';

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

<AllComponents />
        {/* <Navigation />
        <About /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;