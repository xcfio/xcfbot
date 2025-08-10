import { Shield, Eye, Database, Users, Lock, Trash2, AlertCircle, Calendar } from "lucide-react"
import styles from "./privacy.module.css"

export default function PrivacyPolicy() {
    return (
        <div className={styles.privacyPage}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Shield size={48} />
                    </div>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.subtitle}>
                        Your privacy is important to us. Learn how we collect, use, and protect your data.
                    </p>
                    <div className={styles.lastUpdated}>
                        <Calendar size={16} />
                        <span>Last updated: January 15, 2025</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Eye size={24} />
                            <h2>1. Information We Collect</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                XCF Bot collects minimal data necessary to provide its services effectively. We only collect information that is essential for bot functionality and server management.
                            </p>
                            <h3>Data We Collect:</h3>
                            <ul>
                                <li><strong>Server Information:</strong> Server ID, name, member count, and configuration settings</li>
                                <li><strong>User Data:</strong> User ID, username, and interaction history with the bot</li>
                                <li><strong>Message Content:</strong> Only when necessary for moderation features (temporarily stored)</li>
                                <li><strong>Usage Statistics:</strong> Command usage, feature utilization, and performance metrics</li>
                                <li><strong>Leveling Data:</strong> XP points, levels, and activity tracking for participating users</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Database size={24} />
                            <h2>2. How We Use Your Information</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                We use the collected information solely to provide, maintain, and improve XCF Bot's services. Your data is never used for marketing or sold to third parties.
                            </p>
                            <h3>Primary Uses:</h3>
                            <ul>
                                <li>Providing moderation and server management features</li>
                                <li>Managing user levels and experience points</li>
                                <li>Storing server configurations and preferences</li>
                                <li>Analyzing usage patterns to improve bot performance</li>
                                <li>Providing customer support and troubleshooting</li>
                                <li>Ensuring compliance with Discord's Terms of Service</li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Lock size={24} />
                            <h2>3. Data Storage and Security</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.
                            </p>
                            <h3>Security Measures:</h3>
                            <ul>
                                <li>Encrypted data transmission using HTTPS/TLS protocols</li>
                                <li>Secure database storage with access controls</li>
                                <li>Regular security audits and vulnerability assessments</li>
                                <li>Limited access to data on a need-to-know basis</li>
                                <li>Automatic data backups with encryption</li>
                            </ul>
                            <div className={styles.infoBox}>
                                <AlertCircle size={20} />
                                <p>
                                    <strong>Important:</strong> While we implement robust security measures, no system is 100% secure. We continuously work to improve our security practices and will notify users of any significant security incidents.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Users size={24} />
                            <h2>4. Data Sharing and Third Parties</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share data only in the following limited circumstances:
                            </p>
                            <ul>
                                <li><strong>Service Providers:</strong> Trusted partners who help us operate the bot (hosting, analytics)</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                                <li><strong>Discord:</strong> As necessary to comply with Discord's API and Terms of Service</li>
                                <li><strong>Security:</strong> To investigate potential violations or security threats</li>
                            </ul>
                            <p>
                                All third-party partners are bound by strict confidentiality agreements and data protection requirements.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Trash2 size={24} />
                            <h2>5. Data Retention and Deletion</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                We retain your data only as long as necessary to provide our services or as required by law.
                            </p>
                            <h3>Retention Periods:</h3>
                            <ul>
                                <li><strong>Server Data:</strong> Retained while bot is active in the server</li>
                                <li><strong>User Leveling Data:</strong> Retained for up to 2 years after last activity</li>
                                <li><strong>Moderation Logs:</strong> Retained for 6 months for security purposes</li>
                                <li><strong>Usage Analytics:</strong> Aggregated data retained for 1 year</li>
                                <li><strong>Message Content:</strong> Automatically deleted after 24-48 hours</li>
                            </ul>
                            <p>
                                When XCF Bot is removed from a server, all associated server data is automatically deleted within 30 days.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Eye size={24} />
                            <h2>6. Your Privacy Rights</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                You have several rights regarding your personal data. We're committed to helping you exercise these rights.
                            </p>
                            <h3>Your Rights Include:</h3>
                            <ul>
                                <li><strong>Access:</strong> Request information about what data we have about you</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                                <li><strong>Opt-out:</strong> Disable certain data collection features</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us through our Discord support server with your request and user ID for verification.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Users size={24} />
                            <h2>7. Children's Privacy</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                XCF Bot is designed for use in Discord servers and does not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected personal data from a child under 13, we will take steps to delete such information promptly.
                            </p>
                            <p>
                                Parents and guardians should monitor their children's use of Discord and associated bots and services.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <AlertCircle size={24} />
                            <h2>8. Changes to This Privacy Policy</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify users of any material changes through:
                            </p>
                            <ul>
                                <li>Announcements in our Discord support server</li>
                                <li>Updates on our website</li>
                                <li>Direct notifications for significant changes</li>
                            </ul>
                            <p>
                                Your continued use of XCF Bot after any changes indicates acceptance of the updated Privacy Policy.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <Shield size={24} />
                            <h2>9. Contact Us</h2>
                        </div>
                        <div className={styles.sectionContent}>
                            <p>
                                If you have questions about this Privacy Policy, want to exercise your privacy rights, or have concerns about your data, please don't hesitate to contact us.
                            </p>
                            <div className={styles.contactLinks}>
                                <a href="https://discord.gg/CV53ZxmeaE" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                    Discord Support
                                </a>
                                <a href="https://xcf-docs.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                    Documentation
                                </a>
                                <a href="/terms" className={styles.contactLink}>
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}