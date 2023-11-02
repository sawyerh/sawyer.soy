// This shouldn't be necessary but this module is in canary so seems broken at the moment.
declare module "@next/third-parties/google" {
  import * as React from "react";

  type YouTubeEmbedProps = {
    height?: number;
    width?: number;
    videoid: string;
    playlabel?: string;
    params?: string;
    style?: string;
  };

  export const YouTubeEmbed: React.FC<YouTubeEmbedProps>;
}
