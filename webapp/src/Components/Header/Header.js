import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../Assets/images/logo/logo_ushida.png'
import './Header.scss';

function Header(props) {
    // const [,setTime] = useState(Date.now());
    // var currentDate = new Date();
    // useEffect(() => {
    //   const interval = setInterval(() => setTime(Date.now()), 5000);

    //   return () => {
    //     clearInterval(interval);
    //   };
    // }, []);
    return (
        <header>
            <div className='header-wrapper'>
                    <div className='header-navigation'>
                        <Link to='/' className='header-link'>
                            <span className='header-logo'>Ushida</span>
                        </Link>
                        <Link to='/products' className='header-link link' >
                            <span>Products</span>
                        </Link>
                        <Link to='/portfolio' className='header-link link'>
                            <span>Portfolio</span>
                        </Link>
                        <Link to='/contacts' className='header-link link'>
                            <span>Contacts</span>
                        </Link>
                        <Link to='/about' className='header-link link'>
                            <span>About</span>
                        </Link>
                    </div>
                <div className='header-auth'>
                    <button className="button button-not-active sign-in">Sign In</button>
                    {/* <p className='time'>{('0' + currentDate.getHours()).substr(-2) + ':' + ('0' + currentDate.getMinutes()).substr(-2)}</p> */}
                    <button className="button sign-up">Sign Up</button>
                </div>
            </div>
        </header>
    );
}



export default Header