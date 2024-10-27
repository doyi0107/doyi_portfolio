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

    // useEffect
    useEffect(() => {
      const handleScroll = () => {
        if (containerRef.current) {
          const { scrollTop, scrollHeight } = containerRef.current;
          const clientHeight = containerRef.current.clientHeight; // 여기서 clientHeight를 매번 가져옵니다.

          console.log("scrollTop:", scrollTop);
          console.log("scrollHeight:", scrollHeight);
          console.log("clientHeight:", clientHeight);

          // 컨테이너의 스크롤이 하단에 도달했는지 확인
          const isScrollAtBottom = scrollTop + clientHeight >= scrollHeight;
          console.log(isScrollAtBottom);

          const isTop = scrollTop === 0;
          console.log(isTop);

          if (isScrollAtBottom) {
            setIsSpecialCase(true); // 조건을 수정하여 true로 설정
          } else if (isTop) {
            setIsSpecialCase(false); // 조건을 수정하여 false로 설정
          }
        }
      };

      const container = containerRef.current;
      // Scroll 이벤트를 window에 추가
      window.addEventListener("scroll", handleScroll);

      return () => {
        // Cleanup: Scroll 이벤트 리스너 제거
        window.removeEventListener("scroll", handleScroll);
      };
    }, [containerRef.current]);


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
