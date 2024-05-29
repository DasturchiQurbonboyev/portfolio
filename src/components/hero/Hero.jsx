import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import image from '../../assets/png.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className=' hero pt-[100px]'>
            <div className='kontainer grid gap-8 grid-cols-2 items-center'>
                <div className='hero__text'>
                    <h3>Hello, I'm</h3>
                    <h1>Qurbonboyev Zafarbek</h1>
                    <h5>A Front-End Developer <span>From Uzbekistan in Tashkent</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium animi voluptatum voluptas? Sunt animi porro quisquam nemo, blanditiis suscipit. Eveniet deleniti harum facere, accusamus exercitationem dolor ut ipsam aut?</p>
                    <div className='hero__contact'>
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaLinkedinIn /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                    <a href="#" className='about__btn'>About Me</a>
                </div>
                <div className='h-full -mt-[30px]  hero__img   '>
                    <img className='' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero