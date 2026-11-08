import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import { instagramAppStoreUrl } from "./src/content/links";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],  
  // A short address for the Instagram bio. Temporary (not permanent) so the destination can change later.
  async redirects() {
    return [{ source: "/ig", destination: instagramAppStoreUrl, permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);
