import LogoSubtitle from '../../assets/images/logo-sub-transparent.png';
import { Link } from 'react-router-dom';
import './index.scss';
const Home =() => {
    return (<>
        <div className="container home-page">
            
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoSubtitle} alt="devloper"/>
                Aaron
                <br/>
                Computer Science Graduate
                </h1>
                <h2>Backend Developer/ Comfortable w JavaScript/ Machine Learning expert </h2>
                <div id="defnic" class="gps-button-wrapper"> 
                    <Link to='/contact' className="flat-button">CONTACT ME</Link>
                
                </div>
                
                </div>
            </div>
            </>
    )
}

export default Home