"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function ConfirmTransaction({
  showTransfer,
  showConfirm,
  setShowTransfer,
  setShowConfirm,
}) {
  const [amount, setAmount] = useState("");

  if (!showConfirm) return null;
  const price = [100, 500, 1000, 2000];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-[rgba(21,27,48,0.6)] p-4">
      {/* Overlay click to close */}
      <div
        className="absolute inset-0"
        onClick={() => setShowConfirm(false)}
      ></div>

      {/* Popup content */}
      <div className="relative z-10 border border-[rgba(255,155,0,0.52)] rounded-2xl p-12 max-w-[654px] w-full bg-[rgba(21,27,48,0.53)] shadow-lg">
        <h1 className="text-3xl text-left font-bold mb-3">
          Confirm Transaction!
        </h1>
        <p className="text-white text-xl mb-6">
          Do you authorize the currency transfer to the Propersix Terminal?
        </p>

        <p className="text-white my-8 text-center">Are you sure ?</p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setShowConfirm(false)}
            className="w-[131px] flex justify-center items-center h-12 font-semibold rounded-lg text-black bg-[rgba(156,163,175,1))]"
          >
            Cancel
          </button>
          <button className="w-[131px] flex justify-center items-center h-12 font-semibold rounded-lg border border-[rgba(202,138,4,1)] bg-[rgba(255,155,0,0.2)))]">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
