const express = require("express");
const homeController = require("./controllers/homeController");

const port = 3000;
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define routes
app.get("/", homeController.index);
app.get("/items/:fruit/:vegetable", homeController.vegetablePage);
app.get("/add/:summand1/:summand2", homeController.add);
app.get("/multiply/:factor1/:factor2", homeController.multiply);

app.post("/", homeController.handlePostRequest);

// Start the server
app.listen(port, () => {
    console.log(`Express server has started and is listening on port ${port}`);
});
