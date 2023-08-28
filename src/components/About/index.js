import './index.scss'
import AnimatedLetters from '../AnimatedLetters'    
import Loader from 'react-loaders';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faJs, faGitAlt, faJava,faLinux} from '@fortawesome/free-brands-svg-icons';
const About = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        },3000)
      }, [])
    return(
        <>

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
            
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                   <FontAwesomeIcon icon={faPython} color="#4584b6"></FontAwesomeIcon>
                   </div>
                   <div className='face2'>
                   <FontAwesomeIcon icon={faReact} color="#61DBFB"></FontAwesomeIcon>
                   </div>
                   <div className='face3'>
                   <FontAwesomeIcon icon={faJs} color="#f0db4f"></FontAwesomeIcon>
                   </div>
                   <div className='face4'>
                   <FontAwesomeIcon icon={faJava} color="#f89820"></FontAwesomeIcon>
                   </div>
                   <div className='face5'>
                   <FontAwesomeIcon icon={faGitAlt} color="#DD0031"></FontAwesomeIcon>
                   </div>
                   <div className='face6'>
                   <FontAwesomeIcon icon={faLinux} color="#333333"></FontAwesomeIcon>
                   </div>
            </div>
            </div>   
        </div>
        <Loader type="pacman"/> 
        </>
    )
};
export default About;