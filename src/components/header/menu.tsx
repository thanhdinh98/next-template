"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import languageHook from "@/lib/hook/language";

import {
  Ul,
  Li,
} from "@/components/list";
import Dropdown from "@/components/dropdown";

export default function Menu() {
  const { lang, dispatch } = languageHook.useLanguage();
  const pathName = usePathname();
  const onChooseItem = (item: string) => {
    dispatch(item);
  };

  return (
    <div className="classy-menu">
      <div className="classycloseIcon">
        <div className="cross-wrap">
          <span className="top" />
          <span className="bottom" />
        </div>
      </div>
      <div className="classynav">
        <Ul id="nav">
          <Li className={pathName === "/" ? "active" : ""}><Link href="/">Home</Link></Li>
          <Li className={pathName.startsWith("/product") ? "active" : ""}><Link href="/product">Product</Link></Li>
          <Li className={pathName.startsWith("/contact") ? "active" : ""}><Link href="/contact">Contact</Link></Li>
          <Li>
            <Dropdown title={lang} items={["vi", "en"]} onChooseItem={onChooseItem} />
          </Li>
        </Ul>
        {/* <div className="search-icon" data-toggle="modal" data-target="#searchModal">
          <i className="ti-search" />
        </div> */}
      </div>
    </div>
  );
}
