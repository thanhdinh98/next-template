import React from "react";
import clsx from "clsx";

type OwlCarouselProps = {
  children: React.ReactNode
  className?: string
} & typeof defaultProps;

const defaultProps = {
  className: "",
};

function OwlCarousel(props: OwlCarouselProps) {
  const {
    children,
    className,
  } = props;
  return (
    <div className={clsx("owl-carousel", className)}>
      {children}
    </div>
  );
}
OwlCarousel.defaultProps = defaultProps;
export default OwlCarousel;
