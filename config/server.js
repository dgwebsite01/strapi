module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  proxy: {
    koa: true,
  },
  url: env("APP_URL", "https://strapi-oclp.onrender.com"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
