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
    </div><br/>
</div>

## 💡기능 구현
* **디자인부터 배포하는 과정까지 100% 본인이 기여한 웹**
* **사용자 웹 접근성 향상 → SEO를 위한 SSR을 가능하게 한 Next.js를 이용**
* **사용자 인터랙션 강화 → 스크롤 유도 가이드와 가로 스크롤바를 통해 동적인 사용자 경험 제공**
<br/>

## 📌트러블 슈팅
* **지뢰 찾기**
  * 문제 : LightHouse 성능 평가에서 Performance0점 
  * 원인
      * CSS에서 반복된 코드, 안 쓰는 Font들로 인한 초기 로딩 속도 저하,
      * 잦은 animation, overflow:hidden과 같은 속성들이 레이아웃 리플로우를 유발
  * 해결
    * Coverage이용해 사용하지 않는 css코드 삭제
    * 이미지 파일 AVIF 및 WebP로 교체
    * CSS Minifier 이용해 css 중복 코드 개선
    * Webpack을 사용한 css축소 (mini-css-extract-plugin 패키지 설치)
<br/>

## 📌시연영상 
 1. **오프닝 애니메이션** 
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/cf7a5c3f-f104-48c8-a126-e32fe5eccfa8" width="700" height="400">
</p>

 2. **지뢰 찾기**
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/a3edcf28-3d55-4d02-94c5-f8ec2c03fba5" width="700" height="400">
</p>

 3. **브레이크 아웃**
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/2288541a-0a06-4013-8474-874b55334273" width="700" height="400">
</p>

 4. **카드매치**
<p align="left">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/f237d2aa-d9bd-4415-9a6a-f58a88455bc4" width="700" height="400">
</p>

## 회고록 보러가기 
 <a href="https://2-doooo-2.tistory.com/135">
          <img src="https://img.shields.io/badge/Tistory-E74C3C?style=flat-square&logo=tistory&logoColor=white"> 
 </a>




