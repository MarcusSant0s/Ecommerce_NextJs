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
              script-src 'self' https://js.stripe.com https://www.stripe.com;
              connect-src 'self' https://js.stripe.com https://api.stripe.com;
              object-src 'none';
              frame-src https://checkout.stripe.com;
            `,
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://5i8cnr9i.apicdn.sanity.io", // Defina o domínio específico
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
