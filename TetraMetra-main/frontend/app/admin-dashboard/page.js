"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";

import {
  LayoutDashboard,
  Users,
  Target,
  FolderOpen,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ================= CKEDITOR ================= */
const CKEditorClient = dynamic(
  () => import("../../components/CKEditorClient"),
  { ssr: false }
);

/* ================= SIDEBAR ================= */
const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Users", icon: Users },
  { label: "Leads", icon: Target },
  { label: "Blogs", icon: FileText },
  { label: "Blog Manage", icon: FolderOpen },
  { label: "Cases", icon: FileText },
  { label: "Case Manage", icon: FolderOpen },
  { label: "Settings", icon: Settings },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [activePage, setActivePage] = useState("Dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  /* ✅ STATS STATE (ONLY ADDITION) */
  const [stats, setStats] = useState({
    users: 0,
    leads: 0,
    blogs: 0,
  });

  /* 🔐 AUTH GUARD */
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.replace("/admin-login");
    }
  }, [router]);

  /* ✅ FETCH REAL COUNTS (ONLY ADDITION) */
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const [usersRes, blogsRes] = await Promise.all([
          fetch("http://localhost:5000/api/contact", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:5000/api/blogs"),
        ]);

        const usersData = await usersRes.json();
        const blogsData = await blogsRes.json();

        setStats({
          users: usersData.length,
          leads: usersData.length,
          blogs: blogsData.length,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  /* 🚪 LOGOUT */
  const confirmLogout = () => {
    localStorage.clear();
    router.replace("/admin-login");
  };

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">

        {/* SIDEBAR */}
        <aside className="col-2 bg-white border-end p-3">
          <h5 className="fw-bold mb-4" style={{ color: "#f66829" }}>
            Tetrahedron
          </h5>

          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActivePage(item.label)}
              className="btn w-100 text-start mb-2 d-flex align-items-center"
              style={
                activePage === item.label
                  ? { backgroundColor: "#f66829", color: "#fff" }
                  : {}
              }
            >
              <item.icon size={16} className="me-2" />
              {item.label}
            </button>
          ))}
        </aside>

        {/* MAIN */}
        <main className="col-10 p-4 overflow-auto">
          <div className="d-flex justify-content-between mb-4">
            <h4>{activePage}</h4>
            <LogOut
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => setShowLogoutModal(true)}
            />
          </div>

          {activePage === "Dashboard" && (
            <Dashboard stats={stats} setActivePage={setActivePage} />
          )}
          {activePage === "Users" && <UsersPage />}
          {activePage === "Leads" && <LeadsPage />}
          {activePage === "Blogs" && <BlogsPage />}
          {activePage === "Blog Manage" && <BlogManagePage />}
          {activePage === "Cases" && <CasesPage />}
          {activePage === "Case Manage" && <CaseManagePage />}
          {activePage === "Settings" && (
            <SettingsPage onLogout={() => setShowLogoutModal(true)} />
          )}
        </main>
      </div>

      {showLogoutModal && (
        <ConfirmModal
          title="Confirm Logout"
          message="Are you sure you want to logout?"
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={confirmLogout}
        />
      )}
    </div>
  );
}

