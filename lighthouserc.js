module.exports = {
  ci: {
    collect: {
      url: ["http://0.0.0.0:3000/"],
      startServerCommand: "pnpm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
