import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'
import '../style/Menubar.scss'
import menuIcon from '../../../assets/icons8-menu-bar-50white.png'


function Menubar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { handleLogout } = useAuth()

  const onLogoutClick = async () => {
    setOpen(false)
    await handleLogout()
    navigate('/')
  }

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
          <Link to="/home/setting" onClick={() => setOpen(false)}>Setting</Link>
          <Link to="/help" onClick={() => setOpen(false)}>Help</Link>
          <button type="button" className="btn btn-secondary" style={{width: '100%', marginTop: '1rem'}} onClick={onLogoutClick}>Logout</button>
        </nav>
      </div>

      {open && <button className="flyout-backdrop" onClick={() => setOpen(false)} aria-label="Close menu overlay" />}
    </>
  )
}

export default Menubar