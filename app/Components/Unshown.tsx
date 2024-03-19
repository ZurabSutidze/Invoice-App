import React from "react";
type ShowProps = {
    Job?: JSX.Element[];
    Handle?: () => void;
  }
  

export default function Unshown() {
  return (
    <>

      <div className="flex flex-col items-center justify-center">
        <img
          src="./assets/illustration-empty.svg"
          alt="Empty"
          className="my-8"
        />

        <p className="text-[#0C0E16] text-[24px] font-bold tracking-tighter dark:text-white">
          There is nothing here
        </p>

        <p className="text-[#888EB0] text-[13px] font-bold w-[186px] text-center">
          Create an invoice by clicking the New button and get started
        </p>
      </div>
    </>
  );
}
