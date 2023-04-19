import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import airtable from '../assets/img/png/airtable.png';
import sketch from '../assets/img/png/sketch.png';
import dribble from '../assets/img/png/dribble.png';
import slack from '../assets/img/png/slack.png';
import licchat from '../assets/img/png/licchat.png';
import gitlab from '../assets/img/png/gitlab.png'
const Airtable = () => {
  return (
      <section className=' bg_lightgreen3 py-5'>
          <Container>
              <Row className=' justify-content-center'>
                  <Col xs={6} sm={4} md={3} lg={2}>
                      <img className=' w-75 logo_w_xs logo_filter' src={airtable} alt="Airtable" />
                  </Col>
                  <Col xs={6} sm={4} md={3} lg={2}>
                      <img className=' w-75 logo_w_xs logo_filter' src={sketch} alt="Sketch" />
                  </Col>
                  <Col xs={6} sm={4} md={3} lg={2} className=' pt-3 pt-sm-0'>
                      <img className=' w-75 logo_w_xs logo_filter' src={dribble} alt="Dribble" />
                  </Col>
                  <Col xs={6} sm={4} md={3} lg={2} className=' pt-3 pt-md-0'>
                      <img className=' w-75 logo_w_xs logo_filter' src={slack} alt="Slack" />
                  </Col>
                  <Col xs={6} sm={4} md={3} lg={2} className=' pt-3 pt-lg-0'>
                      <img className=' w-75 logo_w_xs logo_filter' src={licchat} alt="LiveChat" />
                  </Col>
                  <Col xs={6} sm={4} md={3} lg={2} className=' pt-3 pt-lg-0'>
                      <img className=' w-75 logo_w_xs logo_filter' src={gitlab} alt="Gitlab" />
                  </Col>
              </Row>
          </Container>
    </section>
  )
}

export default Airtable