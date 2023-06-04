import React from "react";

type ItemProps = {
  name: string
  onClick: (item: string)=>void
};

export default function Item(props:ItemProps) {
  const { name, onClick } = props;
  return (
    <a href="#" onClick={() => onClick(name)}>{name}</a>
  );
}
