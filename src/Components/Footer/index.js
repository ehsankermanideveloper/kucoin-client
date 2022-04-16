import React, {Component} from 'react';
//Component
import {Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";

//css
import './footer.css';
import blog from '../../images/BLOG.svg';
import Instagram from '../../images/instagram.svg';
import Telegram from '../../images/telegram.svg';
import Twitter from '../../images/twitter.svg';

const Footer = () => {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3} className="order-1 order-md-1 order-sm-1 d-flex flex-column justify-content-center">
                            <h2 className="footer-brand">
                                ثُ اکس
                                <i className="fa fa-copyright" aria-hidden="true" />
                            </h2>
                            <ul>
                                <li><Link to="/TermsOfUse">قوانین و مقررات</Link></li>
                                <li><Link to="/Privacy">حریم خصوصی</Link></li>
                                <li><Link to="/Rick">بیانیه افشای ریسک</Link></li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="order-2 d-flex flex-column justify-content-center align-items-center">
                            <ul>
                                <li>تیم و شرکای ما</li>
                                <li><Link to="/Privacy">درباره ما</Link></li>
                                <li><Link to="/Privacy">اهداف</Link></li>
                                <li><Link to="/Privacy">نقشه راه</Link></li>
                                <li><Link to="/Privacy">شرکای ما</Link></li>
                                <li><Link to="/Privacy">همکاری با ما</Link></li>
                            </ul>
                            <p className="text-center mb-0">ما را در شبکه های اجتماعی دنبال کنید</p>
                            <ul className="social-media">
                                <li><a target="_blank" href="#"><img src={blog} width="35"/></a></li>
                                <li><a target="_blank" href="#"><img src={Telegram} width={35}/>
                                </a></li>
                                <li><a target="_blank" href="https://instagram.com/vchange.exchange/"><img src={Instagram} width={35}/>
                                </a></li>
                                <li><a target="_blank" href="https://twitter.com/VChangeExchange"><img src={Twitter} width={35}/>
                                </a></li>
                            </ul>
                        </Col>
                        <Col sm={12} md={12} lg={3} className="footer-links">
                            <ul>
                                <li>پشتیبانی</li>
                                <li><Link to="/Privacy">سوالات متداول</Link></li>
                                <li><Link to="/Rick">چگونه کار می کند</Link></li>
                                <li><Link to="/AboutUs">ارتباط با ما</Link></li>
                                <li><Link to="/Support">پشتیبانی</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
}

export default Footer;