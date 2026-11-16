import { useEffect, useRef, useState } from "react";
import { reviewWidget } from "@/data/site";

export function TrustindexReviews() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(420);
  const [document, setDocument] = useState<string>();

  useEffect(() => {
    const receiveHeight = (event: MessageEvent) => {
      if (event.source !== frame.current?.contentWindow) return;
      if (event.data?.type !== "reformd-review-height") return;
      const nextHeight = event.data.height;
      if (typeof nextHeight === "number" && Number.isFinite(nextHeight) && nextHeight > 0) {
        setHeight(Math.ceil(nextHeight));
      }
    };
    window.addEventListener("message", receiveHeight);
    // An isolated document keeps provider controls out of React's DOM and
    // destroys their listeners, timers and globals when the frame unmounts.
    setDocument(`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><base target="_blank"><style>html,body{margin:0;padding:0;width:100%;}body{display:flow-root;}</style></head><body><script defer async src="${reviewWidget.scriptUrl}"></script><script>
      const report = () => parent.postMessage({type:'reformd-review-height',height:Math.ceil(document.body.getBoundingClientRect().height)}, '*');
      new ResizeObserver(report).observe(document.body);
      window.addEventListener('load', report);
    </script></body></html>`);
    return () => window.removeEventListener("message", receiveHeight);
  }, []);

  return (
    <div className="w-full min-w-0" role="region" aria-label="ReFormd Google reviews">
      {document && (
        <iframe
          ref={frame}
          title="ReFormd Google reviews from Trustindex"
          srcDoc={document}
          className="block w-full border-0"
          style={{ height }}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      )}
    </div>
  );
}