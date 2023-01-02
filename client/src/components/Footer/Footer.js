import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:info@example.com">info@example.com</a></li>
              <li>Phone: <a href="tel:1234567890">123-456-7890</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Other</h4>
            <ul className="list-unstyled">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
