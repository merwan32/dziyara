import React from "react";
import firstMap from '../../Assets/map1.png';
import secondMap from '../../Assets/map2.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home">
            <div className="description">
                <div className="texte">
                    <h3>.......   DZiyara</h3>
                    <h1>Vivez la splendeur virtuellement !</h1>
                    <p>Plongez dans l'univers captivant de l'e-tourisme en Algérie. Découvrez ses paysages spectaculaires, sa richesse culturelle et son patrimoine historique, le tout depuis le confort de votre propre ordinateur.</p>
                </div>
                <div className="links">
                    <Link to="/map">
                        <button id="consulter">Consulter</button>
                    </Link>
                    <button >Comment ?</button>
                </div>
            </div>
            <div className="showcase">
                <div className="green"></div>
                <img className="first" src = {firstMap} alt="Map"/>
                <img className="second" src = {secondMap} alt="Map"/>
            </div>
        </div>
    )
}
export default Home;