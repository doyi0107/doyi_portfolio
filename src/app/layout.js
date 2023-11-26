import './globals.css'
import './reset.css'
import './globals.scss'
import Link from "next/link";
import Image from "next/image";
import me from "/public/me.png";
import Modal from "./modal.js";

export const metadata = {
  title: "DOYI WORLD",
  description: "Generated by 도이",
  icons: {
    icon: "/tree.png",
  },
};

export default function RootLayout({ children }) {


  return (
    <>
      <html>
        <body>
          <Modal />

          <main id="intro">
            <header className="header_wrap">
              <Link href="#intro" className="link">
                <div>Home</div>
              </Link>

              <Link href="#archiving" className="link">
                <div>Archiving</div>
              </Link>

              <Link href="#projects" className="link">
                <div>Projects</div>
              </Link>

              <Link href="#contact" className="link">
                <div>Contact</div>
              </Link>
            </header>

            <div className="intro_wrap">
              <div class="animation01">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="animation02">
                <div></div>
                <div></div>
              </div>
              <div class="animation03">
                <div class="circle">
                  <div class="circle_element01"></div>
                </div>
                <div class="circle">
                  <div class="circle_element02"></div>
                </div>
                <div class="circle">
                  <div class="circle_element03"></div>
                </div>
                <div class="animation04">
                  <div class="line_wrapper line_wrapper01">
                    <span class="line line01"></span>
                  </div>
                  <div class="rotate45">
                    <div class="line_wrapper line_wrapper02">
                      <span class="line line02"></span>
                    </div>
                  </div>
                  <div class="line_wrapper line_wrapper03">
                    <span class="line line03"></span>
                  </div>
                  <div class="rotate135">
                    <div class="line_wrapper line_wrapper04">
                      <span class="line line04"></span>
                    </div>
                  </div>
                  <div class="line_wrapper line_wrapper05">
                    <span class="line line05"></span>
                  </div>
                  <div class="rotate-135">
                    <div class="line_wrapper line_wrapper06">
                      <span class="line line06"></span>
                    </div>
                  </div>
                  <div class="line_wrapper line_wrapper07">
                    <span class="line line07"></span>
                  </div>
                  <div class="rotate-45">
                    <div class="line_wrapper line_wrapper08">
                      <span class="line line08"></span>
                    </div>
                  </div>
                </div>
                <div class="animation05">
                  <div class="double_wrapper02 green02">
                    <div class="double_wrapper01 green01">
                      <div class="double_block green00"></div>
                    </div>
                  </div>
                  <div class="double_wrapper02 navy02">
                    <div class="double_wrapper01 navy01">
                      <div class="double_block navy00"></div>
                    </div>
                  </div>
                  <div class="double_wrapper02 yellow02">
                    <div class="double_wrapper01 yellow01">
                      <div class="double_block yellow00"></div>
                    </div>
                  </div>
                  <div class="double_wrapper02 blue02">
                    <div class="double_wrapper01 blue01">
                      <div class="double_block blue00"></div>
                    </div>
                  </div>
                  <div class="double_wrapper02 red02">
                    <div class="double_wrapper01 red01">
                      <div class="double_block red00"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="animation06">
                <div class="rhombus05">
                  <div class="rhombus04"></div>
                </div>
              </div>
            </div>

            <div className="masthead-image" id="master-container">
              <div className="content center">
                {/* h2 */}
                <h2 id="master">
                  <div>안녕하세요.</div>

                  <div id="master-container-scroller">
                    <div className="master-container-scroller_item">
                      <a className="cta-link" href="#">
                        소통하는
                      </a>
                    </div>
                    <div className="master-container-scroller_item">
                      <a className="cta-link" href="#">
                        감각있는
                      </a>
                    </div>
                    <div className="master-container-scroller_item">
                      <a className="cta-link" href="#">
                        한계를 뛰어넘는
                      </a>
                    </div>
                    <div className="master-container-scroller_item">
                      <a className="cta-link" href="#">
                        성장하는 개발자
                      </a>
                    </div>
                  </div>
                  <div>이도이입니다.</div>
                </h2>
              </div>
            </div>

            <Image className="doyi" src={me} alt="intro_doyi"/>
            <div className="main_bottom_box"></div>
          </main>


          {children}
        </body>
      </html>
    </>
  );
}














