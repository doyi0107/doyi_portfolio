"use client"
import { useState } from "react";
import router from "next/router";

const FeedSearchModal = (props) => {
  // 전달받은 state 함수
  const { clickModal } = props;

  // 글과 관련이 없음
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const handleChange = (e) => setSearch(e.target.value);
  const typeChange = (e) => setType(e.target.value);
  const clickSearch = async () => {};
  return (
    // 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다.
    <>
      <h1 onClick={clickModal}>테스트 중입니다만 </h1>
    </>
  );
};

export default FeedSearchModal;
