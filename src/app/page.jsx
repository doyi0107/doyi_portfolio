"use client";
import { useState, useEffect, useRef } from "react";

import Header from "../components/header/Header";
import OpeningAni from "../components/openingAni/OpeningAni";
import Archiving from "../components/archiving/Archiving";
import Projects from "../components/projects/Project";
import Main_sub from "../components/mainSub/MainSub";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

import Link from "next/link";
import Image from "next/image";
import arrowBottom from "/public/home/arrowBottom.png";
import arrowTop from "/public/home/arrowTop.png";
import notion from "/public/home/notion.png";
import github from "/public/home/github.png";

export default function Home() {
  const [isSpecialCase, setIsSpecialCase] = useState(false);
  const containerRef = useRef(null);

  const handleScrollGuideClick = () => {
    if (isSpecialCase) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight } = containerRef.current;
      const isScrollAtBottom = scrollTop + (window.scrollY + 1) >= scrollHeight;

      const isTop = window.scrollY;

      if (isScrollAtBottom) setIsSpecialCase(true);
      else if (isTop) setIsSpecialCase(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <OpeningAni />
      {/* 스크롤 유도 가이드 */}
      <div className="bottom_link">
        <div>
        <Link
            href="https://github.com/doyi0107"
            target="blank"
          >
            <Image
              src={github}
              alt="github"
              className="github_img"
              width={24}
              height={24}
            />    
          </Link>
        </div>
        <div>
          <Link
            href="https://statuesque-pincushion-161.notion.site/e537a1ea0dcc4ea5ad317dae06b0bd32?pvs=4"
            target="blank"
          >
            <Image
              src={notion}
              alt="notion"
              className="notion_img"
              width={24}
              height={24}
            />    
          </Link>
        </div>
        <div onClick={handleScrollGuideClick}>
          <Image
            src={isSpecialCase ? arrowTop : arrowBottom}
            alt="Scroll guide arrow"
            className="scroll_guide_img"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="container" ref={containerRef}>
        <Main_sub />
        <Archiving />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
