// const express = require("express");
// const app = express();

// // app.use for middleman

// // Middleware function for logging route requests
// const logRoutes = (req, res, next) => {
//   const time = new Date().toLocaleString();
//   console.log(`${req.method}: ${req.originalUrl} - ${time}`);
//   next(); // Passes the request to the next middleware/controller
// };

// // Register the logRoutes middleware globally to log all requests
// app.use(logRoutes);

// // Other endpoints and controllers

// // controllers

// const serveSomething = (req, res) => {
//   res.send("hi");
// };

// app.get("/api/something", serveSomething);

// const PORT = 8080;

// app.listen(PORT, () => {
//   console.log(`Listening on port: http://localhost:${PORT}`);
// });

const express = require("express");
const path = require("path");
const brooklynJSON = require("./brooklyn_hangs.json"); // Import the JSON data

const app = express();

// Middleware to log requests (optional)
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

// Serve static files from the 'public' directory
const staticPath = path.join(__dirname, "../frontend/dist");
const serverStatic = express.static(staticPath);

app.use(logRoutes);
app.use(serverStatic);

//controllers

// Serve the hello controller
const serveHello = (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
};

// Serve the Brooklyn hangs controller

const serveBrooklynHangs = (req, res) => res.send(brooklynJSON);

app.get("/api/hello", serveHello);
app.get("/api/brooklyn_hangs", serveBrooklynHangs);

// port configuration
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
