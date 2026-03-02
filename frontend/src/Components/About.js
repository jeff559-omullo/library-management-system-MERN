import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">
                About Kiriri Women’s University Library
            </h2>

            <div className="about-data">
                <div className="about-img">
                    <img 
                        src="/assets/kiriri-library.jpg" 
                        alt="Kiriri Women University Library" 
                    />
                </div>

                <div>
                    <p className="about-text">
                        The Kiriri Women’s University Library serves as the academic heart of 
                        Kiriri Women’s University of Science and Technology in Nairobi, Kenya. 
                        The library supports teaching, learning, and research by providing 
                        access to textbooks, journals, digital resources, and study spaces.
                        <br /><br />
                        The library promotes academic excellence by offering a quiet and 
                        resource-rich environment where students can study, conduct research, 
                        and collaborate. With both physical and digital collections, students 
                        are empowered to succeed in their academic journey.
                        <br /><br />
                        Through continuous development and innovation, the library remains 
                        committed to supporting women’s education and leadership.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About