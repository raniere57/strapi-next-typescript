export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'mystrapiapp.s3.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'mystrapiapp.s3.amazonaws.com'],
          upgradeInsecureRequests: null
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]

