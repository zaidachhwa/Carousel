// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//  Testimonal Data

const data = [
  {
    name: "Henry Hopkins",
    heading: "Father of two, California",
    description:
      "This platform helped me balance my family life while staying productive. It's incredibly user-friendly and has become a vital part of my daily routine. Highly recommend to anyone!",
    image:
      "https://images.unsplash.com/photo-1639747280929-e84ef392c69a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Samantha Roberts",
    heading: "Marketing Specialist, New York",
    description:
      "The app has transformed how I organize my tasks. It’s simple yet powerful, and the intuitive design makes it a pleasure to use every single day. Great for professionals!",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carlos Garcia",
    heading: "Software Developer, Texas",
    description:
      "As a developer, I’ve used many apps, but this one stands out. It’s fast, reliable, and keeps me on track with all my projects. A must-have for any developer!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Johnson",
    heading: "Graphic Designer, Seattle",
    description:
      "I love how this tool allows me to manage both personal and work tasks effortlessly. The clean UI and efficiency make it an essential part of my creative workflow.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Settings for slider [React slick]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true, // Make sure centerMode is set to true
  centerPadding: "60px", // Adjust the center padding
  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerMode: true,
        slidesToShow: 2.3,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: "40px",
      },
    },
  ],
};

gsap.registerPlugin(useGSAP);

const App = () => {
  // animation using Gsap ;
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".heading", {
      opacity: 0,
      y: -500,
      delay: 0,
      duration: 1.4,
      ease: "slow(0.7,0.7,false)",
    });

    tl.from(
      ".card",
      {
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,0.7,false)",
      },
      "s"
    );

    tl.from(
      ".card-data",
      {
        opacity: 0,
        duration: 1.3,
        y: 100,
        ease: "slow(0.7,0.7,false)",
      },
      "s"
    );

    tl.from(".slick-dots , .slick-prev , .slick-next", {
      duration: 2.3,
      opacity: 0,
      y: 200,
      ease: "slow(0.7,0.7,false)",
    });
  });

  return (
    <div className="p-3 w-full h-screen flex flex-col items-center justify-center md:gap-0 gap-10 bg-[#121212] overflow-hidden">
      {/* Headings  */}
      <div className="heading text-center w-full text-[#EAEAEA]">
        <h1 className="head mt-4 md:mt-5 text-2xl md:text-5xl font-extrabold font-ranade text-[#EC3242]">
          Our Testimonials
        </h1>
        <h3 className="sub-head text-xs md:text-lg text-center font-excon font-medium mt-1 md:mt-3">
          Here&apos;s what our happy client say about us
        </h3>
      </div>

      {/* Slider Main Div  */}
      <div className=" w-full md:w-[85%] m-auto h-full">
        <div className="mt-2 md:mt-10 slider-container w-full h-full">
          {/* Carasouel */}
          <Slider {...settings} className="">
            {data.map((data, index) => (
              // Card
              <div
                className="card w-full text-center md:w-1/2 h-full md:h-[550px] lg:h-[500px] border border-slate-500  rounded-xl flex flex-col items-center shadow-2xl "
                key={index}
              >
                <div className="card-data m-3 text-white">
                  <div className="img w-2/3  mx-auto  mt-7 rounded-2xl overflow-hidden ">
                    <img
                      src={data.image}
                      alt="img"
                      className="object-cover aspect-square"
                    />
                  </div>
                  <div className="name-heading mt-2 text-center">
                    <h2 className="font-ranade font-bold text-xl md:text-3xl text-[#EC3242]">
                      {data.name}
                    </h2>
                    <h4 className="font-excon text-xs md:text-sm mt-1 text-slate-400">
                      {data.heading}
                    </h4>
                  </div>
                  <div className="my-5 desc font-excon text-center mt-4 tracking-tighter text-sm md:text-lg">
                    {data.description}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default App;
