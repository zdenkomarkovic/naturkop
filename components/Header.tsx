"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = ({ showBlog }: { showBlog: boolean }) => {
  const filteredNavList = navList.filter(
    (item) => showBlog || item.title !== "Blog"
  );

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon className="text-primary cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetContent>
            <ul>
              {filteredNavList.map((item, index) => {
                return (
                  <Link key={index} href={item.link}>
                    <motion.li
                      whileHover={{ color: "hsl(var(--primary))" }}
                      className={mobTitleStyles}
                    >
                      <SheetTrigger>{item.title}</SheetTrigger>
                    </motion.li>
                  </Link>
                );
              })}
            </ul>
          </SheetContent>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = ({ showBlog }: { showBlog: boolean }) => {
  const filteredNavList = navList.filter(
    (item) => showBlog || item.title !== "Blog"
  );

  return (
    <ul className="hidden gap-8 lg:flex  text-xl">
      {filteredNavList.map((item, index) => {
        return (
          <Link key={index} href={item.link}>
            <motion.li
              className="transition-colors underline-animation"
              whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
            >
              {item.title}
            </motion.li>
          </Link>
        );
      })}
    </ul>
  );
};

export default function Header({ showBlog }: { showBlog: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors py-1.5`}
    >
      <nav className="flex items-center justify-between px-4  max-w-[80rem] w-full text-primary font-bold">
        <Link href="/" className="">
          <Image
            src="/naturkopfooter.png"
            alt="naturkop doo"
            width={220}
            height={75}
            className="rounded-full w-[120px] md:w-[220px]"
          />
        </Link>
        <DesktopNav showBlog={showBlog} />
        {/* <Link href="tel:+38166224502">
          <motion.button
            whileHover={{
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--primary))",
            }}
            className=" items-center justify-center rounded-full text-primary border-primary border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-colors flex"
          >
            <PhoneIcon />
            <p className="">+38166 224 502</p>
          </motion.button>
        </Link> */}
        <MobileMenu showBlog={showBlog} />
      </nav>
    </header>
  );
}
