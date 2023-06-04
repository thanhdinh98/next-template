import React from "react";

type SingleItemProps = {
  imgUrl: string
  name: string
};

export default function SingleItem(props: SingleItemProps) {
  const {
    imgUrl,
    name,
  } = props;
  return (
    <div className="single-instagram-item">
      <img src={imgUrl} alt="" />
      <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
        <a href="#">
          <i className="ti-instagram" aria-hidden="true" />
          <span>{name}</span>
        </a>
      </div>
    </div>
  );
}
