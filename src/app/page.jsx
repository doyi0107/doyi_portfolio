"use client";
import { useState, useEffect, useRef } from "react";

import Header from "../components/header/Header";
import OpeningAni from "../components/openingAni/OpeningAni";
import Archiving from "../components/archiving/Archiving";
import Projects from "../components/projects/Project";
import Main_sub from "../components/mainSub/MainSub";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

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
 
      if (containerRef.current) {
        
          const isScrollAtBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;
          const scrollTop = window.scrollY;

          // 상단으로 스크롤될 때의 조건을 설정 (예: 0 또는 원하는 값)
          const isTop = scrollTop === 0;
     

         if (isScrollAtBottom) {
            setIsSpecialCase(!isSpecialCase);
          } else if (isTop) {
            setIsSpecialCase(isSpecialCase);
          }

      }
    };
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <OpeningAni />
      {/* 스크롤 유도 가이드 */}
      <div
        className={`${isSpecialCase ? "scroll_guide_up" : "scroll_guide"}`}
        onClick={handleScrollGuideClick}
      >
        <span></span>
        <span></span>
        <span></span>
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
