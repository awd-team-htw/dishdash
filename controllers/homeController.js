exports.index = (req, res) => {
    res.send("Hello, Universe");
};

exports.vegetablePage = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
};

exports.handlePostRequest = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
};
