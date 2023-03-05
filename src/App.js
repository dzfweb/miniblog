
import './App.css';

import { BrowserRouter, Routes, Route, Navigage } from "react-router-dom";

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
