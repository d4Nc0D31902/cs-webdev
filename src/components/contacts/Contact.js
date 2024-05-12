import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="bottom-widget" className="home-section bg-white">
      <div className="contact-container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-widget wow bounceInLeft">
              <i className="fa fa-map-marker fa-4x"></i>
              <h5>Main Office</h5>
              <p>Taguig City</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-widget wow bounceInUp">
              <i className="fa fa-phone fa-4x"></i>
              <h5>Call</h5>
              <p>
                0936-0514-715 <br />
                0935-2713-954
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-widget wow bounceInRight">
              <i className="fa fa-envelope fa-4x"></i>
              <h5>Email us</h5>
              <p>capstone.solutions24@gmail.com</p>
            </div>
          </div>
          <div className="col-md-12">
            <h5>We're on social networks</h5>
            <ul className="social-network">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61559731192667">
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
