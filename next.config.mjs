/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração dos cabeçalhos HTTP
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self'; 
      script-src 'self' 'unsafe-eval' https://js.stripe.com https://www.stripe.com https://cdn.sanity.io 'unsafe-inline' https://www.google-analytics.com/analytics.js; 
      connect-src 'self' https://api.stripe.com https://5i8cnr9i.apicdn.sanity.io;
      object-src 'none';
      frame-src 'self' https://checkout.stripe.com;
      img-src 'self' https://cdn.sanity.io data:;
      style-src 'self' 'unsafe-inline';
      font-src 'self' data:;
    `.replace(/\s{2,}/g, ' '); // Compactar CSP

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://example.com', // Substitua por domínios confiáveis
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },

  // Configuração de imagens remotas
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
