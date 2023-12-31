const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();

//connect to db
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development", // this will be set to true if we're in development
  })
);

app.listen(port, console.log(`Server Running on port ${port}`));
