import React from "react";
import NavBar from '../../Components/Header/Header.jsx';
import './index.css';
import Home from './home.jsx'
import News from './news.jsx'
import Tendance from "./tendance.jsx";
import About from "./about.jsx";
import Footer from "../../Components/Footer/Footer.jsx";


const LandingPage = () => {
    const events = [
        {
            "name": "Yennayer",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        },
        {
            "name": "Janvier",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        },
        {
            "name": "Yennayer",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        },
        {
            "name": "Janvier",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        },
        {
            "name": "Yennayer",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        },
        {
            "name": "Janvier",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        }
    ]

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