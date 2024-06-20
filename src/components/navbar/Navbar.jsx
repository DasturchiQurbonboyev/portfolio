import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo-no-background.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    let [scroll, setScroll] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar   ${scroll ? " stickys shadow" : ""}`}>
            <div className='kontainer'>
                <div className='flex justify-between items-center py-[10px]'>
                    <div className='w-[75px]    '>
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='block min-[750px]:hidden'>
                        <GiHamburgerMenu className='minu__btn' />
                    </div>
                    <ul className=''>
                        <li>
                            <a href='#' >Home</a>
                        </li>
                        <li>
                            <a href='#about' >About</a>
                        </li>
                        <li>
                            <a href='#portfolio'>Portfolio</a>
                        </li>
                        <li>
                            <a href='#servis'>Servises</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                    <div>
                        <button className='download-btn border'>Download CV</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar