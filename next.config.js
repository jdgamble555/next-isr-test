/** @type {import('next').NextConfig} */
const nextConfig = {
    runtime: 'edge',
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
