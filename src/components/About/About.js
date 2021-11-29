import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (

        <Container>
            <div>
                <h2 className='my-4'>About</h2>
                <Row>
                    <Col className='d-flex align-items-center justify-content-center'><img src="https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg" alt="" /></Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <div>
                            <h2>I'am SM Toufiqul Hoque</h2>
                            <p>An IT professional with extensive knowledge of ReactJS, JavaScript, Tailwind, Bootstrap, CSS, HTML, and particularly mobile responsive web development, alongside the ability to write clean, DRY, and efficient code.</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </Container>
    );
};

export default About;