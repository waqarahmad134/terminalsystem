"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { useRouting } from "@/context/RoutingContext"
import hogwarts from "@/assets/Images/hogwarts.jpg"
import gamesData from "@/app/games.json"
import { useEffect, useState } from "react"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

export default function Homes() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [games, setGames] = useState([])
  const [connectCasino, setConnectCasino] = useState(false)
  const router = useRouter()
  
  const { navigateWithLoading } = useRouting()

  const fadeSlide = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const casinoData = {
    1: {
      name: "Proper Six Casino",
      description:
        "Experience the thrill of premium casino games with exclusive bonuses and VIP treatment. Join thousands of players who trust Lucky Spin Palace for fair gaming and fast payouts.",
      bonus: "50 FREE SPINS",
    },
    2: {
      name: "Golden Jackpot Hub",
      description:
        "Your ultimate destination for jackpot games and massive prizes. With daily tournaments and progressive jackpots, every spin could be your lucky break.",
      bonus: "100% BONUS",
    },
    3: {
      name: "Starfall Casino",
      description:
        "Step into a world of luxury gaming with our premium selection of slots, table games, and live dealers. Enjoy exclusive rewards and personalized service.",
      bonus: "WELCOME PACKAGE",
    },
    4: {
      name: "Mystic Reels",
      description:
        "Discover the magic of online gaming with our mystical collection of games. From ancient treasures to modern slots, adventure awaits at every turn.",
      bonus: "VIP TREATMENT",
    },
  }

  const fetchGames = async () => {
    try {
      const res = await fetch("https://localhost/api/allgames")
      const data = await res.json()
      setGames(data?.data)
    } catch (err) {
      console.error("Error fetching games:", err)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  const currentCasino = casinoData[1] || { name: "Unknown Casino" }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("https://localhost/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Logged in successfully!")
      } else {
        toast.error(data?.message || "Invalid credentials")
      }
    } catch (error) {
      // toast.error("Network error. Please try again.")
      console.error("Login error:", error)
    } finally {
      toast.success("Logged in successfully!")

      setConnectCasino(false)
      setLoading(false)
    }
  }

  const [formData, setFormData] = useState({
    email: "waqarahmad134@yahoo.com",
    password: "AAaa11@@AA",
  })

  return (
    <div className="container mx-auto relative">
      <motion.div
        className="w-full text-white p-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Featured Game */}

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Casino Banner Section */}
          <section className="mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
              <div className="relative h-80">
                <img
                  src="https://warmageddon.online/frontend/landing/images/bannerbg1.jpg"
                  alt={currentCasino.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-emerald-400 mb-4">
                      {currentCasino.bonus}
                    </h2>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {currentCasino.name}
                    </h3>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                      {currentCasino.description}
                    </p>
                    <button
                      onClick={() => setConnectCasino(true)}
                      className="bg-gradient-to-r bg-[#7A59FF] hover:bg-[#6c4fe0] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl"
                    >
                      Connect Now
                    </button>

                    <button
                      onClick={() => navigateWithLoading("/wallet")}
                      className="ml-5 bg-blue-700
                      hover:bg-[#6c4fe0] text-white font-bold py-4 px-8
                      rounded-xl transition-all duration-300 transform
                      hover:scale-105 shadow-lg hover:shadow-xl text-xl"
                    >
                      Transfer Amount
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Casino Games Section */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">Casino Games</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <img
                      src={`https://snurr.casino/warmageddon/games-banner/${game.base_image}`}
                      alt={game.game_title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=200&fit=crop"
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-black/50 rounded-full px-2 py-1">
                      <span className="text-emerald-400 font-semibold text-sm">
                        ${game.nakha}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                      {game.game_title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-emerald-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-300 text-sm">4.5</span>
                      </div>
                      <button className="bg-gradient-to-r bg-[#7A59FF] hover:bg-[#6c4fe0] text-white px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-300">
                        Play
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        {connectCasino && (
          <>
            <div className="fixed inset-0 z-50 h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
              <div className="bg-gradient-to-b from-[#6C3386] to-[#562357] p-6 rounded-xl w-[90%] max-w-md shadow-xl text-white">
                <h2 className="font-bebas-neue tracking-wider text-4xl font-normal mb-4">
                  Login
                </h2>

                <form className="space-y-3" onSubmit={handleLogin}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-1">
                      Enter your email address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        placeholder="Yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        required
                        className="pl-11 bg-[#190733] w-full py-3 text-white rounded-xl theme-inner-shadow placeholder-gray-400 border-none focus:ring-2 focus:ring-violet-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-1">
                      Enter your password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        required
                        className="pl-11 pr-11 bg-[#190733] text-white py-3 w-full rounded-xl theme-inner-shadow placeholder-gray-400 border-none focus:ring-2 focus:ring-violet-500"
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#3B2063] text-white rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:scale-105 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>
                <hr className="my-5 border-gray-500" />
                <div className="text-right mt-4">
                  <button
                    onClick={() => setConnectCasino(false)}
                    className="text-sm text-white hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}
