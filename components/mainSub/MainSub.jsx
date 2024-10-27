import Image from "next/image";
import quest from "/public/mainSub/quest.png";
import error from "/public/mainSub/error.png";
import team from "/public/mainSub/team.png";

import styles from "./MainSub.module.css"


export default function MainSub() {
  return (
    <section id="main_sub" className={styles.main_sub}>
      <div className={styles.sub_box}></div>
      <h2 className={styles.sub_name}>Who is DOYI?</h2>
      <div className={styles.explain_me}>
        <div className={`${styles.img_wrap} ${styles.one}`}>
          <Image
            className={`${styles.networking} ${styles.sub_img}`}
            src={quest}
            alt="quest"
          />
          <h3 className={styles.title}>#탐구하는</h3>
          <div className={`${styles.net_exp} ${styles.sub_text}`}>
            <p>새로운 기술과 트렌드에 대한 호기심으로 끊임없이 탐구합니다.</p>
          </div>
        </div>
        <div className={`${styles.img_wrap} ${styles.two}`}>
          <Image
            className={`${styles.design} ${styles.sub_img}`}
            src={error}
            alt="error"
          />
          <h3 className={styles.title}>#회고하는</h3>
          <div className={`${styles.design_exp} ${styles.sub_text}`}>
            <p>
              매 프로젝트마다 회고하며 더 나은 코드를 고민하고, 발전적인 방법을
              모색합니다.
            </p>
          </div>
        </div>

        <div className={`${styles.img_wrap} ${styles.three}`}>
          <Image
            className={`${styles.watering} ${styles.sub_img}`}
            src={team}
            alt="team"
          />
          <h3 className={styles.title}>#함께 성장하는</h3>
          <div className={`${styles.watering_exp} ${styles.sub_text}`}>
            <p>협업을 통해 서로의 강점을 살리고, 함께 성장합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}