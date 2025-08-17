"use client"

import React, { useState, useEffect, useRef } from "react"
import {
    Mail,
    Zap,
    ArrowLeft,
    Send,
    User,
    MessageSquare,
    LogOut,
    Clock,
    CheckCircle,
    AlertCircle,
    XCircle,
    ChevronDown,
    ChevronUp,
    Paperclip
} from "lucide-react"
import { useRouter } from "next/navigation"
import jwt from "jsonwebtoken"
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

interface UserData {
    id: string
    username: string
    avatar: string
    email?: string
}

interface TicketMessage {
    id: string
    content: string
    timestamp: string
    isStaff: boolean
    author: {
        name: string
        avatar?: string
    }
}

interface Ticket {
    id: string
    subject: string
    category: string
    status: "open" | "pending" | "resolved" | "closed"
    createdAt: string
    updatedAt: string
    messages: TicketMessage[]
}

export default function SupportPage() {
    const router = useRouter()
    const [userData, setUserData] = useState<UserData | null>(null)
    const [activeTab, setActiveTab] = useState<"new" | "tickets">("new")
    const [formData, setFormData] = useState({
        subject: "",
        category: "general",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [captchaVerified, setCaptchaVerified] = useState(false)
    const [captchaWidget, setCaptchaWidget] = useState<string | null>(null)
    const [previousTickets, setPreviousTickets] = useState<Ticket[]>([])
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
    const [newMessage, setNewMessage] = useState("")
    const [isSendingMessage, setIsSendingMessage] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Mock previous tickets data
    const mockTickets: Ticket[] = [
        {
            id: "TKT-001",
            subject: "Bot not responding to commands",
            category: "technical",
            status: "resolved",
            createdAt: "2024-01-15T10:30:00Z",
            updatedAt: "2024-01-16T14:20:00Z",
            messages: [
                {
                    id: "msg1",
                    content:
                        "Hi, my bot suddenly stopped responding to all commands. It was working fine yesterday but today nothing happens when I type commands.",
                    timestamp: "2024-01-15T10:30:00Z",
                    isStaff: false,
                    author: { name: "fcio", avatar: "6eab1a43ef6912e5cbd7b48b657738ac" }
                },
                {
                    id: "msg2",
                    content:
                        "Hello! I'm sorry to hear about this issue. Let me help you troubleshoot this. Can you please check if the bot has the necessary permissions in your server? Also, have you made any recent changes to your server settings?",
                    timestamp: "2024-01-15T11:45:00Z",
                    isStaff: true,
                    author: { name: "Support Team", avatar: undefined }
                },
                {
                    id: "msg3",
                    content:
                        "I checked the permissions and they look correct. No recent changes to server settings either. The bot shows as online but just doesn't respond.",
                    timestamp: "2024-01-15T12:15:00Z",
                    isStaff: false,
                    author: { name: "fcio", avatar: "6eab1a43ef6912e5cbd7b48b657738ac" }
                },
                {
                    id: "msg4",
                    content:
                        "Thank you for checking that. I see the issue now - there was a temporary outage with our command processing service. This has been resolved and your bot should be responding normally now. Please try a few commands and let me know if you're still experiencing issues.",
                    timestamp: "2024-01-16T14:20:00Z",
                    isStaff: true,
                    author: { name: "Support Team", avatar: undefined }
                },
                {
                    id: "msg5",
                    content: "Perfect! Everything is working now. Thank you for the quick resolution!",
                    timestamp: "2024-01-16T14:25:00Z",
                    isStaff: false,
                    author: { name: "fcio", avatar: "6eab1a43ef6912e5cbd7b48b657738ac" }
                }
            ]
        },
        {
            id: "TKT-002",
            subject: "Premium subscription not activating",
            category: "billing",
            status: "open",
            createdAt: "2024-01-18T09:15:00Z",
            updatedAt: "2024-01-18T16:30:00Z",
            messages: [
                {
                    id: "msg6",
                    content:
                        "I purchased the premium subscription yesterday but it's still showing as inactive. The payment went through successfully according to my bank statement.",
                    timestamp: "2024-01-18T09:15:00Z",
                    isStaff: false,
                    author: { name: "fcio", avatar: "6eab1a43ef6912e5cbd7b48b657738ac" }
                },
                {
                    id: "msg7",
                    content:
                        "Hi there! I apologize for the delay with your premium activation. I can see your payment was processed successfully. Let me manually activate your subscription now. This should be reflected in your account within the next few minutes.",
                    timestamp: "2024-01-18T16:30:00Z",
                    isStaff: true,
                    author: { name: "Billing Support", avatar: undefined }
                }
            ]
        }
    ]

    useEffect(() => {
        const authCookie = document.cookie.split("; ").find((row) => row.startsWith("auth="))

        if (!authCookie) {
            router.push("/auth")
            return
        }

        try {
            const token = authCookie.split("=")[1]
            const decoded = jwt.decode(token) as any

            if (!decoded) {
                throw new Error("Invalid token")
            }

            // Check if token is expired
            if (decoded.exp && Date.now() >= decoded.exp * 1000) {
                throw new Error("Token expired")
            }

            setUserData({
                id: decoded.id || decoded.sub || decoded.user_id,
                username: decoded.username || decoded.name || decoded.global_name,
                avatar: decoded.avatar || decoded.avatar_url,
                email: decoded.email
            })
            setPreviousTickets(mockTickets)
        } catch (error) {
            console.error("Invalid auth token:", error)
            document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            router.push("/auth")
        }
    }, [router])
    // Load Cloudflare Turnstile
    useEffect(() => {
        if (!userData || activeTab !== "new") return

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
    }, [userData, activeTab])

    // Scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [selectedTicket?.messages])

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
                subject: "",
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

    const handleSendMessage = async () => {
        if (!newMessage.trim() || !selectedTicket) return

        setIsSendingMessage(true)

        // Simulate sending message
        setTimeout(() => {
            const newMsg: TicketMessage = {
                id: `msg${Date.now()}`,
                content: newMessage,
                timestamp: new Date().toISOString(),
                isStaff: false,
                author: { name: userData?.username || "User", avatar: userData?.avatar }
            }

            setSelectedTicket((prev) =>
                prev
                    ? {
                          ...prev,
                          messages: [...prev.messages, newMsg],
                          updatedAt: new Date().toISOString()
                      }
                    : null
            )

            setPreviousTickets((prev) =>
                prev.map((ticket) =>
                    ticket.id === selectedTicket.id
                        ? { ...ticket, messages: [...ticket.messages, newMsg], updatedAt: new Date().toISOString() }
                        : ticket
                )
            )

            setNewMessage("")
            setIsSendingMessage(false)
        }, 1000)
    }

    const handleLogout = () => {
        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        router.push("/auth")
    }

    const handleBack = () => {
        router.push("/dashboard")
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "open":
                return <AlertCircle className={styles.statusIconOpen} />
            case "pending":
                return <Clock className={styles.statusIconPending} />
            case "resolved":
                return <CheckCircle className={styles.statusIconResolved} />
            case "closed":
                return <XCircle className={styles.statusIconClosed} />
            default:
                return <AlertCircle className={styles.statusIconOpen} />
        }
    }

    const getStatusClass = (status: string) => {
        switch (status) {
            case "open":
                return styles.statusOpen
            case "pending":
                return styles.statusPending
            case "resolved":
                return styles.statusResolved
            case "closed":
                return styles.statusClosed
            default:
                return styles.statusOpen
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString()
    }

    if (!userData) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Checking authentication...</p>
            </div>
        )
    }

    return (
        <>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <button onClick={handleBack} className={styles.backButton}>
                            <ArrowLeft className={styles.backIcon} />
                            Back to Dashboard
                        </button>

                        <div className={styles.headerInfo}>
                            <div className={styles.logo}>
                                <Zap className={styles.logoIcon} />
                            </div>
                            <div className={styles.headerText}>
                                <h1 className={styles.title}>Contact Support</h1>
                                <p className={styles.subtitle}>Get help with XCF Bot</p>
                            </div>
                        </div>

                        <div className={styles.headerActions}>
                            <div className={styles.userInfo}>
                                <img
                                    src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png?size=128`}
                                    alt={userData.username}
                                    className={styles.userAvatar}
                                />
                                <div className={styles.userDetails}>
                                    <span className={styles.username}>{userData.username}</span>
                                </div>
                            </div>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                <LogOut className={styles.logoutIcon} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className={styles.tabNavigation}>
                    <div className={styles.tabContainer}>
                        <button
                            className={`${styles.tabButton} ${activeTab === "new" ? styles.tabButtonActive : ""}`}
                            onClick={() => setActiveTab("new")}
                        >
                            <Mail className={styles.tabIcon} />
                            New Ticket
                        </button>
                        <button
                            className={`${styles.tabButton} ${activeTab === "tickets" ? styles.tabButtonActive : ""}`}
                            onClick={() => setActiveTab("tickets")}
                        >
                            <MessageSquare className={styles.tabIcon} />
                            My Tickets ({previousTickets.length})
                        </button>
                    </div>
                </div>

                <div className={styles.mainContent}>
                    {activeTab === "new" ? (
                        <div className={styles.supportContainer}>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <Mail className={styles.cardIcon} />
                                    <div className={styles.cardHeaderText}>
                                        <h2 className={styles.cardTitle}>Submit Support Ticket</h2>
                                        <p className={styles.cardDescription}>
                                            Describe your issue and we'll help you resolve it quickly
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <MessageSquare className={styles.labelIcon} />
                                            Category
                                        </label>
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
                                            <option value="account">Account Issue</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <User className={styles.labelIcon} />
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            placeholder="Brief description of your issue"
                                            required
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>
                                            <MessageSquare className={styles.labelIcon} />
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={8}
                                            className={styles.textarea}
                                            placeholder="Please provide detailed information about your issue. Include any error messages, steps to reproduce, or screenshots if relevant..."
                                            required
                                        />
                                    </div>

                                    <div className={styles.userContext}>
                                        <h4 className={styles.contextTitle}>Ticket Information</h4>
                                        <div className={styles.contextGrid}>
                                            <div className={styles.contextItem}>
                                                <span className={styles.contextLabel}>User ID:</span>
                                                <span className={styles.contextValue}>{userData.id}</span>
                                            </div>
                                            <div className={styles.contextItem}>
                                                <span className={styles.contextLabel}>Username:</span>
                                                <span className={styles.contextValue}>{userData.username}</span>
                                            </div>
                                            {userData.email && (
                                                <div className={styles.contextItem}>
                                                    <span className={styles.contextLabel}>Email:</span>
                                                    <span className={styles.contextValue}>{userData.email}</span>
                                                </div>
                                            )}
                                        </div>
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
                                                <div className={styles.submitSpinner}></div>
                                                Submitting Ticket...
                                            </>
                                        ) : (
                                            <>
                                                <Send className={styles.submitIcon} />
                                                Submit Support Ticket
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>

                            <div className={styles.helpCard}>
                                <div className={styles.helpContent}>
                                    <h3 className={styles.helpTitle}>Need Immediate Help?</h3>
                                    <p className={styles.helpText}>
                                        For urgent issues or real-time support, consider joining our Discord community
                                    </p>
                                    <a href="#" className={styles.discordButton}>
                                        <MessageSquare className={styles.discordIcon} />
                                        Join Support Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.ticketsContainer}>
                            {selectedTicket ? (
                                <div className={styles.ticketView}>
                                    <div className={styles.ticketHeader}>
                                        <button
                                            className={styles.backToListButton}
                                            onClick={() => setSelectedTicket(null)}
                                        >
                                            <ArrowLeft className={styles.backIcon} />
                                            Back to Tickets
                                        </button>
                                        <div className={styles.ticketInfo}>
                                            <h2 className={styles.ticketSubject}>{selectedTicket.subject}</h2>
                                            <div className={styles.ticketMeta}>
                                                <span className={styles.ticketId}>#{selectedTicket.id}</span>
                                                <div
                                                    className={`${styles.ticketStatus} ${getStatusClass(
                                                        selectedTicket.status
                                                    )}`}
                                                >
                                                    {getStatusIcon(selectedTicket.status)}
                                                    {selectedTicket.status.charAt(0).toUpperCase() +
                                                        selectedTicket.status.slice(1)}
                                                </div>
                                                <span className={styles.ticketDate}>
                                                    Created {formatDate(selectedTicket.createdAt)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.messagesContainer}>
                                        <div className={styles.messagesList}>
                                            {selectedTicket.messages.map((message) => (
                                                <div
                                                    key={message.id}
                                                    className={`${styles.message} ${
                                                        message.isStaff ? styles.messageStaff : styles.messageUser
                                                    }`}
                                                >
                                                    <div className={styles.messageAvatar}>
                                                        {message.author.avatar ? (
                                                            <img
                                                                src={`https://cdn.discordapp.com/avatars/${userData.id}/${message.author.avatar}.png?size=128`}
                                                                alt={message.author.name}
                                                                className={styles.avatarImage}
                                                            />
                                                        ) : (
                                                            <div className={styles.avatarPlaceholder}>
                                                                <User className={styles.avatarIcon} />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className={styles.messageContent}>
                                                        <div className={styles.messageHeader}>
                                                            <span className={styles.messageAuthor}>
                                                                {message.author.name}
                                                            </span>
                                                            {message.isStaff && (
                                                                <span className={styles.staffBadge}>Staff</span>
                                                            )}
                                                            <span className={styles.messageTime}>
                                                                {formatDate(message.timestamp)}
                                                            </span>
                                                        </div>
                                                        <div className={styles.messageText}>{message.content}</div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div ref={messagesEndRef} />
                                        </div>

                                        {selectedTicket.status !== "closed" && selectedTicket.status !== "resolved" && (
                                            <div className={styles.messageInput}>
                                                <div className={styles.inputContainer}>
                                                    <textarea
                                                        value={newMessage}
                                                        onChange={(e) => setNewMessage(e.target.value)}
                                                        placeholder="Type your message..."
                                                        className={styles.messageTextarea}
                                                        rows={3}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter" && !e.shiftKey) {
                                                                e.preventDefault()
                                                                handleSendMessage()
                                                            }
                                                        }}
                                                    />
                                                    <div className={styles.inputActions}>
                                                        <button className={styles.attachButton} type="button">
                                                            <Paperclip className={styles.attachIcon} />
                                                        </button>
                                                        <button
                                                            onClick={handleSendMessage}
                                                            disabled={!newMessage.trim() || isSendingMessage}
                                                            className={styles.sendButton}
                                                        >
                                                            {isSendingMessage ? (
                                                                <div className={styles.spinner}></div>
                                                            ) : (
                                                                <Send className={styles.sendIcon} />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.ticketsList}>
                                    <div className={styles.ticketsHeader}>
                                        <h2 className={styles.ticketsTitle}>Your Support Tickets</h2>
                                        <p className={styles.ticketsSubtitle}>View and manage your support requests</p>
                                    </div>

                                    {previousTickets.length > 0 ? (
                                        <div className={styles.ticketsGrid}>
                                            {previousTickets.map((ticket) => (
                                                <div
                                                    key={ticket.id}
                                                    className={styles.ticketCard}
                                                    onClick={() => setSelectedTicket(ticket)}
                                                >
                                                    <div className={styles.ticketCardHeader}>
                                                        <div className={styles.ticketCardInfo}>
                                                            <h3 className={styles.ticketCardSubject}>
                                                                {ticket.subject}
                                                            </h3>
                                                            <span className={styles.ticketCardId}>#{ticket.id}</span>
                                                        </div>
                                                        <div
                                                            className={`${styles.ticketCardStatus} ${getStatusClass(
                                                                ticket.status
                                                            )}`}
                                                        >
                                                            {getStatusIcon(ticket.status)}
                                                            {ticket.status.charAt(0).toUpperCase() +
                                                                ticket.status.slice(1)}
                                                        </div>
                                                    </div>
                                                    <div className={styles.ticketCardMeta}>
                                                        <span className={styles.ticketCardCategory}>
                                                            {ticket.category.charAt(0).toUpperCase() +
                                                                ticket.category.slice(1)}
                                                        </span>
                                                        <span className={styles.ticketCardDate}>
                                                            Updated {formatDate(ticket.updatedAt)}
                                                        </span>
                                                    </div>
                                                    <div className={styles.ticketCardFooter}>
                                                        <span className={styles.messageCount}>
                                                            {ticket.messages.length} messages
                                                        </span>
                                                        <ChevronDown className={styles.ticketCardIcon} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={styles.emptyState}>
                                            <MessageSquare className={styles.emptyIcon} />
                                            <h3 className={styles.emptyTitle}>No tickets yet</h3>
                                            <p className={styles.emptyText}>
                                                You haven't submitted any support tickets yet.
                                            </p>
                                            <button
                                                className={styles.createTicketButton}
                                                onClick={() => setActiveTab("new")}
                                            >
                                                Create New Ticket
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
