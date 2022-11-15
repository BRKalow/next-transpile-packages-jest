/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@hashicorp/platform-util"]
  }
}
