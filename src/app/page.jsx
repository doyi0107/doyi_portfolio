"use client";
import "./styles/page.css";
import "./styles/media.css";
import Image from "next/image";
import nav_tree from "/public/nav_tree.png";
import Link from "next/link";
import { useState } from "react";
import Archiving from "@/components/archiving/Archiving";
import Projects from"@/components/projects/Project";
import Main_sub from "@/components/mainSub/MainSub";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [isSpecialCase, setIsSpecialCase] = useState(false);

  const handleScrollGuideClick = () => {
    if (isSpecialCase) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="nav_left_box">
        <Link href="#intro">
          <Image className="nav_tree" src={nav_tree} alt="nav_tree" />
        </Link>
        <Link href="#main_sub">
          <p className="nav_name">DOY.</p>
        </Link>
      </div>
      {/* 스크롤 유도 가이드 */}
      <div
        className={`${isSpecialCase ? "scroll_guide_up" : "scroll_guide"}`}
        onClick={handleScrollGuideClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <Main_sub />
        <Archiving />
        <Projects />
        <Contact/>
        <Footer />
      </div>
    </>
  );
}
