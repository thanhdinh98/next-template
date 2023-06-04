import React from "react";

type TitleProps = {
  title: string
};

export default function Title(props: TitleProps) {
  const { title } = props;
  return (
    <a href="#">{title}</a>
  );
}
