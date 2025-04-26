import './Nav.css';
import horizontalLogo from '../img/HIMATIF Horizon.png';
// import { useState } from 'react';

// const [isActive, setActive] = useState(false);
// const uel = document.getElementById('uel');
// const open =  uel => uel.classList.toggle('open');
const Nav = () => {
    return ( 
        <>
            <nav>
                <img src={horizontalLogo} alt=""/>
                <ul id='uel'>
                    <li><a href="#home" className='navLink'>Home</a></li>
                    <li><a href="#about" className='navLink'>About</a></li>
                    <li><a href="#divisi" className='navLink'>Divisi</a></li>
                    <li><a href="#footer" style={{padding: '7px 20px'}} className='navLink'>Contact</a></li>
                </ul>
                <button id='navToggler'> X </button>
            </nav>
        </>      
     );
}
 
export default Nav;
