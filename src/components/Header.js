import React from 'react'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Header({videos}) {
    return (
        <div className="carousel">
             <Carousel indicators={false}>
            {videos.map(video =>
            <Carousel.Item interval={3000}>
            <img
              className="d-block slider-img"
  src={video.thumbnailUrl}
              alt="One"
            />
            <Carousel.Caption>
              <h3 className="slider-title">{video.title}</h3>
              <p className="slider-description">{video.description}</p>
            </Carousel.Caption>
          </Carousel.Item>)}
            </Carousel>
        </div>
    )
}

export default Header
