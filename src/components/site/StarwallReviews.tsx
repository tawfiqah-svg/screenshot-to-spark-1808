import { useEffect, useRef } from "react";
import { reviewWidget } from "@/data/site";

declare global {
  interface Window {
    ReviewsWidget_417?: { destroy: () => void };
  }
}

export function StarwallReviews() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = container.current;
    if (!host) return;

    // Let Starwall own its children without React reconciling provider markup.
    const widget = document.createElement("div");
    widget.id = reviewWidget.containerId;
    host.appendChild(widget);

    const script = document.createElement("script");
    script.src = reviewWidget.scriptUrl;
    script.async = true;
    host.appendChild(script);

    return () => {
      window.ReviewsWidget_417?.destroy();
      script.remove();
      widget.remove();
    };
  }, []);

  return <div ref={container} className="min-h-72 w-full min-w-0" role="region" aria-label="ReFormd Google reviews" />;
}