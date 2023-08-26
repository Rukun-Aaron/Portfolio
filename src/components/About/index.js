import './index.scss'
import AnimatedLetters from '../AnimatedLetters'    
import { useState } from 'react';
import { useEffect } from 'react';
const About = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        },3000)
      }, [])
    return(
        <div className="container about-page">
        
            <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass} 
                strArray={['A','b','o','u','t',' ','M','e']}
                idx={15}
                >  </AnimatedLetters>
            </h1>  
            <p>
                    
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.

            </p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> 
            </div> 
            
            
        </div>
    )
};
export default About;