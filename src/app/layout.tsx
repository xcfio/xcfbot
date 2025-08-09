import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "XCF Bot - Multifunctional Discord Bot",
    description:
        "The ultimate Discord bot for server moderation, management, leveling systems, and community engagement. Transform your Discord server with XCF Bot.",
    keywords: "Discord bot, moderation bot, server management, leveling system, Discord community, XCF bot",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#4285f4" />
                <meta name="theme-color" content="#4285f4" />
            </head>
            <body suppressHydrationWarning>{children}</body>
        </html>
    )
}
