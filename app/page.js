import Bestflip from "./components/Bestflip";
import Header from "./components/Header";
import "@/app/css/home.css"
import RevScroll from "./components/RevScroll";
import Gstext from "./components/Gstext";
import statDisplay from "./components/StatDisplay";
import StatDisplay from "./components/StatDisplay";
import GalleryGrid from "./components/GalleryGrid";
import Qualities from "./components/Qualities";

export default function Home(){
  return(<>
  <Header />
  <main>
    <div className="h-[77vh] homeback pt-16 lg:pt-16 pb-5">
    <Bestflip />
    </div>
    <div className="h-fit bg-[#492323] border-solid border-t-[3px] border-white">
      <RevScroll />
    </div>
    <section className="h-fit bg-[#361A1A] flex flex-col gap-8 items-center">
    <Gstext text="From Start to Finish, We're Rock Solid"/>
    <StatDisplay />
    <GalleryGrid />
    <div className="flex justify-center w-full m-5">
      <h2 className="text-gray-200 w-3/4 text-xl text-center font-[SohneLI]">
      No company does well without seeing their customers vision and executing on that.<br></br>
      We have been in business for a long time and plan on continuing. Now let us show what sets us apart
      </h2>
    </div>
    <Qualities />
    </section>
  </main>
  </>)
}