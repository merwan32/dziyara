import React from "react";
import Carousel from "react-elastic-carousel";

const Tendance = ({placeList}) => {
    
    return (
        <div className="tendance">
            <h1>Lieux tendance</h1>
            <div className="filler"></div>
            <div className="Carousel">
                <Carousel itemsToShow={3}>
                    {
                        placeList.map((place) =>(
                            <div className="one">
                                <div className="imageContainer"><img src={place.image} alt={place.name}/></div>
                                <div className="titre">{place.name}</div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default Tendance;