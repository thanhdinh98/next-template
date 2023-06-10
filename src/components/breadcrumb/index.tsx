import React from "react";
import Content from "./content";

type BreadcrumbProps = {
  bgImgUrl: string
  currentPageTitle: string
};

export default function Breadcrumb(props: BreadcrumbProps) {
  const { bgImgUrl, currentPageTitle } = props;
  return (
    <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: `url(${bgImgUrl})` }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <Content currentPageTitle={currentPageTitle} />
          </div>
        </div>
      </div>
    </section>
  );
}
