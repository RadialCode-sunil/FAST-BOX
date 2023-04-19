import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/png/logo.png';
import Btn_green from './Btn_green';
import nav_overflow_img from '../assets/img/png/hero_overflow_img.png';

const Mynavbar = () => {
  return (
    <nav className='py-4 position-relative'>
      <img className=' position-absolute nav_img z_index_-1' src={nav_overflow_img} alt="Image" />
      <Container>
        <div className=' d-flex align-items-center justify-content-between'>
          <a href="#"><img className='logo_w_xs z_index_2' src={logo} alt="logo" /></a>

          <input className='d-none' type="checkbox" id="check" />
          <label htmlFor="check">
            <span className="d-flex flex-column d-lg-none">
              <span className="nav_line"></span>
              <span className="nav_line"></span>
              <span className="nav_line"></span>
            </span>
          </label>

          <ul className=' list-unstyled d-flex align-items-center mb-0 nav_left0'>
            <li className='ps-lg-4'>
              <a href="#" className=' ff_Red_Hat fw_400 fs_md grey'>Home</a>
            </li>
            <li className=' ps-lg-5 pt-4 pt-lg-0'>
              <a href="#" className=' ff_Red_Hat fw_400 fs_md grey'>Tracking</a>
            </li>
            <li className=' ps-lg-5 pt-4 pt-lg-0'>
              <a href="#" className=' ff_Red_Hat fw_400 fs_md grey'>Shipping</a>
            </li>
            <li className=' ps-lg-5 pt-4 pt-lg-0'>
              <a href="#" className=' ff_Red_Hat fw_400 fs_md grey'>Locations</a>
            </li>
            <li className=' ps-lg-5 pt-4 pt-lg-0'>
              <a href="#" className=' ff_Red_Hat fw_400 fs_md grey'>Support</a>
            </li>
            <li className='pt-4 d-lg-none'>
              <a href="#" className=' ff_Red_Hat fw_400 fs_md grey'>Signin</a>
            </li>
            <li className='pt-4 d-lg-none'>
              <Btn_green any_text='Register' />
            </li>
          </ul>

          <ul className=' list-unstyled mb-0 d-flex align-items-center'>
            <li className='pe-4'>
              <a href="#" className=' ff_Red_Hat fw_400 fs_md grey'>Signin</a>
            </li>
            <Btn_green any_text='Register' />
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Mynavbar