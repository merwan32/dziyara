import React from "react";
import Carousel from "react-elastic-carousel";

const News = ({eventList}) => {
    const baseUrl = "https://dziyara.onrender.com";
    return (
        <div className="news">
            <h1>Actualités du moment</h1>
            <div className="filler"></div>
            <div className="Carousel">
                <Carousel >
                    {
                        eventList.map((event) =>(
                            <div className="new">
                                <img src={`${baseUrl}${event.image}`} alt={event.name}/>
                                <div className="eventInfos">
                                    <div className="titre">{event.name}</div>
                                    <div className="line"></div>
                                    <div>{event.description}</div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default News;