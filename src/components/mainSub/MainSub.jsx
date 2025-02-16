'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import styles from './MainSub.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import quest from '/public/mainSub/quest.png';
import error from '/public/mainSub/effort.png';
import team from '/public/mainSub/team.png';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function MainSub() {
  const subNameRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 모든 ref가 존재하는지 확인
      if (
        !subNameRef.current ||
        !oneRef.current ||
        !twoRef.current ||
        !threeRef.current
      ) {
        return;
      }

      const fromLeftElements = [
        {
          element: subNameRef.current,
          delay: 0.1,
        },
        {
          element: oneRef.current,
          delay: 0.2,
        },
        {
          element: threeRef.current,
          delay: 0.1,
        },
      ];

      fromLeftElements.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item.element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        });

        tl.fromTo(
          item.element,
          {
            opacity: 0,
            x: -800,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: item.delay,
            ease: 'power2.out',
          },
        );
      });

      // 오른쪽에서 들어오는 애니메이션
      const tlRight = gsap.timeline({
        scrollTrigger: {
          trigger: twoRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      });

      tlRight.fromTo(
        twoRef.current,
        {
          opacity: 0,
          x: 800,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.main_sub}>
      <div className={styles.sub_box}></div>
      <div ref={subNameRef} className={styles.sub_name}>
        WHO IS DOYI
      </div>
      <div className={styles.explain_me}>
        <div ref={oneRef} className={`${styles.img_wrap} ${styles.one}`}>
          <div className={styles.sub_content}>
            <Image
              className={`${styles.networking} ${styles.sub_img}`}
              src={quest}
              alt="quest"
            />
          </div>
          <div className={styles.sub_text_left}>
            <span className={styles.title}>
              비전공자인데 왜 개발자가 되고 싶어?
            </span>
            <span className={styles.sub_text}>
              💡전공 수업에서 구비 문학(콩쥐팥쥐)을 현대적으로 접근하는 기획을
              했습니다. 저희 팀은 콩쥐가 동물들의 도움을 받는 대신, 아동 보호
              앱을 활용해 위기를 극복하는 스토리를 제안했습니다. 이 과정에서{' '}
              <strong className={styles.highlight}>
                기획뿐만 아니라 직접 웹 서비스를 개발하면 더 의미 있겠다고 생각
              </strong>
              했고, 본격적으로 개발을 배우기 시작했습니다. <br />
              이후 개발을 학습하며{' '}
              <strong className={styles.highlight}>
                제가 상상한 그림이 브라우저를 통해 그려지고, 팀원들과 하나의
                완성된 서비스를 만드는 과정에서 큰 성취감을 느꼈습니다.
              </strong>
              {/* <br />
              💡제가 상상한 그림이 브라우저를 통해 그려지고, 작은 블록들이 쌓여
              하나의 완성품을 만들어가는 과정이 재밌습니다. 또한 프론트엔드
              개발이 사용자와 가장 가까운 접점에서 직접적인 가치를 전달할 수
              있다는 점에서 큰 보람을 느낍니다. */}
            </span>
          </div>
        </div>
        <div ref={twoRef} className={`${styles.img_wrap} ${styles.two}`}>
          <div className={styles.sub_content_design}>
            <Image
              className={`${styles.design} ${styles.sub_img}`}
              src={error}
              alt="error"
            />
          </div>
          <div>
            <span className={styles.title}>
              개발자가 되기 위해 어떤 노력을 하고 있어?
            </span>
            <span className={styles.sub_text_right}>
              💡React.js, Next.js등과 같은 현대적인 웹 기술에 열정을 가지고
              학습하고 있습니다 <br />
              💡 프로젝트를 진행하며 겪은 에러를 회고하고, 이를{' '}
              <Link
                href="https://2-doooo-2.tistory.com/"
                className={styles.link}
                target="_blank"
              >
                <strong className={styles.highlight}>기술 블로그</strong>
              </Link>
              에 정리하고 있습니다.현재{' '}
              <strong className={styles.highlight}>
                110개 이상의 게시물을 작성, 누적 조회수 10,000회 이상을
                기록했습니다.
              </strong>{' '}
              <br />
              💡 팀 프로젝트에 참여하며 데이터 기반으로 객관적인 솔루션을
              도출하는 방법을 익혔습니다. 이를 통해{' '}
              <strong className={styles.highlight}>
                실제 사용자 참여율을 127% 향상시킨 경험이 있습니다.
              </strong>
            </span>
          </div>
        </div>
        <div className={styles.sub_box2}></div>
        <div ref={threeRef} className={`${styles.img_wrap} ${styles.three}`}>
          <div className={styles.sub_content}>
            <Image
              className={`${styles.watering} ${styles.sub_img}`}
              src={team}
              alt="team"
            />
          </div>
          <div className={styles.sub_text_left}>
            <span className={styles.title}>어떤 개발자가 되고 싶어?</span>
            <span className={styles.sub_text}>
              💡기획력과 기술 역량을 모두 갖춘 개발자가 되어,{' '}
              <strong className={styles.highlight}>
                웹 서비스의 방향을 이해하고 함께 더 나은 방향을 고민
              </strong>
              하겠습니다.
              <br /> 💡 저는 동료들과 함께 성장하는 개발자가 되고 싶습니다.이전
              프로젝트에서도{' '}
              <Link
                href="https://github.com/woorifisa-projects-3rd/WithBeeTravel-FE/pull/71"
                className={styles.link}
                target="blank"
              >
                <strong className={styles.highlight}>코드 리뷰</strong>
              </Link>
              를 활발히 진행하며 팀원 간의 피드백을 통해 더 나은 코드를
              만들어왔습니다
              <br />
              💡앞으로는 풀스택 개발자로서의 역량을 쌓아가며,
              <strong className={styles.highlight}>
                사용자의 불편함을 개선하여 사용자의 일상을 수선하는 개발자
              </strong>
              로 나아갈 것입니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
