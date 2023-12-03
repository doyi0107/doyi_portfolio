"use client";
import "./page.modul.css";
import Image from "next/image";
import networking from "/public/networking.png";
import design from "/public/design.png";
import watering from "/public/watering.png";
import github from "/public/github.png";
import t_story from "/public/t-story.png";
import Link from "next/link";
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
          <div className="sub_box"></div>
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
          <h2 className="archiving_name">Archiving</h2>
          <div className="arch_left_box">
            <Link
              href="https://github.com/doyi0107"
              className="github_img_wrap"
              target="blank"
            >
              <Image className="github_img" src={github} alt="github" />
            </Link>
            <div className="github_text">
              <h4>Github</h4>
              <p>💡 그동안 진행된 프로젝트 소스 코드를 저장했습니다.</p>
              <p>💡 1일 1커밋을 유지하기 위해 노력했습니다.</p>
              <p>💡 자주 쓰는 명령어를 따로 기록해두었습니다.</p>
            </div>
          </div>
          <div className="arch_right_box">
            <Link
              href="https://2-doooo-2.tistory.com/"
              target="blank"
              className="t_story_img_wrap"
            >
              <Image className="t_story_img" src={t_story} alt="t_story" />
            </Link>
            <div className="t_story_text">
              <h4>T-story</h4>
              <p>💡 프로젝트를 진행하며 습득한 정보를 기록했습니다.</p>
              <p>
                💡 프로그래머스 코딩 문제를 푼 후 정리하며 부족한 지식을
                보충했습니다.
              </p>
              <p>💡 기록한 정보들을 공유했습니다.</p>
              <p>💡 나만의 사전을 완성해 꾸준히 복습하고 있습니다.</p>
            </div>
          </div>
        </section>

        <section id="projects"></section>

        <section id="contact"></section>
      </div>
    </>
  );
}
