import React from "react";

import { v4 as uuidv4 } from "uuid";

import {
  Ul,
  Li,
} from "@/components/list";

import Title from "./title";
import Item from "./item";

type DropdownProps = {
  title: string
  items: string[]
  onChooseItem: (item: string)=>void
};

export default function Dropdown(props: DropdownProps) {
  const { title, items, onChooseItem } = props;
  const listItemComponent = items.map((name) => (
    <Li key={uuidv4()}><Item name={name} onClick={onChooseItem} /></Li>
  ));
  return (
    <>
      <Title title={title} />
      <Ul className="dropdown">
        {listItemComponent}
      </Ul>
    </>
  );
}
