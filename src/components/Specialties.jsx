import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Specialties = () => {
    return (
        <section className=' py-lg-5'>
            <Container className=' py-lg-5'>
                <div className='d-flex flex-column text-center text-lg-start flex-lg-row justify-content-center py-3 py-lg-5'>
                    <h2 className=' ff_Anybody fw_700 fs_4xl darkgreen'>
                        Our Specialties
                    </h2>
                    <p className=' ff_Red_Hat fw_400 fs_lg grey90 how_fast_p_w ps-lg-5 mx-auto mx-lg-0'>
                        Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <Row className=' justify-content-center pt-md-3'>
                    <Col xs={12} md={6} lg={4}>
                        <div className='Specialties_box'>
                            <div className=' d-flex'>
                                <p className=' ff_Poppins fw_700 fs_3xl lightgreen4'>01</p>
                                <div className=' ps-3'>
                                    <p className=' ff_Anybody fw_700 fs_lg lightblack'>
                                        Easy to order
                                    </p>
                                    <p className=' ff_Red_Hat fw_400 fs_sm grey90'>
                                        Stacks is a production-ready library of stackable content blocks built in React Native
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='pt-4 pt-md-0'>
                        <div className='Specialties_box '>
                            <div className=' d-flex'>
                                <p className=' ff_Poppins fw_700 fs_3xl lightgreen4'>02</p>
                                <div className=' ps-3'>
                                    <p className=' ff_Anybody fw_700 fs_lg lightblack text-nowrap'>
                                        Cash on delivery
                                    </p>
                                    <p className=' ff_Red_Hat fw_400 fs_sm grey90'>
                                        Stacks is a production-ready library of stackable content blocks built in React Native
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} className='pt-4 pt-lg-0'>
                        <div className='Specialties_box '>
                            <div className=' d-flex'>
                                <p className=' ff_Poppins fw_700 fs_3xl lightgreen4'>03</p>
                                <div className=' ps-3'>
                                    <p className=' ff_Anybody fw_700 fs_lg lightblack'>
                                        Live tracking
                                    </p>
                                    <p className=' ff_Red_Hat fw_400 fs_sm grey90'>
                                        Stacks is a production-ready library of stackable content blocks built in React Native
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Specialties