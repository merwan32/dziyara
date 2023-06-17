import React , {useState} from 'react'
import axios from 'axios'
import './login.css'
import img from '../../Assets/login.png';
import logo from '../../Assets/LogoDZiyara.png';
import { Link } from 'react-router-dom';


const Signup  = ({ setIsOpen }) => {

    //login variable 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    //login function 

    async function login(e)  {
        e.preventDefault();
        try {
            const response = await axios.post('https://dziyara.onrender.com/api/signup/', {
                username: username,
                email: email,
                password: password
            });
            axios.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            return response.data;
        } catch (error) {
            throw error;
        }
       
    }



    return (
      <>
        <div className="login">
            <Link to='/'><img src={logo} className="logo"/></Link>
          
            <img src={img}/>
            <form onSubmit={login} className="flex flex-col">
                <h1>Créer un compte</h1>
                <div className='inputs'>
                    <input type="text" id="username" onChange={event => setUsername(event.target.value)} value={username} placeholder="Username" required/>
                    <input type="email" id="email" onChange={event => setEmail(event.target.value)} value={email} placeholder="email" required/>
                    <input type="password" id="password" onChange={event => setPassword(event.target.value)} value={password}  placeholder="Mot de passe" required/>
                    <button type="submit" >Créer mon compte</button>
                </div>           
                <label for="remember" >Vous avez un compte ?<Link to="/login"><span  >se connecter</span></Link>.</label>
            </form>         
        </div>
      </>
    );
  };

export default Signup