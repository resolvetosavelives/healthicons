module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.txt',
        destination: '/sitemap'
      }
    ];
  }
};
