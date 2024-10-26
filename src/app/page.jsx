"use client";
import "./styles/page.css";
import "./styles/media.css";
import Image from "next/image";
import talk from "/public/talk.webp";
import mail from "/public/email.webp";
import phone from "/public/phone.webp";
import instagram from "/public/instagram.webp";
import home from "/public/home.webp";
import birth from "/public/birth.webp"; 
import academic from "/public/academic.webp";
import name from "/public/name.webp";
import contact_doyi from "/public/contact_doyi.webp";
import nav_tree from "/public/nav_tree.png";
import Link from "next/link";
import { useState } from "react";
import Archiving from "@/components/archiving/Archiving";
import Projects from"@/components/projects/project";
import Main_sub from "@/components/main_sub";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [isSpecialCase, setIsSpecialCase] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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


        <section id="contact">
          {/* contact 이름 */}
          <h2 className="contact_name">Contact</h2>

          <div className="contact_wrap">
            <div className="contact_img_wrap">
              <Image
                className="contact_doyi_img"
                src={contact_doyi}
                alt="contact_doyi"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className={isHovered ? "display_none" : "contact_text_wrap"}>
              <div className="contact_text_box">
                <div className="contact_text_title">
                  <Image className="phone" src={phone} alt="phone" />
                  <h3>전화번호</h3>
                </div>
                <p>010-7277-7361</p>
                <div className="contact_text_title">
                  <Image className="mail" src={mail} alt="mail" />
                  <h3>이메일</h3>
                </div>
                <p>doyi9917@naver.com</p>
                <div className="contact_text_title">
                  <Image className="talk" src={talk} alt="talk" />
                  <h3>카카오톡</h3>
                </div>
                <Link href="https://open.kakao.com/o/sevgyHWf" target="blank">
                  <p>→Doyi9917</p>
                </Link>
                <div className="contact_text_title">
                  <Image
                    className="instagram"
                    src={instagram}
                    alt="instagram"
                  />
                  <h3>인스타그램</h3>
                </div>
                <Link
                  href="https://instagram.com/2_doooo_2?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                  target="blank"
                >
                  <p>→2_doooo_2</p>
                </Link>
              </div>
            </div>
            <div className={isHovered ? "contact_info_wrap" : "display_none"}>
              <div className="contact_text_box">
                <div className="contact_text_title">
                  <Image className="name" src={name} alt="name" />
                  <h3>이름</h3>
                </div>
                <p>이도이</p>
                <div className="contact_text_title">
                  <Image className="birth" src={birth} alt="birth" />
                  <h3>생년월일</h3>
                </div>
                <p>1999.01.07</p>
                <div className="contact_text_title">
                  <Image className="academic" src={academic} alt="academic" />
                  <h3>학력</h3>
                </div>
                <p>
                  국민대(국어국문학과(주)/
                  <br />
                  소프트웨어미디어융합전공(부))
                </p>
                <div className="contact_text_title">
                  <Image className="home" src={home} alt="home" />
                  <h3>거주지</h3>
                </div>
                <p>인천 미추홀구</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
