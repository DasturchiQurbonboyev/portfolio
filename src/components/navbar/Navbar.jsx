import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo-no-background.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    let [scroll, setScroll] = useState(null)
    console.log(scroll);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`   ${scroll ? " stickys shadow" : ""}`}>
            <div className='kontainer'>
                <div className='flex justify-between items-center py-[10px]'>
                    <div className='w-[75px]    '>
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='block min-[670px]:hidden'>
                        <GiHamburgerMenu className='minu__btn' />
                    </div>
                    <ul className='max-[670px]:hidden flex justify-between items-center gap-[30px]'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link>Portfolio</Link>
                        </li>
                        <li>
                            <Link>Servises</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
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