import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/images/img_screenshot_2024_04_12.png",
      name: "Aaryan Vadhan"
    },
    {
      id: 2,
      image: "/images/img_screenshot_2024_04_12_480x270.png",
      name: "Debashish"
    },
    {
      id: 3,
      image: "/images/img_screenshot_2024_04_12_1.png",
      name: "Shikant"
    },
    {
      id: 4,
      image: "/images/img_screenshot_2024_04_12_2.png",
      name: "Anuj Kharat"
    }
  ];

  const chatScreenshots = [
    {
      id: 1,
      image: "/images/img_frame_2147223652.png"
    },
    {
      id: 2,
      image: "/images/img_frame_2147223652_596x300.png"
    },
    {
      id: 3,
      image: "/images/img_image_20240323_014812_055.png",
      name: "Waseh Yousufi",
      avatar: "/images/img_ellipse_5513.png",
      background: "/images/img_.png"
    },
    {
      id: 4,
      image: "/images/img_frame_2147223652_1.png"
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[45px] font-gilmer font-extrabold text-text-primary leading-tight mb-4">
            They came, they believed,{' '}
            <span className="text-primary-background">they conquered their pain</span>
          </h2>
        </div>
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[45px] font-gilmer font-extrabold text-text-primary leading-tight mb-4">
            Hear it from the Granimals
          </h2>
        </div>

        {/* Video testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {testimonials?.map((testimonial) => (
            <div key={testimonial?.id} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={testimonial?.image}
                  alt={`${testimonial?.name} testimonial`}
                  className="w-full h-[300px] sm:h-[350px] lg:h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="/images/img_exclude.svg"
                      alt="Play"
                      className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] ml-1"
                    />
                  </div>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-70 rounded-lg px-3 py-2">
                    <p className="text-white font-manrope font-semibold text-sm sm:text-base">
                      {testimonial?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp chat screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {chatScreenshots?.map((chat) => (
            <div key={chat?.id} className="relative">
              {chat?.name ? (
                <div 
                  className="relative rounded-lg overflow-hidden shadow-lg bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${chat?.background}')` }}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <img
                        src={chat?.avatar}
                        alt={chat?.name}
                        className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px] rounded-full"
                      />
                      <span className="text-[8px] sm:text-[10px] lg:text-[11px] font-bold text-white bg-secondary-dark px-2 py-1 rounded">
                        {chat?.name}
                      </span>
                    </div>
                    <img
                      src={chat?.image}
                      alt="WhatsApp conversation"
                      className="w-full h-[400px] sm:h-[450px] lg:h-[504px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={chat?.image}
                    alt="WhatsApp conversation"
                    className="w-full h-[400px] sm:h-[450px] lg:h-[596px] object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;