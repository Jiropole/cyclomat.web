"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LoopVideoProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

/**
 * A muted, autoplaying, looping clip (SDR, no audio) for the hero and for demos.
 * People who ask their system to reduce motion get the still poster frame instead of the moving clip.
 */
export function LoopVideo({ src, poster, label, className }: LoopVideoProps) {
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
      className={cn("w-full rounded-3xl bg-black", className)}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label={label}
    />
  );
}
