"use client"
import { useState, useMemo } from "react"
import { BoxIcon } from "lucide-react"
import gamesData from "@/app/games.json"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

const fadeSlide = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

// Tab Titles
const TABS = ["All Casino", "SDK Documentation", "Machine Integration"]

// Tab Button Component
const NavTab = ({ title, active, onClick }) => (
  <button
    onClick={onClick}
    className={` rounded-lg w-full text-center p-2 font-semibold cursor-pointer transition-all duration-300
      ${
        active
          ? "from-[#240B48] to-[#3B82F680] bg-gradient-to-r text-white shadow-md"
          : "bg-[#4920878A] text-white hover:bg-white/10"
      }`}
  >
    {title}
  </button>
)

const AllGames = () => {
  const router = useRouter()
  return (
    <>
      <h3 className="text-2xl font-bold my-4">Casino's Sites</h3>
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        {gamesData?.casinos?.map((game, gameIdx) => (
          <div
            key={game.title + gameIdx}
            className="rounded bg-[#2b0a59] overflow-hidden cursor-pointer hover:scale-105"
            onClick={() => {
              const slug = game.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9\-]/g, "")
              router.push(`/terminaladmin/casinos/${slug}`)
            }}
          >
            <div className="relative rounded-t-lg overflow-hidden">
              <Image
                src={game.image}
                alt={game.title}
                width={100}
                height={192}
                unoptimized
                className="w-full h-32 md:h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <h2 className="text-2xl font-bold leading-5">{game?.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// Revenue Dashboard
const RevenueDashboard = () => (
  <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5 ">
    <h2 className="text-2xl font-bold mb-4">Machine Integration</h2>
    <p className="flex items-center justify-center h-full text-3xl py-40">
      Right Now Machine Integrion IS Not Supported
    </p>
  </div>
)

const NAV_LINKS = [
  { label: "Installation", href: "#" },
  { label: "Quick Start", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Webhooks", href: "#" },
  { label: "Examples", href: "#" },
]

const Sidebar = () => {
  const [search, setSearch] = useState("")

  // Filter and sort: matched links first, then others
  const filteredLinks = useMemo(() => {
    if (!search.trim()) return NAV_LINKS
    const lower = search.toLowerCase()
    const matched = []
    const unmatched = []
    for (const link of NAV_LINKS) {
      if (link.label.toLowerCase().includes(lower)) {
        matched.push(link)
      } else {
        unmatched.push(link)
      }
    }
    return [...matched, ...unmatched]
  }, [search])

  return (
    <div className="w-64 h-full bg-[#7A59FF80] rounded-xl p-4">
      <input
        type="text"
        placeholder="Search docs..."
        className="w-full p-2 mb-4 bg-purple-900 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <nav>
        {filteredLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block py-2 px-4 hover:bg-gray-700 rounded mb-2"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

// Sand Box Launch
const SDK = () => (
  <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
    <div class="flex">
      <Sidebar />
      <main class="flex-1 px-8">
        <h1 class="text-2xl font-bold mb-4">SDK Documentation</h1>
        <h2 className="text-2xl font-bold mb-4">Upload Your Game</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Game Name *</label>
            <input
              type="text"
              placeholder="Enter your game"
              className="w-full p-2 bg-[#7A59FF80] rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Game Bundle (.zip) *</label>
            <div className="w-full p-4 bg-[#7A59FF80] rounded flex flex-col gap-3 items-center justify-center">
              <BoxIcon size={30} />
              <div className="text-center text-sm">
                <p>Click to upload your game bundle</p>
                <p>(.zip file only, max 500MB)</p>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2">Description *</label>
            <textarea
              placeholder="Describe your game..."
              className="w-full p-2 bg-[#7A59FF80] rounded h-32"
            ></textarea>
          </div>
          <div>
            <label className="block mb-2">Cover Image</label>
            <div className="w-full p-4 bg-[#7A59FF80] rounded flex flex-col gap-5 items-center justify-center">
              <Image size={55} />
              <span>Upload cover image</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
            Continue to Metadata
          </button>
        </div>
      </main>
    </div>
  </div>
)

export default function DeveloperPortalPage() {
  const [activeTab, setActiveTab] = useState("All Casino")

  return (
    <div className="p-6 text-white">
      <h1 className="font-bebas-neue text-center text-5xl mb-6">
        BIGTIME DEVELOPER PORTAL
      </h1>

      {/* Tabs */}
      <div className="grid grid-cols-5 gap-3 mb-8">
        {TABS.map((tab) => (
          <NavTab
            key={tab}
            title={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "All Casino" ? (
        <AllGames />
      ) : activeTab === "Machine1 Integration" ? (
        <MetadataEditor />
      ) : activeTab === "Machine Integration" ? (
        <RevenueDashboard />
      ) : (
        <SDK />
      )}
    </div>
  )
}
