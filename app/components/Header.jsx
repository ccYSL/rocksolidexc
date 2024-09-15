"use client";

import "@/app/css/header.css";
import { Button } from "@/components/ui/button";
import Logo from "./sub-components/Logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const navItems = [
  {
    title: "Cincinnati Land Excavation",
    href: "/cincinnati-land-excavation-1",
  },
  {
    title: "Residential Excavation",
    href: "/residential-excavation-cincinnati-ohio",
  },
  { title: "Land Grading", href: "/cincinnati-land-grading" },
  { title: "Cincinnati Land Trenching", href: "/cincinnati-land-trenching" },
  { title: "Cincinnati Concrete Installation", href: "/concrete-installation" },
  {
    title: "Gravel Driveway Services",
    href: "/cincinnati-gravel-driveway-services",
  },
  {
    title: "French Drains and Yard Drainage",
    href: "/french-drains-yard-drainage-cincinnati",
  },
  {
    title: "Honeysuckle Removal",
    href: "/cincinnati-honeysuckle-removal-cincinnati-ohio",
  },
  {
    title: "Driveway Culvert Installation",
    href: "/driveway-culvert-installation",
  },
];

const socials = [
  {
    title: "Instagram",
    icon: <IconBrandInstagram className="h-full w-full text-white" />,
    href: "https://www.instagram.com/rock.solid.excavation/",
  },
  {
    title: "Facebook",
    icon: <IconBrandFacebook className="h-full w-full text-white" />,
    href: "https://facebook.com/rocksolidexcavation/",
  },
  {
    title: "Linkedin",
    icon: <IconBrandLinkedin className="h-full w-full text-white" />,
    href: "https://www.linkedin.com/in/drew-dobyns-145146257/",
  },
];

export default function Header() {
  return (
    <>
      <header className="h-28 w-full flex flex-row items-center justify-center lg:pr-7 rsheader">
        <div className=" flex flex-row">
          <FloatingDock items={socials} />
        </div>
        <Logo />
        <NavigationMenu className="ml-auto">
          <NavigationMenuList className="gap-1 hidden lg:inline-flex">
            <NavigationMenuItem>
              <a href="/">
                <Button variant="rsred">Home</Button>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#b32b39] hover:bg-[#68121B] text-white hover:text-white">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavItems />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/about-1">
                <Button variant="rsred">About</Button>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact-1">
                <Button variant="rsred">Contact Us</Button>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="block lg:hidden p-5 dropdown dropdown-end">
          <div
            className="h-fit w-[35px] flex flex-col gap-[10px] transition-all duration-200 focus:gap-2 dropdown dropdown-end"
            tabIndex={0}
          >
            <div className="border-b-2"></div>
            <div className="border-b-2"></div>
            <div className="border-b-2"></div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white rounded-lg z-20 mt-8 w-52 p-2 shadow text-black text-lg"
          >
            <li>
              <a className="mobilenavitem" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="mobilenavitem" href="/about-1">
                About Us
              </a>
            </li>
            <li>
              <a className="mobilenavitem" href="/contact-1">
                Contact Us
              </a>
            </li>
            <li>
              <button
                className="mobilenavitem"
                onClick={() => document.getElementById("navModal").showModal()}
              >
                Services
              </button>
            </li>
          </ul>
        </div>
      </header>
      <dialog
        className="modal"
        id="navModal"
        onClick={() => document.getElementById("navModal").close()}
      >
        <div className="modal-box h-fit w-fit p-1 bg-white text-xl">
          <NavItems />
        </div>
      </dialog>
    </>
  );
}
export function NavItems({classes}) {
  return (
    <ul className={cn("flex flex-col bg-gray-200 gap-1 p-4 w-fit", classes)}>
      {navItems.map((item, index) => (
        <NavItem title={item.title} href={item.href} key={index} />
      ))}
    </ul>
  );
}
function NavItem({ title, href }) {
  return (
    <a href={href}>
      <div className="flex items-center group relative hover:font-semibold justify-center h-fit p-2 w-full hover:bg-gray-300 text-black rounded-sm text-center transition-colors border-solid border-b-[2px] border-gray-300">
        <span className="font-3xl whitespace-nowrap">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="h-4 w-4 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-transform mt-[2px] fill-current text-black"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </a>
  );
}
