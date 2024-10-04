import React from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './Yoga.css';
import Yogas from './data';
import App from './App';
import Main from './main';
import Body from './Body';
import About from './about';
import Contact from './contact';
import Common from './Common';

const Yoga = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                    </Route>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/common' element={<Common/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/YogaAi' element={<Body data={Yogas}/>}/>
                    <Route path="/App/:title/:image" element={<App/>}/>               
                </Routes>
           </BrowserRouter>

        </div>

     


    );
}

export default Yoga;