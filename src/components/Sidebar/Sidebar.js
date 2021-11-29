import React from 'react';
import { Nav } from 'react-bootstrap';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className='sidebar text-decoration-none'>
            <Nav className="flex-column ">
                <Nav.Link href="https://www.facebook.com/toufiq.hoque.18" target="_blank" className='side '><AiFillFacebook /></Nav.Link>
                <Nav.Link href="https://github.com/toufiqulhoque" target="_blank" className='side'><AiFillGithub /></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/toufiq-hoque/" target="_blank" className='side'><AiFillLinkedin /></Nav.Link>


            </Nav>
        </div>
    );
};

export default Sidebar;