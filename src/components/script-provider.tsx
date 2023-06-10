/* eslint-disable react/jsx-no-useless-fragment */

"use client";

import React, { useEffect } from "react";

import consts from "@/lib/consts";

type ScriptProviderProps = {
  children: React.ReactNode
};

export default function ScriptProvider(props: ScriptProviderProps) {
  const { children } = props;
  useEffect(() => {
    let scriptEls:HTMLScriptElement[] = [];
    scriptEls = consts.scripts.defaultScripts.map((url) => {
      const script = document.createElement("script");

      script.src = url;
      script.defer = true;

      document.body.appendChild(script);
      return script;
    });
    return () => {
      scriptEls.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
}
