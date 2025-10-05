import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const cardClasses = cva(
  'rounded-lg shadow-sm transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-card-background border border-border-primary',
        elevated: 'bg-card-background shadow-lg hover:shadow-xl',
        outlined: 'bg-transparent border-2 border-border-primary',
      },
      padding: {
        none: 'p-0',
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'medium',
    },
  }
);

const Card = ({
  // Required parameters with defaults
  fill_background_color = "#ffffff",
  border_border = "1px solid #252627",
  border_border_radius = "12px",
  
  // Optional parameters (no defaults)
  layout_width,
  layout_height,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  paddingVariant,
  className,
  children,
  onClick,
  ...props
}) => {
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
  const cardStyles = {
    backgroundColor: fill_background_color || '#ffffff',
    border: border_border || '1px solid #252627',
    borderRadius: border_border_radius || '12px',
  };

  // Safe click handler
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={cardStyles}
      className={twMerge(
        cardClasses({ variant, padding: paddingVariant }),
        optionalClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;