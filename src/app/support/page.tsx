"use client"

import React, { useState, useEffect } from "react"
import {
    MessageCircle,
    Mail,
    Book,
    Zap,
    Shield,
    Users,
    FileText,
    ExternalLink,
    ChevronDown,
    ChevronRight
} from "lucide-react"
import styles from "./support.module.css"
import Footer from "@/components/Footer"

// Extend Window interface for Turnstile
declare global {
    interface Window {
        turnstile?: {
            render: (
                element: string,
                options: {
                    sitekey: string
                    callback: (token: string) => void
                    "expired-callback": () => void
                    "error-callback": () => void
                }
            ) => string
            reset: (widgetId: string) => void
        }
    }
}

export default function SupportPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        priority: "medium",
        category: "general",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [captchaVerified, setCaptchaVerified] = useState(false)
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
    const [captchaWidget, setCaptchaWidget] = useState<string | null>(null)

    // Load Cloudflare Turnstile
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
        script.async = true
        script.defer = true
        document.head.appendChild(script)

        script.onload = () => {
            if (window.turnstile) {
                const widget = window.turnstile.render("#cf-turnstile", {
                    sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY,
                    callback: function (token: string) {
                        setCaptchaVerified(true)
                    },
                    "expired-callback": function () {
                        setCaptchaVerified(false)
                    },
                    "error-callback": function () {
                        setCaptchaVerified(false)
                    }
                })
                setCaptchaWidget(widget)
            }
        }

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script)
            }
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!captchaVerified) {
            alert("Please complete the captcha verification")
            return
        }

        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            alert("Support ticket submitted successfully! We'll get back to you within 24 hours.")
            setFormData({
                name: "",
                email: "",
                subject: "",
                priority: "medium",
                category: "general",
                message: ""
            })
            setCaptchaVerified(false)
            if (window.turnstile && captchaWidget) {
                window.turnstile.reset(captchaWidget)
            }
            setIsSubmitting(false)
        }, 2000)
    }

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index)
    }

    const supportOptions = [
        {
            icon: <MessageCircle className={styles.optionIcon} />,
            title: "Discord Support",
            description: "Join our support server for real-time help",
            action: "Join Server",
            link: "#"
        },
        {
            icon: <Book className={styles.optionIcon} />,
            title: "Documentation",
            description: "Browse our comprehensive guides and tutorials",
            action: "View Docs",
            link: "#"
        },
        {
            icon: <FileText className={styles.optionIcon} />,
            title: "FAQ",
            description: "Find answers to commonly asked questions",
            action: "View FAQ",
            link: "#"
        }
    ]

    const faqs = [
        {
            question: "How do I add XCF Bot to my server?",
            answer: "Click the 'Add to Server' button and select your Discord server. Make sure you have the 'Manage Server' permission."
        },
        {
            question: "What permissions does XCF Bot need?",
            answer: "XCF Bot requires Administrator permissions for full functionality, including moderation, role management, and channel creation."
        },
        {
            question: "How do I set up the leveling system?",
            answer: "Use the `/setup leveling` command to configure XP rates, level roles, and rewards for your server."
        },
        {
            question: "Can I customize XCF Bot's commands?",
            answer: "Yes! Use the dashboard to customize command prefixes, disable specific commands, and set channel restrictions."
        },
        {
            question: "Is XCF Bot free to use?",
            answer: "XCF Bot offers a free tier with basic features. Premium features are available through our subscription plans."
        }
    ]

    return (
        <>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <div className={styles.headerInfo}>
                            <div className={styles.logo}>
                                <Zap className={styles.logoIcon} />
                            </div>
                            <div>
                                <h1 className={styles.title}>XCF Bot Support</h1>
                                <p className={styles.subtitle}>Get help with your Discord bot</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.mainContent}>
                    {/* Quick Support Options */}
                    <div className={styles.supportGrid}>
                        {supportOptions.map((option, index) => (
                            <div key={index} className={styles.supportCard}>
                                <div className={styles.supportCardIcon}>{option.icon}</div>
                                <h3 className={styles.supportCardTitle}>{option.title}</h3>
                                <p className={styles.supportCardDescription}>{option.description}</p>
                                <a href={option.link} className={styles.supportCardButton}>
                                    {option.action} <ExternalLink className={styles.buttonIcon} />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className={styles.contentGrid}>
                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <Mail className={styles.cardIcon} />
                                    <h2 className={styles.cardTitle}>Contact Support</h2>
                                </div>

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGrid}>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={styles.input}
                                                required
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={styles.input}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGrid}>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Category</label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                                className={styles.select}
                                            >
                                                <option value="general">General Support</option>
                                                <option value="technical">Technical Issue</option>
                                                <option value="billing">Billing & Premium</option>
                                                <option value="feature">Feature Request</option>
                                                <option value="bug">Bug Report</option>
                                            </select>
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Priority</label>
                                            <select
                                                name="priority"
                                                value={formData.priority}
                                                onChange={handleInputChange}
                                                className={styles.select}
                                            >
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                                <option value="urgent">Urgent</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className={styles.textarea}
                                            placeholder="Please provide details about your issue..."
                                            required
                                        />
                                    </div>

                                    {/* Cloudflare Turnstile */}
                                    <div className={styles.captchaContainer}>
                                        <div id="cf-turnstile" className={styles.captcha}></div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !captchaVerified}
                                        className={styles.submitButton}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className={styles.spinner}></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Ticket"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className={styles.faqSection}>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <FileText className={styles.cardIcon} />
                                    <h2 className={styles.cardTitle}>Frequently Asked Questions</h2>
                                </div>

                                <div className={styles.faqList}>
                                    {faqs.map((faq, index) => (
                                        <div key={index} className={styles.faqItem}>
                                            <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                                <span>{faq.question}</span>
                                                {expandedFaq === index ? (
                                                    <ChevronDown className={styles.faqIcon} />
                                                ) : (
                                                    <ChevronRight className={styles.faqIcon} />
                                                )}
                                            </button>
                                            {expandedFaq === index && (
                                                <div className={styles.faqAnswer}>{faq.answer}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Status Card */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <Shield className={styles.cardIcon} />
                                    <h3 className={styles.cardTitle}>System Status</h3>
                                </div>

                                <div className={styles.statusList}>
                                    <div className={styles.statusItem}>
                                        <span className={styles.statusName}>Discord API</span>
                                        <span className={`${styles.statusBadge} ${styles.statusOperational}`}>
                                            Operational
                                        </span>
                                    </div>
                                    <div className={styles.statusItem}>
                                        <span className={styles.statusName}>Bot Services</span>
                                        <span className={`${styles.statusBadge} ${styles.statusOperational}`}>
                                            Operational
                                        </span>
                                    </div>
                                    <div className={styles.statusItem}>
                                        <span className={styles.statusName}>Web Dashboard</span>
                                        <span className={`${styles.statusBadge} ${styles.statusOperational}`}>
                                            Operational
                                        </span>
                                    </div>
                                    <div className={styles.statusItem}>
                                        <span className={styles.statusName}>Database</span>
                                        <span className={`${styles.statusBadge} ${styles.statusOperational}`}>
                                            Operational
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.responseTime}>Average response time: 24 hours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
