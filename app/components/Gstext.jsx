"use client"

import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import gsap from "gsap-trial";
import { useEffect } from "react";

export default function Gstext(props){
    gsap.registerPlugin(SplitText, ScrollTrigger);
    useEffect(() => {
        const gtext = new SplitText(".gstext", {type:"words"})
        gsap.fromTo(gtext.words, {
            rotateZ: 20,
            fontSize: 5,
        }, {rotateZ: 0, stagger: 0.1, fontSize: 49, duration: 0.4, scrollTrigger: ".gstext"});
    })
    return(
        <div className="flex justify-center h-fit pt-5">
            <h1 className="text-5xl gstext font-[sohneLI] text-center relative text-gray-200 textshadow2 overflow-x-hidden overflow-y-hidden pb-3">{props.text}</h1>
        </div>
    )
}