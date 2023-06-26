import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, About } from "./pages/index"
import { Navbar1 } from './components';
import bgLightVideo from "./assets/video/Video-Light.mp4"



function App() {
  return (
    <>
      <div className="">
        <video autoPlay muted loop className='Container-Video'>
          <source src={bgLightVideo} type='video/mp4' />
        </video>
        <BrowserRouter>
          <Navbar1 />
          <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/"element={<Home />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
