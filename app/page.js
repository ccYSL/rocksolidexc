import Bestflip from "./components/Bestflip";
import Header from "./components/Header";
import "@/app/css/home.css"
import RevScroll from "./components/RevScroll";

export default function Home(){
  return(<>
  <Header />
  <main>
    <div className="h-[77vh] homeback pt-16 lg:pt-32">
    <Bestflip />
    </div>
    <div className="h-[100vh] rsgrad2 border-solid border-t-[3px] border-white">
      <RevScroll />
    </div>
  </main>
  </>)
}