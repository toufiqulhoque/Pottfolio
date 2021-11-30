import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (

        <Container>
            <div>
                <h2 id='about' className='mt-4 text-dark'>About</h2>
                <Row>
                    <Col className='d-flex about align-items-center justify-content-center '><img className='img-fluid img-about' src="https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg" alt="" /></Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <div>
                            <h2>I'am SM Toufiqul Hoque</h2>
                            <h5>An IT professional with extensive knowledge of ReactJS, JavaScript, Tailwind, Bootstrap, CSS, HTML, and particularly mobile responsive web development, alongside the ability to write clean, DRY, and efficient code.</h5>
                        </div>
                    </Col>
                </Row>

            </div>
        </Container>
    );
};

export default About;