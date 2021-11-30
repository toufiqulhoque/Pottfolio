import React, { useState } from 'react';
import { Button, Card, CardGroup, Container, Modal } from 'react-bootstrap';
import './Project.css'

const Projects = () => {

    return (
        <div>
            <h2 id='projects' className='my-5 text-dark'>Projects</h2>
            <CardGroup className='bg-projects py-5' >
                <Card className='card mx-3 '>
                    <Card.Img className='card ' variant="top" src="https://i.imgur.com/vfe9mnM.png" />
                    <Card.Body>
                        <Card.Title>lambo-Wheels</Card.Title>
                        <Card.Text>
                            <h5>Technologies:</h5>
                            <Button variant="secondary" className='p-btn' disabled>React JS</Button>
                            <Button variant="secondary" className='p-btn' disabled>Node JS</Button>
                            <Button variant="secondary" className='p-btn' disabled>MongoDB</Button>
                            <Button variant="secondary" className='p-btn' disabled>Express</Button>
                            <Button variant="secondary" className='p-btn' disabled>CSS</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Bootstrap</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Router</Button>
                            <Button variant="secondary" className='p-btn' disabled>Firebase Authentication</Button>
                            <Button variant="secondary" className='p-btn' disabled>Heroku</Button>
                        </Card.Text>

                        <div className='d-flex justify-content-evenly'>
                            <a href="https://lamborghini-wheels.firebaseapp.com/"><Button className='p-btn' variant='secondary'>Live</Button></a>
                            <a href="https://github.com/toufiqulhoque/lamborghini-wheels"><Button className='p-btn' variant='secondary'>Git Client Link</Button></a>
                            <a href="https://github.com/toufiqulhoque/lamborghini-wheels-server"><Button className='p-btn' variant='secondary'>Git Server Link</Button></a>
                        </div>
                    </Card.Body>

                </Card>
                <Card className='card mx-3 ' >
                    <Card.Img className='card ' variant="top" src="https://i.imgur.com/fwC0eVG.png" />
                    <Card.Body>
                        <Card.Title>GOMOTO</Card.Title>
                        <Card.Text>
                            <h5>Technologies:</h5>
                            <Button variant="secondary" className='p-btn' disabled>React JS</Button>
                            <Button variant="secondary" className='p-btn' disabled>Node JS</Button>
                            <Button variant="secondary" className='p-btn' disabled>MongoDB</Button>
                            <Button variant="secondary" className='p-btn' disabled>Express</Button>
                            <Button variant="secondary" className='p-btn' disabled>CSS</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Bootstrap</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Router</Button>
                            <Button variant="secondary" className='p-btn' disabled>Firebase Authentication</Button>
                            <Button variant="secondary" className='p-btn' disabled>Heroku</Button>
                        </Card.Text>
                        <div className='d-flex justify-content-evenly'>
                            <a href="https://gomoto-1c8cf.web.app/"><Button className='p-btn' variant='secondary'>Live</Button></a>
                            <a href="https://github.com/toufiqulhoque/GOMOTO-SITE"><Button className='p-btn' variant='secondary'>Git Client Link</Button></a>
                            <a href="https://github.com/toufiqulhoque/GOMOTO-SERVER"><Button className='p-btn' variant='secondary'>Git Server Link</Button></a>
                        </div>
                    </Card.Body>

                </Card>
                <Card className='card mx-3 ' >
                    <Card.Img className='card' variant="top" src="https://i.imgur.com/dkiP6J2.png" />
                    <Card.Body>
                        <Card.Title>Medic Hope</Card.Title>
                        <Card.Text>
                            <h5>Technologies:</h5>
                            <Button variant="secondary" className='p-btn' disabled>React JS</Button>
                            <Button variant="secondary" className='p-btn' disabled>CSS</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Bootstrap</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Router</Button>
                            <Button variant="secondary" className='p-btn' disabled>HTML</Button>
                            <Button variant="secondary" className='p-btn' disabled>Firebase Authentication</Button>

                        </Card.Text>
                        <div className='d-flex justify-content-evenly'>
                            <a href="https://hope-medical-d7ae0.web.app/"><Button className='p-btn' variant='secondary'>Live</Button></a>
                            <a href="https://github.com/toufiqulhoque/Medic-HOPE"><Button className='p-btn' variant='secondary'>Git Link</Button></a>
                        </div>
                    </Card.Body>

                </Card>
                <Card className='card mx-3  '>
                    <Card.Img className='card ' variant="top" src="https://i.imgur.com/yn3AJ1b.png" />
                    <Card.Body>
                        <Card.Title>UNI</Card.Title>
                        <Card.Text>
                            <h5>Technologies:</h5>
                            <Button variant="secondary" className='p-btn' disabled>HTML</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Router</Button>
                            <Button variant="secondary" className='p-btn' disabled>JavaScript</Button>
                            <Button variant="secondary" className='p-btn' disabled>React JS</Button>
                            <Button variant="secondary" className='p-btn' disabled>CSS</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Bootstrap</Button>
                            <Button variant="secondary" className='p-btn' disabled>React-Router</Button>

                        </Card.Text>
                        <div className='d-flex justify-content-evenly'>
                            <a href="https://study-toufiq.netlify.app/"><Button className='p-btn' variant='secondary'>Live</Button></a>
                            <a href="https://github.com/toufiqulhoque/UNI-SITE"><Button className='p-btn' variant='secondary'>Git Link</Button></a>
                        </div>
                    </Card.Body>

                </Card>
            </CardGroup>


        </div>
    );
};

export default Projects;