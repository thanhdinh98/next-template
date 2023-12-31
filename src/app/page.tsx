import React from "react";

import ScriptProvider from "@/components/script-provider";
import Welcome from "@/components/welcome";
import Gallery from "@/components/gallery";
import Featured from "@/components/featured";

export default function HomePage() {
  return (
    <ScriptProvider>
      <Welcome />
      <Gallery />
      <Featured title="Popular drinks" description="You will love it" />
    </ScriptProvider>
  );
}
