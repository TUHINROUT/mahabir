"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Photo that fills its (relative) parent. If the remote image fails to load,
 * the fallback artwork stays visible, so nothing ever looks broken.
 */
export default function Photo({
  src,
  alt,
  sizes,
  className = "",
  fallback = null,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  fallback?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {fallback && <div className="absolute inset-0">{fallback}</div>}
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${className}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
