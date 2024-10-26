"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Project.module.css";
import "@/src/app/styles/page.css"
import "@/src/app/styles/media.css";
import play_javascript from "/public/play_javascript_img.png";
import starting_plant from "/public/starting_plant_img.jpeg";
import Doyi_portfolio_img from "/public/Doyi_portfolio_img.webp";
import shallender_img from "/public/shallender_img.webp";
import APMA from "/public/APMA_IMG.png";
import { useEffect, useRef, useState } from "react";

export default function project() {
  const [isSpecialCase, setIsSpecialCase] = useState(false);
  const scrollSectionRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [hoverFeature, setHoverFeature] = useState("");

  const handleLinkClick = () => {
    window.location.reload();
  };

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
        setIsSpecialCase(true);
      } else if (isTop) {
        setIsSpecialCase(false);
      }
      // scrollSection.offsetTop는 스크롤 섹션의 상단 위치를 나타내는 고정된 값,
      //scrolled는 현재 사용자가 스크롤한 위치를 동적으로 나타내는 값.
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
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className={styles.projects} ref={scrollSectionRef}>
      <div className={styles.horizontal_scroll_wrap}>
        <div
          className={styles.horizontal_scroll_content}
          ref={scrollContentRef}
        >
          <h2 className={styles.projects_name}>projects</h2>
          {/* 프로젝트들 */} {/* Doyi_portfolio */}
          <div className={styles.about_project}>
            {/* Doyi_portfolio Project */}
            <div className={styles.content}>
              {/* img_wrap */}
              <div className={styles.content_left}>
                <div className={styles.project_title_wrap}>
                  <h3>Doyi_portfolio</h3>
                </div>
                <div
                  className={`${styles.project_img_wrap} ${styles.doyi_portfolio_wrap}`}
                >
                  <Image
                    placeholder="blur"
                    className={styles.project_main_img}
                    src={Doyi_portfolio_img}
                    alt="Doyi_portfolio_img"
                  />
                  {/* Hover features */}
                  {hoverFeature === "feature1" && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ SEO(검색엔진 최적화)를 위한 SSR(서버 사이드 렌더링)을
                        가능하게 한 Next.js를 이용 <br />→ SSR은 서버에서 미리
                        웹사이트의 페이지를 렌더링하여 사용자나 검색엔진
                        크롤러에게 제공
                      </div>
                    </div>
                  )}
                  {hoverFeature === "feature2" && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                    >
                      <div>
                        ▷ 가로 스크롤바 : 사용자의 세로 스크롤 위치에 따라
                        gsap.to 메소드를 사용하여 scrollContent의 x 위치를
                        동적으로 조정 <br />
                        <br />▷ 스크롤 유도 가이드 : 스크롤 위치에 따른 상태
                        관리를 함으로써 사용자가 페이지의 맨 아래에
                        도달했는지(isScrollAtBottom) 및 페이지의 맨 상단에
                        있는지(isTop)를 감지
                      </div>
                    </div>
                  )}
                  {hoverFeature === "feature3" && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                    >
                      <div>
                        ▷ Webpack을 사용한 css 축소 (mini-css-extract-plugin
                        패키지 설치) <br />
                        ▷ Coverage 이용해 사용하지 않는 css 코드 삭제 <br />
                        ▷ CSS Minifier 이용해 css 중복 코드 개선 <br />
                        ▷ 이미지 파일 AVIF 및 WebP로 교체하기 <br />▷ LightHouse
                        성능 평가 Performance(0 → 90) 100% 향상
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.project_link_wrap}>
             
                    <Link
                      className={`${styles.source_code_link} ${styles.project_link}`}
                      href="https://github.com/doyi0107/doyi_portfolio.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>#source code</p>
                    </Link>
              
              
                    <Link
                      className={`${styles.demo_code_link} ${styles.project_link}`}
                      onClick={handleLinkClick}
                      href="https://doyi-portfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>#demo</p>
                    </Link>
             
                </div>
              </div>

              {/* text_wrap */}
              <div className={styles.project_text_wrap}>
                <h4>프로젝트 소개</h4>
                <p>열정을 담은 프로젝트들과 개발을 좋아하는 나를 소개하는 웹</p>
                <h4>프로젝트기간</h4>
                <p>2023.12 - 2024.01 (1명)</p>
                <h4>프론트엔드</h4>
                <p>NEXT.JS, SASS, GSAP, VERCEL</p>
                <h4>주요 기능(마우스를 올려주세요)</h4>
                <div
                  className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                ></div>
                <div
                  onMouseEnter={() => setHoverFeature("feature1")}
                  onMouseLeave={() => setHoverFeature("")}
                  className={`${styles.project_core_features01} ${styles.project_core_features}`}
                >
                  <p>▷ 사용자 웹 접근성 향상</p>
                </div>
                <div
                  onMouseEnter={() => setHoverFeature("feature2")}
                  onMouseLeave={() => setHoverFeature("")}
                  className={`${styles.project_core_features02} ${styles.project_core_features}`}
                >
                  <p>▷ 사용자 인터랙션 강화</p>
                </div>
              </div>

              <div
                className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
              >
                <div
                  onMouseEnter={() => setHoverFeature("feature3")}
                  onMouseLeave={() => setHoverFeature("")}
                  className={`${styles.project_core_features03} ${styles.project_core_features}`}
                >
                  <p>▷ 성능 최적화</p>
                </div>
              </div>

              <a
                href="https://2-doooo-2.tistory.com/135"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.readme_button}>
                  <span>📘README</span>
                </button>
              </a>
            </div>

            </div>
            <span className={styles.project_line}></span>
            {/* Play_javascript */}
            <div className={styles.about_project}>
              <div className={styles.content}>
                {/* img_wrap */}
                <div className={styles.content_left}>
                  <div className={styles.project_title_wrap}>
                    <h3>Play_javascript</h3>
                  </div>
                  <div className={styles.project_img_wrap}>
                    <Image
                      placeholder="blur"
                      className={styles.project_main_img}
                      src={play_javascript}
                      alt="play_javascript"
                    />
                    {hoverFeature === "feature1" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷ 큐(queue)를 사용하여 너비 우선 탐색 알고리즘(BFS)을
                          구현. 이를 통해 한 셀에서 시작하여 점차적으로 모든
                          인접한 셀들을 탐색하고 공개
                          <br />
                          ▷모서리 셀의 이웃 지뢰 개수 표시 오류 개선 - 아키텍처
                          및 설계 결정 분석
                          <br /> ▷ 초기 설계 단계에서 모서리 셀이나 경계
                          셀에서의 이웃 지뢰 개수 계산 로직을 충분히 고려하지
                          않아 발생
                          <br /> ▷ 경계 조건에 대한 명확한 정의가 필요, 모서리나
                          가장자리에 위치한 셀은 3개 또는 5개의 이웃만을 가질 수
                          있음
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature2" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷&lt;canvas&gt; 요소 사용, 캔버스의 2D 그래픽
                          컨텍스트를 이용해 공, 패들, 블록 등의 요소를 그리는
                          함수를 작성
                          <br /> <br /> ▷ 렌더링 최적화 : requestAnimationFrame
                          를 사용하여 게임의 렌더링을 브라우저의 리페인트 주기에
                          맞추며, 불필요한 렌더링을 줄이고 애니메이션의
                          부드러움을 최적화함
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature3" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷Fisher-Yates 알고리즘을 사용한 카드 셔플링
                          <br /> <br /> ▷ Fisher-Yates 알고리즘 모든 순열이
                          등장할 확률이 동일하게 만듦으로써 공정성을 제공, 선형
                          시간 복잡도(O(n))를 가지고 있어서 배열의 크기와
                          상관없이 효율성이 좋다는 장점을 가지고 있음
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature4" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷사용자 경험과 접근성 고려 : 다크 모드와 라이트 모드
                          간의 전환을 위한 UI/UX 디자인 고려, 사용자가 콘텐츠를
                          쉽게 구분하고 읽을 수 있도록 함
                          <br /> <br /> ▷ 사용자가 직접 모드를 전환할 수 있는
                          옵션 제공 : 명확하고 접근하기 쉬운 토글 버튼 구현
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.project_link_wrap}>
                    <Link
                      className={`${styles.source_code_link} ${styles.project_link}`}
                      href="https://github.com/doyi0107/play_javascript"
                      target="_blank"
                    >
                      <p>#source code</p>
                    </Link>
                    <Link
                      className={`${styles.demo_code_link} ${styles.project_link}`}
                      href="https://play-javascript.netlify.app/"
                      target="_blank"
                    >
                      <p>#demo</p>
                    </Link>
                  </div>
                </div>
                {/* text_wrap */}
                <div className={styles.project_text_wrap}>
                  <h4>프로젝트 소개</h4>
                  <p>
                    다양한 자바스크립트 기능을 바탕으로 만든 웹
                    <br />
                  </p>
                  <h4>프로젝트기간</h4>
                  <p>2024.04 (1명)</p>
                  <h4>프론트엔드</h4>
                  <p>HTML, CSS, JAVASCRIPT, CANVAS</p>
                  <h4>백엔드</h4>
                  <p>API</p>
                  <h4>주요 기능(마우스를 올려주세요)</h4>
                  <div
                    className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onMouseEnter={() => setHoverFeature("feature1")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features01} ${styles.project_core_features}`}
                    >
                      <p>▷지뢰 찾기 게임</p>
                    </div>
                    <div
                      onMouseEnter={() => setHoverFeature("feature2")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features02} ${styles.project_core_features}`}
                    >
                      <p>▷브레이크 아웃 게임</p>
                    </div>
                    <div
                      onMouseEnter={() => setHoverFeature("feature3")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features03} ${styles.project_core_features}`}
                    >
                      <p>▷카드 매치 게임</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onMouseEnter={() => setHoverFeature("feature4")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features04} ${styles.project_core_features}`}
                    >
                      <p>▷다크 모드 구현</p>
                    </div>
                  </div>

                  <Link
                    href="https://github.com/doyi0107/play_javascript"
                    target="_blank"
                  >
                    <button className={styles.readme_button}>
                      <span>📘README</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <span className={styles.project_line}></span>

            {/* Starting_plant Project */}
            <div className={styles.about_project}>
              <div className={styles.content}>
                {/* img_wrap */}
                <div className={styles.content_left}>
                  <div className={styles.project_title_wrap}>
                    <h3>Starting_plant</h3>
                  </div>
                  <div className={styles.project_img_wrap}>
                    <Image
                      placeholder="blur"
                      className={`${styles.project_main_img} ${styles.starting_plant_img}`}
                      src={starting_plant}
                      alt="starting_plant"
                    />
                    {/* Hover features */}
                    {hoverFeature === "feature1" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷ 사용자의 선호도와 환경을 분석하여 맞춤형 식물을 추천{" "}
                          <br />▷ React의 상태 관리와 동적 API 쿼리 생성을 통해
                          사용자 경험을 극대화
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature2" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                      >
                        <div>
                          ▷ axios의 인터셉터 기능을 활용하여 로딩 시간을
                          단축시키고, 에러 핸들링을 통해 사용자에게 명확한
                          피드백을 제공함 <br />▷ React Router의 useNavigate,
                          useLocation 훅을 활용하여 검색 기능의 성능과 사용성
                          향상
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature3" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                      >
                        <div>
                          ▷ Google OAuth를 통한 소셜 로그인 구현과 useAuth
                          커스텀 훅을 통한 사용자 정보 관리 <br />▷ 로그인
                          상태에 따른 UI 변화와 사용자 경험 개선에 초점
                        </div>
                      </div>
                    )}
                    {/* Add more features here as needed */}
                  </div>
                  <div className={styles.project_link_wrap}>
                    <a
                      className={`${styles.source_code_link} ${styles.project_link}`}
                      href="https://github.com/doyi0107/starting_plant"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>#source code</p>
                    </a>
                    <a
                      className={`${styles.demo_code_link} ${styles.project_link}`}
                      onClick={handleLinkClick}
                      href="https://starting-plant-nu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>#demo</p>
                    </a>
                  </div>
                </div>

                {/* text_wrap */}
                <div className={styles.project_text_wrap}>
                  <h4>프로젝트 소개</h4>
                  <p>
                    사용자 설문 조사를 통해 맞춤 식물을 추천해 주는 웹 - 식물을
                    키우고 싶지만 <br />
                    방대한 정보 속에서 어떤 식물이 자신에게 맞는지 몰라 불편함을
                    느꼈던 경험을 바탕으로 제작
                  </p>
                  <h4>프로젝트기간</h4>
                  <p>2024.04 ~ 진행 중</p>
                  <h4>프론트엔드</h4>
                  <p>REACT, GSAP, VERCEL</p>
                  <h4>주요 기능(마우스를 올려주세요)</h4>
                  <div
                    className={`${styles.project_core_feature_chapter} ${styles.project_core_feature_chapter1}`}
                  >
                    <div
                      onMouseEnter={() => setHoverFeature("feature1")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features01} ${styles.project_core_features}`}
                    >
                      <p>▷ 사용자 맞춤 추천</p>
                    </div>
                    <div
                      onMouseEnter={() => setHoverFeature("feature2")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features02} ${styles.project_core_features}`}
                    >
                      <p>▷ 빠른 응답 및 피드백</p>
                    </div>
                    <div
                      onMouseEnter={() => setHoverFeature("feature3")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features03} ${styles.project_core_features}`}
                    >
                      <p>▷ 소셜 로그인</p>
                    </div>
                  </div>

                  <a
                    href="https://2-doooo-2.tistory.com/135"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.readme_button}>
                      <span>📘README</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <span className={styles.project_line}></span>

            {/* Play_javascript */}
            <div className={styles.about_project}>
              <div className={styles.content}>
                {/* img_wrap */}
                <div className={styles.content_left}>
                  <div className={styles.project_title_wrap}>
                    <h3>Play_javascript</h3>
                  </div>
                  <div className={styles.project_img_wrap}>
                    <Image
                      placeholder="blur"
                      className={styles.project_main_img}
                      src={play_javascript}
                      alt="play_javascript"
                    />
                    {hoverFeature === "feature1" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷ 큐(queue)를 사용하여 너비 우선 탐색 알고리즘(BFS)을
                          구현. 이를 통해 한 셀에서 시작하여 점차적으로 모든
                          인접한 셀들을 탐색하고 공개
                          <br />
                          ▷모서리 셀의 이웃 지뢰 개수 표시 오류 개선 - 아키텍처
                          및 설계 결정 분석
                          <br /> ▷ 초기 설계 단계에서 모서리 셀이나 경계
                          셀에서의 이웃 지뢰 개수 계산 로직을 충분히 고려하지
                          않아 발생
                          <br /> ▷ 경계 조건에 대한 명확한 정의가 필요, 모서리나
                          가장자리에 위치한 셀은 3개 또는 5개의 이웃만을 가질 수
                          있음
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature2" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷&lt;canvas&gt; 요소 사용, 캔버스의 2D 그래픽
                          컨텍스트를 이용해 공, 패들, 블록 등의 요소를 그리는
                          함수를 작성
                          <br /> <br /> ▷ 렌더링 최적화 : requestAnimationFrame
                          를 사용하여 게임의 렌더링을 브라우저의 리페인트 주기에
                          맞추며, 불필요한 렌더링을 줄이고 애니메이션의
                          부드러움을 최적화함
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature3" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷Fisher-Yates 알고리즘을 사용한 카드 셔플링
                          <br /> <br /> ▷ Fisher-Yates 알고리즘 모든 순열이
                          등장할 확률이 동일하게 만듦으로써 공정성을 제공, 선형
                          시간 복잡도(O(n))를 가지고 있어서 배열의 크기와
                          상관없이 효율성이 좋다는 장점을 가지고 있음
                        </div>
                      </div>
                    )}
                    {hoverFeature === "feature4" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷사용자 경험과 접근성 고려 : 다크 모드와 라이트 모드
                          간의 전환을 위한 UI/UX 디자인 고려, 사용자가 콘텐츠를
                          쉽게 구분하고 읽을 수 있도록 함
                          <br /> <br /> ▷ 사용자가 직접 모드를 전환할 수 있는
                          옵션 제공 : 명확하고 접근하기 쉬운 토글 버튼 구현
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.project_link_wrap}>
                    <Link
                      className={`${styles.source_code_link} ${styles.project_link}`}
                      href="https://github.com/doyi0107/play_javascript"
                      target="_blank"
                    >
                      <p>#source code</p>
                    </Link>
                    <Link
                      className={`${styles.demo_code_link} ${styles.project_link}`}
                      href="https://play-javascript.netlify.app/"
                      target="_blank"
                    >
                      <p>#demo</p>
                    </Link>
                  </div>
                </div>
                {/* text_wrap */}
                <div className={styles.project_text_wrap}>
                  <h4>프로젝트 소개</h4>
                  <p>
                    다양한 자바스크립트 기능을 바탕으로 만든 웹
                    <br />
                  </p>
                  <h4>프로젝트기간</h4>
                  <p>2024.04 (1명)</p>
                  <h4>프론트엔드</h4>
                  <p>HTML, CSS, JAVASCRIPT, CANVAS</p>
                  <h4>백엔드</h4>
                  <p>API</p>
                  <h4>주요 기능(마우스를 올려주세요)</h4>
                  <div
                    className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onMouseEnter={() => setHoverFeature("feature1")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features01} ${styles.project_core_features}`}
                    >
                      <p>▷지뢰 찾기 게임</p>
                    </div>
                    <div
                      onMouseEnter={() => setHoverFeature("feature2")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features02} ${styles.project_core_features}`}
                    >
                      <p>▷브레이크 아웃 게임</p>
                    </div>
                    <div
                      onMouseEnter={() => setHoverFeature("feature3")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features03} ${styles.project_core_features}`}
                    >
                      <p>▷카드 매치 게임</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onMouseEnter={() => setHoverFeature("feature4")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features04} ${styles.project_core_features}`}
                    >
                      <p>▷다크 모드 구현</p>
                    </div>
                  </div>

                  <Link
                    href="https://github.com/doyi0107/play_javascript"
                    target="_blank"
                  >
                    <button className={styles.readme_button}>
                      <span>📘README</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <span className={styles.project_line}></span>

            {/* APMA */}
            <div className={styles.about_project}>
              <div className={styles.content}>
                {/* img_wrap */}
                <div className={styles.content_left}>
                  <div className={styles.project_title_wrap}>
                    <h3>APMA 프로젝트</h3>
                  </div>
                  <div className={styles.project_img_wrap}>
                    <image
                      placeholder="blur"
                      className={styles.project_main_img}
                      src={APMA}
                      alt="APMA_img"
                    />
                    {hoverFeature === "feature1" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷프론트엔드와 백엔드 간의 원활한 협업을 위해 세부
                          사항을 조율 <br />
                          <br /> ▷ 프로젝트의 방향성을 설정하기 위한 요구 사항
                          명세서 작성
                        </div>
                      </div>
                    )}{" "}
                    {hoverFeature === "feature2" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                      >
                        <div>
                          ▷jQuery AJAX를 활용한 REST API 호출을 통해 페이지 새로
                          고침 없이도 로그인 및 회원 가입 처리
                        </div>
                      </div>
                    )}{" "}
                    {hoverFeature === "feature3" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                      >
                        <div>
                          ▷ 백엔드로 회원 가입 사용자 데이터 post 요청 시
                          cors에러 발생 <br />
                          <br />
                          ▷프론트에서 ajax 요청 시 withCredentials:true 옵션
                          추가를 통해 인증 정보 포함, 백엔드에서 url 경로
                          수정으로 해결
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.project_link_wrap}>
                    <Link
                      className={`${styles.source_code_link} ${styles.project_link}`}
                      href="https://github.com/APMA-project/APMA-Frontend.git"
                      target="_blank"
                    >
                      <p>#source code</p>
                    </Link>
                    <Link
                      className={`${styles.demo_code_link} ${styles.project_link}`}
                      href="https://apma-project.vercel.app/"
                      target="_blank"
                    >
                      <p>#demo</p>
                    </Link>
                  </div>
                </div>
                {/* text_wrap */}
                <div className={styles.project_text_wrap}>
                  <h4>프로젝트 소개</h4>
                  <p>
                    html, css, javascript, jquery를 이용해 만든 미술관 웹 사이트
                  </p>
                  <h4>프로젝트 기간</h4>
                  <p>2021.08(1명) / 2023.08(3명)</p>
                  <h4>프론트엔드</h4>
                  <p>HTML, CSS, JAVASCRIPT, JQUERY, AJAX, GSAP</p>
                  <h4>백엔드</h4>
                  <p>JAVA, SPRING, LOCALSTORAGE</p>
                  <h4>주요 기능(마우스를 올려주세요)</h4>
                  <div
                    className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onmouseenter={() => setHoverFeature("feature1")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features01} ${styles.project_core_features}`}
                    >
                      <p>▷요구 사항 분석 및 명세서 작성</p>
                    </div>
                    <div
                      onmouseenter={() => setHoverFeature("feature2")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features02} ${styles.project_core_features}`}
                    >
                      <p>▷비동기 처리 방식 로그인 및 회원 가입</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onmouseenter={() => setHoverFeature("feature3")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features03} ${styles.project_core_features}`}
                    >
                      <p>▷CORS 에러 해결</p>
                    </div>
                  </div>
                  <Link
                    href="https://2-doooo-2.tistory.com/118"
                    target="_blank"
                  >
                    <button className={styles.readme_button}>
                      <span>📘README</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <span className={styles.project_line}></span>
            {/* shallender */}
            <div className={styles.about_project}>
              <div className={styles.content}>
                {/* img_wrap */}
                <div className={styles.content_left}>
                  <div className={styles.project_title_wrap}>
                    <h3>shallender</h3>
                  </div>
                  <div className={styles.project_img_wrap}>
                    <image
                      placeholder="blur"
                      className={styles.project_main_img}
                      src={shallender_img}
                      alt="shallender_img"
                    />
                    {hoverFeature === "feature1" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                      >
                        <div>
                          ▷Google Firebase의 인증 모듈을 사용하여 사용자 계정을
                          안전하게 생성하고 관리
                        </div>
                      </div>
                    )}{" "}
                    {hoverFeature === "feature2" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                      >
                        <div>
                          ▷사용자가 효율적으로 일정을 추가할 수 있도록
                          AlertDialog 기반의 입력 폼을 구현
                        </div>
                      </div>
                    )}{" "}
                    {hoverFeature === "feature3" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                      >
                        <div>
                          ▷사용자가 입력한 검색어를 바탕으로 서버에 요청을
                          보내고, 받아온 결과를 처리하여 원하는 정보를 신속하게
                          찾을 수 있도록 구현
                        </div>
                      </div>
                    )}{" "}
                    {hoverFeature === "feature4" && (
                      <div
                        className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                      >
                        <div>
                          ▷HTTP 요청을 비동기적으로 보내고 받아 처리함으로써
                          앱의 반응성과 사용자 경험을 향상
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.project_link_wrap}>
                    <Link
                      className={`${styles.source_code_link} ${styles.project_link}`}
                      href="https://github.com/doyi0107/mobileprogramming.git"
                      target="_blank"
                    >
                      <p>#source code</p>
                    </Link>
                  </div>
                </div>
                {/* text_wrap */}
                <div className={styles.project_text_wrap}>
                  <h4>프로젝트 소개</h4>
                  <p>
                    Kotlin을 활용한 지인들과 일정을 공유하고 약속을 잡는
                    안드로이드 앱
                  </p>
                  <h4>프로젝트 기간</h4>
                  <p>2022.09 ~ 2022.12 (5명)</p>
                  <h4>프론트엔드</h4>
                  <p>KOTLIN</p>
                  <h4>백엔드</h4>
                  <p>JAVASCRIPT, FIREBASE</p>
                  <h4>주요 기능(마우스를 올려주세요)</h4>
                  <div
                    className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onmouseenter={() => setHoverFeature("feature1")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features01} ${styles.project_core_features}`}
                    >
                      <p>▷FirebaseAuth를 통한 사용자 계정을 생성</p>
                    </div>
                    <div
                      onmouseenter={() => setHoverFeature("feature2")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features02} ${styles.project_core_features}`}
                    >
                      <p>▷AlertDialog를 이용한 사용자 입력 폼 제공</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                  >
                    <div
                      onmouseenter={() => setHoverFeature("feature3")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features03} ${styles.project_core_features}`}
                    >
                      <p>▷SearchView를 통한 정보 검색 기능</p>
                    </div>
                    <div
                      onmouseenter={() => setHoverFeature("feature4")}
                      onMouseLeave={() => setHoverFeature("")}
                      className={`${styles.project_core_features04} ${styles.project_core_features}`}
                    >
                      <p>▷Thread를 활용한 비동기 네트워크 요청 처리</p>
                    </div>
                  </div>
                  <Link
                    href="https://drive.google.com/file/d/1DXae0notDrYSHBCdLTAWfFC0tsur-W-u/view?usp=drive_link"
                    target="_blank"
                  >
                    {/* <button className={styles.readme_button}>
									<span>📂Open_File</span>
									</button> */}
                  </Link>
                </div>
              </div>
            </div>


          </div>
          {/*  */}
        </div>
   
    </section>
  );
}
