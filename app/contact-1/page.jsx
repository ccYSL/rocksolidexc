import { Button } from "@/components/ui/button"
import "@/app/css/home.css"
import RevScroll from "../components/RevScroll";

const svglist = [
    <svg
      key="svg-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="white"
      className="h-4 w-4 opacity-70">
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    </svg>,
    <svg key="svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4 w-4 opacity-70">
      <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
    </svg>,
    <svg key="svg-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="h-4 w-4 opacity-70">
      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    </svg>
  ];

export default function ContactUs(){
    return(
        <>
        <section className="homeback2 h-[500px] flex flex-col items-center pt-20 lg:pt-0 lg:justify-center gap-3">
            <div className="text-3xl md:text-5xl lg:text-6xl text-white font-[sohne] text-center textshadow">
            We&apos;re Here To Help With Your Excavation Needs
            </div>
            <div className="text-2xl md:text-3xl p-1 lg:text-3xl text-[#e0e0e0] font-[sohne] textshadow text-center">
            Get any excavation or construction quote now, We have a team of professional’s ready to to get in touch now
            </div>
        </section>
        <section className="text-[#e0e0e0] font-[sohneLI] flex flex-col items-center pt-5 md:pt-16 lg:text-4xl text-2xl pb-10">
            <div className="w-[90%] xl:w-3/5">
            <span className="text-3xl md:text-4xl lg:text-5xl p-3 text-white">
                Get a Free Quote Today
            </span>
            <div className="flex items-center">
                <form className="h-fit w-full rounded-md">
                    <div className="p-5 flex flex-col gap-2 md:gap-6 text-black">
                    <InputWithLabel placeholder="Full Name" svgIcon={svglist[0]} type="text" />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                    <InputWithLabel placeholder="Phone Number" svgIcon={svglist[1]} type="tel" />
                    <InputWithLabel placeholder="Email" svgIcon={svglist[2]} type="email"  />
                    </div>
                    <textarea className="textarea textarea-bordered bg-[#3D2121] text-white font-[sohneL] text-lg w-full h-[150px]" placeholder="Comment or Message"></textarea>
                    <div className="px-11 flex justify-center">
                    <Button variant="outline" className="text-2xl w-full lg:w-2/5 h-full hover:-translate-y-1 transition-all duration-200 hover:shadow-xl"><input type="submit" value="Submit"></input></Button>
                    </div>
                    </div>
                </form>
            </div>
            </div>
            <div className="divider w-2/4 text-lg font-[sohneLI] self-center mt-0">OR</div>
            <div className=" h-[600px] w-[90%] xl:w-3/5 text-center flex flex-col gap-5">
            <span className="text-2xl lg:text-4xl p-3 text-white">
                Speak to Us Directly
            </span>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="w-full md:w-3/5 flex flex-col gap-3">
            <div className="rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-14 w-14 opacity-70 m-auto mb-2"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/></svg>
            <div className="flex flex-col gap-1">
                <span className="text-2xl">Call Us At</span>
                <a href="tel:+(513)-316-4972" className="text-2xl text-red-500 font-[sohne]">513-316-4972</a>
            </div>
            </div>
            </div>
            <div className="w-full md:w-4/5 flex flex-col gap-3">
            <div className="rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="h-14 w-14 opacity-70 m-auto mb-2"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <div className="flex flex-col gap-1 ">
                <span className="text-2xl">Email Us At</span>
                <a href="mailto:drewd@rock-solid-excavation.com" className="text-lg sm:text-xl md:text-2xl text-red-500 font-[sohne]">drewd@rock-solid-excavation.com</a>
            </div>
            </div>
            </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.8933712967882!2d-84.26579701003165!3d39.313340448936664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x433d8cfb00471aab%3A0x76a194cdd8d67cb1!2sRock%20Solid%20Excavation%20LLC!5e0!3m2!1sen!2sus!4v1726206323315!5m2!1sen!2sus" className="w-full h-4/6 rounded-xl shadow-2xl" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        {/* <div className="w-full font-[sohneLI]">
                <RevScroll />
            </div> */}
        </>
    )
}

const InputWithLabel = ({placeholder, svgIcon, type}) => {
  return(
    <label className="input input-bordered flex items-center gap-2 bg-[#3D2121] text-white font-[sohneL] w-full">
    {svgIcon}
    <input type={type} className="grow text-white" required placeholder={placeholder} />
  </label>
  )
}