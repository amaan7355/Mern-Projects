import {BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
