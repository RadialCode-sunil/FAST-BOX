import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Mynavbar from './Mynavbar';
import hero_img from '../assets/img/png/hero_img.png';
import hero_star_green from '../assets/img/png/hero_star_green.png';
import hero_yellow_star from '../assets/img/png/hero_yellow_star.png';
import hero_map from '../assets/img/png/hero_map.png';


const Hero = () => {
    return (
        <header className=' min-vh-100 hero_min_vh d-flex flex-column position-relative overflow-hidden'>
            <img className=' position-absolute hero_map end-0 top-0' src={hero_map} alt="Map" />
            <Mynavbar />
            <img className=' position-absolute hero_star_green' src={hero_star_green} alt="star" />
            <img className=' position-absolute hero_yellow_star' src={hero_yellow_star} alt="star" />
            <div className=' flex-grow-1 d-flex align-items-center position-relative'>
                <Container >
                    <Row>
                        <Col xs={12}>
                            <h1 className=' ff_Anybody fw_700 fs_6xl darkgreen hero_h1_w'>
                                Largest and reliable courier service
                            </h1>
                            <div className='city_box  position-relative mt-4'>

                                <p className='ff_Anybody city_box2 position-relative custom_border fw_700 fs_5xl darkgreen mb-0'>
                                    in your city
                                </p>

                            </div>
                            <p className=' ff_Red_Hat fw_400 fs_xl grey90 pt-5 hero_p_w'>
                                Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <div className='hero_input d-flex justify-content-between align-items-center my-5'>
                                <input className='hero_email ps-3 w-100 ff_Red_Hat fw_400 fs_md grey90' type="email" placeholder='Enter Tracking Number' />
                                <a href="#" className=' ff_Poppins fw_500 fs_2xl white hero_btn d-inline-block  mt-sm-0 ms-3'>Check</a>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <img className='hero_img position-absolute d-none d-lg-block' src={hero_img} alt="boy" />
                            <img className='w-100 d-lg-none' src={hero_img} alt="boy" />

                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Hero