import React from "react";
import Script from "next/script";

import Welcome from "@/components/welcome";
import Gallery from "@/components/gallery";
import Featured from "@/components/featured";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Gallery />
      <Featured title="Popular drinks" description="You will love it" />
      <Script src="/js/jquery.min.js" />
      <Script src="/js/popper.min.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/alime.bundle.js" />
      <Script src="/js/default-assets/active.js" />
    </>
  );
}
