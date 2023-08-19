import LogoSubtitle from '../../assets/images/logo-sub-transparent.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters  from '../AnimatedLetters';
import './index.scss';
import YourComponent from '../Pics';
const Home =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A','a', 'r', 'o', 'n']
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e']
    const graduateArray =['G', 'r', 'a', 'd', 'u', 'a', 't', 'e']
    const [activeIndex, setActiveIndex] = useState(0);

    const groups = document.getElementsByClassName("card-group");
    const handleHateClick = () => {
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
        setActiveIndex(nextIndex);
      };
    useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },6000)
  }, [])
    return (
        
        
        <div className="container home-page">
            
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass } _12`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br/>
                    <span className={`${letterClass } _13`}>I</span>
                    <span className={`${letterClass } _13`}>'m</span>

                <img src={LogoSubtitle} alt="devloper"/>
                
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={20}
                    
                    />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={graduateArray}
                    idx={25}
                    
                    
                />
                    
                {/* Computer Science Graduate */}
                </h1>
                <h2>Backend Developer/ Comfortable w JavaScript/ Machine Learning expert </h2>
                <div id="defnic" class="gps-button-wrapper"> 
                    <Link to='/contact' className="flat-button">CONTACT ME</Link>
                
                </div>
                
                </div>
                <YourComponent></YourComponent> 
            </div>
            
    )
}

export default Home