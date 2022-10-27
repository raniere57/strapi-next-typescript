export default ({ env }) => ({
  url: env('https://strapi-next-typescript.herokuapp.com/'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', [pVl2XLF/aCawWRuhz3vZ0Q==,/yJC1dNpO0lOrbuaYJUW0A==,+ZTECs6Dhgui2RILuC5Qug==,jRrooO+c8I0sT4D9+aXvCA==])
  }
})
