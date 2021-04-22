module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/u,
      use: 'raw-loader',
    })

    return config
  },
}
