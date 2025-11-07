"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import From from "./from";

// gsap.registerPlugin(ScrollTrigger);

function Consult() {
  // const sectionRef = useRef<HTMLDivElement>(null);
  // const item1Ref = useRef<HTMLDivElement>(null);
  // const item2Ref = useRef<HTMLDivElement>(null);
  // const item3Ref = useRef<HTMLDivElement>(null);
  // const item4Ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (window.innerWidth < 1024) {
  //     return;
  //   }

  //   let hasCompleted = false;

  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: sectionRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       pin: true,
  //       scrub: true,
  //     });

  //     // Animate items on y-axis during scroll
  //     const animTimeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "+=800",
  //         scrub: 1,
  //         onUpdate: (self) => {
  //           if (self.progress === 1 && !hasCompleted) {
  //             hasCompleted = true;

  //             gsap.to(
  //               [
  //                 item1Ref.current,
  //                 item2Ref.current,
  //                 item3Ref.current,
  //                 item4Ref.current,
  //               ],
  //               {
  //                 y: 0,
  //                 opacity: 1,
  //                 duration: 0,
  //                 overwrite: true,
  //               }
  //             );

  //             // Kill the ScrollTrigger so it can't reverse
  //             self.kill(true);
  //           }
  //         },
  //       },
  //     });

  //     // Animate each item with different y positions
  //     animTimeline
  //       .fromTo(
  //         item1Ref.current,
  //         { y: 100, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1 }
  //       )
  //       .fromTo(
  //         item2Ref.current,
  //         { y: 150, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1 },
  //         "-=0.5"
  //       )
  //       .fromTo(
  //         item3Ref.current,
  //         { y: 150, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1 },
  //         "-=0.5"
  //       )
  //       .fromTo(
  //         item4Ref.current,
  //         { y: 150, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 1 },
  //         "-=0.5"
  //       );
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="margin-y">
      <From />
      <div className="containerpaddin container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {/* 01 - Consultation */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="flex flex-col gap-2 pt-0 md:pt-[10%]"
          >
            <div className="overflow-hidden rounded-full  group cursor-pointer ">
              <Image
                src="/image/about/concept/1.png"
                alt="Consultation"
                width={500}
                height={500}
                className="w-full h-full   transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              01
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Consultation
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              We begin with your story — your style, needs, and vision
            </div>
          </div>

          {/* 02 - Design Blueprint */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="flex flex-col gap-2"
          >
            <div className="overflow-hidden rounded-3xl  group cursor-pointer">
              <Image
                src="/image/about/concept/2.png"
                alt="Design Blueprint"
                width={500}
                height={375}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              02
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Design Blueprint
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              Our designers translate your ideas into detailed sketches and
              models.
            </div>
          </div>

          {/* 03 - Artisan Production */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="800"
            className="flex flex-col gap-2 pt-0 md:pt-[20%]"
          >
            <div className="overflow-hidden rounded-bl-4xl rounded-tr-4xl    group cursor-pointer">
              <Image
                src="/image/about/concept/3.png"
                alt="Artisan Production image"
                width={500}
                height={667}
                className="w-full h-full  transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              03
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Artisan Production
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              Each piece is handcrafted using precision tools and techniques.
            </div>
          </div>

          {/* 04 - Finishing Touches */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="flex flex-col gap-2"
          >
            <div className="overflow-hidden rounded-4xl  group cursor-pointer">
              <Image
                src="/image/about/concept/4.png"
                alt="Finishing Touches"
                width={500}
                height={500}
                className="w-full h-full  transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              04
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Finishing Touches
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              We polish, inspect, and deliver a piece designed to last for
              generations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consult;
