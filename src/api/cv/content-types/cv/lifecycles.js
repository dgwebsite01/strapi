const { getIO } = require("../../../../socket");

module.exports = {
  async afterUpdate(event) {
    const { result } = event;
    // Emit an event to all clients with the updated content
    // @ts-ignore
    getIO().emit("cv-updated", "hello");
    console.log("EMIT");
  },
};
