import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className="container">
          <Routes>

            <Route path='/home' element ={<Home/>}></Route>
            <Route path='/about' element ={<About/>}></Route>
            
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App ;