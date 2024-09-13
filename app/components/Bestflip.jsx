import { FlipWords } from "@/components/ui/flip-words"

export default function Bestflip(){
    const services = ["Land Excavation", "Land Trenching", "Land Grading", "Concrete Installation"];

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white text-center textshadow p-2 lg:pb-6 h-fit lg:h-fit font-[sohne]">
                Cincinnati&apos;s 1st Choice for <br></br>
                <FlipWords words={services} className="text-4xl md:text-5xl lg:text-6xl text-white text-nowrap pt-2" duration={5000}/>
            </h1>
            <h2 className="text-center text-2xl lg:text-3xl text-white textshadow2 sm:pb-6 font-[sohneLI]">
            Digging Deep, Building Strong: Quality Excavation & Affordable Excavation<br></br> bringing the results you need.
            </h2>
            <div className="flex flex-row gap-7 p-4 md:p-0">
            <a href="/contact-1"><button className="h-[60px] md:h-[65px] mt-44 text-lg lg:text-xl 2xl:mt-4 shadow-[0_4px_14px_0_rgb(112,12,21,39%)] hover:shadow-[0_8px_20px_rgba(112,12,21,40%)] hover:bg-[rgba(112,12,21,0.9)] px-8 py-2 bg-[#720D16] rounded-md text-white font-medium transition duration-200 ease-linear hover:-translate-y-1">Get An Estimate Today</button></a>
            <a href="/contact-1"><button className="hidden sm:block h-[65px] mt-44 text-lg lg:text-xl 2xl:mt-4 shadow-[0_4px_14px_0_rgb(112,12,21,39%)] hover:shadow-[0_8px_20px_rgba(112,12,21,40%)] hover:bg-[rgba(112,12,21,0.9)] px-8 py-2 bg-[#720D16] rounded-md text-white font-medium transition duration-200 ease-linear hover:-translate-y-1">Talk To Us Directly</button></a>

            </div>
        </div>
    )
}