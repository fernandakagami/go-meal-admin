const nextConfig = {
  async redirects() {
    return [      
      {
        source: '/',
        destination: '/home',
        permanent: false,
      }      
    ]
  },
  images: { domains: ['127.0.0.1'], },
};

export default nextConfig;