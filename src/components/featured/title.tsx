import React from "react";

type TitleProps = {
  title: string
  description: string
};

export default function Title(props: TitleProps) {
  const {
    title,
    description,
  } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-heading text-center">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
