
import React from 'react';
import styled from "styled-components";
const FooterContainer =styled.div`
width: 100%;
height: 150px;
display:flex;
justify-content: space-evenly;
align-items: center;
background-color: #224855;
margin-top:-35px;
color: white;
font-size:15px;
 & div:hover{
   cursor:pointer;
 }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>
          <h3>Book Appointment</h3>
          <p>Choose by name, speciality, city and more</p>
      </div>
      <div>
          <h3>Consult Online</h3>
          <p>Talk to a doctor online</p>
      </div>

      <div>
          <h3>Buy Medicines</h3>
          <p>Order online</p>
      </div>
      <div>
          <h3>Book Health Check</h3>
          <p>Choose by location, Age, Gender & more</p>
      </div>

<div>
    <h3>Find Hospital</h3>
    <p>Find Directions & contact details</p>
</div>
    </FooterContainer>
  )
}

export default Footer