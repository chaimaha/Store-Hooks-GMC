import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-center">
              <h3>EXTRAS</h3>
              <a href="#">Brands</a>
              <a href="#">Gift Certificates</a>
              <a href="#">Affiliate</a>
              <a href="#">Specials</a>
              <a href="#">Site Map</a>
            </div>
            <div className="footer-center">
              <h3>INFORMATION</h3>
              <a href="#">About Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Contact Us</a>
              <a href="#">Site Map</a>
            </div>
            <div className="footer-center">
              <h3>MY ACCOUNT</h3>
              <a href="connexion.html">My Account</a>
              <a href="#">Order History</a>
              <a href="#">Wish List</a>
              <a href="#">Newsletter</a>
              <a href="#">Returns</a>
            </div>
            <div className="footer-center">
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt" />
                </span>
                1144 manouba, Tunisia
              </div>
              <div>
                <span>
                  <i className="far fa-envelope" />
                </span>
                rezguichaima2911@gmail.com
              </div>
              <div>
                <span>
                  <i className="fas fa-phone" />
                </span>
                +21651745319
              </div>
              <div>
                <span>
                  <i className="far fa-paper-plane" />
                </span>
                TUNISIA
              </div>
            </div>
          </div>
        </div>
      </footer>
      ;{/* End Footer */}
    </div>
  );
};

export default Footer;
