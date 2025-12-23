import React from 'react';

const Contact = () => {
    return (
        <div className="container contact-page">
            <div className="contact-grid">
                <div className="contact-info">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-desc">We're here to help you with your travel needs.</p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <strong>WhatsApp</strong>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="detail-item">
                            <strong>Email</strong>
                            <span>support@transporthub.com</span>
                        </div>
                        <div className="detail-item">
                            <strong>Office</strong>
                            <span>123, Travel Lane, Metro City, India</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <h3 className="form-title">Send a Message</h3>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="How can we help?" rows="5" required className="form-input textarea"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
