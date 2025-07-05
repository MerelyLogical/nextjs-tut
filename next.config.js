/**
 * @type {import('next').NextConfig}
 */

const nextConfig={
    output: 'export',
    basePath: '/nextjs-tut',
    distDir: 'docs',
    images: {
        unoptimized: true,
    },
}

export default nextConfig;