"use client";
import "./page.modul.css";
import Image from "next/image";
import networking from "/public/networking.png";
import design from "/public/design.png";
import watering from "/public/watering.png";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <>
      <div className="container">
        <section id="main_sub">
          {/*  */}
          <div className="sub_box">박스</div>
          {/* who is */}
          <h2 className="sub_name">Who is DOYI?</h2>
          {/* #소통 감각 성장 */}
          <div className="explain_me">
            <div className="one img_wrap">
              <Image
                className="networking sub_img"
                src={networking}
                alt="networking"
              />
              <h3>#소통하는</h3>
              <p className="net_exp sub_text">
                사람들과 의견을 공유하며 하나의 목표를 향해 나아가는 활동을
                좋아합니다.
              </p>
            </div>
            <div className="two img_wrap">
              <Image className="design sub_img" src={design} alt="design" />
              <h3>#감각있는</h3>
              <p className="design_exp sub_text">
                상상한 그림을 디자인하고 제작하는 작업에 큰 성취감을 느낍니다.
              </p>
            </div>
            <div className="three img_wrap">
              <Image
                className="watering sub_img"
                src={watering}
                alt="watering"
              />
              <h3>#성장하는</h3>
              <p className="watering_exp sub_text">
                부족한 부분을 채워가기 위해 반복과 복습을 습관처럼 하고
                있습니다.
              </p>
            </div>
          </div>
        </section>

        <section id="archiving">
        </section>

        <section id="projects">
        </section>

        <section id="contact">
        </section>
      </div>
    </>
  );
}
