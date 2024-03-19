"use client";
import { useRouter } from "next/navigation";
import Data from "../../data.json";
import JobStyle from "./JobStyle";
import Unshown from "./Unshown";
import Header from "./Header";
import UnderHeader from "./UnderHeader";

export default function Main() {
  const router = useRouter();
  const Job: JSX.Element[] = [];

  Data.forEach((el, index) => {
    function GetColor() {
      switch (el.status) {
        case "paid":
          return "bg-[#33D69F]";
        case "pending":
          return "bg-[#FF8F00]";
        default:
          return "bg-[#5d638f]";
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

  const handleNewClick = () => {
    router.push("/new");
  };

  return (
    <>
    
      <UnderHeader
        Handle={handleNewClick}
        Job={Job}
      />
      {Job.length !== 0 && (
        <>
          {Job}
        </>
      )}
      {Job.length === 0 && (
          <Unshown/>
      )}
    </>
  );
}
