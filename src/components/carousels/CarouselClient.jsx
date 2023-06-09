import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import "./carousel.css";
import images from '../../assets/images/Pages/About/Clients/images';

const CarouselClient = () => {
  const ClientImages = images;

  return (
    <Carousel id='Div-CarouselClient' slide={true} interval={3000} wrap={true}>
      <Carousel.Item>
        <div className="image-row">
          <Image src={ClientImages.Cliente1} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente2} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente3} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente4} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente5} roundedCircle className='images-carousel' />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-row">
         
          <Image src={ClientImages.Cliente6} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente7} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente8} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente9} roundedCircle className='images-carousel' />
          <Image src={ClientImages.Cliente10} roundedCircle className='images-carousel' />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-row">
        <Image src={ClientImages.Cliente11} roundedCircle className='images-carousel' />
        <Image src={ClientImages.Cliente12} roundedCircle className='images-carousel' />
        <Image src={ClientImages.Cliente13} roundedCircle className='images-carousel' />
        <Image src={ClientImages.Cliente14} roundedCircle className='images-carousel' />
        <Image src={ClientImages.Cliente15} roundedCircle className='images-carousel' />
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export { CarouselClient };
