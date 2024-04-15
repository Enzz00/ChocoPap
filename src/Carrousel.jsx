import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';

const CarouselPage = () => {
    return (
    <Carousel>
    <div className='Carrouselcomponent'>
        <img className='Picturecarrousel' src='./img/carrouselchocopap.jpg' />
        <h1 className="titlecarrousel">ChocoPap</h1>
        <NavLink className='boutonvoirboutique' to={'/boutique'}>VOIR LA BOUTIQUE</NavLink>
    </div>
    <div className='Carrouselcomponent'>
        <img className='Picturecarrousel' src="./img/carrouselchocopap2.jpg" />
        <h1 className="titlecarrousel">ChocoPap</h1>
        <NavLink className='boutonvoirboutique' to={'/boutique'}>VOIR LA BOUTIQUE</NavLink>
    </div>
    <div className='Carrouselcomponent'>
        <img className='Picturecarrousel' src="./img/carrouselchocopap3.jpg" />
        <h1 className="titlecarrousel">ChocoPap</h1>
        <NavLink className='boutonvoirboutique' to={'/boutique'}>VOIR LA BOUTIQUE</NavLink>
    </div>
    </Carousel>
    );
    };
    
    export default CarouselPage;