import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Assets/login.png';
import logo from '../../Assets/LogoDZiyara.png';

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    console.log(access_token)
    if (access_token) {
      navigate('/'); 
    }
  }, []);

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dziyara.onrender.com/api/signup/', {
        username: username,
        email: email,
        password: password
      });
      axios.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      navigate('/'); // Redirect after successful signup
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img src={logo} className="logo" alt="Logo" />
        </Link>

        <img src={img} alt="Login" />
        <form onSubmit={signup} className="flex flex-col">
          <h1>Créer un compte</h1>
          <div className="inputs">
            <input type="text" id="username" onChange={(event) => setUsername(event.target.value)} value={username} placeholder="Username" required />
            <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="email" required />
            <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Mot de passe" required />
            <button type="submit">Créer mon compte</button>
          </div>
          <label htmlFor="remember">
            Vous avez un compte ?<Link to="/login"><span>se connecter</span></Link>.
          </label>
        </form>
      </div>
    </>
  );
};

export default Signup;
