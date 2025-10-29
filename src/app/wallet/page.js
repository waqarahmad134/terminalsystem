import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export const transactions = [
  {
    id: "1",
    type: "received",
    from: "jhon",
    date: "2026-10-28",
    chips: "+500 Chips",
    status: "Completed",
    iconPath: "/assets/icons/user.png",
  },
  {
    id: "2",
    type: "sent",
    to: "jhoni",
    date: "2026-10-28",
    chips: "+500 Chips",
    status: "Completed",
    iconPath: "/assets/icons/user.png",
  },
  {
    id: "3",
    type: "sent",
    to: "jhoni",
    date: "2026-10-28",
    chips: "+500 Chips",
    status: "Completed",
    iconPath: "/assets/icons/user.png",
  },
  {
    id: "4",
    type: "casinoTransfer",
    description: "Casino Transfer to Poker Club",
    date: "2026-10-28",
    chips: "+500 Chips",
    status: "Completed",
    iconPath: "/assets/icons/user.png",
  },
  {
    id: "5",
    type: "casinoTransfer",
    description: "Casino Transfer to Poker Club",
    date: "2026-10-28",
    chips: "+500 Chips",
    status: "Completed",
    iconPath: "/assets/icons/user.png",
  },
];

const Wallet = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-12 md:px-12 px-5">
        <h2 className="text-4xl text-center text-[rgba(255,155,0,1)]">
          Wallet
        </h2>

        {/* TOTAL PLACE */}
        <div className="mt-12 bg-[rgba(26,26,47,1)] rounded-3xl border border-[rgba(255,155,0,1)] md:px-14 px-6 md:py-8 py-5">
          <div className="flex gap-8 justify-between items-center md:flex-nowrap flex-wrap">
            <div>
              <h2 className="text-3xl mb-3">Total Balance</h2>
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/images/marketplace/btxicon.png"
                  width={30}
                  height={30}
                  className="size-8"
                />
                <p className="text-2xl">2500 Chips</p>
              </div>
            </div>

            <div className="flex gap-3 md:w-[31%] w-full md:flex-nowrap flex-wrap">
              <button className="text-xl bg-[rgba(255,155,0,0.17)] w-full flex justify-center items-center h-14 rounded-full border border-[rgba(202,138,4,1)]">
                Add Money
              </button>
              <button className="text-xl w-full flex justify-center items-center h-14 rounded-full border border-[rgba(202,138,4,1)] bg-[rgba(255,155,0,1))]">
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* QUICK CALL */}
        <div className="mt-12">
          <h2 className="text-4xl text-white">Quick actions</h2>

          <div className="mt-12 flex md:gap-12 gap-6 justify-between md:flex-nowrap flex-wrap">
            <div className="flex w-full flex-col gap-5  items-center bg-[rgba(26,26,47,1)] rounded-3xl border border-[rgba(255,155,0,1)] px-9 py-8">
              <Image src={"/assets/icons/user.png"} width={48} height={48} />
              <h3 className="text-xl font-bold">Send to User</h3>
              <p className="text-lg text-center ">Transfer Chips to another Player</p>
            </div>

            <div className="flex w-full flex-col gap-5  items-center bg-[rgba(26,26,47,1)] rounded-3xl border border-[rgba(255,155,0,1)] px-9 py-8">
              <Image
                src={"/assets/icons/transferToCasino.png"}
                width={48}
                height={48}
              />
              <h3 className="text-xl font-bold">Transfer to Casino</h3>
              <p className="text-lg text-center ">Move Chips to Physical Casino</p>
            </div>

            <div className="flex w-full flex-col gap-5  items-center bg-[rgba(26,26,47,1)] rounded-3xl border border-[rgba(255,155,0,1)] px-9 py-8">
              <Image src={"/assets/icons/wallet.png"} width={48} height={48} />
              <h3 className="text-xl font-bold">Request Money</h3>
              <p className="text-lg text-center ">Request Chips from another User</p>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="my-12">
          <h2 className="text-4xl text-white mb-12">Transaction History</h2>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

const TransactionList = () => {
  return (
    <div className="bg-[rgba(26,26,47,1)] rounded-xl shadow-lg mx-auto border border-[rgba(255,155,0,1)]">
      {transactions.map((transaction, index) => (
        <div
          key={transaction.id}
          className={`flex items-center md:flex-row flex-col md:justify-between justify-center px-4 md:px-6 md:flex-nowrap flex-wrap md:gap-0 gap-6 py-8 ${
            index < transactions.length - 1
              ? "border-b border-yellow-700/30"
              : ""
          } last:border-b-0`}
        >
          <div className="flex items-center md:flex-row flex-col md:space-x-4 md:gap-0 gap-2 space-x-0 md:justify-start justify-center">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              <Image
                src={transaction.iconPath}
                alt="icon"
                width={48}
                height={48}
                className="md:min-w-12 min-w-8"
              />
            </div>

            {/* Transaction Details */}
            <div className="flex flex-col md:items-start items-center">
              <span className="text-white text-lg font-medium">
                {transaction.type === "received" &&
                  `Received from ${transaction.from}`}
                {transaction.type === "sent" && `Send to ${transaction.to}`}
                {transaction.type === "casinoTransfer" &&
                  transaction.description}
              </span>
              <span className="text-gray-400 text-sm">{transaction.date}</span>
            </div>
          </div>

          {/* Chips and Status */}
          <div className="flex flex-col items-end">
            <span className="text-[rgba(0,255,94,1)] text-base">
              {transaction.chips}
            </span>
            <span className="bg-[rgba(52,211,153,0.1)] px-3 py-1 rounded-full text-[rgba(0,255,94,1)] text-sm">
              {transaction.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wallet;
