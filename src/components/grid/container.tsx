import React from "react";
import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode
  className?: string
} & typeof defaultProps;

const defaultProps = {
  className: "",
};

function Container(props: ContainerProps) {
  const { children, className } = props;
  return (
    <div className={clsx("container-fluid", className)}>
      {children}
    </div>
  );
}
Container.defaultProps = defaultProps;
export default Container;
