import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export const Register = () => {
  const [user, setUser] = useState({
    firstname:"",
    lastname:"",
    email:"",
    type:"",
    password:""
  });

  const { firstname,lastname,email,type,password } = user;
  const navigate = useNavigate();
  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="register"  id='register'>
        <h1>Signin</h1>
      <form  className="d-flex flex-column m-3 " onSubmit={(e) => {
          e.preventDefault();
          console.log(user);
          axios.post(`http://localhost:4000/crmusers/signup`, user);
          navigate('/login');
        }}>
      <FormControl>
          <TextField
            focused
            color="primary"
            name="firstname"
            value={firstname}
            onChange={(e) => onInput(e)}
            label="Firstname"
          /><br/>
        </FormControl><br/>
        <FormControl><br/>
          <TextField
            focused
            color="primary"
            name="lastname"
            value={lastname}
            onChange={(e) => onInput(e)}
            label="Lastname"
          /><br/>
        </FormControl><br/>
        <FormControl>
          <TextField
            focused
            color="primary"
            name="email"
            type='email'
            value={email}
            onChange={(e) => onInput(e)}
            label="Email"
          />
        </FormControl><br/>
        <FormControl focused primary><br/>
       <InputLabel>Type</InputLabel>
        <Select
          value={type}
          color="primary"
          label="type"
          name="type"
          onChange={(e) => onInput(e)}
        >
          <MenuItem value={'admin'}>Admin</MenuItem>
          <MenuItem value={'manager'}>Manager</MenuItem>
          <MenuItem value={'employee'}>Employee</MenuItem>
        </Select><br/>
      </FormControl><br/>
        <FormControl>
          <TextField
            focused
            color="primary"
            name="password"
            type="password"
            value={password}
            onChange={(e) => onInput(e)}
            label="password"
          /><br/>
        </FormControl><br/>
          <Button type="submit" variant="contained" color="secondary">
           Signin
          </Button>
          <Link to='/'>
           <Button  color="secondary">Got an account? Log in here </Button>
          </Link>
      </form>
      </div>
    
  )
}