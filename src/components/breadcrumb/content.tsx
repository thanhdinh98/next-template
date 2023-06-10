import React from "react";
import Link from "next/link";

type ContentProps = {
  currentPageTitle: string
};

export default function Context(props: ContentProps) {
  const { currentPageTitle } = props;
  return (
    <div className="breadcrumb-content text-center">
      <h2 className="page-title">{currentPageTitle}</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <Link href="/">
              <i className="icon_house_alt" />
              {" "}
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">{currentPageTitle}</li>
        </ol>
      </nav>
    </div>
  );
}
