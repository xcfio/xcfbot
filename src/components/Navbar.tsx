"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <a href="/" className="brand-link">
                        <div className="brand-logo">
                            <span className="brand-name">XCF</span>
                        </div>
                        <span className="brand-text">Bot</span>
                    </a>
                </div>

                <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    <div className="navbar-links">
                        <a href="#invite" className="nav-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            Invite
                        </a>
                        <a href="#docs" className="nav-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                            </svg>
                            Docs
                        </a>
                        <a href="#help" className="nav-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
                            </svg>
                            Help
                        </a>
                        <a href="#status" className="nav-link">
                            <div className="status-dot online"></div>
                            Status
                        </a>
                        <a href="#login" className="nav-link login-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                            </svg>
                            Login
                        </a>
                    </div>
                </div>

                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`hamburger ${isOpen ? "active" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>
        </nav>
    )
}
