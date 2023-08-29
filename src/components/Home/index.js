import LogoSubtitle from '../../assets/images/logo-sub-transparent.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters  from '../AnimatedLetters';
import Loader from 'react-loaders';
import Waves from '../Waves';
import './index.scss';
import YourComponent from '../Pics';
import CurtainButton from '../CurtainButton';
const Home =() => {

    const nameArray = ['A','a', 'r', 'o', 'n']
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e']
    const graduateArray =['G', 'r', 'a', 'd', 'u', 'a', 't', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },6000)
  }, [])
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [translationAmount, setTranslationAmount] = useState('0%'); // Initial value

    const toggleNav = () => {
            // console.log('toggleNav');

        setIsNavOpen(prevState => !prevState);
        setTranslationAmount(prevAmount => (prevAmount === '0%' ? '40%' : '0%'));

        };
        
    return (
        
        <>
        <div className="container home-page" style={{
            transform: `translateY(-${translationAmount})`,
            transition: 'transform 500ms cubic-bezier(.13,.53,.38,.97)',
             // Smooth animation
          }}>
            
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
                    idx={29}
                    
                    
                />
                </h1>
                <h2>Backend Developer/ Comfortable w JavaScript/ Machine Learning expert </h2>
                <div id="defnic" class="gps-button-wrapper"> 
                    <Link to='/contact' className="flat-button">CONTACT ME</Link>
                
                </div>
                
                </div>
                <YourComponent ></YourComponent> 
                <CurtainButton  isNavOpen={isNavOpen} toggleNav={toggleNav}></CurtainButton>
                <Waves isNavOpen={isNavOpen}></Waves>
            
        </div>
        <Loader type="pacman"/> 
        </>
            
    )
}

export default Home