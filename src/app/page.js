"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Settings, User, Coins } from "lucide-react";
import Navbar from "@/components/Navbar";
import TransferCurrencyPopup from "@/components/Popup/TransferCurrency";
import ConfirmTransaction from "@/components/Popup/ConfirmTransaction";

export default function Home() {
  const router = useRouter();
  const [showTransfer, setShowTransfer] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // if (!token) {
    //   toast.error("Please log in first");
    //   router.push("/login");
    // }
  }, [router]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br text-white px-6 py-4">
        <Navbar />

        {/* Hero Section */}
        <section className="mt-8 bg-[rgba(0,0,0,0.92)] rounded-2xl border border-orange-500/40 px-8 pt-8 pb-12 relative overflow-hidden">
          <Image
            src="/assets/images/marketplace/landing-background.jpg"
            alt="Casino"
            fill
            className="absolute inset-0 object-cover opacity-20 rounded-2xl"
          />

          <div className="relative z-10 text-center md:text-left">
            <h1 className="font-playfair-display-sc md:text-[75px] text-[40px] text-center font-extrabold mb-3">
              PROPER <span className="text-[rgba(245,149,0,1)]">SIX</span>{" "}
              TERMINAL
            </h1>
            <p className="md:text-2xl text-lg font-poppins text-white mb-6 max-w-[720px] text-center mx-auto">
              Experience The <span className="text-orange-400">Ultimate</span>{" "}
              Casino Gaming With Exclusive{" "}
              <span className="text-[rgba(245,149,0,1)]">Bonuses</span> And{" "}
              <span className="text-[rgba(245,149,0,1)]">VIP</span> Treatment.
              Join Thousands Of Players Competing For Massive Prizes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={() => setShowTransfer(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-xl h-12 flex justify-center items-center bg-transparent border border-white text-white px-12 backdrop-blur-sm rounded-full transition"
              >
                Connect Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-xl h-12 flex justify-center items-center bg-transparent border border-white text-white px-8 backdrop-blur-sm rounded-full transition"
              >
                Transfer Currency
              </motion.button>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="mt-10">
          <h2 className="text-3xl font-poppins font-semibold mb-3">Games</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a1c20] rounded-lg border border-orange-500/20 flex justify-center items-center hover:border-orange-400 transition"
              >
                <Image
                  src="/assets/images/marketplace/game.png"
                  alt="games"
                  width={440}
                  height={250}
                  className="w-full rounded-md object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <TransferCurrencyPopup
        showTransfer={showTransfer}
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        setShowTransfer={setShowTransfer}
      />

      <ConfirmTransaction
        showTransfer={showTransfer}
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        setShowTransfer={setShowTransfer}
      />
    </>
  );
}
