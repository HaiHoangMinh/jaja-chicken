import React from 'react';
import Slider from "react-slick";
import slide_one from '../../img/banner1.jpg';
import slide_two from '../../img/banner4.png';
import slide_three from '../../img/banner3.png';
import Btn from '../Button';
import { Link } from 'react-router-dom'

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
    };

    return (
        <div
            className="slide_wrapper"
            style={{
                height: `${100}%`,
                width: `${100}%`,
                overflow: 'hidden'
            }}
        >

            <Slider {...settings}>
                <div
                    className="slide_image"

                >

                    <Link to="/menu">
                        <img src={slide_one} />
                    </Link>
                </div>
                <div
                    className="slide_image"

                >

                    <Link to="/menu">
                        <img src={slide_two} />
                    </Link>
                </div>
                <div
                    className="slide_image"

                >

                    <Link to="/menu">
                        <img src={slide_three} />
                    </Link>
                </div>


            </Slider>
        </div>
    );
};

export default Banner;