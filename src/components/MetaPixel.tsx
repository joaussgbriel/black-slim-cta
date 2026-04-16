import { useEffect, useRef } from "react";

const MetaPixel = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const noscriptRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const js = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1500942127904006');fbq('track','PageView');`;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = js;
      document.head.appendChild(script);
      scriptRef.current = script;

      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1500942127904006&ev=PageView&noscript=1"/>`;
      document.body.appendChild(noscript);
      noscriptRef.current = noscript;

      return () => {
        if (scriptRef.current && scriptRef.current.parentNode) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }
        if (noscriptRef.current && noscriptRef.current.parentNode) {
          noscriptRef.current.parentNode.removeChild(noscriptRef.current);
        }
      };
    } catch (e) {
      // fail silently
    }
  }, []);

  return null;
};

export default MetaPixel;
