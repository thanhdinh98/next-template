import { useEffect } from "react";

function useSccripts(urls: string[]) {
  useEffect(() => {
    let scriptEls:HTMLScriptElement[] = [];
    scriptEls = urls.map((url) => {
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
  }, [urls]);
}

export default {
  useSccripts,
};
