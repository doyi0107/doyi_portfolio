import './globals.css'
import './reset.css'
import Link from "next/link";
import Image from "next/image";
import me from "/public/me.png"

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
          <main className="intro">
            <header></header>

            <div className="intro_text">
              <h1 className="intro_front">FRONT-END</h1>
              <h1 className="intro_developer">DEVELOPER</h1>
              <h1 className="intro_leedoyi">LEEDOYI</h1>
            </div>

            {/* master */}
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
                        성장하는
                      </a>
                    </div>
                    <div className="master-container-scroller_item">
                      <a className="cta-link" href="#">
                        한계를 뛰어넘는
                      </a>
                    </div>
                    <div className="master-container-scroller_item">
                      <a className="cta-link" href="#">
                        프론트엔드 개발자
                      </a>
                    </div>
                  </div>
                  <div>이도이입니다.</div>
                </h2>
              </div>
            </div>

            <Image className="doyi" src={me} />
          </main>
          {children}
        </body>
      </html>
    </>
  );
}







