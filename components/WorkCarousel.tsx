// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-creative";

// // import required modules
// import { EffectCreative } from "swiper";

// import NextImage from "next/image";
// import EWFImage from "../public/ewf.png";
// import DougImage from "../public/Doug.png";

// export default function WorkCarousel() {
//   return (
//     <>
//       <Swiper
//         grabCursor={true}
//         effect={"creative"}
//         loop={true}
//         creativeEffect={{
//           prev: {
//             shadow: true,
//             translate: ["-20%", 0, -100],
//           },
//           next: {
//             translate: ["100%", 0, 0],
//           },
//         }}
//         modules={[EffectCreative]}
//         className="mySwiper h-[40rem] max-w-screen-xl 2xl:max-w-[1920px]"
//       >
//         <SwiperSlide className="bg-[#213A30] flex items-center px-28  leading-none">
//           <div className="flex items-center h-72 justify-center w-full max-w-5xl mx-auto">
//             <div className="flex-1 h-full flex flex-col ">
//               <div className="flex-1">
//                 <h2 className="text-8xl mb-2">
//                   Exquisite
//                   <br /> Wood Floors
//                 </h2>
//                 <ul className="flex gap-4 mb-10">
//                   <li className="flex">
//                     Web Design + <br /> Development{" "}
//                     <span className="self-center ml-4">&#9632;</span>
//                   </li>
//                   <li className="flex items-center">
//                     Branding <span className="self-center ml-4">&#9632;</span>{" "}
//                   </li>
//                   <li className="flex items-center">Marketing</li>
//                 </ul>
//               </div>
//               <button className="text-2xl border-white border-2 border-solid p-2 w-max">
//                 Visit Site
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="bg-[#24374D] flex items-center px-28 leading-none">
//           <div className="flex items-center h-72 justify-center w-full max-w-5xl   mx-auto">
//             <div className="flex-1 h-full flex flex-col  ">
//               <div className="flex-1">
//                 <h2 className="text-8xl mb-2">Doug&apos;ll Do It</h2>
//                 <ul className="flex gap-4 mb-10">
//                   <li className="flex">
//                     Web Design + <br /> Development{" "}
//                     <span className="self-center ml-4">&#9632;</span>
//                   </li>
//                   <li className="flex items-center">Branding</li>
//                 </ul>
//               </div>
//               <button className="text-2xl border-white border-2 border-solid p-2 w-max">
//                 Visit Site
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
