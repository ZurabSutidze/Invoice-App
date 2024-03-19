import React from 'react'

type Props = {
    Job?: JSX.Element[]
    Handle?: () => void;
}

export default function UnderHeader({Job , Handle}:Props) {
  return (
    <div className="flex flex-row my-8 items-center gap-[86px] ">
    <div className="flex flex-col">
      <p className="h-[22px]  text-[#0C0E16] text-[24px] font-bold dark:text-[#FFF]">
        Invoices
      </p>
      <p className="text-[#888EB0] my-[3px] text-[13px] font-medium dark:text-[#FFF]">
        {Job?.length} Invoices
      </p>
    </div>

    <div className="flex flex-row gap-[20px]">
      <div className="flex flex-row items-center gap-[10px] cursor-pointer">
        <p className="text-[#0C0E16] text-[15px] font-bold dark:text-[#FFF]">
          Filter
        </p>
        <img
          src="./assets/icon-arrow-down.svg"
          alt="arrow-down"
          className="h-[4px] w-[8px]"
        />
      </div>

      <div
        className="flex flex-row bg-[#7C5DFA] rounded-[24px] w-[90px] h-11 cursor-pointer"
        onClick={Handle}
      >
        <img
          src="./assets/icon-plus.svg"
          className="my-[5.5px] w-8 h-8 mx-2"
          alt="icon"
        />
        <p className="text-white text-[15px] font-bold text-sm tracking-tight my-[12.5px]">
          New
        </p>
      </div>
    </div>
  </div>
  )
}
