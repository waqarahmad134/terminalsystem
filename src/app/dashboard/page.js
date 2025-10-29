"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Check,
  Shield,
  ShieldAlertIcon,
  ShoppingCart,
  Tag,
  Tags,
} from "lucide-react";
import Image from "next/image";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("chips");

  const UserMarketplaceCard = [
    {
      id: 1,
      username: "Ahmed King 786",
      change: "-8%",
      amount: "2,500 BTX",
      pricePerToken: "$0.0090",
      totalPrice: "$22.50",
      date: "10/28/2025",
    },
    {
      id: 2,
      username: "Crypto Hero",
      change: "+5%",
      amount: "1,200 BTX",
      pricePerToken: "$0.0120",
      totalPrice: "$14.40",
      date: "10/25/2025",
    },
    {
      id: 3,
      username: "Token Trader",
      change: "-3%",
      amount: "3,000 BTX",
      pricePerToken: "$0.0085",
      totalPrice: "$25.50",
      date: "10/24/2025",
    },
    {
      id: 4,
      username: "BTX Master",
      change: "+10%",
      amount: "4,200 BTX",
      pricePerToken: "$0.0110",
      totalPrice: "$46.20",
      date: "10/22/2025",
    },
    {
      id: 5,
      username: "Digital Boss",
      change: "-2%",
      amount: "1,800 BTX",
      pricePerToken: "$0.0100",
      totalPrice: "$18.00",
      date: "10/20/2025",
    },
  ];

  const AvatarMarketplaceCard = [
    {
      id: 1,
      name: "Meow Avatar",
      price: "$10",
      image: "/assets/images/marketplace/avatar.png",
    },
    {
      id: 2,
      name: "Cyber Cat",
      price: "$12",
      image: "/assets/images/marketplace/avatar.png",
    },
    {
      id: 3,
      name: "Pixel Hero",
      price: "$9",
      image: "/assets/images/marketplace/avatar.png",
    },
    {
      id: 4,
      name: "Shadow Bot",
      price: "$15",
      image: "/assets/images/marketplace/avatar.png",
    },
    {
      id: 5,
      name: "Golden Mask",
      price: "$18",
      image: "/assets/images/marketplace/avatar.png",
    },
    {
      id: 6,
      name: "Crypto King",
      price: "$20",
      image: "/assets/images/marketplace/avatar.png",
    },
    {
      id: 7,
      name: "BTX Warrior",
      price: "$25",
      image: "/assets/images/marketplace/avatar.png",
    },
    {
      id: 8,
      name: "Digital Monk",
      price: "$30",
      image: "/assets/images/marketplace/avatar.png",
    },
  ];

  const cardsData = [
    {
      id: 1,
      icon: "/assets/images/marketplace/btxicon.png",
      amount: 1000,
      name: "BTX Tokens",
      totalPrice: "10",
      perToken: "$0.0100",
    },
    {
      id: 2,
      icon: "/assets/images/marketplace/btxicon.png",
      amount: 5000,
      name: "BTX Tokens",
      totalPrice: "50",
      perToken: "$0.0100",
    },
    {
      id: 3,
      icon: "/assets/images/marketplace/btxicon.png",
      amount: 10000,
      name: "BTX Tokens",
      totalPrice: "100",
      perToken: "$0.0100",
    },
    {
      id: 1,
      icon: "/assets/images/marketplace/btxicon.png",
      amount: 1000,
      name: "BTX Tokens",
      totalPrice: "10",
      perToken: "$0.0100",
    },
    {
      id: 2,
      icon: "/assets/images/marketplace/btxicon.png",
      amount: 5000,
      name: "BTX Tokens",
      totalPrice: "50",
      perToken: "$0.0100",
    },
    {
      id: 3,
      icon: "/assets/images/marketplace/btxicon.png",
      amount: 10000,
      name: "BTX Tokens",
      totalPrice: "100",
      perToken: "$0.0100",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Tabs Section */}
      <div className="min-h-screen text-white px-6 py-8">
        <div className="">
          {/* Tabs Header */}
          <div className="flex gap-4 bg-[rgba(29,29,38,1)] mx-auto max-w-[330px] rounded-full mb-6">
            <button
              onClick={() => setActiveTab("chips")}
              className={`px-14 rounded-full font-semibold transition-all h-10 flex items-center text-sm duration-300 ${
                activeTab === "chips"
                  ? "bg-[rgba(255,155,0,1)] text-black"
                  : "bg-transparent"
              }`}
            >
              Chips
            </button>

            <button
              onClick={() => setActiveTab("avatar")}
              className={`px-14 rounded-full font-semibold transition-all h-10 flex items-center text-sm duration-300 ${
                activeTab === "avatar"
                  ? "bg-[rgba(255,155,0,1)] text-black"
                  : "bg-transparent"
              }`}
            >
              Avatar
            </button>
          </div>

          {/* Tabs Content */}
          <div className="md:p-8 p-0">
            {activeTab === "chips" && (
              <>
                {/* Official BTX Packages */}
                <div>
                  {/* HEADING */}
                  <div className="flex md:flex-nowrap flex-wrap md:gap-8 gap-2 items-center mb-10">
                    <h2 className="text-xl font-bold">Official BTX Packages</h2>
                    <p className="w-fit px-3 rounded-lg flex gap-2 items-center text-[rgba(52,211,153,1)] text-xs p-2  bg-[rgba(52,211,153,0.1)]">
                      <Check
                        size={20}
                        className="text-black rounded-full size-4 bg-[rgba(52,211,153,1)]"
                      />
                      <span className="font-medium">
                        Verified by System Terminal
                      </span>
                    </p>
                  </div>

                  {/* CARDS */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {cardsData.map((card) => (
                      <div
                        key={card.id}
                        className="bg-[rgba(30,31,43,1)] border border-[rgba(30,31,43,1)] px-4 py-7 rounded-xl"
                      >
                        <Image
                          src={card.icon}
                          width={36}
                          height={36}
                          alt={card.name}
                          className="size-12 mx-auto"
                        />

                        <p className="text-4xl text-center font-bold py-3 text-[rgba(226,232,240,1)]">
                          {card.amount}
                        </p>

                        <p className="mb-10 text-sm text-center text-[rgba(148,163,184,1)]">
                          {card.name}
                        </p>

                        <div className="flex justify-between">
                          <span className="text-[rgba(148,163,184,1)]">
                            Total Price
                          </span>
                          <span className="text-white">{card.totalPrice}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[rgba(148,163,184,1)]">
                            Per Token
                          </span>
                          <span className="text-white">{card.perToken}</span>
                        </div>

                        <button className="flex gap-2 mx-auto mt-6 items-center justify-center bg-[rgba(255,155,0,0.37)] h-12 px-7 rounded-full font-bold">
                          <ShoppingCart
                            size={22}
                            className="text-white fill-white"
                          />
                          Buy Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Marketplace */}
                <div className="mt-16">
                  {/* HEADING */}
                  <div className="flex gap-8 items-center mb-10">
                    <h2 className="text-xl font-bold">Official BTX Packages</h2>
                    <p className="w-fit px-3 rounded-lg flex gap-2 items-center text-white text-xs p-2  bg-[rgba(255,155,0,1))]">
                      <span className="font-medium">Peer-to-Peer Trading</span>
                    </p>
                  </div>

                  {/* CARDS */}
                  <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4">
                    {UserMarketplaceCard.map((item, index) => (
                      <div className="bg-[#141827] text-white rounded-2xl p-5 border border-[#1e2238] shadow-[0_0_20px_rgba(0,0,0,0.3)] max-w-sm w-full">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[url('/assets/images/user-pattern.png')] bg-cover bg-center flex items-center justify-center text-lg font-bold text-black">
                              <span className="bg-[rgba(255,155,0,1)] w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                                {item.username.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">
                                {item?.username}
                              </h3>
                              <p className="text-sm text-[rgba(148,163,184,1)]">
                                Listed {item?.date}
                              </p>
                            </div>
                          </div>

                          <span className="px-2 py-1 text-sm rounded-md font-semibold bg-[rgba(52,211,153,0.1)] text-[rgba(52,211,153,1)]">
                            {item?.change}
                          </span>
                        </div>

                        <hr className="my-4 border-gray-700/50" />

                        {/* Details */}
                        <div className="space-y-2">
                          <p className="text-[rgba(148,163,184,1)] flex justify-between">
                            Amount:{" "}
                            <span className="text-white font-medium">
                              {item?.amount}
                            </span>
                          </p>
                          <p className="text-[rgba(148,163,184,1)] flex justify-between">
                            Per Token:{" "}
                            <span className="text-white font-medium">
                              {item?.pricePerToken}
                            </span>
                          </p>
                          <p className="text-[rgba(148,163,184,1)] text-lg flex justify-between">
                            Total Price:
                            <span className="text-white font-bold">
                              {item?.totalPrice}
                            </span>
                          </p>
                        </div>

                        {/* Button */}
                        <button className="w-full mt-5 bg-[rgba(255,155,0,1)] text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#ffbf4d] transition-all">
                          <ShoppingCart
                            size={18}
                            className="text-black fill-black"
                          />
                          Buy Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "avatar" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {AvatarMarketplaceCard.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-xl items-center flex flex-col bg-[rgba(26,26,47,1)] border border-[rgba(255,155,0,1)]"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={140}
                      height={140}
                      className="size-[140px] rounded-lg"
                    />

                    <div className="flex justify-between w-full font-bold mt-4">
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                    </div>

                    <button className="h-8 max-w-[80%] font-bold w-full mt-5 bg-[rgba(255,155,0,1)] text-black rounded-xl flex items-center justify-center gap-4 hover:bg-[#ffbf4d] transition-all">
                      <Tag size={20} className="text-black" />
                      Purchase
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
