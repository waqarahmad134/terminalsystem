import { Settings, Search, Bell } from "lucide-react"

export default function AdminHome() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 pt-20 px-20 space-y-4">
        <div className="stat-card text-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
          <div className="inline-block rounded-xl bg-[#A855F7] p-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 20.9989V18.9989C21.9993 18.1126 21.7044 17.2517 21.1614 16.5512C20.6184 15.8508 19.8581 15.3505 19 15.1289"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 3.12891C16.8604 3.34921 17.623 3.84961 18.1676 4.55122C18.7122 5.25283 19.0078 6.11574 19.0078 7.00391C19.0078 7.89208 18.7122 8.75499 18.1676 9.4566C17.623 10.1582 16.8604 10.6586 16 10.8789"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Total Users</h3>
            <p className="text-2xl font-bold">
              24,532 <span className="text-sm text-green-400">+12%</span>
            </p>
          </div>
        </div>
        <div className="stat-card text-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
          <div className="inline-block rounded-xl bg-[#A855F7] p-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Active Games</h3>
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-green-400">+100%</p>
          </div>
        </div>
        <div className="stat-card text-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
          <div className="inline-block rounded-xl bg-[#A855F7] p-3">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0312 2V22"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.0312 5H9.53125C8.60299 5 7.71275 5.36875 7.05638 6.02513C6.4 6.6815 6.03125 7.57174 6.03125 8.5C6.03125 9.42826 6.4 10.3185 7.05638 10.9749C7.71275 11.6313 8.60299 12 9.53125 12H14.5312C15.4595 12 16.3497 12.3687 17.0061 13.0251C17.6625 13.6815 18.0312 14.5717 18.0312 15.5C18.0312 16.4283 17.6625 17.3185 17.0061 17.9749C16.3497 18.6313 15.4595 19 14.5312 19H6.03125"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Revenue</h3>
            <p className="text-2xl font-bold">120 BTX</p>
            <p className="text-sm text-green-400">+12%</p>
          </div>
        </div>
        <div className="stat-card text-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
          <div className="inline-block rounded-xl bg-[#A855F7] p-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9H4.5C3.83696 9 3.20107 8.73661 2.73223 8.26777C2.26339 7.79893 2 7.16304 2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 9H19.5C20.163 9 20.7989 8.73661 21.2678 8.26777C21.7366 7.79893 22 7.16304 22 6.5C22 5.83696 21.7366 5.20107 21.2678 4.73223C20.7989 4.26339 20.163 4 19.5 4H18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 22H20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 14.6602V17.0002C10 17.5502 9.53 17.9802 9.03 18.2102C7.85 18.7502 7 20.2402 7 22.0002"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 14.6602V17.0002C14 17.5502 14.47 17.9802 14.97 18.2102C16.15 18.7502 17 20.2402 17 22.0002"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 2H6V9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V2Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Prizes Awarded</h3>
            <p className="text-2xl font-bold">4</p>
            <p className="text-sm text-green-400">+88%</p>
          </div>
        </div>
      </div>
      <div className="px-20 space-y-4">
        <div className="bg-[#240b48b6] border border-[#A855F74D] text-white py-6 px-4 rounded-xl shadow-xl">
          <h2 className="font-semibold text-white my-2">Recent Activity</h2>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            New user registered
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            Prize awarded to player
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            Game completed
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            Payment processed
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
        </div>
        <div className="bg-[#240b48b6] border border-[#A855F74D] text-white py-6 px-4 rounded-xl shadow-xl">
          <h2 className="font-semibold text-white my-2">Recent Activity</h2>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            New user registered
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            Prize awarded to player
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            Game completed
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg mb-2 flex items-center gap-3">
            <div className="bg-[#A855F7] rounded-full h-2 w-2"></div>
            Payment processed
            <span className="text-white opacity-45"> 2 min ago</span>
          </div>
        </div>
      </div>
    </>
  )
}
