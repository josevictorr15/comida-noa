import React from 'react'
import logo from "../assets/Comida.png"
import menu from "../assets/align-left-svgrepo-com.svg"
import { IoIosMenu } from "react-icons/io";
import "./Header.css"

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo Comida Boa"/>
        <nav>
            <ul>
                <li><a href="#" className='link'>Sobre</a></li>
                <li><a href="#" className='link'>Cardápio</a></li>
                <li><a href="#" className='link'>Contato</a></li>
            </ul>
            <button style={{border: "none", background: "none"}}>
                <IoIosMenu className='menu-icon'/>
            </button>
        </nav>
    </header>
  )
}

export default Header