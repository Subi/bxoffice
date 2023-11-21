/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: "image.tmdb.org",
                port: '',
            }
        ],
        domains: ["image.tmdb.org" , "img.clerk.com"]
    }
}

module.exports = nextConfig
