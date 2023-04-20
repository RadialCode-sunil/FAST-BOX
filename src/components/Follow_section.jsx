import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Btn_green from './Btn_green'
import world_map from '../assets/img/png/map_2.png'
const Follow_section = () => {
    return (
        <section className='position-relative overflow-hidden py-5'>
            <Container>
                <Row className=' pt-5'>
                    <Col xs={12} lg={7}>
                        <div>
                            <h2 className=' ff_Anybody fw_700 fs_4xl darkgreen'>Follow your shipment via GPS</h2>
                            <p className=' ff_Red_Hat fw_400 fs_lg grey90'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate..</p>
                            <Btn_green any_text="Learn More" />
                        </div>
                    </Col>
                    <Col xs={12} lg={5}>
                    </Col>
                </Row>
            </Container>
            <div>
                <img className=' position-absolute map_img' src={world_map} alt="" />
            </div>
        </section>
    )
}

export default Follow_section