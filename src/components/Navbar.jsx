import { useState, useEffect } from 'react';
import './navbar.css'
import Button from './button/Button';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked); 
    };    

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 0){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
    <div>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <a href='#' className='logo'></a>
            
            <div className='nav_links'>
                <ul id='links' className={clicked ? '#links active' : '#links'}>
                    <div className="job">
                        <li><a href="#" className='active'>Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </div>

                    <div id="buttons">
                    <Link to="/signin">
                    <Button
                        backgroundColor="#FBFBFB"
                        borderRadius='8px'
                        border='1px solid #093D8B'
                        hoverColor="#032356"
                        color='#093D8B'
                        hoverTextColor='#FBFBFB'
                    >
                        Sign in
                    </Button>
                    </Link>
                    <Link to='/signup'>
                        <Button backgroundColor="#093D8B" hoverTextColor='#FBFBFB' color="#FBFBFB" borderRadius='8px'  hoverColor="#032356">
                            Create Account
                        </Button>
                    </Link>
                    </div>
                </ul>
            </div>

            <div className="menu" onClick={handleClick}>
                <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

        </nav>
    </div>
  )
}

export default Navbar