"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "./VideoIcons";

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  hideControls?: boolean;
}

const intersectionObserver =
  typeof IntersectionObserver === "undefined"
    ? null
    : new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (target instanceof HTMLVideoElement) {
            if (entry.isIntersecting) {
              return target.play();
            }

            target.pause();
          }
        });
      });

export function Video(props: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { hideControls, ...videoProps } = props;

  useEffect(() => {
    const videoEl = ref.current;

    if (videoEl && intersectionObserver) {
      intersectionObserver.observe(videoEl);
      videoEl.addEventListener("play", () => setIsPlaying(true));
      videoEl.addEventListener("pause", () => setIsPlaying(false));
    }

    return () => {
      if (videoEl && intersectionObserver) {
        intersectionObserver.unobserve(videoEl);
        videoEl.removeEventListener("play", () => setIsPlaying(true));
        videoEl.removeEventListener("pause", () => setIsPlaying(false));
      }
    };
  }, []);

  const handleToggle = () => {
    const videoEl = ref.current;
    if (!videoEl) return;

    if (isPlaying) {
      return videoEl.pause();
    }

    videoEl.play();
  };

  return (
    <div className="relative">
      <video
        {...videoProps}
        width="1280"
        height="720"
        onClick={handleToggle}
        ref={ref}
        muted
        loop
        playsInline
      />
      {!hideControls && (
        <button
          className="absolute -bottom-14 -right-5 p-5 text-slate-400 hover:text-slate-200"
          onClick={handleToggle}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
      )}
    </div>
  );
}
