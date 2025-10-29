"use client";
import React, { useEffect, useState } from "react";
import { Bell, Coins, Settings, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="h-24 flex items-center justify-between border-b border-[#2a2a2a] px-0 md:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Image
          src="/main-logo.png"
          className="md:h-[142px] md:w-[99px] size-20"
          alt="Logo"
          width={142}
          height={99}
        />
        <h1 className="text-xl font-poppins font-semibold tracking-wide">
          Marketplace
        </h1>
      </div>

      {/* Hamburger (Toggle Button) */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden size-11 flex justify-center items-center rounded-full border border-[rgba(255,155,0,1)] hover:bg-[rgba(255,155,0,0.1)] transition"
      >
        {menuOpen ? (
          <X className="size-6 text-[rgba(255,155,0,1)]" />
        ) : (
          <Menu className="size-6 text-[rgba(255,155,0,1)]" />
        )}
      </button>

      {/* Right Side */}
      {menuOpen && (
        <div
          className="flex items-center gap-4 transition-all duration-300 
          absolute top-[100px] left-0 flex-wrap z-[99] bg-[#151b30] p-4 justify-between 
          md:static md:bg-transparent md:flex-nowrap md:p-0 md:justify-start"
        >
          {/* Chips */}
          <div className="md:flex-auto flex-1/2 font-poppins h-12 text-lg flex items-center gap-2 bg-[rgba(255,155,0,0.12)] border border-[rgba(255,155,0,1)] px-4 py-2 rounded-full font-medium">
            <Coins className="size-6 text-[rgba(255,155,0,1)]" />
            <span>2,500 Chips</span>
          </div>

          {/* Buttons */}
          {[Bell, Settings].map((Icon, idx) => (
            <button
              key={idx}
              className="size-[50px] flex justify-center items-center rounded-full bg-[rgba(255,139,0,0.05)] border border-[rgba(255,155,0,1)] hover:bg-[rgba(255,155,0,0.15)] transition"
            >
              <Icon className="size-5 text-white" />
            </button>
          ))}

          {/* User Info */}
          <div className="md:flex-auto flex-1/2 font-poppins h-12 flex items-center gap-2 bg-[rgba(255,155,0,0.12)] border border-[rgba(255,155,0,1)] rounded-full px-4">
            <Image
              src="/assets/images/marketplace/avatar.jpg"
              alt="User"
              width={36}
              height={36}
              className="rounded-full size-9"
            />
            <div className="flex flex-col leading-tight">
              <p className="font-semibold text-xs">Super Admin</p>
              <p className="text-white text-[10px] opacity-80">Administrator</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
