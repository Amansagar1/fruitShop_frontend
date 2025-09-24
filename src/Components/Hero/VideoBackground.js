"use client";
import { useState, useRef, useEffect } from "react";

export default function VideoBackground({ onLoad }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch(() => setHasError(true));
    };

    const handleLoadedData = () => {
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      onLoad?.();
    };

    video.addEventListener("canplaythrough", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, [onLoad]);

  // Fallback grid (used if video fails or still loading)
  const ImageGridFallback = () => (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="w-full h-full">
          <img
            src={`/images/fallback-${(i % 6) + 1}.jpg`} 
            alt={`Fallback ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/30" /> {/* overlay for readability */}
    </div>
  );

  return (
    <div className="absolute inset-0 w-full h-full">
      {(hasError || isLoading) && <ImageGridFallback />}

      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/images/1758651345243.mp4" type="video/mp4" />
          <source src="/1758651345243.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2023/02/28/160456-802959852_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
