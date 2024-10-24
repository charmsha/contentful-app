import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>Contentful CMS</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum beatae autem ullam molestiae totam atque amet maxime culpa dolor quas, aspernatur sapiente! Nisi sunt eius debitis ut! Numquam, dolores iste!
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img' />
            </div>
        </div>

    </section>
      
  )
}

export default Hero
