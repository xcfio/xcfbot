"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Shield, TrendingUp, Settings, Gamepad2 } from "lucide-react"
import Footer from "@/components/Footer"
import "./page.css"

export default function Home() {
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="app">
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
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <MessageCircle size={20} />
                                    Invite to Server
                                </a>
                                <a href="/auth" className="btn btn-secondary">
                                    Open Dashboard
                                </a>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="bot-preview">
                                <div className="bot-avatar">
                                    <svg
                                        viewBox="0 0 78 78"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="200"
                                        height="200"
                                        aria-label="XCF Bot Logo"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="lightGreenBlueViolet"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="100%"
                                            >
                                                <stop offset="0%" style={{ stopColor: "#34d399", stopOpacity: 1 }} />
                                                <stop offset="25%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        <circle
                                            cx="39"
                                            cy="39"
                                            r="35"
                                            fill="none"
                                            stroke="url(#lightGreenBlueViolet)"
                                            strokeWidth="8"
                                        />
                                    </svg>
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
                                    <Shield size={24} />
                                </div>
                                <h3>Advanced Moderation</h3>
                                <p>
                                    Comprehensive moderation tools including auto-mod, warning systems, and ban
                                    management.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon leveling">
                                    <TrendingUp size={24} />
                                </div>
                                <h3>Leveling System</h3>
                                <p>Engage your community with XP rewards, levels, and customizable rank cards.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon management">
                                    <Settings size={24} />
                                </div>
                                <h3>Server Management</h3>
                                <p>
                                    Streamline server operations with automated role management, welcome systems, and
                                    more.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon entertainment">
                                    <Gamepad2 size={24} />
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
                                rel="noopener noreferrer"
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
