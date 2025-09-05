"use client"
import { useEffect, useState, useMemo } from "react"
import { toast } from "react-hot-toast"
import { getApi } from "@/lib/apiClient"

const UserRow = ({ user, onDelete }) => (
  <tr className="hover:bg-[#7a59ff8c] border-b border-[#374151]">
    <td className="py-2 px-4">{user?.username || "N/A"}</td>
    <td className="py-2 px-4">{user?.email || "N/A"}</td>
    <td className="py-2 px-4">
      <span
        className={`px-2 py-1 rounded-2xl ${
          user?.isverified ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {user?.isverified ? "Active" : "Inactive"}
      </span>
    </td>
    <td className="py-2 px-4">{user?.lastlogin?.split("T")[0] || "N/A"}</td>
    <td className="py-2 px-4">{user?.games_played || "0"}</td>
    <td className="py-2 px-4 flex space-x-2">
      <button
        onClick={() => onDelete(user.id)}
        className="text-red-400 hover:text-red-300"
      >
        🗑️
      </button>
    </td>
  </tr>
)

export default function AdminUsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all") // all | active | inactive

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getApi("/auth/user-list/", { limit: "10" })
        setUsers(data?.results || [])
      } catch (error) {
        toast.error(
          error?.response?.data?.detail || error.message || "Failed to fetch users."
        )
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  // 🔍 Filtered Users
  const filteredUsers = useMemo(() => {
    let list = [...users]

    // Apply search filter
    if (search.trim()) {
      list = list.filter(
        (u) =>
          u?.username?.toLowerCase().includes(search.toLowerCase()) ||
          u?.email?.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Apply status filter
    if (statusFilter === "active") {
      list = list.filter((u) => u?.isverified)
    } else if (statusFilter === "inactive") {
      list = list.filter((u) => !u?.isverified)
    }

    return list
  }, [search, users, statusFilter])

  // 🗑️ Handle Delete Locally
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
    toast.success("User removed locally!")
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        {/* <button className="bg-[#7A59FF] px-4 py-2 rounded border border-[#7A59FF] hover:bg-transparent">
          + Add User
        </button> */}
      </div>

      {/* Table Container */}
      <div className="bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
        {/* Search + Status Filter */}
        <div className="flex justify-between mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users by name or email..."
            className="w-1/3 p-2 bg-[#7A59FF] rounded text-black"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 bg-[#7A59FF] rounded text-white"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Table */}
        <table className="w-full rounded">
          <thead>
            <tr className="[&>th]:text-start bg-[#7A59FF]">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Login Date</th>
              <th className="py-2 px-4">Games</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-300">
                  Loading users...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-300">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <UserRow key={user.id} user={user} onDelete={handleDelete} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
