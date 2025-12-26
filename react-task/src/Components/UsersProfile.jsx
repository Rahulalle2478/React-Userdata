import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";

const UsersProfile = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:8000/users");
    const updated = data.map((u) => ({ ...u, liked: false }));
    setUsers(updated);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLike = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, liked: !u.liked } : u));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await axios.delete(`http://localhost:8000/users/${id}`);
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {users.map((user) => (
    <div
      key={user.id}
      className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <img
        src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${user.username}`}
        alt="avatar"
        className="w-28 h-28 mx-auto rounded-full ring-4 ring-blue-100 shadow-md"
      />

      <h2 className="text-2xl font-semibold text-center mt-4 text-gray-900 tracking-wide">
        {user.name}
      </h2>

      <div className="mt-4 space-y-2 text-gray-700 text-sm">
        <p className="flex items-center gap-3">
          <MdEmail className="text-red-500" /> {user.email}
        </p>
        <p className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-500" /> {user.phone}
        </p>
        <p className="flex items-center gap-3">
          <FaGlobe className="text-blue-500" /> {user.website}
        </p>
      </div>

      <div className="flex justify-between mt-6 gap-3">
        {/* Like Button */}
        <button
          className={`px-4 py-2 rounded-xl border flex-1 flex items-center justify-center gap-2 text-sm font-medium transition-all ${
            user.liked
              ? "bg-pink-100 border-pink-300 text-pink-700 shadow-sm"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => handleLike(user.id)}
        >
          ❤️
        </button>

        {/* Edit Button */}
        <button
          className="px-4 py-2 rounded-xl border border-gray-300 flex-1 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition"
          onClick={() => handleEdit(user.id)}
        >
          <FaEdit size={18} />
        </button>

        {/* Delete Button */}
        <button
          className="px-4 py-2 rounded-xl border border-red-300 flex-1 flex items-center justify-center text-red-600 hover:bg-red-50 transition"
          onClick={() => handleDelete(user.id)}
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  ))}

  <div className="flex justify-center mt-10 col-span-full">
    <button
      onClick={() => navigate("/create")}
      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg tracking-wide shadow-lg transition"
    >
      + Create User +
    </button>
  </div>
</div>

  )
}

export default UsersProfile;







