import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content d-flex align-items-center justify-content-between">
              <div className="copywrite-text">
                <p>
                  Copyright &copy;
                  2023
                  {" "}
                  All rights reserved | This template is made with
                  {" "}
                  <i className="fa fa-heart-o" aria-hidden="true" />
                  {" "}
                  by
                  {" "}
                  <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
                </p>
              </div>
              <div className="footer-logo">
                <a href="#"><img src="img/core-img/logo2.png" alt="" /></a>
              </div>
              <div className="social-info">
                <a href="#"><i className="ti-facebook" aria-hidden="true" /></a>
                <a href="#"><i className="ti-twitter-alt" aria-hidden="true" /></a>
                <a href="#"><i className="ti-linkedin" aria-hidden="true" /></a>
                <a href="#"><i className="ti-pinterest" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
