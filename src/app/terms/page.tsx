import { FileText, Calendar, AlertCircle, Users, Shield, Gavel } from "lucide-react"
import styles from "./terms.module.css"
import Footer from "@/components/Footer"

export default function TermsOfService() {
    return (
        <>
            <div className={styles.termsPage}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <div className={styles.iconWrapper}>
                            <FileText size={48} />
                        </div>
                        <h1 className={styles.title}>Terms of Service</h1>
                        <p className={styles.subtitle}>Please read these terms carefully before using XCF Bot</p>
                        <div className={styles.lastUpdated}>
                            <Calendar size={16} />
                            <span>Last updated: 12th August 2025</span>
                        </div>
                    </header>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <Users size={24} />
                                <h2>1. Acceptance of Terms</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>
                                    By inviting XCF Bot to your Discord server or using any of its features, you agree
                                    to be bound by these Terms of Service. If you do not agree to these terms, please do
                                    not use our service.
                                </p>
                                <p>
                                    These terms apply to all users, server administrators, and anyone who interacts with
                                    XCF Bot in any capacity.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <Shield size={24} />
                                <h2>2. Service Description</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>
                                    XCF Bot is a multifunctional Discord bot that provides moderation, server
                                    management, leveling systems, and community engagement features for Discord servers.
                                </p>
                                <p>Our services include but are not limited to:</p>
                                <ul>
                                    <li>Server moderation tools and automated moderation</li>
                                    <li>User leveling and experience tracking systems</li>
                                    <li>Server management utilities and commands</li>
                                    <li>Community engagement features and games</li>
                                    <li>Custom server configuration options</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <Gavel size={24} />
                                <h2>3. User Responsibilities</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>By using XCF Bot, you agree to:</p>
                                <ul>
                                    <li>
                                        Use the bot in compliance with Discord's Terms of Service and Community
                                        Guidelines
                                    </li>
                                    <li>Not attempt to exploit, hack, or abuse the bot's functionality</li>
                                    <li>Not use the bot for illegal activities or harassment</li>
                                    <li>Respect other users and maintain a positive community environment</li>
                                    <li>Report any bugs or security vulnerabilities responsibly</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <AlertCircle size={24} />
                                <h2>4. Prohibited Uses</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>You may not use XCF Bot to:</p>
                                <ul>
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Spam, flood, or abuse bot commands</li>
                                    <li>Attempt to reverse engineer or modify the bot</li>
                                    <li>Use the bot to distribute malware or harmful content</li>
                                    <li>Impersonate other users or organizations</li>
                                    <li>Collect personal information from other users without consent</li>
                                </ul>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <Shield size={24} />
                                <h2>5. Data and Privacy</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>
                                    XCF Bot collects and processes certain data to provide its services. This includes
                                    server information, user messages (for moderation), and usage statistics. For
                                    detailed information about our data practices, please review our Privacy Policy.
                                </p>
                                <p>
                                    We are committed to protecting your privacy and will never sell or share your
                                    personal information with third parties for marketing purposes.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <AlertCircle size={24} />
                                <h2>6. Service Availability</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>
                                    While we strive to maintain 99.9% uptime, XCF Bot is provided "as is" without
                                    guarantees of continuous availability. We may perform maintenance, updates, or
                                    experience unexpected downtime.
                                </p>
                                <p>
                                    We reserve the right to modify, suspend, or discontinue any part of our service at
                                    any time with reasonable notice to users.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <Gavel size={24} />
                                <h2>7. Limitation of Liability</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>
                                    XCF Bot and its developers shall not be liable for any indirect, incidental,
                                    special, or consequential damages arising from the use of our service. Our total
                                    liability shall not exceed the amount paid for our services, if any.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <FileText size={24} />
                                <h2>8. Changes to Terms</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>
                                    We reserve the right to update these Terms of Service at any time. Users will be
                                    notified of significant changes through our Discord server or website. Continued use
                                    of XCF Bot after changes constitutes acceptance of the new terms.
                                </p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <Users size={24} />
                                <h2>9. Contact Information</h2>
                            </div>
                            <div className={styles.sectionContent}>
                                <p>
                                    If you have questions about these Terms of Service or need to report violations,
                                    please contact us through our Discord support server or via our official website.
                                </p>
                                <div className={styles.contactLinks}>
                                    <a href="/support" className={styles.contactLink}>
                                        Support
                                    </a>
                                    <a
                                        href="https://discord.gg/CV53ZxmeaE"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.contactLink}
                                    >
                                        Discord Server
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
