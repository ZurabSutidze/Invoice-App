import React from "react";

type JobStyleProps = {
  index: number;
  id: string;
  clientName: string;
  total: number;
  formattedPaymentDue: string;
  color: () => string;
  status: string;
};

export default function JobStyle({
  index,
  id,
  clientName,
  total,
  formattedPaymentDue,
  color,
  status,
}: JobStyleProps) {
  return (
    <div
      className="w-[357px] h-[154px] rounded-[8px] box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.10) bg-white my-4 relative dark:bg-[#1E2139]"
      key={index}
    >
      <div className="flex flex-row gap-[145px] mx-6 my-6">
        <p className="text-[#0C0E16] dark:text-[#fff] text-[15px] font-bold tracking-tight text-sm">
          <span className="text-[#7E88C3] text-[15px] font-bold tracking-tight text-sm">
            #
          </span>
          {id}
        </p>
        <p className="text-[#858BB2] dark:text-[#fff] text-[12px] tracking-tightest text-sm">
          {clientName}
        </p>
      </div>

      <div className="flex flex-row gap-[83px] mx-6 my-4">
        <div className="flex flex-col my-3">
          <p className="text-[#7E88C3] dark:text-[#DFE3FA] text-[13px] font-medium tracking-tightest text-sm">
            {formattedPaymentDue}
          </p>
          <p className="text-[#0C0E16] dark:text-[#fff] text-[15px] font-bold tracking-tight my-[9px]">
            £ {total}
          </p>
        </div>

        <div
          className={`w-[104px] h-[40px] ${color()} justify-center items-center bg-opacity-[0.271] flex flex-row rounded-[6px] absolute right-[24px] bottom-[27px] gap-[8px]`}
        >
          <div className={`w-[8px] h-[8px] ${color()} rounded-full`}></div>
          <p className={`text-${color()}`}>{status}</p>
        </div>
      </div>
    </div>
  );
}
