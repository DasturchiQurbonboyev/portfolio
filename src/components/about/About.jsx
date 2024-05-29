import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about kontainer ' id='about'>
            <div className='about__img'>
                <img src="https://st3.depositphotos.com/3073153/17987/i/450/depositphotos_179879260-stock-photo-take-a-look-at-this.jpg" alt="" />
            </div>
            <div className='about__text'>
                <h3>I'm a Devoloper</h3>
                <h2>I Can Programming You Want</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis esse quae. Beatae inventore, aut, voluptatibus possimus laborum autem aliquid cumque animi ipsa iusto officia quibusdam voluptates assumenda praesentium quam.</p>
                <a href="#" className='about__btn'>Hire Me</a>
            </div>
        </div>
    )
}

export default About