import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react"

export default function Footer(){
    return(
        <footer className="bg-[#361A1A] h-fit md:h-48 flex flex-col items-center pb-1">
            <div className="w-full lg:w-[75%] h-full">
                <div className="h-[70%] pt-11 flex flex-col justify-between md:flex-row md:px-6">
                    <div className="flex flex-col font-[sohne] text-[#C7C7C7] gap-1 text-center md:text-left">
                        <h2 className="text-white text-xl">
                            RockSolid Excavation
                        </h2>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-base flex flex-col md:flex-row">
                                <a href="tel:+(513)-316-4972" className="pr-3">(513)-316-4972</a>
                                <a href="mailto:drewd@rock-solid-excavation.com">drewd@rock-solid-excavation.com</a>
                            </h3>
                            <h3 className="text-base">
                                <a href="https://maps.app.goo.gl/3iCpvERdfYCb6kbK8" target="_blank">
                                8385 Park Dr, Maineville, OH 45039
                                </a>
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 font-[sohne] items-center text-xl text-white p-4 justify-center">
                        <a href="http://" className="svglarge">Our Story</a>
                        <a href="http://" className="svglarge">Contact Us</a>
                    </div>
                </div>
                <div className="md:h-[30%] border-solid border-[#591F1C] border-t-[1px] flex flex-col md:flex-row justify-between items-center md:px-5 p-5 gap-2">
                    <div className="h-[32px] w-[130px] flex md:flex-row gap-3">
                    <a href="https://www.instagram.com/rock.solid.excavation/" target="_blank">
                            <IconBrandInstagram className="h-full w-full text-[#C7C7C7] svglarge"/>
                            </a>
                    <a href="https://facebook.com/rocksolidexcavation/" target="_blank">
                            <IconBrandFacebook className="h-full w-full text-[#C7C7C7] svglarge"/>
                            </a>
                    <a href="https://www.linkedin.com/in/drew-dobyns-145146257/" target="_blank">
                            <IconBrandLinkedin className="h-full w-full text-[#C7C7C7] svglarge"/>
                            </a>
                    </div>
                    <div className="text-[#959595] flex flex-row gap-5 text-md text-center [&>*>span]:font-[sohneK] whitespace-nowrap">
                    <a href="http://"><span className="hover:text-white transition-colors duration-300">Privacy</span></a>
                    <a href="http://"><span className="hover:text-white transition-colors duration-300">Terms</span></a>
                    <a href="http://"><span className="hover:text-white transition-colors duration-300">XML Sitemap</span></a>
                    <span className="ml-6 hidden md:block">Ⓒ 2024 RockSolid Excavation LLC</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}