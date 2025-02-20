"use strict";
const axios = require("axios");
const { getIO } = require("./socket");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    setInterval(async () => {
      try {
        await axios.get("https://strapi-oclp.onrender.com/api/cv");
        console.log("TEST!");
      } catch (error) {
        console.error("TEST failed", error.message);
      }
    }, 250000);
    //@ts-ignore
    getIO().on("connection", (socket) => {
      console.log("Client connected:", socket.id);
    });
  },
};
