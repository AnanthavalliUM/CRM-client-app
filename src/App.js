import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Forgot } from './Components/Forgot';
import { Reset } from './Components/Reset';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="bg-img" id='bg-img'>
     <div className="container">
      <AppBar position="static">
        <Toolbar>
         <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
         <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
         <Button color="inherit" onClick={() => navigate("/register")}>Register</Button>
         <Button color="inherit" onClick={() => navigate("/forgot")}>Forgot</Button>
           <Button color="inherit" onClick={() => navigate("/reset")}>Reset</Button>
        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot' element={<Forgot/>} />    
        <Route path='/reset' element={<Reset/>} />
      </Routes>
    </div>
    </div>
    </div>
  );
}

export default App;