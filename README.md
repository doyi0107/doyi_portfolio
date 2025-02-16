## 🌱도이스토리 
신입 프론트엔드 개발자 이도이를 소개하는 웹입니다 :smile:

## ⏳프로젝트 기간 
2024.01 ~ 

## 🛠️스킬 스택 
<div style="display:flex; flex-direction:column; align-items:flex-start;">
    <p><strong>Frontend</strong></p>
    <div>
        <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white">
        <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"> 
    </div>

## 💡기능 구현
* **디자인부터 배포하는 과정까지 100% 본인이 기여한 웹**
* **사용자 웹 접근성 향상 → SEO를 위한 SSR을 가능하게 한 Next.js를 이용**
* **사용자 인터랙션 강화 → 스크롤 유도 가이드와 가로 스크롤바를 통해 동적인 사용자 경험 제공**
  
## 📌트러블 슈팅
* **성능 최적화**
  * 문제 : LightHouse 성능 평가에서 Performance0점 
  * 원인
      * CSS에서 반복된 코드, 안 쓰는 Font들로 인한 초기 로딩 속도 저하,
      * 잦은 animation, overflow:hidden과 같은 속성들이 레이아웃 리플로우를 유발
  * 해결
    * Coverage이용해 사용하지 않는 css코드 삭제
    * 이미지 파일 AVIF 및 WebP로 교체
    * CSS Minifier 이용해 css 중복 코드 개선
    * Webpack을 사용한 css축소 (mini-css-extract-plugin 패키지 설치)
    * LightHouse 성능 평가 Performance(0 → 90) 100% 향상 

## 📌시연영상 
 1. **오프닝 애니메이션** 
<p align="left">
  <img src="https://github.com/user-attachments/assets/f48a2d8e-3488-43e2-b581-e21214ee2ba2" width="700" height="380">
</p>

 2. **가로 스크롤(프로젝트 컴포넌트) 및 스크롤 유도 기능 구현**
<p align="left">
  <img src="https://github.com/user-attachments/assets/dfeaba6b-c1b2-40c2-8f0a-1e8fc5203d7f" width="700" height="380">
</p>

 3. **스크롤 프로그레스 바**
<p align="left">
  <img src="https://github.com/user-attachments/assets/4dcc9772-87ef-47ee-9a1f-f6176aebb56b" width="700" height="380">
</p>





