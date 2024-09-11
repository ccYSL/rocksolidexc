import Bestflip from "./components/Bestflip";
import "@/app/css/home.css"
import RevScroll from "./components/RevScroll";
import Gstext from "./components/Gstext";
import StatDisplay from "./components/StatDisplay";
import GalleryGrid from "./components/GalleryGrid";
import Qualities from "./components/Qualities";

export default function Home(){
  return(<>
  <main>
    <div className="h-[77vh] homeback pt-9 lg:pt-16 pb-5">
    <Bestflip />
    </div>
    <div className="h-fit bg-[#492323] border-solid border-t-[3px] border-white">
      <RevScroll />
    </div>
    <section className="h-fit bg-[#492323] flex flex-col gap-9 items-center drop-shadow-xl">
    <Gstext text="From Start to Finish, We're Rock Solid"/>
    <StatDisplay />
    <GalleryGrid />
    <div className="flex justify-center items-center flex-col w-full gap-4 ">
      <button className="h-[55px] lg:text-xl shadow-[0_4px_14px_0_rgb(112,12,21,39%)] hover:shadow-[0_8px_20px_rgba(112,12,21,40%)] hover:bg-[rgba(112,12,21,0.9)] px-10 py-2 bg-[#720D16] rounded-md text-white font-medium transition duration-200 ease-linear hover:-translate-y-1">Contact Us</button>
      <h2 className="text-gray-200 w-3/4 text-xl xl:text-2xl text-center font-[SohneLI]">
      No company does well without seeing their customers vision and executing on that.<br></br>
      We have been in business for a long time and plan on continuing. Now let us show what sets us apart
      </h2>
    </div>
    <Qualities />
    </section>
  </main>
  </>)
}