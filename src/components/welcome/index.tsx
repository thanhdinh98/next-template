import React from "react";

import { v4 as uuidv4 } from "uuid";

import Carousel from "@/components/owl-carousel";
import SingleSlide from "./single-slide";

const staticBgImages: string[] = [
  "/bg-img/1.jpg",
  "/bg-img/2.jpg",
];

export default function Welcome() {
  const slides = staticBgImages.map((img) => (
    <SingleSlide bgUrl={img} key={uuidv4()} />
  ));
  return (
    <section className="welcome-area">
      <Carousel className="welcome-slides">
        {slides}
      </Carousel>
    </section>
  );
}
