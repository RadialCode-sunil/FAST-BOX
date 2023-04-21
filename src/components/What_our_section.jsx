import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import arrow from '../assets/img/png/arrow.png'
import adam from '../assets/img/png/adam.png'
import sofia from '../assets/img/png/sofia.png'
import marfie from '../assets/img/png/marfie.png'
import comma from '../assets/img/png/comma_img.png'
import star from '../assets/img/png/5_star.png'
const What_our_section = () => {
    return (
        <section className='py-5'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className='What_box_1 d-flex align-items-center justify-content-evenly'>
                            <img src={adam} alt="" />
                            <p className=' fs-1 fw-bold'>Adam Smith</p>
                            <img className='arrow_img' src={arrow} alt="" />
                        </div>
                        <div className='What_box_1 d-flex align-items-center justify-content-evenly my-3'>
                            <img src={sofia} alt="" />
                            <p className=' fs-1 fw-bold'>Sofia Caralino</p>
                            <img className='arrow_img' src={arrow} alt="" />
                        </div>
                        <div className='What_box_1 d-flex align-items-center justify-content-evenly '>
                            <img src={marfie} alt="" />
                            <p className=' fs-1 fw-bold '>Marfie Motcast</p>
                            <img className='arrow_img' src={arrow} alt="" />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='What_box_big text-center mt-3 mt-xl-0'>
                            <img src={comma} alt="" />
                            <p className=' ff_Red_Hat fw_400 fs_lg grey90 pt-5 lorem_wdth'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip  Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. </p>
                            <p className=' ff_Anybody fw_700 fs_lg darkgreen pt-4'>Web Developer</p>
                            <div className=' pt-2'>
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
export default What_our_section