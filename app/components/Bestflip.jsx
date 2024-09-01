import { FlipWords } from "@/components/ui/flip-words"

export default function Bestflip(){
    const services = ["Excavation", "Land Trenching", "Land Grading", "Concrete Installation"];

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-7xl text-white text-center textshadow p-4 lg:p-2 h-[224px] lg:h-fit">
                Cincinnati's 1st Choice for <br></br>
                <FlipWords words={services} className="text-white" duration={5000}/>
            </h1>
            <h2 className="text-center text-2xl lg:text-3xl text-white textshadow2 pt-3 px-1">
            Digging Deep, Building Strong: Quality Excavation & Affordable Excavation bringing the results you need.
            </h2>
            <button className="h-[50px] mt-4 shadow-[0_4px_14px_0_rgb(112,12,21,39%)] hover:shadow-[0_8px_20px_rgba(112,12,21,40%)] hover:bg-[rgba(112,12,21,0.9)] px-8 py-2 bg-[#720D16] rounded-md text-white font-medium transition duration-200 ease-linear hover:-translate-y-1">Get An Estimate Today</button>
        </div>
    )
}