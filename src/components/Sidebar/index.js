import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-transparent.png'
import LogoSubtitle from '../../assets/images/logo-sub-transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
const SideBar =() => (
    <div className="nav-bar">
        <Link className='logo' to= '/'>
            <img src={LogoS}  className='resize' alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle}  alt="rukun"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active"className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope}  color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank"
                rel="noreferrer" 
                href="https://www.linkedin.com/in/rukun-aaron-805130177">
                 <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>    
                </a>   
                        
            </li>
            <li>
            <a target="_blank"
                rel="noreferrer" 
                href="https://github.com/Rukun-Aaron">
                 <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>    
                </a> 
            </li>
            <li>
            <a target="_blank"
                rel="noreferrer" 
                href="https://www.instagram.com/rukun_aaron/?hl=en">
                 <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>    
                </a> 
            </li>
        </ul>
    </div>
    )


export default SideBar