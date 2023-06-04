import React from "react";

import WelcomeText from "./welcome-text";

type SingleSlideProps = {
  bgUrl: string
};

export default function SingleSlide(props: SingleSlideProps) {
  const { bgUrl } = props;
  return (
    <div className="single-welcome-slide bg-img bg-overlay" style={{ backgroundImage: `url("${bgUrl}")` }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <WelcomeText />
        </div>
      </div>
    </div>
  );
}
