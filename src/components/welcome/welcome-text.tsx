"use client";

import React from "react";
import languageHook from "@/lib/hook/language";
import { welcomeText } from "./locales";

export default function WelcomeText() {
  const { lang } = languageHook.useLanguage();
  return (
    <div className="col-12 col-lg-8 col-xl-6">
      <div className="welcome-text">
        <h2 data-animation="bounceInDown" data-delay="900ms">
          {welcomeText[lang].brandName}
          {" "}
          <br />
        </h2>
        <p data-animation="bounceInDown" data-delay="500ms">{`${welcomeText[lang].slogan}.`}</p>
        <div className="hero-btn-group" data-animation="bounceInDown" data-delay="100ms">
          <a href="#" className="btn alime-btn mb-3 mb-sm-0 mr-4">Get a Quote</a>
          <a className="hero-mail-contact" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
