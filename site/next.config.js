/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'watford.cloud',
    description: 'The official store for workspaces used in watford.cloud.',
    icon: 'https://zwpseudo.github.io/pseudo-registry/1.0/default.png',
    listUrl: 'https://registry.watford.cloud/',
    contactUrl: 'https://watford.cloud',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
