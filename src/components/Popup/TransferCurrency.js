"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function TransferCurrencyPopup({
  showTransfer,
  showConfirm,
  setShowTransfer,
  setShowConfirm,
}) {
  const [amount, setAmount] = useState("");

  if (!showTransfer) return null;
  const price = [100, 500, 1000, 2000];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-[rgba(21,27,48,0.6)] p-4">
      {/* Overlay click to close */}
      <div
        className="absolute inset-0"
        onClick={() => setShowTransfer(false)}
      ></div>

      {/* Popup content */}
      <div className="relative z-10 border border-[rgba(255,155,0,0.52)] rounded-2xl p-9 max-w-[510px] w-full bg-[rgba(0,0,0,0.8)] shadow-lg">
        {/* CLOSE ICON */}
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => setShowTransfer(false)}
        >
          <IoIosClose className="size-9" />
        </div>

        <h1 className="text-3xl text-left font-bold mb-3">Transfer Currency</h1>
        <p className="text-[rgba(156,163,175,1)] mb-6">
          Send currency to your linked casino accounts securely
        </p>

        {/* User Info */}
        <div className="max-w-[168px] font-poppins h-12 flex items-center gap-2 bg-[rgba(255,155,0,0.12)] border border-[rgba(255,155,0,1)] rounded-full px-4 mb-6">
          <Image
            src="/assets/images/marketplace/avatar.jpg"
            className="rounded-full size-9"
            alt="Logo"
            width={36}
            height={36}
          />
          <div className="flex flex-col text-left">
            <p className="font-semibold text-xs">Super Admin</p>
            <p className="text-white text-[10px]">Super Admin</p>
          </div>
        </div>

        {/* Balance Section */}
        <div className="py-4 px-6 mt-6 font-poppins flex items-center justify-between bg-[rgba(255,155,0,0.12)] border border-[rgba(255,155,0,1)] rounded-xl">
          <div>
            <p className="text-left text-[rgba(156,163,175,1)]">
              Available Balance
            </p>
            <p className="text-left text-white text-[43px] leading-12 font-bold">
              2500
            </p>
            <p className="text-left text-[rgba(156,163,175,1)]">Currency</p>
          </div>

          <div>
            <Image
              src="/assets/images/marketplace/coin.png"
              width={60}
              height={60}
              alt="Coin"
            />
          </div>
        </div>

        {/* Transfer Amount Section */}
        <div className="mt-6">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-white">
              Transfer Amount
              <span className="text-[rgba(251,176,59,1)]">*</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full h-[57px] flex items-center font-medium rounded-md bg-[rgba(19,25,46,1)] border border-[rgba(251,176,59,0.49)] px-4 py-3 text-white placeholder-[rgba(164,164,164,1)] outline-none focus:border-orange-400 transition"
            />

            <div className="flex justify-between gap-2">
              {price.map((item, index) => (
                <div
                  onClick={() => setAmount(item)}
                  className={`h-10 w-full border border-[rgba(251,176,59,0.49)] rounded-lg flex justify-center items-center cursor-pointer transition ${
                    amount == item
                      ? "bg-[rgba(255,155,0,0.4)] border-[rgba(251,176,59,1)]"
                      : "bg-[rgba(255,155,0,0.11)] hover:bg-[rgba(255,155,0,0.2)]"
                  }`}
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setShowTransfer(false)}
              className="w-full flex justify-center items-center h-12 font-semibold rounded-lg border border-[rgba(202,138,4,1)] bg-[rgba(20,26,47,1)]"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              className="w-full flex justify-center items-center h-12 font-semibold rounded-lg border border-[rgba(202,138,4,1)] bg-[rgba(255,155,0,1))]"
            >
              Transfer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
