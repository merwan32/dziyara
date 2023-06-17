import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './LandingPage/index.js';
import Map from './mapPage/index'
import "./App.css";
import Login from "./auth/login.js";
import Signup from "./auth/signup.js";
// import PrivateRoute from "./PrivateRoute/index.js";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="map/" element={<Map/>} />
                <Route path="login/" element={<Login/>} />
                <Route path="signup/" element={<Signup/>} />
                {/* <Route path="/main" element={<PrivateRoute><AnnoncesPage/></PrivateRoute>} />
                <Route path="/main/profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>} />
                <Route path="*" element={<ErrorPage/>} /> */}
            </Routes>
        </Router>
    );
}
export default App;