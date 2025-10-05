import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const testimonialClasses = cva(
  'rounded-lg p-6 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-testimonial-background shadow-sm',
        elevated: 'bg-testimonial-background shadow-lg hover:shadow-xl',
        minimal: 'bg-transparent border border-border-primary',
      },
      size: {
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const TestimonialCard = ({
  // Required parameters with defaults
  name = "",
  testimonial = "",
  rating = 5,
  avatar_src = "",
  text_font_size = "16px",
  text_font_family = "Inter",
  text_font_weight = "400",
  text_color = "#252627",
  fill_background_color = "#f6f4f1",
  border_border_radius = "12px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  video_src,
  
  // Standard React props
  variant,
  size,
  className,
  showVideo = false,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasValidVideo = video_src && typeof video_src === 'string' && video_src?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const cardStyles = {
    backgroundColor: fill_background_color || '#f6f4f1',
    borderRadius: border_border_radius || '12px',
  };

  const textStyles = {
    fontSize: text_font_size || '16px',
    fontFamily: text_font_family || 'Inter',
    fontWeight: text_font_weight || '400',
    color: text_color || '#252627',
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-accent-yellow' : 'text-accent-light-gray'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      style={cardStyles}
      className={twMerge(
        testimonialClasses({ variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    >
      {/* Video Section */}
      {showVideo && hasValidVideo && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <video
            src={video_src}
            controls
            className="w-full h-48 object-cover"
            poster={avatar_src}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Rating */}
      <div className="flex items-center mb-3">
        {renderStars(rating)}
      </div>

      {/* Testimonial Text */}
      <blockquote className="mb-4">
        <p style={textStyles} className="italic">
          "{testimonial}"
        </p>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center">
        {avatar_src && (
          <img
            src={avatar_src}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
        )}
        <div>
          <h4 className="font-semibold text-text-primary">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;