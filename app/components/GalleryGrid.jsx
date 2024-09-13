"use client"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Image from "next/image"
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import gsap from "gsap-trial"
import { useEffect } from "react"


export default function GalleryGrid(){
    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //   gsap.to(".raise", {y: -30, stagger: 0.1, scrollTrigger: ".raise"})
    // })
    return(
        <section className="">
            <div className="flex flex-col sm:flex-row gap-5">
                <Card src="/jobs/photo_3_2024-09-04_12-29-23.jpg" />
                <Card src="/jobs/photo_7_2024-09-04_12-29-23.jpg" />
                <Card src="/jobs/photo_4_2024-09-04_12-30-40.jpg" />
                <Card src="/jobs/photo_7_2024-09-04_12-29-47.jpg" />
                <Card src="/jobs/photo_7_2024-09-04_12-30-40.jpg" />
            </div>
        </section>
    )
}

const Card = ({src}) => {
  return(<CardContainer className="raise shadow-2xl">
    <CardBody className="h-auto rounded-xl w-fit">
        <CardItem translateZ="50">
            <Image src={src} className="rounded-xl w-[310px] sm:w-[232px]" alt="" width={232} height={336} />
        </CardItem>
    </CardBody>
</CardContainer>)
}