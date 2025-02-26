module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const allowedOrigins = [process.env.FRONTEND_URL, process.env.STRAPI_URL];
    const requestOrigin = ctx.request.headers.origin;
    const allowedMethodsFromFrontend = ["GET", "POST"];
    console.log("REQUEST ORIGIN ", requestOrigin);
    console.log("REQUEST ", ctx.request);

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
