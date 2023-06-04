import React from "react";

type UlProps = {
  children: React.ReactNode
  id?: string
  className?: string
} & typeof defaultProps;

const defaultProps = {
  id: "",
  className: "",
};

function Ul(props: UlProps) {
  const {
    children,
    id,
    className,
  } = props;
  return (
    <ul className={className} id={id}>
      {children}
    </ul>
  );
}
Ul.defaultProps = defaultProps;
export default Ul;
