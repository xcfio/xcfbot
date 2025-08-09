"use client"

import React, { useState, useEffect } from "react"
import { ArrowLeft, Wifi } from "lucide-react"
import "./not-found.css"

export default function NotFound() {
    const [mounted, setMounted] = useState(false)
    const [glitchActive, setGlitchActive] = useState(false)
    const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>(
        []
    )

    useEffect(() => {
        setMounted(true)

        // Generate particles after mounting to avoid hydration mismatch
        const generatedParticles = [...Array(50)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${2 + Math.random() * 3}s`
        }))
        setParticles(generatedParticles)

        // Trigger glitch effect periodically
        const glitchInterval = setInterval(() => {
            setGlitchActive(true)
            setTimeout(() => setGlitchActive(false), 200)
        }, 3000)

        return () => clearInterval(glitchInterval)
    }, [])

    const handleGoBack = () => {
        window.history.back()
    }

    return (
        <>
            <div className="not-found-container">
                {/* Animated background elements */}
                <div className="background-particles">
                    {particles.map((particle, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: particle.left,
                                top: particle.top,
                                animationDelay: particle.delay,
                                animationDuration: particle.duration
                            }}
                        />
                    ))}
                </div>

                {/* Floating geometric shapes */}
                <div className="floating-shapes">
                    <div className="shape shape-square" style={{ animationDuration: "20s" }} />
                    <div className="shape shape-circle" style={{ animationDelay: "1s" }} />
                    <div className="shape shape-ring" style={{ animationDelay: "2s" }} />
                </div>

                <div className={`content ${mounted ? "mounted" : ""}`}>
                    {/* Main 404 Text with Shadow/Layered Effect */}
                    <div className="text-404-container">
                        <h1 className={`text-404 ${glitchActive ? "glitch-active" : ""}`}>404</h1>

                        {/* Glitch overlay */}
                        {glitchActive && (
                            <>
                                <h1 className="text-404-glitch text-404-glitch-red">404</h1>
                                <h1 className="text-404-glitch text-404-glitch-cyan">404</h1>
                            </>
                        )}
                    </div>

                    {/* Subtitle */}
                    <div className="subtitle-container">
                        <h2 className="subtitle">Oops! Page Not Found</h2>
                        <p className="description">
                            The page you're looking for seems to have vanished into the digital void. Don't worry, we'll
                            help you find your way back.
                        </p>
                    </div>

                    {/* Animated Icon */}
                    <div className="icon-container">
                        <div className="icon-wrapper">
                            <Wifi className="wifi-icon" />
                            <div className="icon-pulse" />
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="button-container">
                        <button onClick={handleGoBack} className="go-back-button">
                            <div className="button-content">
                                <ArrowLeft className="arrow-icon" />
                                Go Back
                            </div>
                        </button>
                    </div>

                    {/* Error Code */}
                    <div className="error-code">
                        <p className="error-text">ERROR_CODE: PAGE_NOT_FOUND_404</p>
                    </div>
                </div>
            </div>
        </>
    )
}
