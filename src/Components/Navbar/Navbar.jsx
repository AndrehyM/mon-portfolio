// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {


    return (
        <nav className="container dark-nav">
            <img src={logo} className="logo" alt='logo' />
            <ul>
                <li><a href='#'><i className='bi bi-house'></i> Acceuil</a></li>
                <li><a href='#Apropos'><i className='bi bi-info-circle'></i>  A propos</a></li>
                <li><a href='#Etudes'><i className='bi bi-book'></i> Etudes</a></li>
                <li><a href='#competance'><i className='bi bi-code'></i> Compétances</a></li>
                <li><a href='#Equipes'><i className='bi bi-person-workspace'></i> Equipes</a></li>
                <li><a href='#contact'><i className='bi bi-phone'></i> Contact</a></li>
                <li> <a href='tel:0386720146'><i className='bi bi-telephone'></i> </a></li>

            </ul >
            <i className="bi bi-list" id='menu' ></i>
        </nav >
    );
}

export default Navbar;
