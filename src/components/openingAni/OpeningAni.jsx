import styles from "./Opening.module.css";
import Image from "next/image";
import me from "/public/home/me.webp";

export default function OpeningAni() {
  return (
    <main id="intro" className={styles.intro}>
      {/* 초기 애니메이션 */}
      <div className={styles.intro_wrap}>
        <div className={styles.animation01}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.animation02}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.animation03}>
          <div className={styles.circle}>
            <div className={styles.circle_element01}></div>
          </div>
          <div className={styles.circle}>
            <div className={styles.circle_element02}></div>
          </div>
          <div className={styles.circle}>
            <div className={styles.circle_element03}></div>
          </div>
          <div className={styles.animation04}>
            <div className={`${styles.line_wrapper} ${styles.line_wrapper01}`}>
              <span className={`${styles.line} ${styles.line01}`}></span>
            </div>
            <div className={styles.rotate45}>
              <div
                className={`${styles.line_wrapper} ${styles.line_wrapper02}`}
              >
                <span className={`${styles.line} ${styles.line02}`}></span>
              </div>
            </div>
            <div className={`${styles.line_wrapper} ${styles.line_wrapper03}`}>
              <span className={`${styles.line} ${styles.line03}`}></span>
            </div>
            <div className={styles.rotate135}>
              <div
                className={`${styles.line_wrapper} ${styles.line_wrapper04}`}
              >
                <span className={`${styles.line} ${styles.line04}`}></span>
              </div>
            </div>
            <div className={`${styles.line_wrapper} ${styles.line_wrapper05}`}>
              <span className={`${styles.line} ${styles.line05}`}></span>
            </div>
            <div className={styles.rotate_135}>
              <div
                className={`${styles.line_wrapper} ${styles.line_wrapper06}`}
              >
                <span className={`${styles.line} ${styles.line06}`}></span>
              </div>
            </div>
            <div className={`${styles.line_wrapper} ${styles.line_wrapper07}`}>
              <span className={`${styles.line} ${styles.line07}`}></span>
            </div>
            <div className={styles.rotate_45}>
              <div
                className={`${styles.line_wrapper} ${styles.line_wrapper08}`}
              >
                <span className={`${styles.line} ${styles.line08}`}></span>
              </div>
            </div>
          </div>
          <div className={styles.animation05}>
            <div className={`${styles.double_wrapper02} ${styles.green02}`}>
              <div className={`${styles.double_wrapper01} ${styles.green01}`}>
                <div className={styles.double_block_green00}></div>
              </div>
            </div>
            <div className={`${styles.double_wrapper02} ${styles.navy02}`}>
              <div className={`${styles.double_wrapper01} ${styles.navy01}`}>
                <div className={styles.double_block_navy00}></div>
              </div>
            </div>
            <div className={`${styles.double_wrapper02} ${styles.yellow02}`}>
              <div className={`${styles.double_wrapper01} ${styles.yellow01}`}>
                <div className={styles.double_block_yellow00}></div>
              </div>
            </div>
            <div className={`${styles.double_wrapper02} ${styles.blue02}`}>
              <div className={`${styles.double_wrapper01} ${styles.blue01}`}>
                <div className={styles.double_block_blue00}></div>
              </div>
            </div>
            <div className={`${styles.double_wrapper02} ${styles.red02}`}>
              <div className={`${styles.double_wrapper01} ${styles.red01}`}>
                <div className={styles.double_block_red00}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.animation06}>
          <div className={styles.rhombus05}>
            <div className={styles.rhombus04}></div>
          </div>
        </div>
      </div>

      <div className={`${styles.masthead_image} ${styles.master_container}`}>
        <div className={`${styles.content} ${styles.center}`}>
          {/* h2 */}
          <h2 id="master" className={styles.master}>
            <div>안녕하세요.</div>

            <div className={styles.master_container_scroller}>
              <div className={styles.master_container_scroller_item}>
                <a className={styles.cta_link} href="#">
                  기술을 탐구하는
                </a>
              </div>
              <div className={styles.master_container_scroller_item}>
                <a className={styles.cta_link} href="#">
                  에러를 회고하는
                </a>
              </div>
              <div className={styles.master_container_scroller_item}>
                <a className={styles.cta_link} href="#">
                  동료와 성장하는
                </a>
              </div>
              <div className={styles.master_container_scroller_item}>
                <a className={styles.cta_link} href="#">
                  꾸준한 개발자
                </a>
              </div>
            </div>
            <div>이도이입니다.</div>
          </h2>
        </div>
      </div>
      <Image className={styles.doyi} src={me} alt="intro_doyi" />
    </main>
  );
}