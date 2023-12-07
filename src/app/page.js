"use client";
import "./page.modul.css";
import Image from "next/image";
import networking from "/public/networking.png";
import design from "/public/design.png";
import watering from "/public/watering.png";
import github from "/public/github.png";
import t_story from "/public/t-story.png";
import APMA from "/public/APMA_img.png";
import source_code from "/public/source-code.png";
import demo from "/public/demo.png";
import contact_doyi from "/public/contact_doyi.jpg";
import Link from "next/link";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isSpecialCase, setIsSpecialCase] = useState(false);
  const scrollSectionRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const scrollContent = scrollContentRef.current;

    const handleScroll = () => {
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

      const scrolled = window.pageYOffset;
      const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
      const notReachedBottom = parseInt(
        Math.max(
          0,
          scrollSection.getBoundingClientRect().bottom - window.innerHeight
        )
      );

      if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
        gsap.to(scrollContent, {
          x: -sectionOffset,
        });
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className={`${isSpecialCase ? "scroll_guide_up" : "scroll_guide"}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>

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

        <section id="projects" ref={scrollSectionRef}>
          <div className="horizontal_scroll_wrap">
            <div className="horizontal_scroll_content" ref={scrollContentRef}>
              <h2 className="projects_name">projects</h2>
              {/* 프로젝트들 */}
              {/* apma */}
              <div className="about_project">
                <div className="content">
                  {/* img_wrap */}
                  <div className="project_img_wrap">
                    <Image className="APMA_img" src={APMA} alt="APMA_img" />

                    <Link
                      className="source_code_link project_link"
                      href="https://github.com/APMA-project/APMA-Frontend.git"
                      target="_blank"
                    >
                      <Image
                        className="source_code"
                        src={source_code}
                        alt="source_code_img"
                      />
                      <p>#source code</p>
                    </Link>
                    <Link
                      className="demo_code_link project_link"
                      href="https://apma-project.netlify.app/"
                      target="_blank"
                    >
                      <Image className="demo" src={demo} alt="demo_img" />
                      <p>#demo</p>
                    </Link>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h3>APMA 프로젝트</h3>
                    <h4>프로젝트기간</h4>
                    <p>2021.08(1명) / 2023.08(3명)</p>
                    <h4>프론트엔드</h4>
                    <p>HTML, CSS, JAVASCRIPT, JQEURY, AJAX</p>
                    <h4>백엔드</h4>
                    <p>JAVA, SPRING, LOCALSTORAGE </p>
                    <h4>주요기능</h4>
                    <p>
                      미술관 전시 소개에 맞는 UI/UX로 디자인
                      <br />
                      CSS 반응형웹으로 제작
                      <br />
                      AJAX를 활용해 비동기처리 방식을 이용한 로그인, 회원가입
                      기능
                    </p>

                    <Link
                      href="https://statuesque-pincushion-161.notion.site/0a029e7757a446e6bc4c4faa8a72d5be?pvs=4"
                      target="_blank"
                    >
                      <button className="readme_button">
                        <span>자세히보기 ➤ README</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <span className="project_line"></span>

              <div className="about_project">
                <div className="content">
                  <div>
                    <h3>What attained our violin</h3>
                    <p>Been is in merely immune makes back peacefully.</p>
                  </div>
                </div>
              </div>

              <span className="project_line"></span>

              <div className="about_project">
                <div className="content">
                  <div>
                    <h3>What attained our violin</h3>
                    <p>Been is in merely immune makes back peacefully.</p>
                  </div>
                </div>
              </div>

              <span className="project_line"></span>

              <div className="about_project">
                {/* <Image className="img" src={one} alt="github" /> */}
                <div class="content">
                  <div>
                    <h3>What attained our violin</h3>
                    <p>Been is in merely immune makes back peacefully.</p>
                  </div>
                </div>
              </div>

              <span className="project_line"></span>

              <div className="about_project">
                {/* <Image className="img" src={one} alt="github" /> */}
                <div class="content">
                  <div>
                    <h3>What attained our violin</h3>
                    <p>Been is in merely immune makes back peacefully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          {/* contact 이름 */}
          <h2 className="contact_name">Contact</h2>

          <div className="contact_wrap">
            <div className="contact_img_wrap">
              <Image
                className="contact_doyi_img"
                src={contact_doyi}
                alt="contact_doyi"
              />
              <div className="contact_info_doyi">
                <dl>
                  <dt>이름:</dt>
                  <dd>이도이</dd>
                </dl>
                <dl>
                  <dt>생년월일:</dt>
                  <dd>1999.01.07</dd>
                </dl>
                <dl>
                  <dt>주소지:</dt>
                  <dd>인천광역시 미추홀구</dd>
                </dl>
                <dl>
                  <dt>학력:</dt>
                  <dd>
                    국민대(국어국문학과(주)/소프트웨어미디어융합전공(부))
                  </dd>
                </dl>
              </div>
            </div>
            <div className="contact_text_wrap">
              <div className="contact_text_box">
                <h3>전화번호</h3>
                <p>010-7277-7361</p>
                <h3>이메일</h3>
                <p>doyi9917@naver.com</p>
                <h3>카카오톡</h3>
                <p>doyi9917@naver.com</p>
                <h3>인스타그램</h3>
                <p>doyi9917@naver.com</p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>꽃을 피울 개발자로 성장할 도이가 궁금하다면 연라주세요</p>
        </footer>
      </div>
    </>
  );
}
