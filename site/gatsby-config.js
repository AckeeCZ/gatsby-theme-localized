module.exports = {
    plugins: [
      {
        resolve: 'gatsby-theme-localized',
        options: {
          languages: require('./src/gatsby-theme-localized/i18n/config/languages'),
        }
      }
    ]
  }