
import './App.css';
import { Navbar } from './components/Navbar';

import styled from 'styled-components';
import Intro from './components/Intro';
import Signup from './components/Signup';
import Login from './components/Login';
import MeetDoctor from './components/MeetDoctor';
import {Routes ,Route} from "react-router-dom";

const Image=styled.img`
width: 100%;
height:600px;

`;


function App() {
  return (
    <div className="App">
     <Navbar/>
      {/* <Image src="https://st2.depositphotos.com/3889193/7657/i/950/depositphotos_76570869-stock-photo-confident-female-doctor-posing-in.jpg"/>
       */}
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/book-doctor" element={<MeetDoctor/>}/>
      </Routes>
{/* 


      <Intro/>

    <Signup/>
   <Login/>
    <MeetDoctor/> */}

    </div>
  );
}

export default App;
