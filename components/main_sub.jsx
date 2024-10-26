import Image from "next/image";
import quest from "/public/main_sub/quest.png";
import error from "/public/main_sub/error.png";
import team from "/public/main_sub/team.png";
import "../src/app/styles/page.css";
import "../src/app/styles/media.css";

export default function Main_sub() {
  return (
    <>
      <section id="main_sub">
        {/*  */}
        <div className="sub_box"></div>
        {/* who is */}
        <h2 className="sub_name">Who is DOYI?</h2>
        {/* #소통 감각 성장 */}
        <div className="explain_me">
          <div className="one img_wrap">
            <Image className="networking sub_img" src={quest} alt="quest" />
            <h3>#탐구하는</h3>
            <div className="net_exp sub_text">
              <p>새로운 기술과 트렌드에 대한 호기심으로 끊임없이 탐구합니다.</p>
            </div>
          </div>

          <div className="two img_wrap">
            <Image className="design sub_img" src={error} alt="error" />
            <h3>#회고하는</h3>
            <div className="design_exp sub_text">
              <p>
                매 프로젝트마다 회고하며 더 나은 코드를 고민하고, 발전적인
                방법을 모색합니다.
              </p>
            </div>
          </div>

          <div className="three img_wrap">
            <Image className="watering sub_img" src={team} alt="team" />
            <h3>#함께 성장하는</h3>
            <div className="watering_exp sub_text">
              <p>
                협업을 통해 서로의 강점을 살리고, 함께 성장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
