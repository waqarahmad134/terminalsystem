"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useRouting } from "@/context/RoutingContext"
import React, { useEffect, useState } from "react"
import gamesData from "@/app/games.json"
import { ChevronDown, FilterIcon, RefreshCcw, ArrowDown } from "lucide-react"
import { getApi, postApi } from "@/lib/apiClient"


import toast from "react-hot-toast"

const purchaseOptions = [
  { tokens: 11000, bonus: 1800, price: 99.99 },
  { tokens: 10000, bonus: 900, price: 89.99 },
  { tokens: 9500, bonus: 750, price: 69.99 },
  { tokens: 5000, bonus: 500, price: 49.99 },
  { tokens: 3000, bonus: 400, price: 20.99 },
  { tokens: 1000, bonus: 150, price: 10.99 },
]

const transactions = [
  {
    id: 1,
    type: "credit",
    description: "Added BTX tokens to wallet",
    subDescription: null,
    amount: "+39 BTX",
    time: "Just now",
    status: "Completed",
  },
  {
    id: 2,
    type: "credit",
    description: "Reward from Space Miners",
    subDescription: "Game: Space Miners",
    amount: "+86 BTX",
    time: "Just now",
    status: "Completed",
  },
  {
    id: 3,
    type: "credit",
    description: "Added BTX tokens to wallet",
    subDescription: null,
    amount: "+62 BTX",
    time: "1m ago",
    status: "Completed",
  },
  {
    id: 4,
    type: "credit",
    description: "Added BTX tokens to wallet",
    subDescription: null,
    amount: "+12 BTX",
    time: "6m ago",
    status: "Completed",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function TokenWalletPage() {
  const { navigateWithLoading } = useRouting()
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const { casinos } = gamesData
  const [friendsData, setFriendsData] = useState(null)
  const [activeMainTab, setActiveMainTab] = useState("Token Operations")
  const [activeSubTab, setActiveSubTab] = useState("Transfer to User")
  const [balance, setBalance] = useState("0")

  const handleTransfer = async () => {
    if (!recipient || !amount) {
      alert("Please enter both recipient and amount.")
      return
    }
    try {
      setLoading(true)
      const res = await postApi("/wallet/transaction", {
        action: "transfer",
        amount: amount,
        recipient: recipient,
      })
      toast("Tokens transferred successfully!")
      setAmount("")
      setRecipient("")
    } catch (err) {
      console.error("Transfer failed:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleExternalTransfer = async () => {
    const externalGameData =
      typeof window !== "undefined" ? localStorage.getItem("externalGameData") : null
    // if (!externalGameData) {
    //   alert("Please Connect Casino First")
    //   return
    // }
    try {
      const res = await fetch("https://snurr.casino/api/add-user-token")
      const data = await res.json()
      console.log("🚀 ~ handleExternalTransfer ~ data:", data)
      toast("Tokens transferred successfully!")
    } catch (err) {
      console.error("Transfer failed:", err)
    } finally {
      setLoading(false)
    }
  }

  const getFriends = async () => {
    try {
      const data = await getApi("/friends")
      setFriendsData(data)
    } catch (err) {
      console.error("Friends fetch error:", err)
    }
  }

  const userProfileApi = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null

      const response = await fetch(`${API_BASE_URL}/games/user-profile/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          game_id: "4e375a20-f793-44e1-a9ef-f140dc5ea94a",
          game_user_id: "casino_user_12345",
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API Response:", data)
      return data
    } catch (error) {
      console.error("Error calling API:", error)
      return null
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBalance(localStorage.getItem("balance") || "0")
    }
    getFriends()
    userProfileApi()
  }, [])

  const mainTabs = ["Token Operations", "Transactions"]
  const subTabs = ["Transfer to User", "Game Transfer"]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen pb-10"
    >
      <div className="container m-auto text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 mb-5"
        >
          <h2 className="font-bebas-neue tracking-wide text-5xl">
            BTX Token Wallet
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex-col sm:flex-row inline-flex rounded-xl justify-start space-x-4 mb-4 p-2 bg-[#1a0d2e]"
        >
          {mainTabs.map((tab, index) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMainTab(tab)}
              className={`px-6 py-2 rounded transition-colors duration-200 cursor-pointer ${
                activeMainTab === tab
                  ? "bg-[#7A59FF] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
        {/* Main Content Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-[#2b0a59] p-6 rounded-xl shadow-xl min-h-[500px]"
        >
          <AnimatePresence mode="wait">
            {activeMainTab === "Token Operations" && (
              <motion.div
                key="token-ops"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex space-x-4 mb-6 p-1 bg-[#1a0d2e] rounded-lg">
                  {subTabs.map((tab, index) => (
                    <motion.button
                      key={tab}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveSubTab(tab)}
                      className={`flex-1 px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                        activeSubTab === tab
                          ? "bg-[#7A59FF] text-white"
                          : "text-gray-400"
                      }`}
                    >
                      {tab}
                    </motion.button>
                  ))}
                </div>


                {activeSubTab === "Transfer to User" && (
                  <motion.div
                    key="transfer-user"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border border-[#52388E] rounded-2xl p-4"
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold">Transfer to User</h2>
                      <p className="text-lg">
                        Send BTX to another user on the platform.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <motion.div variants={itemVariants}>
                        <label className="block text-base text-gray-200 mt-5 mb-2">
                          Recipient Username
                        </label>
                        <select
                          id="transfer_type"
                          required
                          className="px-6 py-4 w-full text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                          value={recipient}
                          onChange={(e) => setRecipient(e.target.value)}
                        >
                          <option value="" disabled>
                            Enter Username
                          </option>
                          {friendsData?.map((frd, index) => (
                            <option
                              className="text-black"
                              key={index}
                              value={frd?.friend_username}
                            >
                              {frd?.friend_username}
                            </option>
                          ))}
                        </select>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-base text-gray-200 mt-5 mb-2">
                          Amount (BTX)
                        </label>
                        <div className="relative">
                          <input
                            id="transfer_amount"
                            type="number"
                            placeholder="10"
                            required
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 w-full py-3 text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="text-center mt-8">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        onClick={handleTransfer}
                        className={`cursor-pointer w-full px-6 py-3 font-semibold rounded-md transition-colors duration-200 ${
                          loading
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-[#7A59FF] hover:bg-[#6c4fe0]"
                        }`}
                      >
                        {loading ? "Processing..." : "Transfer Tokens"}
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "Game Transfer" && (
                  <motion.div
                    key="game-transfer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border border-[#52388E] rounded-2xl p-4"
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold">
                        Transfer to Casino (First connect )
                      </h2>
                      <p className="text-lg">
                        Add BTX tokens to your casino account.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <motion.div variants={itemVariants}>
                        <label className="block text-base text-gray-200 mt-5 mb-2">
                          Select a Casino
                        </label>
                        <select
                          id="transfer_type"
                          required
                          className="px-6 py-4 w-full text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                        >
                          <option value="" disabled selected>
                            Enter a Game Name
                          </option>
                          {casinos?.map((game, index) => (
                            <option
                              className="text-black"
                              key={index}
                              value={game?.id}
                            >
                              {game?.title}
                            </option>
                          ))}
                        </select>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-base text-gray-200 mt-5 mb-2">
                          Amount (BTX)
                        </label>
                        <div className="relative">
                          <input
                            id="transfer_amount"
                            type="number"
                            placeholder="10"
                            required
                            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 w-full py-3 text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="text-center mt-8">
                      <button
                        onClick={handleExternalTransfer}
                        className="cursor-pointer w-full px-6 py-3 bg-[#7A59FF] hover:bg-[#6c4fe0] font-semibold rounded-md transition-colors duration-200"
                      >
                        Transfer Tokens To Casino
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeMainTab === "Transactions" && (
              <motion.div
                key="transactions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 font-sans antialiased flex items-center justify-center"
              >
                <div className="w-full rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md bg-gradient-to-br from-indigo-900 to-purple-900 border border-indigo-700">
                  {/* Header section with title and action buttons */}
                  <div className="flex justify-between items-center pb-6 border-b border-indigo-700 mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      Transaction History
                    </h2>
                    <div className="flex items-center space-x-4">
                      {/* Filter button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-white text-base py-2 px-4 border border-[#E2E8F0] rounded-lg"
                      >
                        <span className="flex items-center gap-2">
                          <FilterIcon className="h-5 w-5" />
                          All Transactions
                        </span>
                      </motion.button>

                      {/* Refresh button */}
                      <motion.button
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                      >
                        <RefreshCcw className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4"
                  >
                    {transactions.map((transaction) => (
                      <motion.div
                        key={transaction.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center justify-between p-4 rounded-2xl bg-indigo-800 bg-opacity-30 border border-indigo-700 border-opacity-50 hover:bg-opacity-40 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="bg-white bg-opacity-20 p-2 rounded-full">
                            <ArrowDown className="text-green-400 h-6 w-6" />
                          </div>

                          <div>
                            <p className="text-white font-medium">
                              {transaction.description}
                            </p>
                            {transaction.subDescription && (
                              <p className="text-slate-400 text-sm">
                                {transaction.subDescription}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col items-end space-y-1">
                          <p className="text-white text-base">
                            {transaction.time}
                          </p>
                          <div className="flex items-center gap-3">
                            <p className="text-green-400 font-semibold text-base">
                              {transaction.amount}
                            </p>
                            <span className="bg-[#22C55E] text-white text-xs px-2 py-1 rounded-md">
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
