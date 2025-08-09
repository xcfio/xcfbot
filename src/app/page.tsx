"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="app">
            {/* <Navbar /> */}

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-container">
                        <div className="hero-content">
                            <div className="hero-badge">
                                <span className="badge-text">✨ Multifunctional Discord Bot</span>
                            </div>

                            <h1 className="hero-title">
                                Meet <span className="title-highlight">XCF</span>
                            </h1>

                            <p className="hero-description">
                                The ultimate Discord bot for server moderation, management, leveling systems, and so
                                much more. Transform your Discord server into a thriving community.
                            </p>

                            <div className="hero-buttons">
                                <a
                                    href="https://discord.com/oauth2/authorize?client_id=1211535069492154398"
                                    target="_blank"
                                    className="btn btn-primary"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                                    </svg>
                                    Invite to Server
                                </a>
                                <a href="#features" className="btn btn-secondary">
                                    Explore Features
                                </a>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="bot-preview">
                                <div className="bot-avatar">
                                    <span className="bot-name">XCF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features">
                    <div className="container">
                        <h2 className="section-title">Powerful Features</h2>
                        <p className="section-subtitle">
                            Everything you need to manage your Discord server effectively
                        </p>

                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon moderation">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10V11.5C14.8 12.6 13.9 13.5 12.8 13.5H11.2C10.1 13.5 9.2 12.6 9.2 11.5V10C9.2 8.6 10.6 7 12 7M12 8.2C11.2 8.2 10.4 8.8 10.4 10V11.5C10.4 11.8 10.6 12 11.2 12H12.8C13.2 12 13.6 11.8 13.6 11.5V10C13.6 8.8 12.8 8.2 12 8.2Z" />
                                    </svg>
                                </div>
                                <h3>Advanced Moderation</h3>
                                <p>
                                    Comprehensive moderation tools including auto-mod, warning systems, and ban
                                    management.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon leveling">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                                    </svg>
                                </div>
                                <h3>Leveling System</h3>
                                <p>Engage your community with XP rewards, levels, and customizable rank cards.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon management">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                                    </svg>
                                </div>
                                <h3>Server Management</h3>
                                <p>
                                    Streamline server operations with automated role management, welcome systems, and
                                    more.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon entertainment">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M14.5,9L11,15V13H8V11H11V9L14.5,9Z" />
                                    </svg>
                                </div>
                                <h3>Fun & Games</h3>
                                <p>
                                    Keep your community engaged with mini-games, economy features, and entertainment
                                    commands.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3 className="stat-number">10+</h3>
                                <p className="stat-label">Servers</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-number">10K+</h3>
                                <p className="stat-label">Users</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-number">99.9%</h3>
                                <p className="stat-label">Uptime</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-number">24/7</h3>
                                <p className="stat-label">Support</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Ready to Transform Your Server?</h2>
                            <p>
                                Join thousands of communities already using XCF to create amazing Discord experiences.
                            </p>
                            <a
                                href="https://discord.com/oauth2/authorize?client_id=1211535069492154398"
                                target="_blank"
                                className="btn btn-primary btn-large"
                            >
                                Get Started Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
