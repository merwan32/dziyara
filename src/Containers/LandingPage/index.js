
import NavBar from '../../Components/Header/Header.jsx';
import './index.css';
import Home from './home.jsx'
import News from './news.jsx'
import Tendance from "./tendance.jsx";
import About from "./about.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const LandingPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
        try {
            const response = await axios.get('https://dziyara.onrender.com/api/events/');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
        };
        console.log(events)
        fetchEvents();
    }, []);

    const places = [
        {
            "name" : "Monument des Martyrs",
            "image" : "https://babzman.com/wp-content/uploads/2014/03/maqam.jpg"
        },
        {
            "name" : "Sahara",
            "image" : "https://www.i-trekkings.net/wp-content/uploads/2018/12/sahara-algerie-gregoryrohart-0075.jpg"
        },
        {
            "name" : "Cap Carbon",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19l7moY-EuoD_SCyXevD8EpMnggC5CuKbjg&usqp=CAU"
        },
        {
            "name" : "Monument des Martyrs",
            "image" : "https://babzman.com/wp-content/uploads/2014/03/maqam.jpg"
        },
        {
            "name" : "Sahara",
            "image" : "https://www.i-trekkings.net/wp-content/uploads/2018/12/sahara-algerie-gregoryrohart-0075.jpg"
        },
        {
            "name" : "Cap Carbon",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19l7moY-EuoD_SCyXevD8EpMnggC5CuKbjg&usqp=CAU"
        }
    ]

    const scrollToSection = () => {
        const section = document.getElementById('target-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };

      
    return(
        <div className="Landing">
            <NavBar/>
            <Home/>
            <News eventList={events}/>
            <Tendance placeList={places}/>
            <About/>
            <Footer/>
        </div>
    )
}

export default LandingPage;