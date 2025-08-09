"use client"

import { useState, useEffect } from "react"
import { X, Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react"
import "./Banner.css"

interface BannerProps {
    type?: "info" | "success" | "warning" | "error"
    message: string
    actionText?: string
    onAction?: () => void
    autoHide?: false | number
}

export default function Banner({ type = "info", message, actionText, onAction, autoHide = false }: BannerProps) {
    const [isVisible, setIsVisible] = useState(true)
    const bannerConfig = {
        info: {
            icon: Info,
            className: "info-banner-info"
        },
        success: {
            icon: CheckCircle,
            className: "info-banner-success"
        },
        warning: {
            icon: AlertTriangle,
            className: "info-banner-warning"
        },
        error: {
            icon: AlertCircle,
            className: "info-banner-error"
        }
    }

    const config = bannerConfig[type]
    const IconComponent = config.icon

    // Auto-hide functionality
    useEffect(() => {
        if (typeof autoHide === "number") {
            const timer = setTimeout(() => {
                setIsVisible(false)
            }, autoHide)

            return () => clearTimeout(timer)
        }
    }, [autoHide])

    const handleAction = () => {
        if (onAction) {
            onAction()
        }
    }

    const handleClose = () => {
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <>
            {/* Banner */}
            <div className={`info-banner ${config.className}`} role="banner" aria-live="polite">
                <div className="info-banner-container">
                    <div className="info-banner-content">
                        {/* Left side - Icon and Message */}
                        <div className="info-banner-left">
                            <IconComponent className="info-banner-icon" aria-hidden="true" />
                            <p className="info-banner-message">{message}</p>
                        </div>

                        {/* Right side - Action Button and Close */}
                        <div className="info-banner-right">
                            {actionText && (
                                <button onClick={handleAction} className="info-banner-action">
                                    {actionText} →
                                </button>
                            )}

                            <button onClick={handleClose} className="info-banner-close" aria-label="Close banner">
                                <X className="info-banner-close-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
