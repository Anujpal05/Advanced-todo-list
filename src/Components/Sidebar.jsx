import React from 'react'
import '../css/styles.css';
import profile from '../assets/profile.jpeg'


function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="profile">
                <img src={profile} alt="Profile" />
                <h2>Hey, ABCD</h2>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><i className="fas fa-list"></i> All Tasks</li>
                    <li className="active"><i className="fas fa-calendar-day"></i> Today</li>
                    <li><i className="fas fa-star"></i> Important</li>
                    <li><i className="fas fa-bookmark"></i> Planned</li>
                    <li><i className="fas fa-user"></i> Assigned to me</li>
                </ul>
            </nav>
            <button className="add-list-btn">+ Add list</button>
            <div className="today-tasks">
                <h3>Today Tasks</h3>
                <div className="task-status">
                    <span>11</span>
                    <div className="status-chart">
                        <div className="status-pending"></div>
                        <div className="status-done"></div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
