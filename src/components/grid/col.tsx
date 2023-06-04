import clsx from "clsx";
import React from "react";

type ColProps = {
  children: React.ReactNode
  className?: string
  dataWowDelay?: string
} & typeof defaultProps;

const defaultProps = {
  className: "",
  dataWowDelay: "100ms",
};

function Col(props: ColProps) {
  const {
    children,
    className,
    dataWowDelay,
  } = props;
  return (
    <div className={clsx("col-12 col-sm-6 col-lg-3", className)} data-wow-delay={dataWowDelay}>
      {children}
    </div>
  );
}
Col.defaultProps = defaultProps;
export default Col;
