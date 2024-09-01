"use client"

import "@/app/css/header.css"
import Button from "./sub-components/Button"
import Logo from "./sub-components/Logo"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { FloatingDock } from "@/components/ui/floating-dock"
import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react"


const socials = [
    {
        title: "Instagram",
        icon: (<IconBrandInstagram className="h-full w-full text-white"/>),
        href: "https://instagram.com"
    },
    {
        title: "Facebook",
        icon: (<IconBrandFacebook className="h-full w-full text-white"/>),
        href: "https://facebook.com/rocksolidexcavation"
    },
    {
        title: "Linkedin",
        icon: (<IconBrandLinkedin className="h-full w-full text-white"/>),
        href: "https://www.linkedin.com/in/drew-dobyns-145146257/"
    }
]

export default function Header(){
    return(
    <header className="h-28 w-full flex flex-row items-center justify-center pr-7">
            <div className="mt-8 flex flex-row">
                <FloatingDock items={socials}/>
            </div>
            <Logo/>
            <NavigationMenu className="ml-auto mt-8">
                <NavigationMenuList className="gap-1">
                    <NavigationMenuItem>
                        <Button text='Home'></Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-[#b32b39] hover:bg-[#68121B] text-white hover:text-white ">
                            Services
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="flex flex-col bg-gray-200 gap-1 p-4 w-fit ">
                            <NavItem title="Cincinnati Land Excavation" />
                            <NavItem title="Residential Excavation" />
                            <NavItem title="Cincinnati Land Trenching" />
                            <NavItem title="Cincinnati Concrete Installation" />
                            <NavItem title="Gravel Driveway Services" />
                            <NavItem title="French Drains and Yard Drainage" />
                            <NavItem title="Honeysuckle Removal" />
                            <NavItem title="Driveway Culvert Installation" />
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button text='About'></Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button text='Contact Us'></Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
    </header>
    )
}
function NavItem(props){
    return(<div className="flex items-center group relative hover:font-semibold justify-center inline h-fit p-2 w-[270px] hover:bg-gray-300 text-black rounded-sm text-center transition-colors border-solid border-b-[2px] border-gray-300">
        <span className="font-3xl  whitespace-nowrap">{props.title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4 w-4 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-transform mt-[2px] fill-current text-black" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
    </div>)
}