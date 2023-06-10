import React from "react";

type MapProps = {
  src: string
};

export default function Map(props: MapProps) {
  const { src } = props;
  return (
    <div className="map-area section-padding-0-80">
      <div className="container">
        <div id="map">
          <iframe title="café planeta" src={src} allowFullScreen />
        </div>
      </div>
    </div>
  );
}
