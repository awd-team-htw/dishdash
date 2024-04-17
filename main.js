const port = 3000,
    http = require("http"),
    fs = require("fs"),
    StatusCodes = require("http-status-codes"),

    app = http.createServer((request, response) => {
    console.log("Received an incoming request!");

    // Read the HTML file and send it as the response
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(StatusCodes.NOT_FOUND, {
                "Content-Type": "text/html"
            });
            response.write("<h1>Page not found!</h1>");
            response.end();
        } else {
            response.writeHead(StatusCodes.OK, {
                "Content-Type": "text/html"
            });
            response.write(data);
            response.end();
        }
    });

    console.log("Response has been sent.");
});



    app.listen(port);
    console.log(`The server has started and is listening on port number:${port}`);
