"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "250s");
      }
    }
  };
  return (
    (<div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
         <li
         className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] h-[225px]"
         style={{
           background: "linear-gradient(180deg, #ffffff, #c0c2c4",
         }}
         key={item.name}
       >
         <blockquote className="relative max-h-[160px]">
           <div className="relative z-20 flex flex-row items-center gap-3">
           <Avatar><Image className="select-none" src={item.pfpdir} width={50} height={50} alt="ass" /></Avatar>
             <span className="flex flex-row justify-between flex-1 gap-1">
               <span className=" text-sm leading-[1.6] select-none text-black font-bold">
                 {item.name}
               </span>
               <span className=" text-sm leading-[1.6] select-none text-black font-normal">
                 {item.rating}
               </span>
             </span>
           </div>
           <span
             className="relative z-20 text-sm leading-[1.6] text-black font-semibold max-h-[161px] block overflow-y-auto pt-1 scrollbar">
             {item.quote}
           </span>
         </blockquote>
       </li>
       
        ))}
      </ul>
    </div>)
  );
};
