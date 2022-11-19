import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import client from '../../../Images/testi1.png';
import './Testimonial.css';

const Testimonial = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="testimonial-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1>Testimonials</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} lg={4} sm={12}>
                        <div className="client-box text-center" data-aos="fade-right">
                            <div className="client-img">
                                <img src={client} alt="" />
                            </div>
                            <h3 className="mt-4">Lorem, ipsum.</h3>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="review-item text-start" data-aos="zoom-out">
                            <h5>Lorem, ipsum.</h5>
                            <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, iste, blanditiis adipisci nihil exercitationem aliquam veritatis voluptatem, ea a fugiat excepturi rerum recusandae nesciunt facilis delectus qui? Iure, consectetur tempore!”</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;