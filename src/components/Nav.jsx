import './Nav.css';
import horizontalLogo from '../img/HIMATIF Horizon.png';
import { useState } from 'react';
import hamburger from "../img/icon/hamburger-menu.svg"
import close from "../img/icon/close-menu.svg"


const Nav = () => {
    const [isShow, setShow] = useState(false);

    function open(){
        if(isShow){
            setShow(false)
        }else{
            setShow(true)
        }
    }


    return ( 
        <>
            <nav>
                <img src={horizontalLogo} alt=""/>
                <ul id='uel'>
                    <li><a href="#home" className='navLink'>Home</a></li>
                    <li><a href="#about" className='navLink'>About</a></li>
                    <li><a href="#divisi" className='navLink'>Struktural</a></li>
                    <li><a href="#footer" style={{padding: '7px 20px'}} className='navLink'>Contact</a></li>
                </ul>
                <img src={isShow == true ? close : hamburger} id='navToggler' onClick={()=>open()}></img>
            </nav>
            
            <ul id='uel2' className={isShow == true ? "uel2 open" : "uel2 close"}>
                <li><a href="#home" className='navLink'>Home</a></li>
                <li><a href="#about" className='navLink'>About</a></li>
                <li><a href="#divisi" className='navLink'>Divisi</a></li>
                <li><a href="#footer" style={{padding: '7px 20px'}} className='navLink'>Contact</a></li>
            </ul>
        </>      
     );
}
 
export default Nav;
