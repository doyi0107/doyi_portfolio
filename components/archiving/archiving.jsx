import Link from "next/link";
import Image from "next/image";
import github from "/public/archiving/github.webp";
import t_story from "/public/archiving/t-story.webp";
import styles from "./Archiving.module.css"
import "@/src/app/styles/media.css";

export default function Archiving() {
  return (
    <section className={styles.archiving} id="archiving">
      <h2 className={styles.archiving_name}>Archiving</h2>
      <div className={styles.arch_left_box}>
        <div className={styles.github_text}>
          <h4>Github</h4>
          <p>💡 꾸준한 커밋을 통해 지속적으로 개발에 참여했습니다.</p>
          <p>
            💡 팀원들과의 협업 시 PR를 통해 코드 리뷰를 진행하여 코드 품질을
            향상하고, 개선 사항을 즉각 반영했습니다.
          </p>
          <p>
            💡 Issue 기능을 활용해 작업을 세분화하고, 프로젝트 상태와 진행
            상황을 체계적으로 관리했습니다.
          </p>
        </div>
        <Link
          href="https://github.com/doyi0107"
          className={styles.github_img_wrap}
          target="blank"
        >
          <Image className={styles.github_img} src={github} alt="github" />
        </Link>
      </div>
      <div className={styles.arch_right_box}>
        <Link
          href="https://2-doooo-2.tistory.com/"
          target="blank"
          className={styles.t_story_img_wrap}
        >
          <Image className={styles.t_story_img} src={t_story} alt="t_story" />
        </Link>
        <div className={styles.t_story_text}>
          <h4>T-story</h4>
          <p>
            💡 프로젝트 진행 중 습득한 기술적 지식과 문제 해결 과정을 체계적으로
            기록하여 성장의 발자취를 남겼습니다.
          </p>
          <p>
            💡 코딩 교육 프로그램에서 학습한 내용을 정리하고, 기술 정보와 해결
            방법을 공유하고 있습니다.
          </p>
          <p>
            💡 나만의 기술 용어와 개념을 정리한 사전을 완성해, 지속적으로
            복습하며 실력을 유지하고 향상하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
