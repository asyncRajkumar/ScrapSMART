import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="https://cdn-imgs.dora.run/design/UwlHHIbMa6YMMFjGWWO2k4.png/w/4096/h/4096/format/webp?"
            alt="ScraPro Logo"
            className="footer-logo"
          />
          <p className="footer-copyright">
            &copy; {currentYear} ScraPro, Inc. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-sections">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="/guides">Guides</a></li>
                <li><a href="/tools">Tools</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/support">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="/terms">Terms of Use</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/sustainability">Sustainability</a></li>
                <li><a href="/accessibility">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;