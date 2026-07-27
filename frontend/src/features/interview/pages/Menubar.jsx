import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Menubar.scss'
import menuIcon from '../../../assets/icons8-menu-bar-50white.png'


function Menubar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="sidebar-trigger" onClick={() => setOpen(true)} aria-label="Open menu">
        <img src={menuIcon} alt="Open menu" className="sidebar-trigger-icon" />
      </button>

      <div className={`sidebar-flyout ${open ? 'open' : ''}`}>
        <div className="flyout-header">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/double-left.png"
            alt="Close menu"
            className="flyout-back"
            onClick={() => setOpen(false)}
          />
          <span>Menu</span>
        </div>

        <nav className="sidebar-links">
          <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/home" onClick={() => setOpen(false)}>mock-interview</Link>
          <Link to="/home/history" onClick={() => setOpen(false)}>History</Link>
          <a href="#account" onClick={() => setOpen(false)}>Account</a>
          <a href="#setting" onClick={() => setOpen(false)}>Setting</a>
          <a href="#report" onClick={() => setOpen(false)}>Report</a>
          <a href="#logout" onClick={() => setOpen(false)}>Logout</a>
        </nav>
      </div>

      {open && <button className="flyout-backdrop" onClick={() => setOpen(false)} aria-label="Close menu overlay" />}
    </>
  )
}

export default Menubar