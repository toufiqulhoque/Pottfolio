import React from 'react';
import { Button } from 'react-bootstrap';

import './Banner.css'
import Type from './Type/Type';

const Banner = () => {
    return (
        <div>

            <div class="context">
                <h1>I'm SM Toufiqul Hoque</h1>
                <Type></Type>
                <Button variant="outline banner-btn">Resume</Button>
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