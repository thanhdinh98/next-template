import React from "react";

import ScriptProvider from "@/components/script-provider";
import Breadcrumb from "@/components/breadcrumb";
import Gallery from "@/components/gallery";
import Featured from "@/components/featured";

export default function Product() {
  return (
    <ScriptProvider>
      <Breadcrumb currentPageTitle="Product" bgImgUrl="/bg-img/38.jpg" />
      <Gallery />
      <Featured title="Popular drinks" description="You will love it" />
    </ScriptProvider>
  );
}
