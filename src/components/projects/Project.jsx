'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './Project.module.css';

import play_javascript from '/public/projects/play_javascript_img.png';
import starting_plant from '/public/projects/starting_plant_img.jpeg';
import woohangsi from '/public/projects//woohangsi.png';
import APMA from '/public/projects/APMA_IMG.png';
import { useEffect, useRef, useState } from 'react';

export default function project() {
  const scrollSectionRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [hoverFeature, setHoverFeature] = useState('');

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const scrollContent = scrollContentRef.current;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
      const notReachedBottom =
        scrollSection.getBoundingClientRect().bottom - window.innerHeight;

      if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
        gsap.to(scrollContent, { x: -sectionOffset });
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className={styles.projects} ref={scrollSectionRef}>
      <div className={styles.horizontal_scroll_wrap}>
        <div
          className={styles.horizontal_scroll_content}
          ref={scrollContentRef}
        >
          <h2 className={styles.projects_name}>Projects</h2>
          {/* 프로젝트들 */}
          {/* 윗비트래블 */}
          <div className={styles.about_project}>
            <div className={styles.content}>
              <div className={styles.content_left}>
                <div className={styles.project_title_wrap}>
                  <h3>윗비트래블</h3>
                  <Link
                    className={styles.portfoilo_link}
                    href="https://statuesque-pincushion-161.notion.site/14050ed9c78e809ea6d1c62a0911dad3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={styles.portfoilo_text}>
                      (포트폴리오 보러가기)
                    </p>
                  </Link>
                </div>
                <div className={styles.project_img_wrap}>
                  <Link
                    href="https://withbee-travel.vercel.app/"
                    target="_blank"
                  >
                    <Image
                      className={styles.project_main_img}
                      src="/projects/mockUp.png"
                      alt="윗비트래블 목업포스터"
                      width={500}
                      height={350}
                      quality={100}
                    />
                  </Link>
                  {/* Hover features */}
                  {hoverFeature === 'feature1' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ Turborepo 기반 적응형 레이아웃 구현 프로젝트 간 공통
                        <br />→ 모듈로 패키지화하여 재사용성 극대화
                        <br />
                        <br />▷ 공통 컴포넌트 개발 및 storybook 초기 셋팅 <br />
                        → 개발 중 컴포넌트를 실시간 미리보기 및 테스트
                        가능하도록 설정
                        <br />
                        <br />▷ React-toastify, Framer-motion, Skeleton UI 적용{' '}
                        <br />
                        → 사용자 작업 결과(성공/실패 알림)를 즉각적으로
                        피드백하는 알림 시스템 구축
                        <br />→ 로딩 중 비어 보이는 화면 대신 로딩 상태를
                        시각적으로 표시하여 사용자가 더 나은 경험을 할 수 있도록
                        개선
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature2' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                    >
                      <div>
                        ▷ 카드 혜택, 여행 생성, 편집, 목록 퍼블리싱 및 API 구현
                        <br /> <br />▷ 카카오톡 SDK(초대 코드 공유)를 활용한
                        여행 그룹 참여 기능 구현 <br />
                        → 카카오 JavaScript SDK를 동적으로 로드하여 초대 코드
                        공유
                        <br />
                        기능을 구현 <br />→ 초대 코드는 여행 그룹 생성 시 자동
                        생성되며, 클립보드 복사 및 카카오톡 링크 공유를 지원
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature3' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                    >
                      <div>
                        ▷ EventSourcePolyfill를 사용하여 서버와의
                        SSE(Server-Sent Events) 연결을 통해 실시간으로 알림
                        <br />
                        → 데이터를 수신 connectSSE 함수를 호출하여 서버의
                        엔드포인트에 접근하며, 이를 통해 이벤트 스트림을 수신
                        <br /> <br />▷ 알림 배지를 통한 실시간 상태 전달
                        <br />→ 새 알림 ID를 Zustand를 이용하여 상태로 관리하며,
                        기존 알림과 비교하여 새로운 알림만 필터링
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.project_link_wrap}>
                  <Link
                    className={`${styles.source_code_link} ${styles.project_link}`}
                    href="https://github.com/woorifisa-projects-3rd/WithBeeTravel-FE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>#source code</p>
                  </Link>

                  <Link
                    className={`${styles.demo_code_link} ${styles.project_link}`}
                    href="https://withbee-travel.vercel.app/"
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
                <p>
                  우리FISA에서 진행한 최종 프로젝트로, <br />
                  뱅킹 기반 서비스(슈퍼앱)를 통한 생활밀착형 서비스 플랫폼을
                  주제로 개발 진행
                  <br />- 여행 공동 지출 관리 및 자동 정산 서비스
                </p>
                <h4>프로젝트 기간</h4>
                <p>2024.10 ~ 2024.12</p>
                <h4>프론트엔드</h4>
                <p>
                  Next.js,Typescript,Turborepo,Storybook
                  <br />
                  Framer-motion,React-toastify
                </p>
                <h4>백엔드</h4>
                <p>Spring,MYSQL,AWS</p>
                <h4>주요 기능(마우스를 올려주세요)</h4>
                <div
                  className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature1')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features01} ${styles.project_core_features}`}
                  >
                    <p>▷프론트엔드 공통 컴포넌트 개발 및 storybook 셋팅 </p>
                  </div>
                </div>

                <div
                  className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature2')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features02} ${styles.project_core_features}`}
                  >
                    <p>▷여행 생성 및 초대 코드를 통한 가입 &nbsp;</p>
                  </div>
                  <div
                    onMouseEnter={() => setHoverFeature('feature3')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features03} ${styles.project_core_features}`}
                  >
                    <p>▷SSE 실시간 알림 기능 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.project_line}></span>
          {/* 우행시 */}
          <div className={styles.about_project}>
            <div className={styles.content}>
              <div className={styles.content_left}>
                <div className={styles.project_title_wrap}>
                  <h3>우행시</h3>
                  <Link
                    className={styles.portfoilo_link}
                    href="https://statuesque-pincushion-161.notion.site/13050ed9c78e8130ad60c66af05040a0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={styles.portfoilo_text}>
                      (포트폴리오 보러가기)
                    </p>
                  </Link>
                </div>
                <div className={styles.project_img_wrap}>
                  <Link href="https://woohangshi.vercel.app/" target="_blank">
                    <Image
                      placeholder="blur"
                      className={styles.project_main_img}
                      src={woohangsi}
                      alt="Doyi_portfolio_img"
                    />
                  </Link>
                  {/* Hover features */}
                  {hoverFeature === 'feature1' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ Infinite Scroll을 활용해 서버에서 필요한 데이터만
                        요청하여 네트워크 트래픽을 줄이고 성능 최적화 <br />
                        <br />▷ 주간 순위별 1등 교육생에게는 상품권 증정 이벤트
                        → 교육생 참여율 30% 증가
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature2' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                    >
                      <div>
                        ▷ Zustand 라이브러리를 활용한 상태 관리로 과목 선택과
                        편집 기능을 효율적으로 구현
                        <br /> <br />▷ SWR을 사용해 서버에서 받아온 데이터를
                        캐싱하여 네트워크 요청을 최소화하고 성능을 개선
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature3' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                    >
                      <div>
                        ▷ 랜딩페이지를 통한 웹의 핵심 기능 소개 및 사용자에게
                        직관적이고 몰입감 있는 UI 경험 제공
                        <br /> <br />
                        ▷ 직관적인 CTA 버튼을 통해 추가 자료와 정보에 빠르게
                        접근할 수 있도록 유도 <br />( ex)문의하기, 노션보러가기
                        )
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.project_link_wrap}>
                  <Link
                    className={`${styles.source_code_link} ${styles.project_link}`}
                    href="https://github.com/woohaengshi/frontend.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>#source code</p>
                  </Link>

                  <Link
                    className={`${styles.demo_code_link} ${styles.project_link}`}
                    href="https://woohangshi.vercel.app/"
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
                <p>
                  우리 FIS 교육생들이 공부 시간을 측정하고 학습 과목을 <br />
                  기록함으로써 효율적으로 시간 관리를 할 수 있도록 돕기 위해
                  <br />
                  제작한 웹
                </p>
                <h4>프로젝트 기간</h4>
                <p>2024.08 ~ 2024.10</p>
                <h4>프론트엔드</h4>
                <p>Next.js,Typescript,Zustand</p>
                <h4>백엔드</h4>
                <p>Spring boot,MYSQL,AWS</p>
                <h4>주요 기능(마우스를 올려주세요)</h4>
                <div
                  className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature1')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features01} ${styles.project_core_features}`}
                  >
                    <p>▷교육생들의 일간, 주간, 월간 별 순위 제공</p>
                  </div>
                </div>

                <div
                  className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature2')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features02} ${styles.project_core_features}`}
                  >
                    <p>▷과목 선택 및 편집 기능&nbsp;</p>
                  </div>
                  <div
                    onMouseEnter={() => setHoverFeature('feature3')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features03} ${styles.project_core_features}`}
                  >
                    <p>▷랜딩페이지</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.project_line}></span>

          {/* Starting_plant*/}
          <div className={styles.about_project}>
            <div className={styles.content}>
              {/* img_wrap */}
              <div className={styles.content_left}>
                <div className={styles.project_title_wrap}>
                  <h3>Starting_plant</h3>
                  <Link
                    className={styles.portfoilo_link}
                    href="https://statuesque-pincushion-161.notion.site/Starting_Plant-13050ed9c78e809f8d60dbbac41edcbc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={styles.portfoilo_text}>
                      (포트폴리오 보러가기)
                    </p>
                  </Link>
                </div>
                <div className={styles.project_img_wrap}>
                  <Link
                    href="https://starting-plant-nu.vercel.app/"
                    target="_blank"
                  >
                    <Image
                      placeholder="blur"
                      className={`${styles.project_main_img} ${styles.starting_plant_img}`}
                      src={starting_plant}
                      alt="starting_plant"
                    />
                  </Link>
                  {/* Hover features */}
                  {hoverFeature === 'feature1' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ 사용자의 선호도와 환경을 분석하여 맞춤형 식물을 추천
                        <br /> <br />▷ React의 상태 관리와 동적 API 쿼리 생성을
                        통해 사용자 경험을 극대화
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature2' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                    >
                      <div>
                        ▷ axios의 인터셉터 기능을 활용하여 로딩 시간을
                        단축시키고, 에러 핸들링을 통해 사용자에게 명확한
                        피드백을 제공함 <br />
                        <br />▷ React Router의 useNavigate, useLocation 훅을
                        활용하여 검색 기능의 성능과 사용성 향상
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature3' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                    >
                      <div>
                        ▷useAuth 커스텀 훅을 통해 로그인 상태에 따라 장바구니
                        기능의 접근 제한을 구현, 비즈니스 로직에 깊이를 더함{' '}
                        <br /> <br />
                        ▷Recoil과 useAuth의 용도 차이 이해 <br />: Recoil은
                        다양한 애플리케이션 데이터 관리에, useAuth는 사용자 인증
                        데이터 관리에 각각 특화
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature4' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail04}`}
                    >
                      <div>
                        ▷ 문제 : API 작업이 완료되지 않은 상황에서 컴포넌트
                        제작을 완료, 테스트 시 API interlocking 과정이 별도로
                        필요
                        <br />
                        <br />▷ 해결 : MSW 기반으로 한 Mock API를 구현함으로써
                        백엔드 API 개발 완료 전에도 프론트엔드 기능 개발 및
                        테스트를 진행할 수 있게 되어, 전체 프로젝트의 개발
                        시간을 효율적으로 단축
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.project_link_wrap}>
                  <Link
                    className={`${styles.source_code_link} ${styles.project_link}`}
                    href="https://github.com/doyi0107/starting_plant"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>#source code</p>
                  </Link>
                  <Link
                    className={`${styles.demo_code_link} ${styles.project_link}`}
                    href="https://starting-plant-nu.vercel.app/"
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
                <p>사용자 설문 조사를 통해 맞춤 식물을 추천해 주는 웹</p>
                <h4>프로젝트기간</h4>
                <p>2024.04</p>
                <h4>프론트엔드</h4>
                <p>React, Gsap, Vercel</p>
                <h4>주요 기능(마우스를 올려주세요)</h4>
                <div
                  className={`${styles.project_core_feature_chapter} ${styles.project_core_feature_chapter1}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature1')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features01} ${styles.project_core_features}`}
                  >
                    <p>▷사용자 맞춤 추천&nbsp;</p>
                  </div>
                  <div
                    onMouseEnter={() => setHoverFeature('feature2')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features02} ${styles.project_core_features}`}
                  >
                    <p>▷빠른 응답 및 피드백</p>
                  </div>
                </div>
                <div
                  className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature3')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features03} ${styles.project_core_features}`}
                  >
                    <p>
                      ▷전역 상태 관리 라이브러리,Recoil을 통해 장바구니 상태
                      관리&nbsp;
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.project_core_feature_chapter3} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature4')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features04} ${styles.project_core_features}`}
                  >
                    <p>▷MSW 기반으로 한 Mock API</p>
                  </div>
                </div>
                <Link
                  href="https://2-doooo-2.tistory.com/170"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.readme_button}>
                    <span>📗README</span>
                  </button>
                </Link>
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
                  <Link
                    className={styles.portfoilo_link}
                    href="https://statuesque-pincushion-161.notion.site/Play_Javascript-13050ed9c78e8016b964f3db55ab6c09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={styles.portfoilo_text}>
                      (포트폴리오 보러가기)
                    </p>
                  </Link>
                </div>
                <div className={styles.project_img_wrap}>
                  <Link
                    href="https://play-javascript.netlify.app/"
                    target="_blank"
                  >
                    <Image
                      placeholder="blur"
                      className={styles.project_main_img}
                      src={play_javascript}
                      alt="play_javascript"
                    />
                  </Link>
                  {hoverFeature === 'feature1' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ 큐(queue)를 사용하여 너비 우선 탐색 알고리즘(BFS)을
                        구현. 이를 통해 한 셀에서 시작하여 점차적으로 모든
                        인접한 셀들을 탐색하고 공개
                        <br /> <br />
                        ▷모서리 셀의 이웃 지뢰 개수 표시 오류 개선 - 아키텍처 및
                        설계 결정 분석
                        <br /> <br /> ▷ 초기 설계 단계에서 모서리 셀이나 경계
                        셀에서의 이웃 지뢰 개수 계산 로직을 충분히 고려하지 않아
                        발생
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature2' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷&lt;canvas&gt; 요소 사용, 캔버스의 2D 그래픽 컨텍스트를
                        이용해 공, 패들, 블록 등의 요소를 그리는 함수를 작성
                        <br /> <br /> ▷ 렌더링 최적화 : requestAnimationFrame 를
                        사용하여 게임의 렌더링을 브라우저의 리페인트 주기에
                        맞추며, 불필요한 렌더링을 줄이고 애니메이션의 부드러움을
                        최적화함
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature3' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ Fisher-Yates 알고리즘을 사용한 카드 셔플링
                        <br /> <br /> ▷ Fisher-Yates 알고리즘 모든 순열이 등장할
                        확률이 동일하게 만듦으로써 공정성을 제공, 선형 시간
                        복잡도(O(n))를 가지고 있어서 배열의 크기와 상관없이
                        효율성이 좋다는 장점을 가지고 있음
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature4' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ 사용자 경험과 접근성 고려 : 다크 모드와 라이트 모드
                        간의 전환을 위한 UI/UX 디자인 고려, 사용자가 콘텐츠를
                        쉽게 구분하고 읽을 수 있도록 함
                        <br /> <br /> ▷ 사용자가 직접 모드를 전환할 수 있는 옵션
                        제공 : 명확하고 접근하기 쉬운 토글 버튼 구현
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
                  깊이 있는 자바스크립트의 학습을 목표로, <br />
                  다양한 게임 기능을 구현한 웹
                  <br />
                </p>
                <h4>프로젝트기간</h4>
                <p>2024.04 (1명)</p>
                <h4>프론트엔드</h4>
                <p>Html,CSS,Javascript,CANVAS</p>
                <h4>주요 기능(마우스를 올려주세요)</h4>
                <div
                  className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature1')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features01} ${styles.project_core_features}`}
                  >
                    <p>▷지뢰 찾기 게임&nbsp;</p>
                  </div>
                  <div
                    onMouseEnter={() => setHoverFeature('feature2')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features02} ${styles.project_core_features}`}
                  >
                    <p>▷브레이크 아웃 게임</p>
                  </div>
                </div>
                <div
                  className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature3')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features03} ${styles.project_core_features}`}
                  >
                    <p>▷카드 매치 게임&nbsp;</p>
                  </div>
                  <div
                    onMouseEnter={() => setHoverFeature('feature4')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features04} ${styles.project_core_features}`}
                  >
                    <p>▷다크 모드 구현</p>
                  </div>
                </div>
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
                  <h3>APMA</h3>
                </div>
                <div className={styles.project_img_wrap}>
                  <Link href="https://apma-project.vercel.app/" target="_blank">
                    <Image
                      placeholder="blur"
                      className={styles.project_main_img}
                      src={APMA}
                      alt="APMA_img"
                    />
                  </Link>
                  {hoverFeature === 'feature1' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail01}`}
                    >
                      <div>
                        ▷ 프로젝트의 방향성을 설정하기 위한 요구 사항 명세서
                        작성
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature2' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail03}`}
                    >
                      <div>
                        ▷ 백엔드로 사용자 회원 가입 데이터 POST 요청 시 CORS
                        오류 발생
                        <br /> <br />▷ 프론트엔드에서 AJAX 요청 시
                        withCredentials: true 옵션을 추가하여 인증 정보를
                        포함시키고, 백엔드에서 URL 경로를 수정하여 문제를 해결
                      </div>
                    </div>
                  )}
                  {hoverFeature === 'feature3' && (
                    <div
                      className={`${styles.project_core_features_detail} ${styles.project_core_features_detail02}`}
                    >
                      <div>
                        ▷ jQuery AJAX를 활용한 비동기 REST API 호출로, 페이지
                        리로드 없이 로그인 및 회원 가입 기능 구현
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.project_link_wrap}>
                  <Link
                    className={`${styles.source_code_link} ${styles.project_link}`}
                    href="https://github.com/APMA-project/APMA-Frontend.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>#source code</p>
                  </Link>

                  <Link
                    className={`${styles.demo_code_link} ${styles.project_link}`}
                    href="https://apma-project.vercel.app/"
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
                <p>미술관 웹 사이트</p>
                <h4>프로젝트 기간</h4>
                <p>2021.08(1명) / 2023.08(3명)</p>
                <h4>프론트엔드</h4>
                <p>Html, CSS, Javascript, Jquery, Ajax, GSAP</p>
                <h4>백엔드</h4>
                <p>Java, Spring </p>
                <h4>주요 기능(마우스를 올려주세요)</h4>
                <div
                  className={`${styles.project_core_feature_chapter1} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature1')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features01} ${styles.project_core_features}`}
                  >
                    <p>▷요구 사항 분석 및 명세서 작성&nbsp;</p>
                  </div>
                  <div
                    onMouseEnter={() => setHoverFeature('feature2')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features02} ${styles.project_core_features}`}
                  >
                    <p>▷CORS 에러 해결</p>
                  </div>
                </div>

                <div
                  className={`${styles.project_core_feature_chapter2} ${styles.project_core_feature_chapter}`}
                >
                  <div
                    onMouseEnter={() => setHoverFeature('feature3')}
                    onMouseLeave={() => setHoverFeature('')}
                    className={`${styles.project_core_features03} ${styles.project_core_features}`}
                  >
                    <p>▷비동기 처리 방식 로그인 및 회원 가입</p>
                  </div>
                </div>

                <Link href="https://2-doooo-2.tistory.com/118" target="_blank">
                  <button className={styles.readme_button}>
                    <span>📗README</span>
                  </button>
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
