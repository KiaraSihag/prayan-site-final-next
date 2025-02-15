import React from 'react';
import { Carousel} from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel style={{ width: '80%', height: '40%', margin: '0 auto' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/xD.jpeg?raw=true"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1 Heading</h3>
          <p>Some text for Slide 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/xD.jpeg?raw=true"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 3 Heading</h3>
          <p>Some text for Slide 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/xD.jpeg?raw=true"
          alt=""
        />
        <Carousel.Caption>
          <h3>Slide 3 Heading</h3>
          <p>Some text for Slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
