import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () =>{
    const contactText = ["C", "o","n","t","a","c","t"," ","M","e"]
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_np1d1ti', 'template_v1dmh7v', form.current, 'hP4DxS8uGdxrxawPV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
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
           
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required></input>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required></input>
                            </li>
                          <li>
                            <input placeholder="Subject" type="text" name="subject" required/>
                          </li>
                          <li>
                            <textarea placeholder='Message' name="message" required></textarea>
                          </li>
                          <li>
                            <input type="submit" value="Send Message" className='flat-button' ></input>
                          </li>
                          

                        </ul>
                    </form>
                </div>
                </div>
            </div>
            <Loader type="pacman"/> 
        </>
    )
}

export default Contact