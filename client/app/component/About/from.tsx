import React from "react";

function From() {
  return (
    <div className="margin-y">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="containerpaddin container mx-auto"
      >
        <div className="small-text text-[#0C0C0C80] font-poppins">
          How We Do It
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          {/* Left Side - Label and Title */}
          <div className="flex flex-col">
            {/* How We Do It Label */}

            {/* Main Title */}
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-semibold font-poppins leading-tight">
              From Concept to <br className="hidden  sm:block" /> Creation
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col top-0">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] text-[#0C0C0C] font-poppins leading-relaxed">
              We believe true luxury lies in personalization. From initial
              consultation to final polish, every step of our process is guided
              by collaboration and attention to detail. We work closely with
              homeowners and interior designers to bring their ideas to life —
              transforming concepts into timeless, handcrafted creations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default From;
