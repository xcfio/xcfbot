"use client"

import { useState, useEffect } from "react"
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
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                        </svg>
                                        Invite Bot
                                    </a>
                                    <a href="https://xcf-docs.netlify.app/" target="_blank" className="footer-link">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                        </svg>
                                        Documentation
                                    </a>
                                    <a href="https://discord.gg/CV53ZxmeaE" target="_blank" className="footer-link">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
                                        </svg>
                                        Support
                                    </a>
                                    <a href="https://xcfio.betteruptime.com/" target="_blank" className="footer-link">
                                        <div className="status-dot online"></div>
                                        Bot Status
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
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>

                                    <a
                                        href="https://discord.gg/CV53ZxmeaE"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label="Discord Server"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                                        </svg>
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
                                    {isLight ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                        </svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="5" />
                                            <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" stroke="currentColor" />
                                            <line
                                                x1="12"
                                                y1="21"
                                                x2="12"
                                                y2="23"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            />
                                            <line
                                                x1="4.22"
                                                y1="4.22"
                                                x2="5.64"
                                                y2="5.64"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            />
                                            <line
                                                x1="18.36"
                                                y1="18.36"
                                                x2="19.78"
                                                y2="19.78"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            />
                                            <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" stroke="currentColor" />
                                            <line
                                                x1="21"
                                                y1="12"
                                                x2="23"
                                                y2="12"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            />
                                            <line
                                                x1="4.22"
                                                y1="19.78"
                                                x2="5.64"
                                                y2="18.36"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            />
                                            <line
                                                x1="18.36"
                                                y1="5.64"
                                                x2="19.78"
                                                y2="4.22"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    )}
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
