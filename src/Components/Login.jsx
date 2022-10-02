import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import axios from 'axios';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'


export const Login = () => {
  const [user, setUser] = useState({
    email:"",
    password:""
  });

  const { email,password } = user;

  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  return (
    <div className="login"  id='login'>
      {/* <div className='card' id='card'> */}
        <h1 className='login'>Login</h1>
      <form  className="d-flex flex-column m-2 " onSubmit={(e) => {
          e.preventDefault();
          axios.post(`http://localhost:4000/crmusers/login`, user);
        }}>
      <FormControl>
          <TextField
            focused
            type="email"
            color="primary"
            name="email"
            value={email}
            onChange={(e) => onInput(e)}
            label="Email"
          />
        </FormControl><br/><br/>
        <FormControl>
          <TextField
            focused
            type='password'
            color="primary"
            name="password"
            value={password}
            onChange={(e) => onInput(e)}
            label="Password"
          />
        </FormControl><br/>
       <br/>
          <Link
            to="/login"
          >
            <Button type="submit" variant="contained" size='medium' color="primary">
            Login
          </Button><br/>
          </Link>
          <br/>
          <Link
            to="/forgot"
          >
           <Button type="submit" variant="contained" size='medium' color="error">
            Forgot Password?
          </Button><br/>
          </Link><br/>
          <Link
            to="/register"
          >
          <Button type="submit" variant="contained" size='medium' color="secondary">
            Register
          </Button><br/>
          </Link>
      </form>
      </div>
    // </div>
  )
}