// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     domains: ["source.unsplash.com", "socurce.unsplash.com", "img.clerk.com"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["source.unsplash.com", "socurce.unsplash.com", "img.clerk.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes.
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,HEAD,PUT,PATCH,POST,DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
