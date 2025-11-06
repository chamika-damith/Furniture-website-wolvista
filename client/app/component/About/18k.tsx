import React from "react";

function Stats18k() {
  return (
    <div className="margin-y">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="containerpaddin container mx-auto"
      >
        <div className="flex md:flex-row justify-between items-center md:items-center gap-8 md:gap-4 max-w-6xl mx-auto">
          {/* First Stat */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[64px] font-poppins ">
              1K+
            </div>
            <div className="description text-center md:text-left font-poppins  text-[#0C0C0C80]">
              Our Products
            </div>
          </div>

          {/* Second Stat */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[64px] font-poppins ">
              100+
            </div>
            <div className="description text-center md:text-left font-poppins text-[#0C0C0C80]">
              Our <br className="block sm:hidden" /> Clients
            </div>
          </div>

          {/* Third Stat */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[64px] font-poppins ">
              95%
            </div>
            <div className="description text-center md:text-left font-poppins text-[#0C0C0C80]">
              Client Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats18k;
