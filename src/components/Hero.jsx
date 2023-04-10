import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Mynavbar from './Mynavbar';


const Hero = () => {
    return (
        <header>
            <Container>
                <Mynavbar/>
                <Row>
                    <Col xs={12} lg={12}>
                        <h1 className=' ff_Anybody fw_700 fs_6xl darkgreen'>
                            Largest and reliable courier service
                        </h1>
                    </Col>
                    <Col xs={12} lg={12}>

                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Hero