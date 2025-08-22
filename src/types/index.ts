declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_API_ENDPOINT: string
            NEXT_PUBLIC_CLOUDFLARE_SITE_KEY: string
        }
    }
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

export type UserData = {
    id: string
    username: string
    avatar: string
    email?: string
}

export type Ticket = {
    type: "discord" | "github"
    id: string
    subject: string
    category: string
    status: "open" | "pending" | "resolved" | "closed"
    createdAt: string
    updatedAt: string
    messages: Array<TicketMessage>
}

export type TicketMessage = {
    id: string
    content: string
    timestamp: string
    isStaff: boolean
    author: {
        name: string
        avatar?: string
    }
}
