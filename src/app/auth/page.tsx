"use client"

import { useEffect, useState } from "react"
import styles from "./auth.module.css"

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem("theme")
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches
        const shouldBeLight = savedTheme === "light" || (!savedTheme && prefersLight)

        if (shouldBeLight) {
            document.body.setAttribute("data-theme", "light")
        }
    }, [])

    const handleDiscordAuth = () => (window.location.href = "https://discord.com")
    const handleGithubAuth = () => (window.location.href = "https://github.com")

    return (
        <>
            <div className={styles.container}>
                <div className={styles.authCard}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>{isLogin ? "Welcome Back" : "Create Account"}</h1>
                        <p className={styles.subtitle}>
                            {isLogin ? "Sign in to your account to continue" : "Join us and start your journey"}
                        </p>
                    </div>

                    <div className={styles.authButtons}>
                        <button
                            className={`${styles.authButton} ${styles.discordButton}`}
                            onClick={handleDiscordAuth}
                            type="button"
                        >
                            <DiscordIcon />
                            <span>{isLogin ? "Sign in" : "Sign up"} with Discord</span>
                        </button>

                        <button
                            className={`${styles.authButton} ${styles.githubButton}`}
                            onClick={handleGithubAuth}
                            type="button"
                        >
                            <GithubIcon />
                            <span>{isLogin ? "Sign in" : "Sign up"} with GitHub</span>
                        </button>
                    </div>

                    <div className={styles.divider}>
                        <span className={styles.dividerText}>or</span>
                    </div>

                    <div className={styles.toggleSection}>
                        <p className={styles.toggleText}>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <button className={styles.toggleButton} onClick={() => setIsLogin(!isLogin)} type="button">
                            {isLogin ? "Create account" : "Sign in"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

function DiscordIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.246.195.373.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
        </svg>
    )
}

function GithubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    )
}
