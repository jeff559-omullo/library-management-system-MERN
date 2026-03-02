import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>

            <div className="photogallery-images">
                <img src="/assets/gallery/gallery1.jpg" alt=''/>
                <img src="/assets/gallery/gallery2.jpg" alt=''/>
                <img src="/assets/gallery/gallery3.jpg" alt=''/>
                <img src="/assets/gallery/gallery4.jpg" alt=''/>
                <img src="/assets/gallery/gallery5.jpg" alt=''/>
                <img src="/assets/gallery/gallery6.jpg" alt=''/>
                <img src="/assets/gallery/gallery7.jpg" alt=''/>
                <img src="/assets/gallery/gallery8.jpg" alt=''/>
                
            </div>

            <button>
                VIEW MORE
                <ArrowForwardIosIcon style={{fontSize:20}}/>
            </button>
        </div>
    )
}

export default PhotoGallery