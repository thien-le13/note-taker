const express = require("express");

// App start and port.
const app = express();
const PORT = process.env.PORT || 3001;

// Route middleware, static, and body parsing.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
