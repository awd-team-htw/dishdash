// Import required modules and set up variables
const port = 3000, // Port number for the server
express = require("express"), // Import the Express.js framework
app = express(); // Create an Express application instance

// Define a route for handling GET requests to the root URL ("/")
app.get("/", (req,res) => {
    res.send("Hello, Universe"); // Send a response with the message "Hello, Universe" to the client
    console.log(req.params); // Log the route parameters (if any) from the request
    console.log(req.body); // Log the request body (will be empty for GET requests)
    console.log(req.url); // Log the URL of the request
    console.log(req.query); // Log the query parameters from the request URL
})
// Start the server and listen for incoming requests on the specified port
.listen(port, () =>{
    console.log(`Express server has started and is listening on port ${port}`); // Log a message indicating that the server has started
});

// Define a route for handling GET requests to "/items/:vegetable"
app.get("/items/:vegetable", (req,res) => {
    let veg = req.params.vegetable; // Extract the value of the "vegetable" parameter from the URL
    res.send(`This is the page for ${veg}`); // Send a response with a message containing the vegetable name
})

// Middleware setup to parse incoming request bodies
app.use(
    express.urlencoded({
    extended: false // Parse URL-encoded request bodies with querystring library
    }));

app.use(express.json()); // Parse JSON request bodies

// Define a route for handling POST requests to the root URL ("/")
app.post("/", (req, res) => {
    console.log(req.body); // Log the request body (parsed JSON data)
    console.log(req.query); // Log the query parameters from the request URL
    res.send("POST Successful!"); // Send a response indicating successful POST request
   });
