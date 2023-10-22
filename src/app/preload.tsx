"use client";

import ReactDOM from "react-dom";

/**
 * At the time, Next.js didn't have a way to set resource hints using its Metadata type.
 */
export function PreloadResources() {
  ReactDOM.preload("/alabama-hills.webm", { as: "video", type: "video/webm" });
  ReactDOM.preload("/alabama-hills.mp4", { as: "video", type: "video/mp4" });

  return null;
}
