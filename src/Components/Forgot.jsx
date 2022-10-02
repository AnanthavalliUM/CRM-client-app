import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import axios from 'axios';
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';

export const Forgot = () => {
  const [email, setEmail] = useState("");


  const onInput = (e) => {
    setEmail(e.target.value);
  };


  return (
    <div className="forgot" id='forgot' >
        <h1>Forgot my password</h1>
          <br/>
          <h4>Enter the email you used to register your account.</h4><br/>
          <TextField
            focused
            type="email"
            color="primary"
            name="email"
            value={email}
            onChange={(e) => onInput(e)}
            label="Email"
          />
        <br/><br/>
          <Link to='/reset'>
           <Button  variant="contained" size='medium' color="primary">
            Reset password
          </Button>
          </Link><br/>
          <Link to='/'>
           <Button  color="primary">Got an account? Log in here </Button>
          </Link><br/>
      </div>
    // </div>
  )
}