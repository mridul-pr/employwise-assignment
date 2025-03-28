import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingUser, setEditingUser] = useState(null); // Track user being edited
  const [loading, setLoading] = useState(false); // Track update loading state

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNum) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${pageNum}`
      );
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUpdateUser = async () => {
    if (!editingUser) return;
    setLoading(true); // Start loading

    try {
      await axios.put(
        `https://reqres.in/api/users/${editingUser.id}`,
        editingUser
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUser.id ? { ...user, ...editingUser } : user
        )
      );
      setEditingUser(null); // Close modal
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Remove token
    window.location.reload(); // Refresh page
  };

  return (
    <div className="users-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <h2>User List</h2>
      <div className="users-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUpdate={setEditingUser} // Open modal with user details
            onDelete={() => handleDeleteUser(user.id)}
          />
        ))}
      </div>

      <Pagination
        pageCount={totalPages}
        onPageChange={({ selected }) => setPage(selected + 1)}
      />

      {/* Edit Modal */}
      {editingUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit User</h3>
            <label>First Name:</label>
            <input
              type="text"
              name="first_name"
              value={editingUser.first_name}
              onChange={handleEditChange}
              required
            />

            <label>Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={editingUser.last_name}
              onChange={handleEditChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={editingUser.email}
              onChange={handleEditChange}
              required
            />

            <div className="modal-buttons">
              <button
                onClick={handleUpdateUser}
                disabled={loading}
                type="submit"
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                onClick={() => setEditingUser(null)}
                disabled={loading}
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
