import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/assets/slide1.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Our Library</h3>
                        <p>Explore thousands of books easily.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="/assets/slide2.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Find Your Favorite Books</h3>
                        <p>Search and manage books effortlessly.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                
            </Carousel>
        </div>
    )
}

export default ImageSlider