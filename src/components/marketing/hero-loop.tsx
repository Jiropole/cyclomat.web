"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's looping artwork: a muted, seamless 12-second clip exported from the app (SDR, no audio).
 * People who ask their system to reduce motion get the still poster frame instead of the moving clip.
 */
export function HeroLoop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const video = videoRef.current;
      if (!video) return;
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {});
      }
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={videoRef}
      className="aspect-square w-full max-w-[560px] rounded-3xl bg-black"
      src="/hero/hero-loop.mp4"
      poster="/hero/hero-poster.jpg"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label="Looping animation of glowing geometric shapes made in Cyclomat"
    />
  );
}
