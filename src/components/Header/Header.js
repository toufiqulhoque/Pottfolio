import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Container>
            <div className='header mt-4'>
                <NavLink
                    className='text-decoration-none text-white'
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "green"
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    className='text-decoration-none ms-3 text-white '
                    to="/about"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    className='text-decoration-none ms-3 text-white '
                    to="/projects"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Projects
                </NavLink>
                <NavLink
                    className='text-decoration-none ms-3 text-white '
                    to="/contact"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >
                    Contact
                </NavLink>

            </div>
        </Container>
    );
};

export default Header;