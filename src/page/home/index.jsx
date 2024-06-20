import React from 'react'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio'

const index = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Portfolio />
        </div>
    )
}

export default index