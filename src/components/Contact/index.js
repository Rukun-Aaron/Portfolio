import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
const Contact = () =>{
    const contactText = ["C", "o","n","t","a","c","t"," ","M","e"]
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },4000)
  }, [])
    return(
        <>
            <div className="container contact-page">

                <div className='text-zone'>
                    <h1>
                        
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray= {contactText}
                        idx={10}
                        />
                    </h1>
                    <p>
                    
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.

            </p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> 
                </div>
            </div>
            <Loader type="pacman"/> 
        </>
    )
}

export default Contact