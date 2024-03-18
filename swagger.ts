const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.1.0",
  swagger: "2.0",
  info: {
    title: "Submissions API",
    version: "1.0.0",
    description: "Add filtering capabilities to fillouts submissions API",
  },
  version: "1.0.0",
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.ts"], // Path to the API routes in your Node.js application
};

export const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
