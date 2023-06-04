"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Row,
  Col,
} from "@/components/grid";

import Menu from "./menu";
import SingleGalleryItem from "./single-gallery-item";
import ViewMoreBtn from "./view-more-btn";

// Testing purpose
const staticProducts: {
  imgUrl: string
  detailLink: string
}[] = [
  {
    imgUrl: "/bg-img/3.jpg",
    detailLink: "/bg-img/3.jpg",
  },
  {
    imgUrl: "/bg-img/4.jpg",
    detailLink: "/bg-img/4.jpg",
  },
  {
    imgUrl: "/bg-img/5.jpg",
    detailLink: "/bg-img/5.jpg",
  },
  {
    imgUrl: "/bg-img/6.jpg",
    detailLink: "/bg-img/6.jpg",
  },
  {
    imgUrl: "/bg-img/7.jpg",
    detailLink: "/bg-img/7.jpg",
  },
  {
    imgUrl: "/bg-img/8.jpg",
    detailLink: "/bg-img/8.jpg",
  },
  {
    imgUrl: "/bg-img/9.jpg",
    detailLink: "/bg-img/9.jpg",
  },
  {
    imgUrl: "/bg-img/10.jpg",
    detailLink: "/bg-img/10.jpg",
  },
];

const staticItemStyle: {
  css: string
  dataWowDelay: string
}[] = [
  {
    css: "single_gallery_item mb-30 wow fadeInUp",
    dataWowDelay: "100ms",
  },
  {
    css: "single_gallery_item mb-30 wow fadeInUp",
    dataWowDelay: "300ms",
  },
  {
    css: "single_gallery_item mb-30 wow fadeInUp",
    dataWowDelay: "500ms",
  },
  {
    css: "single_gallery_item mb-30 wow fadeInUp",
    dataWowDelay: "700ms",
  },
];

function randomStaticItemStyle() {
  return staticItemStyle[Math.floor(Math.random() * staticItemStyle.length)];
}

export default function Gallery() {
  const listItemComponents = staticProducts.map((item) => {
    const randomStyle = randomStaticItemStyle();
    return (
      <Col className={randomStyle.css} dataWowDelay={randomStyle.dataWowDelay} key={uuidv4()}>
        <SingleGalleryItem imgUrl={item.imgUrl} detailLink={item.detailLink} />
      </Col>
    );
  });

  return (
    <div className="alime-portfolio-area section-padding-80 clearfix">
      <Container>
        <Row>
          <div className="col-12">
            <Menu />
          </div>
        </Row>
        <Row>
          {listItemComponents}
        </Row>
        <Row>
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="700ms">
            <ViewMoreBtn />
          </div>
        </Row>
      </Container>
    </div>
  );
}
