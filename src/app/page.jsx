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
      console.log(containerRef.current);
      if (containerRef.current) {
        
        
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
           console.log(scrollTop);
           console.log(scrollHeight);
           console.log(clientHeight);
        const isScrollAtBottom = scrollTop + clientHeight >= scrollHeight;
        const isTop = scrollTop === 0;

        // 스크롤이 아래로 내려갔을 때
        if (isScrollAtBottom && !isSpecialCase) {
          setIsSpecialCase(true);
        }
        // 스크롤이 위로 올라갔을 때
        else if (isTop && isSpecialCase) {
          setIsSpecialCase(false);
        }
      }
    };
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [isSpecialCase]);

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
