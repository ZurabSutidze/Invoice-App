"use client";
import React, { useState } from "react";

export default function Header() {
  const [sun, setSun] = useState(true);

  function changeDarkTheme() {
    setSun(!sun);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <div className="bg-[#373B53] w-[375px] h-[72px] flex flex-row items-center gap-[178px]">
        <div>
          <img src="./assets/logo.svg" alt="" />
        </div>

        <div className="flex flex-row items-center ">
          <img
            onClick={changeDarkTheme}
            className="h-[20px] w-[20px] cursor-pointer"
            src={`./assets/icon-${sun ? "sun" : "moon"}.svg`}
            alt=""
          />

          <div className="h-[72px] bg-[#494E6E] w-[1px] mx-6"></div>

          <img
            src="./assets/image-avatar.jpg"
            className="w-8 h-8 rounded-[32px] "
            alt=""
          />
          </div>
          </div>

        
    </>
  );
}
