import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'
const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xc7s4tq', 'template_b9llxph', form.current, 'user_30ZCwd9q8BuOX6fT64Rd9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div>
            {/* <h2>Contact</h2>
            <form ref={form} onSubmit={sendEmail}>


                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
            <section id="contact">
                <div class="contact-box">
                    <div class="contact-links">
                        <h2>CONTACT</h2>
                        <div class="links">
                            <div class="link">
                                <a href='https://www.linkedin.com/in/toufiq-hoque/' target="_blank" ><img className='img1' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                            </div>
                            <div class="link">
                                <a href='https://github.com/toufiqulhoque' target="_blank" ><img className='img1' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                            </div>

                        </div>
                    </div>
                    <div class="contact-form-wrapper">
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-item">
                                <input type="text" name="name" required="" />
                                <label>Name:</label>
                            </div>
                            <div class="form-item">
                                <input type="text" name="email" required="" />
                                <label>Email:</label>
                            </div>
                            <div class="form-item">
                                <textarea class="" name="message" required=""></textarea>
                                <label>Message:</label>
                            </div>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;