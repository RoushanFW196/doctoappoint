
import React from 'react';
 import { useNavigate } from 'react-router-dom';
 import styled from "styled-components";
import Footer from './Footer';

 const Image=styled.img`
width: 100%;
height:600px;

`;

const Intro = () => {
    const navigate=useNavigate();
    const handleappointment=()=>{
        console.log('Appointment done')
        navigate("/signup");
    }

  return (
       <>
  <Image src="https://st2.depositphotos.com/3889193/7657/i/950/depositphotos_76570869-stock-photo-confident-female-doctor-posing-in.jpg"/>
  <div className="intro">
   <h3>The Apollo World Of Care</h3>
    <p>Our team of 8000 doctors join me in giving you the best of modern healthcare to ensure you stay healthy always.</p>
    <button onClick={handleappointment}>Book An Appointment</button>
 </div>
    <Footer/>
   </>
  )
}

export default Intro;