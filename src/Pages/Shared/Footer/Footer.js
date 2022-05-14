import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container text-content">
        <div className="row">
          {/*colum 1*/}
          <div className="col-md-3 col-sm-6">
            <h4>TECHWORLD</h4>
            <ul className="list-unstyled">
              <li>Designer</li>
              <li>Interactions</li>
              <li>CMS</li>
              <li>E-commerce</li>
              <li>Accessibility</li>
              <li>Templates</li>
              <li>learning</li>
            </ul>
          </div>
          {/*colum 2*/}
          <div className="col-md-3 col-sm-6">
            <h4>COMPANY</h4>
            <ul className="list-unstyled">
              <li>Careers</li>
              <li>Accessibility Statement</li>
              <li>Merch Store</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          {/*colum 3*/}
          <div className="col-md-3 col-sm-6">
            <h4>HELP</h4>
            <ul className="list-unstyled">
              <li>About US</li>
              <li>Advertise </li>
              <li>Website Templates</li>
              <li>Bootstrap Templates</li>
              <li>Support Forum</li>
              <li>Contact us</li>
            </ul>
          </div>
          {/*colum 4*/}
          <div className="col-md-3 col-sm-6">
            <h4>FOLLOW</h4>
            <ul className="list-unstyled font-awsome ">
              <li>
                <i className="fas fa-home"></i> Dhaka, Dhanmondi
              </li>
              <li>
                <i className="fas fa-home"></i> Cumilla, BrahmonPara{" "}
              </li>
              <li>
                <i className="fas fa-phone"></i> +8801854639569
              </li>
              <li>
                <i className="fas fa-question-circle"></i> +94515427
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook"></i>
                </a>{" "}
                Facebook
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shamimbhuiyan1/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in "></i>
                </a>{" "}
                Linkedin
              </li>
            </ul>
          </div>
        </div>
        {/*Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy;{new Date().getFullYear()} Webflow, Inc. All rights reserved
            shamimbhuiyan1508@gmail.com
            <hr />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
