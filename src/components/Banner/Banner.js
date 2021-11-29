import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


import './Banner.css'
import Type from './Type/Type';

const Banner = () => {
    return (
        <div>

            <div class="context">
                <h1>I'm SM Toufiqul Hoque</h1>
                <Type></Type>
                <a href="https://drive.google.com/u/0/uc?id=1iU9MrTW8JXdPAnA0xye98OWoJ6NT_nSW&export=download"><Button variant='outline-light banner-btn'>resume</Button></a>



            </div>


            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    );
};

export default Banner;