import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Navcontainer= styled.div`
height:30px;
width: 100%;
background-color:black;
color:white;
font-weight:bold;
display:flex;
align-items:center;
justify-content:space-between;
 position:sticky;
 top:0;
`;

const Left = styled.div`
 padding:10px;

`
const Right = styled.div`
margin-right: 30px;
 display:flex;
  justify-content:space-around;

 & span{
  margin:0px 30px;
  color:white;
  text-decoration:none;
  
}
`



export const Navbar = () => {
  return (
    <Navcontainer>
          <Left>
            <h1><em>WeCare</em></h1>
          </Left>
          <Right>

           <Link to="/book-doctor">
           <span>Meet a Doctor</span>
           </Link>
         
           <Link to="/Login">
           <span>Login</span>
           </Link>

           <Link to="/Signup">
           <span>Signup</span>
           </Link>
            
          
          </Right>
    </Navcontainer>
        
    
  )
}
