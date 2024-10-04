import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from './navbar'
import './main.css';


export default function Main() {
    const navigate = useNavigate();
  return (
    <div>
   <Navbar/>

    <div class='homePage'>
            <h1>
            Helping you achieve inner peace with the help of Technology
            </h1>
            <div class="row">
                <div class ="column">
                    <img id='img1' src="https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif" alt="Girl in a jacket" width="500px" height="600px"/>
                </div>  
                <div class="column">
                    <img id='img2' src="https://i.pinimg.com/originals/e0/d6/2e/e0d62e32eba3542552e83bdea5ff95e8.gif" alt="Girl in a jacket" width="500px" height="600px"/>
                </div>
            </div>
            <div class = 'learn-container'>
                <btn id='learn-yoga' onClick={()=>{navigate("/YogaAi")}}>Learn Yoga</btn>
            </div>
    </div>

    <div class='bottomHomePage'>

        <h1>
        "Yoga is not just repetition of few postures - it is more about the exploration and discovery of the subtle energies of life."
        </h1>

    </div>
    </div>
  )
}
