/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https://js.stripe.com https://www.stripe.com https://cdn.sanity.io;
              connect-src 'self' https://api.stripe.com https://5i8cnr9i.apicdn.sanity.io;
              object-src 'none';
              frame-src 'self' https://checkout.stripe.com;
              img-src 'self' https://cdn.sanity.io data:;
            `.replace(/\s{2,}/g, ' '), // Minify CSP
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow all origins for simplicity
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
