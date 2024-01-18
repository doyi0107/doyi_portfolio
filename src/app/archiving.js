import Link from "next/link";
import Image from "next/image";
import github from "/public/github.png";
import t_story from "/public/t-story.png";
import "./styles/page.modul.css";

export default function Archiving() {
  return (
    <>
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
            <p>💡 그동안 진행했던 프로젝트 소스 코드를 저장했습니다.</p>
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
    </>
  );
}
