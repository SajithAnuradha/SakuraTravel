/** @type {import('next').NextConfig} */
const repo = "SakuraTravel"; // <-- change this

const nextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages serves from /REPO_NAME
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  // next/image optimization needs a Next.js server, so disable it for Pages
  images: { unoptimized: true },
};

export default nextConfig;