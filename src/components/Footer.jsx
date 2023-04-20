import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/png/logo.png'
import Btn_green from './Btn_green';

const Footer = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12} lg={5}>
                        <a href="#"><img src={logo} alt="logo" /></a>
                        <p className=' pe-5 me-5 ff_Red_Hat fw_400 fs_sm grey90'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..</p>
                    </Col>
                    <Col xs={12} lg={7}>
                        <Row>
                            <Col lg={4}>
                                <div className=' d-flex justify-content-center quick_link position-relative'>
                                    <ul className=' list-unstyled  '>
                                        <li className=' ff_Anybody fw_700 fs_lg darkgreen'>Quick link</li>
                                        <li><a className=' ff_Red_Hat fw_400 fs_sm grey90 d-inline-block pt-5' href="#">Tracking</a></li>
                                        <li><a className=' ff_Red_Hat fw_400 fs_sm grey90 pt-3 d-inline-block' href="#">Shipping</a></li>
                                        <li><a className=' ff_Red_Hat fw_400 fs_sm grey90 pt-3 d-inline-block' href="#">Locations</a></li>
                                        <li><a className=' ff_Red_Hat fw_400 fs_sm grey90 pt-3 d-inline-block' href="#">Support</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className=' d-flex justify-content-center quick_border position-relative'>
                                    <ul className=' list-unstyled'>
                                        <li className=' ff_Anybody fw_700 fs_lg darkgreen'>Contact us</li>
                                        <div className=' d-flex pt-5'>
                                            <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.259 10.9467V12.9467C14.2597 13.1324 14.2217 13.3162 14.1473 13.4863C14.0729 13.6564 13.9638 13.8091 13.827 13.9346C13.6902 14.0602 13.5287 14.1557 13.3528 14.2152C13.1769 14.2747 12.9905 14.2968 12.8056 14.2801C10.7542 14.0572 8.78362 13.3562 7.05229 12.2334C5.4415 11.2098 4.07584 9.84418 3.05229 8.2334C1.9256 6.4942 1.22445 4.51406 1.00562 2.4534C0.988959 2.26904 1.01087 2.08324 1.06995 1.90781C1.12904 1.73239 1.224 1.57119 1.3488 1.43448C1.47359 1.29777 1.62549 1.18854 1.79481 1.11375C1.96414 1.03895 2.14718 1.00024 2.33229 1.00006H4.33229C4.65582 0.99688 4.96948 1.11145 5.21479 1.32242C5.46011 1.53339 5.62034 1.82636 5.66562 2.14673C5.75003 2.78678 5.90659 3.41522 6.13229 4.02006C6.22198 4.25868 6.24139 4.51801 6.18822 4.76732C6.13505 5.01663 6.01153 5.24547 5.83229 5.42673L4.98562 6.2734C5.93466 7.94243 7.31659 9.32436 8.98562 10.2734L9.83229 9.42673C10.0135 9.24749 10.2424 9.12396 10.4917 9.07079C10.741 9.01762 11.0003 9.03704 11.239 9.12673C11.8438 9.35243 12.4722 9.50898 13.1123 9.5934C13.4361 9.63909 13.7319 9.8022 13.9433 10.0517C14.1547 10.3013 14.2671 10.6198 14.259 10.9467Z" stroke="#777E90" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </span><li><a className=' ps-3 ff_Red_Hat fw_400 fs_sm grey90' href="#">(209) 555-0104</a></li>
                                        </div>
                                        <div className=' d-flex pt-3'>
                                            <span><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.75 14.75H3.5C2.125 14.75 1 13.625 1 12.25V3.5C1 2.125 2.125 1 3.5 1H14.75C16.125 1 17.25 2.125 17.25 3.5V12.25C17.25 13.625 16.125 14.75 14.75 14.75Z" stroke="#777E90" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M1 6L9.125 11L17.25 6" stroke="#777E90" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </span>
                                            <li><a className=' ps-3 ff_Red_Hat fw_400 fs_sm grey90 ' href="#">michelle.rivera@example.com</a></li>
                                        </div>
                                        <div className=' d-flex pt-3'>
                                            <span><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.99785 0.622559C3.2083 0.622559 0.123464 3.7074 0.123463 7.49694C0.12346 14.1649 6.6103 19.2341 6.6103 19.2341C6.72103 19.3225 6.85849 19.3706 7.00015 19.3706C7.14182 19.3706 7.27928 19.3225 7.39001 19.2341C7.39001 19.2341 13.8769 14.1649 13.8768 7.49694C13.8768 3.7074 10.7874 0.622559 6.99785 0.622559ZM6.99785 1.87287C10.1118 1.87287 12.6265 4.38294 12.6265 7.49694C12.6265 12.9519 7.68702 17.2617 7.00246 17.8454C6.32117 17.2646 1.37377 12.954 1.37377 7.49694C1.37377 4.38294 3.88385 1.87287 6.99785 1.87287Z" fill="#777E90" />
                                                <path d="M6.99785 4.37354C5.27936 4.37354 3.87439 5.77852 3.87439 7.497C3.87438 9.2155 5.27935 10.6251 6.99785 10.6251C8.71634 10.6251 10.1259 9.2155 10.1259 7.497C10.1259 5.77852 8.71633 4.37354 6.99785 4.37354ZM6.99785 5.62384C8.04078 5.62384 8.87561 6.45406 8.87562 7.497C8.87562 8.53993 8.04079 9.37476 6.99785 9.37476C5.95491 9.37476 5.12469 8.53993 5.12469 7.497C5.1247 6.45406 5.95491 5.62384 6.99785 5.62384Z" fill="#777E90" />
                                            </svg>
                                            </span>
                                            <li><a className=' ff_Red_Hat fw_400 fs_sm grey90 ps-3' href="#">2715 Ash Dr. San Jose, South Dakota 83475</a></li>
                                        </div>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className=''>
                                    <ul className='list-unstyled'>
                                        <li className=' ff_Anybody fw_700 fs_lg darkgreen'>Subscribe</li>
                                        <input type="text" placeholder='Name' />
                                        <input type="text" placeholder='Email' />
                                        <Btn_green />
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer