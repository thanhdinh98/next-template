import React from "react";

type SingleGalleryItemProps = {
  imgUrl: string
  detailLink: string
};

export default function SingleGalleryItem(props: SingleGalleryItemProps) {
  const {
    imgUrl,
    detailLink,
  } = props;
  return (
    <div className="single-portfolio-content">
      <img src={imgUrl} alt="" />
      <div className="hover-content">
        <a href={detailLink} className="portfolio-img">+</a>
      </div>
    </div>
  );
}
