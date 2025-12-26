import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditModal = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/users/${id}`, user);
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg w-full max-w-md" onSubmit={handleSave}>
        <h2 className="text-xl font-bold mb-3 text-center">Edit User</h2>

        <input name="name" value={user.name || ""} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input name="email" value={user.email || ""} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input name="phone" value={user.phone || ""} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input name="address" value={user.address || ""} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input name="website" value={user.website || ""} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input name="company" value={user.company || ""} onChange={handleChange} className="border p-2 w-full mb-2" />

        <div className="flex justify-between mt-4">
          <button type="button" onClick={() => navigate("/")} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
