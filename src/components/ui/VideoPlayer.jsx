import React, { useState, useRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const videoClasses = cva(
  'relative rounded-lg overflow-hidden transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'shadow-sm',
        elevated: 'shadow-lg hover:shadow-xl',
        minimal: 'shadow-none',
      },
      size: {
        small: 'max-w-sm',
        medium: 'max-w-md',
        large: 'max-w-lg',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const VideoPlayer = ({
  // Required parameters with defaults
  src = "",
  poster = "",
  title = "",
  border_border_radius = "12px",
  
  // Optional parameters (no defaults)
  layout_width,
  layout_height,
  padding,
  margin,
  position,
  autoplay,
  muted,
  loop,
  
  // Standard React props
  variant,
  size,
  className,
  controls = true,
  showPlayButton = true,
  onPlay,
  onPause,
  onEnded,
  ...props
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidHeight = layout_height && typeof layout_height === 'string' && layout_height?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidHeight ? `h-[${layout_height}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const videoStyles = {
    borderRadius: border_border_radius || '12px',
  };

  const handlePlay = () => {
    if (videoRef?.current) {
      if (isPlaying) {
        videoRef?.current?.pause();
      } else {
        videoRef?.current?.play();
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    if (typeof onPlay === 'function') {
      onPlay();
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    if (typeof onPause === 'function') {
      onPause();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (typeof onEnded === 'function') {
      onEnded();
    }
  };

  return (
    <div
      style={videoStyles}
      className={twMerge(
        videoClasses({ variant, size }),
        optionalClasses,
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      {...props}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
        aria-label={title || "Video player"}
      >
        Your browser does not support the video tag.
      </video>

      {/* Custom Play Button Overlay */}
      {showPlayButton && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-200">
          <button
            onClick={handlePlay}
            className="bg-primary-background hover:bg-primary-dark text-primary-foreground rounded-full p-4 transition-all duration-200 hover:scale-110"
            aria-label="Play video"
          >
            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
        </div>
      )}

      {/* Video Title Overlay */}
      {title && showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;