"use client";

import { useState } from "react";
import {
  FaTachometerAlt,
  FaNewspaper,
  FaCalendarAlt,
  FaUsers,
  FaImages,
  FaChartLine,
  FaCog,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaSearch,
  FaBell,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./adminpage.css";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  status: "published" | "draft";
  views: number;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  status: "upcoming" | "completed";
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  // Dummy data for news
  const [newsList] = useState<NewsItem[]>([
    {
      id: 1,
      title: "New Cybersecurity Threat Detected",
      excerpt: "Our security team has identified a new ransomware variant...",
      date: "2024-02-10",
      author: "John Doe",
      status: "published",
      views: 1234,
    },
    {
      id: 2,
      title: "GCCF Wins Industry Award",
      excerpt: "We are proud to announce that GCCF has been recognized...",
      date: "2024-02-08",
      author: "Jane Smith",
      status: "published",
      views: 2456,
    },
    {
      id: 3,
      title: "Upcoming Workshop Series",
      excerpt: "Join us for our advanced penetration testing workshop...",
      date: "2024-02-05",
      author: "Mike Johnson",
      status: "draft",
      views: 0,
    },
  ]);

  // Dummy data for events
  const [eventsList] = useState<EventItem[]>([
    {
      id: 1,
      title: "Cybersecurity Summit 2024",
      date: "2024-03-15",
      location: "Virtual",
      attendees: 450,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Ethical Hacking Workshop",
      date: "2024-01-20",
      location: "San Francisco",
      attendees: 120,
      status: "completed",
    },
    {
      id: 3,
      title: "Cloud Security Conference",
      date: "2024-04-10",
      location: "New York",
      attendees: 0,
      status: "upcoming",
    },
  ]);

  // Analytics dummy data
  const stats = {
    totalMembers: 12458,
    activeEvents: 8,
    totalNews: 156,
    monthlyViews: 45789,
  };

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your community.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <FaUsers />
          </div>
          <div className="stat-info">
            <h3>{stats.totalMembers.toLocaleString()}</h3>
            <p>Total Members</p>
            <span className="stat-trend positive">+12% this month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FaCalendarAlt />
          </div>
          <div className="stat-info">
            <h3>{stats.activeEvents}</h3>
            <p>Active Events</p>
            <span className="stat-trend positive">+3 this week</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <FaNewspaper />
          </div>
          <div className="stat-info">
            <h3>{stats.totalNews}</h3>
            <p>Published Articles</p>
            <span className="stat-trend positive">+8 this month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <FaEye />
          </div>
          <div className="stat-info">
            <h3>{stats.monthlyViews.toLocaleString()}</h3>
            <p>Monthly Views</p>
            <span className="stat-trend positive">+24% growth</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Member Growth</h3>
            <select className="chart-filter">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="chart-placeholder">
            {/* Placeholder for actual chart */}
            <div className="bar-chart">
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "75%" }}></div>
              <div className="bar" style={{ height: "55%" }}></div>
              <div className="bar" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
            </div>
            <div className="chart-labels">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Event Attendance</h3>
            <select className="chart-filter">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="chart-placeholder">
            {/* Placeholder for pie chart */}
            <div className="pie-chart">
              <svg viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#0d47a1"
                  strokeWidth="40"
                  strokeDasharray="126 377"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#2196f3"
                  strokeWidth="40"
                  strokeDasharray="94 377"
                  strokeDashoffset="-126"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#64b5f6"
                  strokeWidth="40"
                  strokeDasharray="157 377"
                  strokeDashoffset="-220"
                  transform="rotate(-90 100 100)"
                />
              </svg>
              <div className="pie-legend">
                <div className="legend-item">
                  <span
                    className="legend-color"
                    style={{ background: "#0d47a1" }}
                  ></span>
                  <span>Workshops (35%)</span>
                </div>
                <div className="legend-item">
                  <span
                    className="legend-color"
                    style={{ background: "#2196f3" }}
                  ></span>
                  <span>Conferences (25%)</span>
                </div>
                <div className="legend-item">
                  <span
                    className="legend-color"
                    style={{ background: "#64b5f6" }}
                  ></span>
                  <span>Webinars (40%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon blue">
              <FaUsers />
            </div>
            <div className="activity-content">
              <p>
                <strong>New member joined:</strong> Sarah Wilson
              </p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon green">
              <FaNewspaper />
            </div>
            <div className="activity-content">
              <p>
                <strong>Article published:</strong> Advanced Threat Detection
              </p>
              <span className="activity-time">5 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon orange">
              <FaCalendarAlt />
            </div>
            <div className="activity-content">
              <p>
                <strong>Event registered:</strong> Cloud Security Workshop
              </p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="dashboard-content">
      <div className="page-header">
        <div>
          <h1>News Management</h1>
          <p>Create and manage news articles</p>
        </div>
        <button className="btn-primary" onClick={() => setShowNewsModal(true)}>
          <FaPlus /> Add News
        </button>
      </div>

      <div className="content-filters">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search news..." />
        </div>
        <select className="filter-select">
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
        <select className="filter-select">
          <option>Sort by Date</option>
          <option>Sort by Views</option>
          <option>Sort by Title</option>
        </select>
      </div>

      <div className="content-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Status</th>
              <th>Views</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news) => (
              <tr key={news.id}>
                <td>
                  <div className="table-title">
                    <strong>{news.title}</strong>
                    <span className="excerpt">{news.excerpt}</span>
                  </div>
                </td>
                <td>{news.author}</td>
                <td>{new Date(news.date).toLocaleDateString()}</td>
                <td>
                  <span className={`status-badge ${news.status}`}>
                    {news.status}
                  </span>
                </td>
                <td>{news.views.toLocaleString()}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon" title="View">
                      <FaEye />
                    </button>
                    <button className="btn-icon" title="Edit">
                      <FaEdit />
                    </button>
                    <button className="btn-icon danger" title="Delete">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="dashboard-content">
      <div className="page-header">
        <div>
          <h1>Events Management</h1>
          <p>Create and manage community events</p>
        </div>
        <button className="btn-primary" onClick={() => setShowEventModal(true)}>
          <FaPlus /> Add Event
        </button>
      </div>

      <div className="content-filters">
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search events..." />
        </div>
        <select className="filter-select">
          <option>All Events</option>
          <option>Upcoming</option>
          <option>Completed</option>
        </select>
        <select className="filter-select">
          <option>Sort by Date</option>
          <option>Sort by Attendees</option>
        </select>
      </div>

      <div className="events-grid-view">
        {eventsList.map((event) => (
          <div key={event.id} className="event-card-admin">
            <div className={`event-status-badge ${event.status}`}>
              {event.status}
            </div>
            <h3>{event.title}</h3>
            <div className="event-details">
              <p>
                <FaCalendarAlt /> {new Date(event.date).toLocaleDateString()}
              </p>
              <p>
                <FaUsers /> {event.attendees} attendees
              </p>
              <p>📍 {event.location}</p>
            </div>
            <div className="event-actions">
              <button className="btn-secondary">
                <FaEye /> View
              </button>
              <button className="btn-secondary">
                <FaEdit /> Edit
              </button>
              <button className="btn-danger">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-text">GCCF Admin</span>
          </div>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <FaTachometerAlt />
            {sidebarOpen && <span>Dashboard</span>}
          </button>
          <button
            className={`nav-item ${activeTab === "news" ? "active" : ""}`}
            onClick={() => setActiveTab("news")}
          >
            <FaNewspaper />
            {sidebarOpen && <span>News</span>}
          </button>
          <button
            className={`nav-item ${activeTab === "events" ? "active" : ""}`}
            onClick={() => setActiveTab("events")}
          >
            <FaCalendarAlt />
            {sidebarOpen && <span>Events</span>}
          </button>
          <button
            className={`nav-item ${activeTab === "members" ? "active" : ""}`}
            onClick={() => setActiveTab("members")}
          >
            <FaUsers />
            {sidebarOpen && <span>Members</span>}
          </button>
          <button
            className={`nav-item ${activeTab === "gallery" ? "active" : ""}`}
            onClick={() => setActiveTab("gallery")}
          >
            <FaImages />
            {sidebarOpen && <span>Gallery</span>}
          </button>
          <button
            className={`nav-item ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => setActiveTab("analytics")}
          >
            <FaChartLine />
            {sidebarOpen && <span>Analytics</span>}
          </button>
          <button
            className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <FaCog />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <FaSignOutAlt />
            {sidebarOpen && (
              <Link className="logout-btn" href="/">
                Logout
              </Link>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <header className="dashboard-header">
          <div className="header-left">
            <button
              className="mobile-menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>
            <h2>Admin Panel</h2>
          </div>
          <div className="header-right">
            <button className="header-icon">
              <FaBell />
              <span className="notification-badge">3</span>
            </button>
            <div className="admin-profile">
              <img src="/hi.jpg" alt="Admin" />
              <div className="profile-info">
                <span className="profile-name">Admin User</span>
                <span className="profile-role">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-body">
          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "news" && renderNews()}
          {activeTab === "events" && renderEvents()}
          {activeTab === "members" && (
            <div className="dashboard-content">
              <h1>Members Management</h1>
              <p>Coming soon...</p>
            </div>
          )}
          {activeTab === "gallery" && (
            <div className="dashboard-content">
              <h1>Gallery Management</h1>
              <p>Coming soon...</p>
            </div>
          )}
          {activeTab === "analytics" && (
            <div className="dashboard-content">
              <h1>Analytics</h1>
              <p>Coming soon...</p>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="dashboard-content">
              <h1>Settings</h1>
              <p>Coming soon...</p>
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      {showNewsModal && (
        <div className="modal-overlay" onClick={() => setShowNewsModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Article</h2>
              <button onClick={() => setShowNewsModal(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input type="text" placeholder="Enter article title" />
              </div>
              <div className="form-group">
                <label>Excerpt</label>
                <textarea
                  placeholder="Brief description..."
                  rows={3}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  placeholder="Full article content..."
                  rows={8}
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Author</label>
                  <input type="text" placeholder="Author name" />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select>
                    <option>Draft</option>
                    <option>Published</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn-secondary"
                onClick={() => setShowNewsModal(false)}
              >
                Cancel
              </button>
              <button className="btn-primary">Publish</button>
            </div>
          </div>
        </div>
      )}

      {showEventModal && (
        <div className="modal-overlay" onClick={() => setShowEventModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Event</h2>
              <button onClick={() => setShowEventModal(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Event Title</label>
                <input type="text" placeholder="Enter event title" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" />
                </div>
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Event location" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Event description..."
                  rows={5}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select>
                  <option>Upcoming</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn-secondary"
                onClick={() => setShowEventModal(false)}
              >
                Cancel
              </button>
              <button className="btn-primary">Create Event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
