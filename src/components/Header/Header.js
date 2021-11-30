import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css'

const Header = () => {
    return (
        <Container>
            <div className='header mt-4'>
                <Link
                    className='pointer text-decoration-none text-white'
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                >
                    Home
                </Link>

                <Link
                    className=' pointer text-decoration-none ms-3 text-white '
                    to="about"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    About
                </Link>
                <Link
                    className=' pointer text-decoration-none ms-3 text-white '
                    to="projects"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Projects
                </Link>
                <Link
                    className=' pointer text-decoration-none ms-3 text-white '
                    to="contact"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Contact
                </Link>

            </div>
        </Container>
    );
};

export default Header;