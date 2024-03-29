import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className="container">
          <Routes>

            <Route path='/home' element ={<Home/>}></Route>
            <Route path='/about' element ={<About/>}></Route>
            <Route path = '/login' element = {<Login/>}></Route>
            <Route path = '/register' element = {<Register/>}></Route>
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App ;
