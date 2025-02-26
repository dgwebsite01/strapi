module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const allowedOrigins = [process.env.FRONTEND_URL, process.env.STRAPI_URL];
    const requestOrigin = ctx.request.headers.origin;
    const allowedMethodsFromFrontend = ["GET", "POST"];
    console.log("REQUEST ORIGIN ", requestOrigin);
    console.log("REQUEST ", ctx.request);

    if (
      (!requestOrigin && ctx.request.url.startsWith("/admin")) ||
      ctx.request.url.startsWith("/i18n/locales") ||
      ctx.request.url.startsWith("/content-manager") ||
      ctx.request.url.startsWith("/content-type-builder") ||
      ctx.request.url.startsWith("/upload") ||
      ctx.request.url.startsWith("/email") ||
      ctx.request.url.startsWith("/users-permissions")
    ) {
      await next();
      return;
    }

    if (
      allowedOrigins.length === 0 ||
      !allowedOrigins.includes(requestOrigin)
    ) {
      ctx.throw(403, "Forbidden: Access is not allowed from this origin");
    }

    if (
      requestOrigin === process.env.FRONTEND_URL &&
      !allowedMethodsFromFrontend.includes(ctx.method.toUpperCase())
    ) {
      ctx.throw(405, `Method Not Allowed: ${ctx.method} is not permitted`);
    }

    await next();
  };
};
