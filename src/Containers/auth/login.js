import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './login.css'
import img from '../../Assets/login.png';
import logo from '../../Assets/LogoDZiyara.png';
import { Link ,useNavigate} from 'react-router-dom';


const Login  = ({ setIsOpen }) => {

const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    console.log(access_token)
    if (access_token) {
      navigate('/'); 
    }
  }, []);
    //login function 

    async function login(e)  {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: email,
                password: password
            });
            axios.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            navigate('/'); 
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
                <h1>Se connecter</h1>
                <div className='inputs'>
                    <input type="text" id="email" onChange={event => setEmail(event.target.value)} value={email} placeholder="Username" required/>
                    <input type="password" id="password" onChange={event => setPassword(event.target.value)} value={password}  placeholder="Mot de passe" required/>
                    <button type="submit" >Se connecter</button>
                </div>           
                <label for="remember" >Vous n’avez pas de compte ?<Link to="/signup"><span  >Créez un compte</span></Link>.</label>
            </form>         
        </div>
      </>
    );
  };

export default Login