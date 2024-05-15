import Image from "next/image";
import networking from "/public/networking.webp";
import design from "/public/main_sub_goal.png";
import watering from "/public/watering.webp";
import "./styles/page.css";
import "./styles/media.css";

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
            <Image
              className="networking sub_img"
              src={networking}
              alt="networking"
            />
            <h3>#소통하는</h3>
            <div className="net_exp sub_text">
              <p>
                사람들과 의견을 공유하며 하나의 목표를 향해 나아가는 활동을
                좋아합니다.
              </p>
            </div>
          </div>

          <div className="two img_wrap">
            <Image className="design sub_img" src={design} alt="design" />
            <h3>#도전하는</h3>
            <div className="design_exp sub_text">
              <p>
                줄이 긴 맛집을 가는 것보다 새로운 맛집을 찾는 것을 선호하며,
                새로운 아키텍처를 마주하는 것을 즐깁니다.
              </p>
            </div>
          </div>

          <div className="three img_wrap">
            <Image className="watering sub_img" src={watering} alt="watering" />
            <h3>#성장하는</h3>
            <div className="watering_exp sub_text">
              <p>
                하루의 소중함을 알고 작은 걸음이라도 꾸준히 나아가는 사람입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
