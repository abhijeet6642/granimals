import React, { useState, useEffect } from 'react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time?.toString()?.padStart(2, '0');
  };

  return (
    <section className="w-full bg-primary-background py-4 sm:py-6 lg:py-8">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between gap-6 lg:gap-12">
      
      {/* Left side - Call to action */}
      <div className="flex-1 min-w-[300px] text-center lg:text-left">
        <h2 className="block text-[32px] sm:text-[44px] lg:text-[52px] font-gilmer font-extrabold text-white leading-tight break-words">
          Book your last recovery ever!
        </h2>
      </div>

      {/* Right side - Countdown timer */}
      <div className="flex-shrink-0 min-w-[280px]">
        <div className="bg-secondary-background rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="text-center mb-4">
            <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-gilmer font-extrabold text-white mb-2">
              Only 12 slots left!
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {/* Hours */}
            <div className="text-center">
              <div className="text-[48px] sm:text-[60px] lg:text-[75px] font-poppins font-normal text-accent-yellow leading-none">
                {formatTime(timeLeft?.hours)}
              </div>
              <div className="text-[16px] sm:text-[20px] lg:text-[25px] font-manrope font-normal text-white mt-1">
                Hours
              </div>
            </div>

            {/* Separator */}
            <div className="text-[48px] sm:text-[60px] lg:text-[75px] font-poppins font-bold text-accent-yellow leading-none">
              :
            </div>

            {/* Minutes */}
            <div className="text-center">
              <div className="text-[48px] sm:text-[60px] lg:text-[75px] font-poppins font-normal text-accent-yellow leading-none">
                {formatTime(timeLeft?.minutes)}
              </div>
              <div className="text-[16px] sm:text-[20px] lg:text-[25px] font-manrope font-normal text-white mt-1">
                Minutes
              </div>
            </div>

            {/* Separator */}
            <div className="text-[48px] sm:text-[60px] lg:text-[75px] font-poppins font-bold text-accent-yellow leading-none">
              :
            </div>

            {/* Seconds */}
            <div className="text-center">
              <div className="text-[48px] sm:text-[60px] lg:text-[75px] font-poppins font-normal text-accent-yellow leading-none">
                {formatTime(timeLeft?.seconds)}
              </div>
              <div className="text-[16px] sm:text-[20px] lg:text-[25px] font-manrope font-normal text-white mt-1">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default CountdownSection;