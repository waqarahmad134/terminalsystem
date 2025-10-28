"use client";

import Image from "next/image"
import RootHeader from "@/components/RootHeader";
import { useSidebar } from "@/context/SidebarContext";
import RootSidebar from "@/components/RootSidebar";
import bgImageWallet from "@/assets/Images/referralbg.png"

export default function LayoutContent({ children }) {
  const { isSidebarOpen } = useSidebar();
  
  return (
    <>
      <RootHeader />
      <main className={`transition-all duration-300 flex mt-[64px]`}>
        {/* <RootSidebar/> */}
        <div
          className='relative w-full'
        >
          <div className="min-h-[calc(100vh-64px)] ">
            <Image
              src={bgImageWallet}
              alt="Background"
              fill
              className="object-cover pointer-events-none select-none -z-10"
              priority
            />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
