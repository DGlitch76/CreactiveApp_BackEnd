// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


// 👇 Start handling index routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// Auth Routes
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes); 

//API Routes -- convert all of API routes into a "single route"
//will change models to single models (projects -- add project category photography, illustration, etc // approvals)


const projectRoutes = require("./routes/project.routes");
app.use("/photoshootProjects", projectRoutes);

const approvalIllustrationRoutes = require("./routes/approval.routes");
app.use("/illustrationApprovals", approvalIllustrationRoutes);

const approvalPhotoshootRoutes = require("./routes/approval.routes");
app.use("/photoshootApprovals", approvalPhotoshootRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;