/* ================= DASHBOARD ================= */
function Dashboard({ stats, setActivePage }) {
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonthlyStats = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        const res = await fetch("http://localhost:5000/api/contact/stats/monthly", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          console.log("Monthly stats received:", data);
          setMonthlyData(data);
          setError(null);
        } else {
          setError(`Failed to fetch data: ${res.status}`);
          console.error("Response not ok:", res.status);
        }
      } catch (err) {
        console.error("Error fetching monthly stats:", err);
        setError(err.message);
        setMonthlyData([
          { month: "Jan", users: 0 },
          { month: "Feb", users: 0 },
          { month: "Mar", users: 0 },
          { month: "Apr", users: 0 },
          { month: "May", users: 0 },
          { month: "Jun", users: 0 },
          { month: "Jul", users: 0 },
          { month: "Aug", users: 0 },
          { month: "Sep", users: 0 },
          { month: "Oct", users: 0 },
          { month: "Nov", users: 0 },
          { month: "Dec", users: 0 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMonthlyStats();
  }, []);

  return (
    <>
      <div className="row mb-4">
        <StatCard title="Users" value={stats.users} onClick={() => setActivePage("Users")} />
        <StatCard title="Leads" value={stats.leads} onClick={() => setActivePage("Leads")} />
        <StatCard title="Blogs" value={stats.blogs} onClick={() => setActivePage("Blog Manage")} />
      </div>

      <div className="card p-3">
        <h6>User Growth (Monthly)</h6>
        {loading ? (
          <p className="text-muted">Loading graph...</p>
        ) : error ? (
          <p className="text-danger">Error: {error}</p>
        ) : monthlyData && monthlyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#f66829"
                strokeWidth={2}
                dot={{ fill: "#f66829", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-muted">No data available</p>
        )}
      </div>
    </>
  );
}

/* ================= STAT CARD ================= */
function StatCard({ title, value, onClick }) {
  return (
    <div className="col-md-3">
      <div className="card p-3" style={{ cursor: "pointer" }} onClick={onClick}>
        <small>{title}</small>
        <h4>{value}</h4>
        <span style={{ color: "#f66829" }}>
          View details <ChevronRight size={14} />
        </span>
      </div>
    </div>
  );
}


/* ================= USERS ================= */
/* ================= USERS ================= */
function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("authToken");

      const res = await fetch("http://localhost:5000/api/contact", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        localStorage.clear();
        router.replace("/admin-login");
        return;
      }

      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, [router]);

  return (
    <div className="card p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0">Users</h6>
        <span className="badge bg-primary">{users.length}</span>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-nowrap mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td>{u.name || "-"}</td>
                  <td>{u.email || "-"}</td>
                  <td>{u.phoneNumber || u.mobile || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


/* ================= LEADS ================= */
function LeadsPage() {
  const router = useRouter();
  const [leadsData, setLeadsData] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const token = localStorage.getItem("authToken");

      const res = await fetch("http://localhost:5000/api/contact", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        localStorage.clear();
        router.replace("/admin-login");
        return;
      }

      const data = await res.json();
      setLeadsData(data);
    };

    fetchLeads();
  }, [router]);

  return (
    <div className="card p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0">Leads</h6>
        <span className="badge bg-primary">{leadsData.length}</span>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-nowrap mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th style={{ minWidth: "250px" }}>Requirement</th>
              <th>Last Updated</th>
            </tr>
          </thead>

          <tbody>
            {leadsData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No leads found
                </td>
              </tr>
            ) : (
              leadsData.map((lead) => (
                <tr key={lead._id}>
                  <td>{lead.name || "-"}</td>
                  <td>{lead.email || "-"}</td>
                  <td>{lead.phone || lead.phoneNumber || lead.mobile || "-"}</td>
                  <td>{lead.companyName || "-"}</td>
                  <td className="text-wrap">
                    {lead.requirements || "-"}
                  </td>
                  <td>
                    {lead.updatedAt
                      ? new Date(lead.updatedAt).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


function BlogManagePage() {
  const [blogs, setBlogs] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Fetch blogs on component mount
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setEditTitle(blog.title);
    setEditDescription(blog.description);
    setEditImage(null);
  };

  const handleSaveEdit = async () => {
    if (!editTitle || !editDescription) {
      Swal.fire({ icon: "warning", title: "Missing fields", text: "Title and description are required" });
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("authToken") || localStorage.getItem("adminToken");

      const formData = new FormData();
      formData.append("title", editTitle);
      formData.append("description", editDescription);

      if (editImage) {
        formData.append("image", editImage);
      }

      const response = await fetch(`http://localhost:5000/api/blogs/${editBlog._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({ icon: "error", title: "Update failed", text: data.message || "Failed to update blog" });
        return;
      }

      // Update the blog in the list
      setBlogs(blogs.map((b) => (b._id === editBlog._id ? data : b)));
      setEditBlog(null);
      Swal.fire({ icon: "success", title: "Updated", text: "Blog updated successfully" });
    } catch (error) {

      Swal.fire({ icon: "error", title: "Update failed", text: "Failed to update blog" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);
      const token = localStorage.getItem("authToken") || localStorage.getItem("adminToken");

      const response = await fetch(`http://localhost:5000/api/blogs/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      // Remove blog from list
      setBlogs(blogs.filter((b) => b._id !== deleteId));
      setDeleteId(null);
      Swal.fire({ icon: "success", title: "Deleted", text: "Blog deleted successfully" });
    } catch (error) {
      console.error("Error deleting blog:", error);
      Swal.fire({ icon: "error", title: "Delete failed", text: "Failed to delete blog" });
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="card p-3">
      <h6>Manage Blogs</h6>

      {loading && <p>Loading blogs...</p>}

      {!loading && blogs.length === 0 && <p>No blogs found</p>}

      {!loading && blogs.length > 0 && (
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Blog Title</th>
              <th style={{ width: 180 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  <button
                    className="btn btn-sm me-2"
                    style={{ backgroundColor: "#f66829", color: "#fff" }}
                    onClick={() => handleEdit(blog)}
                  >
                    <Pencil size={14} className="me-1" />
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setDeleteId(blog._id)}
                  >
                    <Trash2 size={14} className="me-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Modal */}
      {editBlog && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
          <div className="bg-white p-4 rounded" style={{ width: 500, maxHeight: "80vh", overflowY: "auto" }}>
            <h5>Edit Blog</h5>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Blog title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <div style={{ minHeight: "120px", marginBottom: "15px" }}>
              <CKEditorClient value={editDescription} onChange={setEditDescription} />
            </div>
            <input
              type="file"
              className="form-control my-3"
              accept="image/*"
              onChange={(e) => setEditImage(e.target.files[0])}
            />
            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn btn-secondary"
                onClick={() => setEditBlog(null)}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "#f66829", color: "#fff" }}
                onClick={handleSaveEdit}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <ConfirmModal
          title="Delete Blog"
          message="Are you sure you want to delete this blog?"
          onCancel={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

/* ================= CASE MANAGE ================= */

function CaseManagePage() {
  const [cases, setCases] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [editCase, setEditCase] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchCases = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/cases", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to fetch cases");
      const data = await response.json();
      setCases(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleEdit = (c) => {
    setEditCase(c);
    setEditTitle(c.title);
    setEditDescription(c.description);
    setEditImage(null);
  };

  const handleSaveEdit = async () => {
    if (!editTitle || !editDescription) {
      Swal.fire({ icon: "warning", title: "Missing fields", text: "Title and description are required" });
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("authToken") || localStorage.getItem("adminToken");

      const formData = new FormData();
      formData.append("title", editTitle);
      formData.append("description", editDescription);
      if (editImage) formData.append("image", editImage);

      const response = await fetch(`http://localhost:5000/api/cases/${editCase._id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        Swal.fire({ icon: "error", title: "Update failed", text: data.message || "Failed to update case" });
        return;
      }

      setCases(cases.map((it) => (it._id === editCase._id ? data : it)));
      setEditCase(null);
      Swal.fire({ icon: "success", title: "Updated", text: "Case updated successfully" });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Update failed", text: "Failed to update case" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);
      const token = localStorage.getItem("authToken") || localStorage.getItem("adminToken");

      const response = await fetch(`http://localhost:5000/api/cases/${deleteId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error("Failed to delete case");
      }

      setCases(cases.filter((c) => c._id !== deleteId));
      setDeleteId(null);
      Swal.fire({ icon: "success", title: "Deleted", text: "Case deleted successfully" });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Delete failed", text: "Failed to delete case" });
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="card p-3">
      <h6>Manage Cases</h6>

      {loading && <p>Loading cases...</p>}

      {!loading && cases.length === 0 && <p>No cases found</p>}

      {!loading && cases.length > 0 && (
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Case Title</th>
              <th style={{ width: 180 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c._id}>
                <td>{c.title}</td>
                <td>
                  <button
                    className="btn btn-sm me-2"
                    style={{ backgroundColor: "#f66829", color: "#fff" }}
                    onClick={() => handleEdit(c)}
                  >
                    <Pencil size={14} className="me-1" />
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setDeleteId(c._id)}
                  >
                    <Trash2 size={14} className="me-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editCase && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
          <div className="bg-white p-4 rounded" style={{ width: 500, maxHeight: "80vh", overflowY: "auto" }}>
            <h5>Edit Case</h5>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Case title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <div style={{ minHeight: "120px", marginBottom: "15px" }}>
              <CKEditorClient value={editDescription} onChange={setEditDescription} />
            </div>
            <input
              type="file"
              className="form-control my-3"
              accept="image/*"
              onChange={(e) => setEditImage(e.target.files[0])}
            />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={() => setEditCase(null)} disabled={loading}>
                Cancel
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "#f66829", color: "#fff" }}
                onClick={handleSaveEdit}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <ConfirmModal
          title="Delete Case"
          message="Are you sure you want to delete this case?"
          onCancel={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

/* ================= CASES ================= */
function CasesPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 HTML remove helper
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "");
  };

  const handlePublish = async () => {
    if (!title || !content) {
      Swal.fire({
        icon: "warning",
        title: "Missing fields",
        text: "Title and content required",
      });
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");

      const formData = new FormData();
      formData.append("title", title);

      // ✅ HTML removed here
      formData.append("description", stripHtml(content));

      if (image) formData.append("image", image);

      const response = await fetch("http://localhost:5000/api/cases", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Publish failed",
          text: data.message || "Case publish failed",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Published",
        text: "Case published successfully",
      });

      // reset form
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h5 className="mb-3">Create Case</h5>

        <input
          className="form-control my-3"
          placeholder="Case title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          className="form-control my-3"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div style={{ minHeight: "120px" }}>
          <CKEditorClient value={content} onChange={setContent} />
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn"
            style={{ backgroundColor: "#f66829", color: "#fff" }}
            onClick={handlePublish}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish Case"}
          </button>
        </div>
      </div>
    </div>
  );
}


/* ================= BLOGS ================= */

function BlogsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!title || !content) {
      Swal.fire({ icon: "warning", title: "Missing fields", text: "Title and content required" });
      return;
    }

    try {
      setLoading(true);


      const token = localStorage.getItem("authToken");


      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", content);

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({ icon: "error", title: "Publish failed", text: data.message || "Blog publish failed" });
        return;
      }

      Swal.fire({ icon: "success", title: "Published", text: "Blog published successfully" });

      // reset form
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error(error);
      Swal.fire({ icon: "error", title: "Error", text: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h5 className="mb-3">Create Blog</h5>

        {/* Blog Title */}
        <input
          className="form-control my-3"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Blog Image */}
        <input
          type="file"
          className="form-control my-3"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {/* Blog Content */}
        <div style={{ minHeight: "120px" }}>
          <CKEditorClient value={content} onChange={setContent} />
        </div>

        {/* Button */}
        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn"
            style={{ backgroundColor: "#f66829", color: "#fff" }}
            onClick={handlePublish}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= SETTINGS ================= */

function SettingsPage({ onLogout }) {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f66829",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout();
      }
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div
        className="card p-4 text-center"
        style={{
          width: "320px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h4 className="mb-3 fw-bold">Settings</h4>
        <p className="text-muted mb-4">
          Manage your account settings
        </p>

        <button
          className="btn w-100 d-flex align-items-center justify-content-center gap-2"
          style={{
            backgroundColor: "#f66829",
            color: "#fff",
            borderRadius: "12px",
            padding: "12px",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
          onClick={handleLogout}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <i className="bi bi-box-arrow-right"></i>
          Logout
        </button>
      </div>
    </div>
  );
}


/* ================= CONFIRM MODAL ================= */







/* ================= COMMON ================= */
function ConfirmModal({ title, message, onCancel, onConfirm }) {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div className="bg-white p-4 rounded">
        <h5>{title}</h5>
        <p>{message}</p>
        <button className="btn btn-secondary me-2" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="btn"
          style={{ background: "#f66829", color: "#fff" }}
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

