
import React from 'react';
import styled from "styled-components";
import TextField from '@mui/material/TextField';

const FormContainer=styled.div`

`


const Signup = () => {
  return (
   <FormContainer>
   
    <TextField
          required
          id="standard-required"
          label="Enter Name"
          defaultValue="Hello World"
        /><br/>

      <TextField
          required
          id="outlined-required"
          label="Age"
          defaultValue="Hello World"
        />







   </FormContainer>




  )
}

export default Signup;