import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "PEM Application API",
    description: "Documentation on PEM application endpoints",
  },
  host: "localhost:7096",
  components: {
    schemas: {
      userSchema: {
        $name: "John Doe",
        $email: "john.doe@gmail.com",
        $password: "test123",
      },
    },
    examples: {
      userExample: {
        value: {
          name: "Hi",
          email: "BB",
          password: "MM",
        },
        summary: "Tst",
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const routes = ["../routes/userRoutes"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
