// :símbolo_informações: Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();
// :símbolo_informações: Connects to the database
require("./db");
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const app = express();
// :símbolo_informações: This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
// :apontando_para_baixo: Start handling index routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);
// Auth Routes
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);
//API Routes -- convert all of API routes into a "single route"
const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);
const projectRoutes = require("./routes/project.routes");
app.use("/projects", projectRoutes);
/*const commentRoutes = require("./routes/comment.routes");
app.use("/comments", commentRoutes);*/
// :exclamação: To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;