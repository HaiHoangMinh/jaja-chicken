import React from 'react';
import Slider from "react-slick";
import slide_one from '../../img/menu0.png';
import slide_two from '../../img/banner2.jpg';
import slide_three from '../../img/menu2.png';
import slide_four from '../../img/menu3.png';
import Btn from '../Button';
import { Link } from 'react-router-dom'

const BannerMenu = () => {

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
                height: `${465}px`,
                width: `${window.innerWidth}px`,
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

export default BannerMenu;