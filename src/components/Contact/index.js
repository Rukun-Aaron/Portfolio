import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
const Contact = () =>{
    const contactText = ["C", "o","n","t","a","c","t"," ","M","e"]
    return(
        <>
            <div className="container contact-page">

                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray= {contactText}
                        idx={15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type="pacman"/> 
        </>
    )
}

export default Contact