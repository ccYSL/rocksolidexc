"use client"
import { useEffect, useState } from "react"
import gsap from "gsap-trial"
import ScrollTrigger from "gsap-trial/ScrollTrigger"

export default function StatDisplay() {
    return (
        <div className="flex xs flex-row gap-2 sm:gap-5 lg:gap-8 m-3">
            <Stat t1={20} suffix="+" t2="Services Offered" />
            <Stat t1={6} suffix="+" t2="Years of Experience" />
            <Stat t1={200} suffix="+" t2="Completed Jobs" />
            <Stat t1={100} suffix="%" t2="Customer's Satisfied" />
        </div>
    )
}

const Stat = (props) => {
    const [statVal, setStatVal] = useState(props.t1);

    useEffect(() => {
        const counterTrig = () => {
            const stepTime = 50;
            const numIncrements = 4000 / stepTime;
            const incrementAmount = props.t1 / numIncrements;
    
            let currentVal = 0;
            const intervalId = setInterval(() => {
                currentVal += incrementAmount;
                if (currentVal >= props.t1) {
                    setStatVal(props.t1);
                    clearInterval(intervalId);
                } else {
                    setStatVal(Math.round(currentVal));
                }
            }, stepTime);
            return () => clearInterval(intervalId);
        }
        gsap.to("#stHolder", {scrollTrigger: {
            onEnter: counterTrig,
            once: true
        }})

    }, [props.t1]);

    return (
        <div className="flex flex-col items-center md:items-start" id="stHolder">
            <div className="border-solid border-l-[#8E2821] border-l-4 h-fit md:text-left text-gray-200 text-3xl sm:text-4xl">
                <span className="ml-2">
                    {statVal + props.suffix}
                </span>
            </div>
            <div className="text-center md:text-left">
                <span className="lg:text-xl text-gray-200 font-[sohneLI]">
                    {props.t2}
                </span>
            </div>
        </div>
    )
}
