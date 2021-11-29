import React from "react";
import Typewriter from "typewriter-effect";
import './Type.css'

function Type() {
    return (
        <div className='type'>
            <Typewriter

                options={{
                    strings: [
                        "Front-End Developer",

                        "MERN Stack Developer",

                    ],

                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
}

export default Type;
