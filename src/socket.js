// @ts-ignore
const io = require("socket.io")(strapi.server.httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});
module.exports = {
  getIO() {
    return io;
  },
};
