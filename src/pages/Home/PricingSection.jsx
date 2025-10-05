import React from 'react';

const PricingSection = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-gilmer font-extrabold text-primary-background">
              Follow & Subscribe
            </h2>
            <div className="flex items-center gap-4 sm:gap-6">
              <img 
                src="/images/img_667d9289af1e62f.svg" 
                alt="Social media" 
                className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
              />
              <img 
                src="/images/img_667d9289af1e62f_deep_orange_400.svg" 
                alt="Social media" 
                className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
              />
              <img 
                src="/images/img_667d9289af1e62f_deep_orange_400_40x40.svg" 
                alt="Social media" 
                className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
              />
            </div>
          </div>
          <h3 className="text-[36px] sm:text-[48px] lg:text-[56px] font-gilmer font-extrabold text-text-primary leading-tight">
            Watch the video till the end, before paying!
          </h3>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Video placeholder */}
          <div className="flex-1">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[570px] bg-accent-gray rounded-lg flex items-center justify-center">
              <div className="text-white text-lg sm:text-xl font-medium">Video Player</div>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="flex-1 space-y-4 sm:space-y-6">
            {/* 3 Months Plan */}
            <div className="bg-gradient-to-r from-primary-background to-secondary-background rounded-lg p-1 shadow-lg">
              <div className="bg-gradient-to-r from-primary-background to-secondary-background rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-[28px] sm:text-[36px] lg:text-[42px] font-manrope font-bold text-white mb-2 sm:mb-4">
                      3 Months@19999
                    </h4>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 sm:p-4 mb-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                        <div>
                          <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-gilmer font-semibold text-white">
                            ₹40000
                          </div>
                          <div className="flex items-center gap-2 text-[16px] sm:text-[20px] lg:text-[24px] font-manrope font-medium text-white">
                            <span>Program price</span>
                            <div className="w-[1px] h-[20px] sm:h-[24px] lg:h-[32px] bg-white"></div>
                            <span>Nutrition</span>
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-gilmer font-semibold text-white">
                              ₹55000
                            </span>
                            <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-manrope font-medium text-white">
                              *Including GST
                            </span>
                          </div>
                        </div>
                        <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-gilmer font-semibold text-white">
                          ₹15000
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    {/* Discount badge */}
                    <div className="relative">
                      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] bg-accent-yellow rounded-sm shadow-lg flex items-center justify-center">
                        <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[134px] lg:h-[134px] bg-white rounded-sm shadow-md flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-gilmer font-extrabold text-text-primary leading-tight">
                              65%<br />OFF
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-center">
                      <div className="text-[28px] sm:text-[36px] lg:text-[42px] font-poppins font-normal text-white">
                        ₹19999
                      </div>
                      <div className="relative">
                        <span className="text-[20px] sm:text-[24px] lg:text-[29px] font-gilmer font-semibold text-gray-300">
                          ₹55000
                        </span>
                        <img 
                          src="/images/img_line_60.svg" 
                          alt="" 
                          className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 w-full h-[16px] sm:h-[18px] lg:h-[22px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Months Plan */}
            <div className="bg-gradient-to-r from-primary-background to-secondary-background rounded-lg p-1 shadow-lg">
              <div className="bg-gradient-to-r from-primary-background to-secondary-background rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-[28px] sm:text-[36px] lg:text-[42px] font-manrope font-bold text-white mb-2 sm:mb-4">
                      6 Months@29999
                    </h4>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 sm:p-4 mb-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                        <div>
                          <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-gilmer font-semibold text-white">
                            ₹75000
                          </div>
                          <div className="flex items-center gap-2 text-[16px] sm:text-[20px] lg:text-[24px] font-manrope font-medium text-white">
                            <span>Program price</span>
                            <div className="w-[1px] h-[20px] sm:h-[24px] lg:h-[32px] bg-white"></div>
                            <span>Nutrition</span>
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-gilmer font-semibold text-white">
                              ₹105000
                            </span>
                            <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-manrope font-medium text-white">
                              *Including GST
                            </span>
                          </div>
                        </div>
                        <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-gilmer font-semibold text-white">
                          ₹30000
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    {/* Discount badge */}
                    <div className="relative">
                      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] bg-accent-yellow rounded-sm shadow-lg flex items-center justify-center">
                        <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[134px] lg:h-[134px] bg-white rounded-sm shadow-md flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-gilmer font-extrabold text-text-primary leading-tight">
                              75%<br />OFF
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-center">
                      <div className="text-[28px] sm:text-[36px] lg:text-[42px] font-poppins font-normal text-white">
                        ₹29999
                      </div>
                      <div className="relative">
                        <span className="text-[20px] sm:text-[24px] lg:text-[29px] font-gilmer font-semibold text-gray-300">
                          ₹105000
                        </span>
                        <img 
                          src="/images/img_line_60_gray_500.svg" 
                          alt="" 
                          className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 w-full h-[16px] sm:h-[18px] lg:h-[20px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wake up call */}
            <div className="border-2 border-primary-background rounded-[32px] p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-2 sm:gap-4">
                  <img 
                    src="/images/img_frame_2147223915.svg" 
                    alt="Phone" 
                    className="w-[32px] h-[40px] sm:w-[40px] sm:h-[50px] lg:w-[44px] lg:h-[54px]"
                  />
                  <span className="text-[28px] sm:text-[34px] lg:text-[40px] font-manrope font-semibold text-primary-background">
                    Wake up call
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-[36px] sm:text-[48px] lg:text-[56px] font-poppins font-normal text-text-primary">
                    ₹399
                  </span>
                  <div className="relative">
                    <span className="text-[28px] sm:text-[34px] lg:text-[39px] font-gilmer font-semibold text-text-accent">
                      ₹1500
                    </span>
                    <img 
                      src="/images/img_line_60_blue_400.svg" 
                      alt="" 
                      className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 w-full h-[20px] sm:h-[22px] lg:h-[26px]"
                    />
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

export default PricingSection;