import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import './Map.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { FaStar, FaStarHalfAlt, FaArrowLeft } from 'react-icons/fa';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;


function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; 

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} color="#ffc700" />
      ))}
      {hasHalfStar && <FaStarHalfAlt color="#ffc700" />}
    </div>
  );
}

function Map() {
  const baseUrl = 'https://dziyara.onrender.com/';

  const [searchQuery, setSearchQuery] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);


  useEffect(() => {
    axios
      .get('https://dziyara.onrender.com/api/touristic-sites/')
      .then(response => {
        const data = response.data;
        const newStates = data.map(site => ({
          name: site.site_name,
          lat: site.latitude,
          lng: site.longitude,
        }));
        console.log(data)
        setStates(newStates);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };


  const handleMarkerClick = (state) => {
    axios
      .get(`https://dziyara.onrender.com/api/touristic-sites/by-name/?name=${state.name}`)
      .then((response) => {
        const data = response.data;
        console.log(data)
        setSelectedState(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const [commentContent, setCommentContent] = useState('');
  const handleCommentSubmit = (event, id) => {
    event.preventDefault();
  
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken)
    if (accessToken) {
      const commentData = {
        user:4,
        site: id,
        content: commentContent,
      };
  
      axios.post('https://dziyara.onrender.com/api/comments/add/', commentData, {
        headers: {
          Authorization: `Token ${accessToken}`,
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error creating comment:', error);
        });
    } else {
      window.location.href = '/login';
    }
  };

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='main'>
      {selectedState && (
        <div className='state'>
          <img src={baseUrl + selectedState.picture} alt='' />
          <div className='informations'>
            <div className='title'>
            <div onClick={() => setSelectedState()}>
              <FaArrowLeft />
            </div>
              <h1>{selectedState.site_name}</h1>
            </div>
            <div className='rating'>
              <StarRating rating={selectedState.current_stars} />
              <h5><span>Ouvert 24/24h </span>.  Toute la semaine</h5>
            </div>
            <h4>{selectedState.site_type}</h4>
            <h3>Description :</h3>
            <h5>{selectedState.description}</h5>
            <h4>Join us</h4>
            <div className="icons">
            {selectedState.Transport_Mean.map((transportMean, index) => (
              <div key={index} >
                <img src={baseUrl + transportMean.icon} alt={transportMean.mean_name} />
              </div>
            ))}
            </div>
            <h3>Commentaires :</h3>
            <hr/>
            <div className='coments'>
            {selectedState.comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.user}</h3>
                <h5>{comment.content}</h5>
              </div>
            ))}
              <form onSubmit={(event) => handleCommentSubmit(event, selectedState.id)}>
                <input
                  type="text"
                  placeholder="Laisser un message ..."
                  value={commentContent}
                  onChange={event => setCommentContent(event.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            
          </div>
        </div>
      )}
      <div className="map-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search"
          className="input-inset"
        />
        <MapContainer center={[35.0339, 1.6596]} zoom={7} className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data &copy; OpenStreetMap contributors" />
          <MarkerClusterGroup className="custom-marker-cluster" >
            {filteredStates.map((state, index) => (
              <Marker key={index} position={[state.lat, state.lng]} eventHandlers={{ click: () => handleMarkerClick(state) }}>
                <Popup>{state.name}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
