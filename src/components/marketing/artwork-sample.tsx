"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

interface ArtworkSampleProps {
  source: string;
  title?: string;
  alt?: string
  className?: string;
}


export function ArtworkSample({
  source,
  title,
  alt,
  className,
}: ArtworkSampleProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-black/40",
        className
      )}
    >
      <Image
        src={source}
        alt={alt ?? title ?? "Cyclomat artwork sample"}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {title && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="text-sm font-medium text-white">{title}</p>
        </div>
      )}
    </motion.div>
  );
}
