import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cursor-ai",
        destination: "/guide/cursor-ai",
        permanent: false,
      },
      {
        source: "/claude-vs-chatgpt",
        destination: "/guide/claude-vs-chatgpt",
        permanent: false,
      },
      {
        source: "/openclaw-mac-setup",
        destination: "/guide/openclaw-mac-setup",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
