"use client"

import { useState, useEffect } from "react"
import { Plus, FileText, HelpCircle, Clock, Github, MessageCircle, Sun, Moon, Shield } from "lucide-react"
import "./Footer.css"

export default function Footer() {
    const [isLight, setIsLight] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches

        const shouldBeLight = savedTheme === "light" || (!savedTheme && prefersLight)
        setIsLight(shouldBeLight)

        if (shouldBeLight) {
            document.body.setAttribute("data-theme", "light")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isLight
        setIsLight(newTheme)

        if (newTheme) {
            document.body.setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
        } else {
            document.body.removeAttribute("data-theme")
            localStorage.setItem("theme", "dark")
        }
    }

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-info">
                            <h3 className="footer-title">
                                <a href="/">XCF Bot</a>
                            </h3>
                            <p className="footer-description">
                                The ultimate multifunctional Discord bot for moderation, server management, leveling
                                systems, and community engagement. Transform your server today.
                            </p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-section">
                                <h4>Quick Links</h4>
                                <div className="footer-nav">
                                    <a
                                        href="https://discord.com/oauth2/authorize?client_id=1211535069492154398"
                                        target="_blank"
                                        className="footer-link"
                                    >
                                        <Plus size={18} />
                                        Invite Bot
                                    </a>
                                    <a href="https://xcf-bot.netlify.app/" target="_blank" className="footer-link">
                                        <FileText size={18} />
                                        Documentation
                                    </a>
                                    <a href="/support" className="footer-link">
                                        <HelpCircle size={18} />
                                        Support
                                    </a>
                                    <a href="https://xcfio.cronitorstatus.com" target="_blank" className="footer-link">
                                        <Clock size={18} />
                                        Bot Status
                                    </a>
                                </div>
                            </div>

                            <div className="footer-section">
                                <h4>Legal</h4>
                                <div className="footer-nav">
                                    <a href="/terms" className="footer-link">
                                        <FileText size={18} />
                                        Terms of Service
                                    </a>
                                    <a href="/privacy" className="footer-link">
                                        <Shield size={18} />
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>

                            <div className="footer-section">
                                <h4>Connect</h4>
                                <div className="social-links">
                                    <a
                                        href="https://github.com/xcfio/xcfbot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="GitHub Repository"
                                    >
                                        <Github size={20} />
                                        GitHub
                                    </a>

                                    <a
                                        href="https://discord.gg/CV53ZxmeaE"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="Discord Server"
                                    >
                                        <MessageCircle size={20} />
                                        Discord
                                    </a>
                                </div>
                            </div>

                            <div className="footer-section">
                                <h4>Theme</h4>
                                <button
                                    onClick={toggleTheme}
                                    className="theme-toggle-button"
                                    aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
                                >
                                    {isLight ? <Moon size={18} /> : <Sun size={18} />}
                                    <span className="theme-text">{isLight ? "Dark Mode" : "Light Mode"}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} XCF Bot. Made with ❤️ for Discord communities.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
