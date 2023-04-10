import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Mynavbar from './Mynavbar';


const Hero = () => {
    return (
        <header className=' min-vh-100 d-flex flex-column'>
            <Mynavbar />

            <Container className=' flex-grow-1 d-flex align-items-center'>

                <Row>
                    <Col xs={12}>
                        <h1 className=' ff_Anybody fw_700 fs_6xl darkgreen'>
                            Largest and reliable courier service
                        </h1>
                        <p className='ff_Anybody fw_700 fs_5xl darkgreen'>
                            in your city
                        </p>
                        <p className=' ff_Red_Hat fw_400 fs_xl grey90 pt-4'>
                            Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className='hero_input d-flex justify-content-between align-items-center'>
                            <input className='hero_email ps-3 w-100' type="email" placeholder='Enter Tracking Number' />
                            <a href="#" className=' ff_Poppins fw_500 fs_2xl white hero_btn ms-3'>Check</a>
                        </div>
                    </Col>
                    <Col xs={12}>

                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Hero