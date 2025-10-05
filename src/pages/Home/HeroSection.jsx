import React from 'react';

// NOTE: This component is styled using Tailwind CSS classes.
// It assumes that the custom colors and fonts are defined in your tailwind.config.js.

const HeroSection = () => {
  return (
    // The main section container, similar to the background in the image.
    <section className="relative w-full min-h-screen bg-[#F5F5F5] overflow-hidden flex items-center justify-center py-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto opacity-50">
        {/* Light blue/gray shapes */}
        <div className="absolute top-10 right-20 w-40 h-40 bg-[#cdddec] rounded-full"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-[#cdddec] opacity-70"></div>
        <div className="absolute top-6 right-2 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute top-8 right-6 w-2 h-2 bg-black rounded-full"></div>

        {/* Coral/Orange shapes */}
        <div className="absolute top-60 left-10 w-40 h-40 bg-[#ff9985] rounded-full opacity-60"></div>
        <div className="absolute top-40 left-0 w-10 h-10 bg-[#ff9985] rotate-45"></div>

        {/* Small Diamond shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 border-2 border-[#ff9985] transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-10 w-4 h-4 border-2 border-[#ff9985] transform rotate-45"></div>
        <div className="absolute top-1/4 left-10 w-4 h-4 border-2 border-[#cdddec] transform rotate-45"></div>
      </div>
      
      {/* Main Content Container - Central to the image's design */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        
        {/* The Core Overlapping Design */}
        <div className="relative w-full max-w-[1200px] h-[700px] flex items-center justify-center">

          {/* Large Orange Circle (The main text background) */}
          <div className="absolute left-[5%] top-[10%] w-[600px] h-[600px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-[#ff6a49] rounded-full flex flex-col justify-center items-start p-20 shadow-2xl z-20">
            
            {/* 75% OFF Badge - positioned absolutely on the circle */}
            <div className="absolute top-[-60px] left-[-60px] z-30">
                {/* Custom-shaped badge (using a div for the 'scalloped' border look) */}
                <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] bg-white rounded-full shadow-lg flex items-center justify-center relative p-2">
                    {/* The blue border effect */}
                    <div className="absolute inset-0 rounded-full border-[6px] border-[#3984d7]"></div> 
                    {/* The scalloped edge - simplified with another circle/ring */}
                    <div className="absolute inset-[-10px] rounded-full border-[10px] border-[#3984d7] opacity-0 lg:opacity-100"></div>

                    <div className="text-center z-10 bg-white p-2 rounded-full w-full h-full flex flex-col items-center justify-center">
                        <div className="text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold text-[#3984d7] leading-none">
                            75%
                        </div>
                        <div className="text-[18px] sm:text-[24px] lg:text-[32px] font-bold text-[#3984d7] leading-none">
                            OFF
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Headline Text */}
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-extrabold text-[#ffda54] leading-[0.9] uppercase relative z-30">
              THE LAST <br/> RECOVERY METHOD <span className="text-white text-[60px] sm:text-[80px] lg:text-[110px] font-extrabold">&gt;&gt;</span>
            </h1>

            {/* Sub-headline */}
            <div className="text-[24px] sm:text-[32px] lg:text-[40px] font-normal text-white leading-tight uppercase relative z-30 mt-4">
              BY GRANIMALS
            </div>

          </div>
          
          {/* Man Image - Overlapping the circle */}
          <div className="absolute right-[5%] top-[5%] sm:right-[10%] sm:top-[0%] lg:right-0 lg:top-[-50px] w-[350px] h-[450px] sm:w-[450px] sm:h-[550px] lg:w-[550px] lg:h-[700px] z-30">
            <img 
              src="/images/img_dsc01420_2.png" 
              alt="Man pointing up" 
              className="w-full h-full object-contain object-bottom" 
            />
          </div>
          
          {/* GRANIMALS CIRCULAR LOGO - Centralized and Larger */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"> {/* Increased z-index to 50 */}
             <div className="relative w-[450px] h-[450px] flex items-center justify-center"> {/* Adjusted container size for outer border */}
                {/* Outer Circular Text (Placeholder) */}
           
            </div>
          </div>
          {/* END LOGO FIX */}

          {/* Hindi Text Bubble - positioned on the man's head */}
          <div className="absolute right-[100px] top-[10px] sm:right-[120px] sm:top-[-20px] lg:right-[150px] lg:top-[50px] z-40 bg-[#ffda54] border-2 border-black rounded-full shadow-lg p-3 sm:p-4 lg:p-6">
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-semibold text-black leading-tight whitespace-nowrap">
              सब ठीक हो जाएगा
            </p>
            {/* Pointer for the speech bubble - simplified */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
          </div>
          
          {/* Warning Box - positioned at the bottom right, overlapping the circle */}
          <div className="absolute right-[50px] bottom-[-50px] sm:right-[80px] sm:bottom-[-80px] lg:right-[100px] lg:bottom-[-100px] z-40 w-[300px] sm:w-[350px] lg:w-[400px] bg-white border-[3px] border-black rounded-xl shadow-2xl">
            {/* Warning Header */}
            <div className="bg-black text-center p-2 sm:p-3 lg:p-4 rounded-t-[8px]">
              <div className="flex items-center justify-center gap-2">
                <span className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold text-[#ffda54] uppercase tracking-wider">
                  ⚠️ WARNING
                </span>
              </div>
            </div>
            {/* Warning Text */}
            <div className="p-4 sm:p-6 lg:p-8">
              <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-manrope font-bold text-black leading-snug text-center">
                Don't skip, you might not see this video ever!
              </p>
              {/* Decorative stripes */}
              <div className="mt-4 flex justify-center space-x-1">
                <div className="w-1/4 h-2 bg-black transform skew-x-[-20deg]"></div>
                <div className="w-1/4 h-2 bg-black transform skew-x-[-20deg]"></div>
                <div className="w-1/4 h-2 bg-black transform skew-x-[-20deg]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;