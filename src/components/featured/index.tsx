import React from "react";
import { v4 as uuidv4 } from "uuid";
import OwlCarousel from "@/components/owl-carousel";

import SingleItem from "./single-item";
import Title from "./title";

type FeaturedProps = {
  title: string
  description: string
};

const staticItems: {
  imgUrl: string
  name: string
}[] = [
  {
    imgUrl: "bg-img/11.jpg",
    name: "Alime_photographer",
  },
  {
    imgUrl: "bg-img/12.jpg",
    name: "Alime_photographer",
  },
  {
    imgUrl: "bg-img/13.jpg",
    name: "Alime_photographer",
  },
  {
    imgUrl: "bg-img/14.jpg",
    name: "Alime_photographer",
  },
  {
    imgUrl: "bg-img/15.jpg",
    name: "Alime_photographer",
  },
  {
    imgUrl: "bg-img/16.jpg",
    name: "Alime_photographer",
  },
];

export default function Featured(props: FeaturedProps) {
  const {
    title,
    description,
  } = props;
  const featuredItems = staticItems.map((item) => (
    <SingleItem imgUrl={item.imgUrl} name={item.name} key={uuidv4()} />
  ));
  return (
    <section className="follow-area clearfix">
      <Title title={title} description={description} />
      <OwlCarousel className="instragram-feed-area">
        {featuredItems}
      </OwlCarousel>
    </section>
  );
}
