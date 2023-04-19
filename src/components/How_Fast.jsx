import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import Step_1 from '../assets/img/png/Step-1.png';
import Step_2 from '../assets/img/png/Step-2.png';
import Step_3 from '../assets/img/png/Step-3.png';
import Step_4 from '../assets/img/png/Step-4.png';
import hero_star_green from '../assets/img/png/hero_star_green.png';
import hero_yellow_star from '../assets/img/png/hero_yellow_star.png';

const How_Fast = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: ".next",
        prevArrow: ".back",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <section className=' py-lg-5 mx-lg-5 position-relative'>
            <img className=' position-absolute How_star_green' src={hero_star_green} alt="star" />
            <img className=' position-absolute how_yellow_star' src={hero_yellow_star} alt="star" />

            <Container className='py-5 my-lg-5'>
                <div className='d-flex flex-column text-center text-lg-start flex-lg-row justify-content-center py-lg-5'>
                    <h2 className='  ff_Anybody fw_700 fs_4xl darkgreen'>
                        How Fast box works
                    </h2>
                    <p className=' ff_Red_Hat fw_400 fs_lg grey90 how_fast_p_w ps-lg-5 mx-auto mx-lg-0'>
                        Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>

                <Slider {...settings} className=' pt-3 pt-lg-5'>
                    <div className='px-3'>
                        <div className=' px-3 how_fast_box text-center d-flex flex-column align-items-center'>
                            <div className=''>
                                <img src={Step_2} alt="Booking " />
                            </div>
                            <p className=' ff_Poppins fw_600 fs_ss grey90 py-3'>Step 1</p>
                            <p className=' ff_Anybody fw_700 fs_lg darkgreen'>Booking </p>
                            <p className=' ff_Red_Hat fw_400 fs_sm grey90'>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className=' px-3 how_fast_box Packing_box position-relative text-center d-flex flex-column align-items-center'>
                            <div className=''>
                                <img src={Step_1} alt="Packing  " />
                            </div>
                            <p className=' ff_Poppins fw_600 fs_ss grey90 py-3'>Step 2</p>
                            <p className=' ff_Anybody fw_700 fs_lg darkgreen'>Packing  </p>
                            <p className=' ff_Red_Hat fw_400 fs_sm grey90'>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className=' px-3 how_fast_box Transportation_box position-relative text-center d-flex flex-column align-items-center'>
                            <div className=''>
                                <img src={Step_3} alt="Transportation   " />
                            </div>
                            <p className=' ff_Poppins fw_600 fs_ss grey90 py-3'>Step 3</p>
                            <p className=' ff_Anybody fw_700 fs_lg darkgreen'>Transportation  </p>
                            <p className=' ff_Red_Hat fw_400 fs_sm grey90'>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='px-3 text-center d-flex flex-column align-items-center'>
                            <div className=''>
                                <img src={Step_4} alt="Delivery    " />
                            </div>
                            <p className=' ff_Poppins fw_600 fs_ss grey90 py-3'>Step 4</p>
                            <p className=' ff_Anybody fw_700 fs_lg darkgreen'>Delivery  </p>
                            <p className=' ff_Red_Hat fw_400 fs_sm grey90'>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                </Slider>


            </Container>
        </section>
    )
}

export default How_Fast