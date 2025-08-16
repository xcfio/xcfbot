declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_API_ENDPOINT: string
            NEXT_PUBLIC_CLOUDFLARE_SITE_KEY: string
        }
    }
}

export default []
