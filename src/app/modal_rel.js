"use client";
import Image from "next/image";
import menu from "/public/menu.png";
import { useState } from "react";
import FeedSearchModal from "./modal.js";

export default function Modal_rel() {
  const [showModal, setShowModal] = useState(false);

  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal = () => setShowModal(!showModal);

  return (
    <>
      <Image className="menu_img" src={menu} onClick={clickModal} size={60} />
      {showModal && <FeedSearchModal clickModal={clickModal} />}
    </>
  );
}
