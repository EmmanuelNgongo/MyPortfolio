import React from 'react';
import { Link } from 'react-scroll';

// function scrollToSection() {
//     window.location.hash = "Contact";
//   }
export default function HeroSection() {
    return (
    <section id="heroSection" className= "hero--section">
        <div className="hero--section--content-box">
            <div className="hero--section--content">
                <p className="section--title"> Hey, I'm Emmanuel</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Entry-Level Data</span>{" "}
                    <br />
                    Engineer 
                </h1>
                <p className="hero--section--description">
                With a Bachelor’s degree in Information Technology and a year of professional experience 
                specializing in data capturing and data scripting at a laboratory firm, I have developed 
                a robust foundation in data engineering principles and practices. 
                    {/* <br /> Add More description  */}
                </p>
            </div>
            {/* <button className="btn btn-primary" > Get in Touch</button> */}
            <Link
                to="Contact" // The target section's ID
                spy={true}
                smooth={true}
                offset={-70} // Adjusts the scroll offset, can be useful if you have a fixed header
                duration={500} // How long the scroll takes in milliseconds
                className="hero--section--link" // Class for styling
                activeClass="active" // Class applied when the element is reached
                >
                Get in Touch
            </Link>

        </div>
        <div className="hero--section--img">
            <img src="./img/hero-emn.png" alt="Hero Section" />
        </div>
    </section>
    
    );
}