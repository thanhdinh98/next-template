import React from "react";

type LiProps = {
  children: React.ReactNode
  className?: string
  id?: string
} & typeof defaultProps;

const defaultProps = {
  className: "",
  id: "",
};

function Li(props: LiProps) {
  const {
    children,
    className,
    id,
  } = props;
  return (
    <li className={className} id={id}>
      {children}
    </li>
  );
}
Li.defaultProps = defaultProps;
export default Li;
