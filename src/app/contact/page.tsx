import React from "react";

import ScriptProvider from "@/components/script-provider";
import Breadcrumb from "@/components/breadcrumb";
import Map from "@/components/map";

export default function ContactPage() {
  return (
    <ScriptProvider>
      <Breadcrumb currentPageTitle="Contact" bgImgUrl="/bg-img/38.jpg" />
      <div className="contact-area section-padding-80-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2 className="contact-title mb-30">
                Let’s Work
                {" "}
                <br />
                Together
              </h2>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info mb-30">
                <p>Email</p>
                <a href="mailto:info.deercreative@gmail.com">info.deercreative@gmail.com</a>
              </div>
              <div className="contact-info mb-30">
                <p>Call Us</p>
                <a href="#">+6511.188.888</a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info mb-30">
                <p>Visit Us</p>
                <a href="#">60-49 Road 11378 New York</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12309.440717226664!2d24.094896788114085!3d56.9484200464499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C+Latvia!5e0!3m2!1sen!2sbd!4v1550835159592" />
    </ScriptProvider>
  );
}
