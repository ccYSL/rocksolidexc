"use client";

import "@/app/css/about.css";
import { NavItems } from "../components/Header";
import { cn } from "@/lib/utils";

const aboutData = [
  {
    id: 1,
    text1: "Building Cincinnati",
    text2: "Since 2020",
    picName: "/aboutCards/cardOne.jpg",
    fred: false,
    additionalClasses: ["bg-cover rotate-2", "lg:flex-row"],
    p: [
      "Rock Solid Excavation, founded by Cincinnati natives Noah Merten and Drew Dobyns, offers top-tier excavation services in Cincinnati.",
      "The duo met in high school in 2020, where their shared interest in construction quickly evolved into a thriving business.",
      "With a passion for excavating, land trenching, and concrete installation, Noah and Drew launched Rock Solid Excavation to provide reliable, high-quality services to the Cincinnati area.",
    ],
  },
  {
    id: 2,
    text1: "Why Choose",
    text2: "Rock Solid",
    picName: "/aboutCards/cardTwo.jpg",
    fred: true,
    additionalClasses: ["bg-cover -rotate-2", "lg:flex-row-reverse"],
    p: [
      "Since its inception, Rock Solid Excavation has become a go-to choice for those searching for  the best excavation in Cincinnati.",
      "Whether it’s site preparation, land clearing, or installing concrete foundations, Rock Solid Excavation delivers results that exceed expectations.",
      "Their commitment to handling projects of all sizes and complexities ensures that they’re prepared for any job that comes their way.",
    ],
  },
  {
    id: 3,
    text1: "Rock Solid's",
    text2: "Mission",
    picName: "/aboutCards/cardThree.jpg",
    fred: false,
    additionalClasses: ["bgsize100 rotate-2", "lg:flex-row"],
    p: [
      "At Rock Solid Excavation, our mission is simple: to deliver affordable, high-quality excavation services in Cincinnati, ensuring excellent results while staying within your budget.",
      "Driven by a commitment to community, transparency, and consistently exceeding expectations, we bring a local perspective to every project. As Cincinnati natives, Drew and Noah specialize in Cincinnati land excavation",
      "Their commitment to handling projects of all sizes and complexities ensures that they’re prepared for any job that comes their way.",
    ],
  },
  {
    id: 4,
    text1: "Load's",
    text2: "of Services",
    fred: false,
    additionalClasses: ["bgsize100 rotate-2", "lg:flex-row-reverse"],
    p: [
      "At Rock Solid Excavation, our mission is simple: to deliver affordable, high-quality excavation services in Cincinnati, ensuring excellent results while staying within your budget.",
      "Driven by a commitment to community, transparency, and consistently exceeding expectations, we bring a local perspective to every project. As Cincinnati natives, Drew and Noah specialize in Cincinnati land excavation",
      "Their commitment to handling projects of all sizes and complexities ensures that they’re prepared for any job that comes their way.",
    ],
  },
];

export default function About() {
  return (
    <>
      <header
        className="flex flex-col items-center text-4xl text-center mt-6 lg:text-5xl lg:mt-16 font-[sohneK] text-[#E9E9E9]"
        style={{ textShadow: "0 2px 2px #000" }}
      >
        Discover Our Journey and Commitment to Excellence
        <span className="text-2xl text-center font-[sohneLI] text-[#E0E0E0] p-2">
          Explore how Rock Solid Excavation has evolved into a leading name in
          excavation services,
          <br className="hidden lg:block" /> reflecting our dedication to
          quality and community impact.
        </span>
      </header>
      <section className="lg:px-2 xl:px-28 mt-9 text-white font-[sohneK] flex flex-col gap-14">
        {aboutData.map((about) => {
          return (
            <section
              key={about.id}
              className={cn("flex flex-col-reverse gap-8 justify-center items-center", about.additionalClasses[1])}
            >
              <div
                className="text-[2.50rem] drop-shadow-2xl lg:w-2/4 xl:w-2/5 p-4 xl:py-12"
                style={{ textShadow: "0 2px 2px #000" }}
              >
                <div
                  className={`${
                    about.fred ? "text-rsred" : "text-white"
                  }`}
                >
                  {about.text1}{" "}
                  <span
                    className={`${about.fred ? "text-white" : "text-rsred"}`}
                  >
                    {about.text2}
                  </span>
                </div>
                <article className="text-lg font-[SohneLI] flex flex-col gap-5 p-2">
                  {about.p.map((item, index) => (
                    <p className="text-xl" key={index}>
                      {item}
                    </p>
                  ))}
                </article>
              </div>
              {about.id == 4 ? (
                <NavItems classes="text-white rounded-xl sm:flex flex-col sm:grid grid-cols-2 grid-rows-4 justify-center grid-container bg-[#e0e0e0] gap-2 lg:mr-12" />
              ) : (
                <div
                  className={cn(
                    "w-11/12 self-center lg:w-2/4 h-[300px] md:h-[340px] lg:h-[380px] max-w-[675px] bg-center border-white border-[12px]",
                    about.additionalClasses[0]
                  )}
                  style={{ backgroundImage: `url('${about.picName}')` }}
                ></div>
              )}
            </section>
          );
        })}
      </section>
      <section className="flex justify-center my-14">
        <div className="justify-center flex flex-col md:flex-row gap-5 drop-shadow-2xl shadow-2xl rounded-xl py-4 px-4 items-center bg-red-950">
        <h1 className="text-2xl text-center md:text-4xl text-white font-[sohneK]" style={{ textShadow: "0 2px 2px #000" }} >Get a Rock Solid Quote Today</h1>
        <div className="flex flex-row sm:gap-5">
        <a href="/contact-1"><button className="h-[65px] md:h-[65px] text-lg lg:text-xl shadow-[0_4px_14px_0_rgb(112,12,21,39%)] hover:shadow-[0_8px_20px_rgba(112,12,21,40%)] hover:bg-[rgba(112,12,21,0.9)] px-8 py-2 bg-[#720D16] rounded-md text-white font-medium transition duration-200 ease-linear hover:-translate-y-1">Get An Estimate Today</button></a>
        <a href="/contact-1"><button className="hidden sm:block h-[65px] text-lg lg:text-xl shadow-[0_4px_14px_0_rgb(112,12,21,39%)] hover:shadow-[0_8px_20px_rgba(112,12,21,40%)] hover:bg-[rgba(112,12,21,0.9)] px-8 py-2 bg-[#720D16] rounded-md text-white font-medium transition duration-200 ease-linear hover:-translate-y-1">Talk To Us Directly</button></a>
        </div>
        </div>
      </section>
    </>
  );
}
