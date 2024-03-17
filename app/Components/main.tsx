"use client";
import React, { useState } from "react";
import Data from "../../data.json";
import JobStyle from "./JobStyle";

export default function Main() {
  type Invoice = {
    id: string;
    paymentDue: string;
    clientName: string;
    status: string;
    total: number;
  };

  const Job: JSX.Element[] = [];

  Data.forEach((el, index) => {
    function GetColor() {
      switch (el.status) {
        case "paid":
          return "bg-[#33D69F]";
        case "pending":
          return "bg-[#FF8F00]";
        default:
          return "bg-[#373B53]";
      }
    }

    const paymentDueDate = new Date(el.paymentDue);
    const formattedPaymentDue = `Due ${paymentDueDate.getDate()} ${new Intl.DateTimeFormat(
      "en",
      { month: "short" }
    ).format(paymentDueDate)} ${paymentDueDate.getFullYear()}`;

    Job.push(
      <JobStyle
        clientName={el.clientName}
        color={GetColor}
        formattedPaymentDue={formattedPaymentDue}
        id={el.id}
        index={index}
        status={el.status}
        total={el.total}
        key={index}
      />
    );
  });

  return (
    <>
      <div className="flex flex-row my-8 items-center gap-[86px] ">
        <div className="flex flex-col">
          <p className="h-[22px]  text-[#0C0E16] text-[24px] font-bold dark:text-[#FFF]">
            Invoices
          </p>
          <p className="text-[#888EB0] my-[3px] text-[13px] font-medium dark:text-[#FFF]">
            {Job.length} Invoices
          </p>
        </div>

        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row items-center gap-[10px] ">
            <p className="text-[#0C0E16] text-[15px] font-bold dark:text-[#FFF]">
              Filter
            </p>
            <img
              src="./assets/icon-arrow-down.svg"
              alt=""
              className="h-[4px] w-[8px]"
            />
          </div>

          <div className="flex flex-row bg-[#7C5DFA] rounded-[24px] w-[90px] h-11 ">
            <img
              src="./assets/icon-plus.svg"
              className="my-[5.5px] w-8 h-8 mx-2"
              alt=""
            />
            <p className="text-white text-[15px] font-bold text-sm tracking-tight my-[12.5px]">
              New
            </p>
          </div>
        </div>
      </div>

      {Job}
    </>
  );
}
