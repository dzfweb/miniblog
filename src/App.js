
import './App.css';

import { BrowserRouter, Routes, Route, Navigage } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';

//pages


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
