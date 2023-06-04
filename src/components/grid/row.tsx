import React from "react";
import clsx from "clsx";

type RowProps = {
  children: React.ReactNode
  className?: string
} & typeof defaultProps;

const defaultProps = {
  className: "",
};

function Row(props: RowProps) {
  const { children, className } = props;
  return (
    <div className={clsx("row", className)}>
      {children}
    </div>
  );
}
Row.defaultProps = defaultProps;
export default Row;
