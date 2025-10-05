import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

const pricingClasses = cva(
  'rounded-lg p-6 transition-all duration-200 relative',
  {
    variants: {
      variant: {
        default: 'bg-card-background border border-border-primary',
        featured: 'bg-card-background border-2 border-primary-background shadow-lg scale-105',
        minimal: 'bg-transparent border border-border-accent-gray',
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

const PricingCard = ({
  // Required parameters with defaults
  title = "",
  price = "",
  originalPrice = "",
  duration = "",
  features = [],
  buttonText = "Choose Plan",
  text_font_size = "16px",
  text_font_family = "Inter",
  text_color = "#252627",
  fill_background_color = "#ffffff",
  border_border_radius = "12px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  discount,
  isPopular,
  
  // Standard React props
  variant,
  size,
  className,
  onButtonClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasDiscount = discount && typeof discount === 'string' && discount?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const cardStyles = {
    backgroundColor: fill_background_color || '#ffffff',
    borderRadius: border_border_radius || '12px',
  };

  const textStyles = {
    fontSize: text_font_size || '16px',
    fontFamily: text_font_family || 'Inter',
    color: text_color || '#252627',
  };

  // Safe click handler
  const handleButtonClick = () => {
    if (typeof onButtonClick === 'function') {
      onButtonClick();
    }
  };

  return (
    <div
      style={cardStyles}
      className={twMerge(
        pricingClasses({ variant: isPopular ? 'featured' : variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-background text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute -top-2 -right-2">
          <span className="bg-accent-yellow text-accent-yellow-foreground px-3 py-1 rounded-full text-sm font-bold">
            {discount}
          </span>
        </div>
      )}
      {/* Plan Title */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold text-primary-background">{price}</span>
          {originalPrice && (
            <span className="text-lg text-accent-gray line-through">{originalPrice}</span>
          )}
        </div>
        {duration && (
          <p className="text-text-secondary mt-1">{duration}</p>
        )}
      </div>
      {/* Features List */}
      <ul className="space-y-3 mb-6">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-secondary-background mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span style={textStyles}>{feature}</span>
          </li>
        ))}
      </ul>
      {/* CTA Button */}
      <Button
        text={buttonText}
        onClick={handleButtonClick}
        className="w-full"
        variant={isPopular ? 'primary' : 'outline'}
        layout_width=""
        padding=""
        margin=""
        position=""
        size="medium"
      />
    </div>
  );
};

export default PricingCard;