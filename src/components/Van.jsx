import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import van from '../assets/img/png/green_car.png';
import Btn_green from './Btn_green';
import van_overflow_img from '../assets/img/png/van_overflow_img.png';
import van_overflow_img2 from '../assets/img/png/van_overflow_img2.png';

const Van = () => {
    return (
        <section className=' py-3 py-lg-5 my-lg-5 position-relative'>
            <img className=' position-absolute van_overflow_img z_index_-1 d-none d-lg-block' src={van_overflow_img} alt="image" />
            <img className=' position-absolute van_overflow_img2 z_index_-1 d-none d-lg-block' src={van_overflow_img2} alt="image" />
            <Container>
                <Row className=' align-items-center'>
                    <Col xs={12} lg={5}>
                        <img className=' w-100' src={van} alt="Fast Box" />
                    </Col>
                    <Col xs={12} lg={7} >
                        <div className=' ps-lg-5  ms-lg-5 pt-4 pt-lg-0'>
                            <h2 className=' ff_Anybody fw_700 fs_4xl darkgreen'>
                                We Have the largest Network
                            </h2>
                            <p className=' ff_Red_Hat fw_400 fs_sm grey90 pt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className=' pt-3'>
                                <Btn_green any_text="Learn More"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Van