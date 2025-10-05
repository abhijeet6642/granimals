import React, { useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const timerClasses = cva(
  'flex items-center justify-center gap-2 font-bold',
  {
    variants: {
      variant: {
        default: 'text-text-primary',
        accent: 'text-primary-background',
        light: 'text-text-white',
      },
      size: {
        small: 'text-lg',
        medium: 'text-xl',
        large: 'text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const digitClasses = cva(
  'flex flex-col items-center justify-center rounded-md min-w-[60px] p-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-background text-primary-foreground',
        outlined: 'border-2 border-primary-background text-primary-background',
        minimal: 'bg-transparent text-inherit',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const CountdownTimer = ({
  // Required parameters with defaults
  targetDate,
  text_font_size = "24px",
  text_font_family = "Inter",
  text_font_weight = "700",
  text_color = "#ff6e4d",
  fill_background_color = "#ffffff",
  border_border_radius = "8px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  digitVariant,
  className,
  onExpire,
  showLabels = true,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()?.getTime();
      const target = new Date(targetDate)?.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (typeof onExpire === 'function') {
          onExpire();
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const timerStyles = {
    fontSize: text_font_size || '24px',
    fontFamily: text_font_family || 'Inter',
    fontWeight: text_font_weight || '700',
    color: text_color || '#ff6e4d',
  };

  const digitStyles = {
    backgroundColor: fill_background_color || '#ffffff',
    borderRadius: border_border_radius || '8px',
  };

  const formatNumber = (num) => num?.toString()?.padStart(2, '0');

  return (
    <div
      style={timerStyles}
      className={twMerge(
        timerClasses({ variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    >
      <div className={digitClasses({ variant: digitVariant })} style={digitStyles}>
        <span className="text-2xl font-bold">{formatNumber(timeLeft?.days)}</span>
        {showLabels && <span className="text-xs uppercase">Days</span>}
      </div>
      <span className="text-xl">:</span>
      <div className={digitClasses({ variant: digitVariant })} style={digitStyles}>
        <span className="text-2xl font-bold">{formatNumber(timeLeft?.hours)}</span>
        {showLabels && <span className="text-xs uppercase">Hours</span>}
      </div>
      <span className="text-xl">:</span>
      <div className={digitClasses({ variant: digitVariant })} style={digitStyles}>
        <span className="text-2xl font-bold">{formatNumber(timeLeft?.minutes)}</span>
        {showLabels && <span className="text-xs uppercase">Min</span>}
      </div>
      <span className="text-xl">:</span>
      <div className={digitClasses({ variant: digitVariant })} style={digitStyles}>
        <span className="text-2xl font-bold">{formatNumber(timeLeft?.seconds)}</span>
        {showLabels && <span className="text-xs uppercase">Sec</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;