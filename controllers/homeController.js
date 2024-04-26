exports.index = (req, res) => {
    res.send("Hello, Universe");
};

exports.vegetablePage = (req, res) => {
    let fruit = req.params.fruit;
    let veg = req.params.vegetable;
    res.send(`Matze is a ${veg} - specifically: ${fruit}`);
};

exports.handlePostRequest = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
};
