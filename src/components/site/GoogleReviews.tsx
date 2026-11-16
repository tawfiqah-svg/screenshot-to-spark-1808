import { useEffect, useRef } from "react";
import { googleReviewsEmbed } from "@/data/site";

export function GoogleReviews() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = container.current;
    if (!host) return;

    // Keep the provider's DOM outside React's child reconciliation.
    const widget = document.createElement("div");
    widget.className = "sk-ww-google-reviews";
    widget.setAttribute("data-embed-id", googleReviewsEmbed.id);
    host.appendChild(widget);

    // The loader discovers this widget after hydration and remounts it when
    // visitors return home through client-side navigation.
    const script = document.createElement("script");
    script.src = googleReviewsEmbed.scriptUrl;
    script.defer = true;
    host.appendChild(script);

    return () => {
      script.remove();
      widget.remove();
    };
  }, []);

  return <div ref={container} className="min-h-72 w-full min-w-0" role="region" aria-label="ReFormd Google reviews" />;
}