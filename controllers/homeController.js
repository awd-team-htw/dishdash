exports.index = (req, res) => {
    res.send("Hello, Universe");
};

exports.vegetablePage = (req, res) => {
    let fruit = req.params.fruit;
    let veg = req.params.vegetable;
    res.send(`Matze is a ${veg} - specifically: ${fruit}`);
};

exports.add = (req, res) => {
    let s1 = req.params.summand1;
    let s2 = req.params.summand2;
    let answer = s1 + s2
    res.send(`${s1} + ${s2}} = ${answer}`);
};

exports.multiply = (req, res) => {
    let s1 = req.params.factor1;
    let s2 = req.params.factor2;
    let answer = s1 * s2
    res.send(`${s1} * ${s2} = ${answer} ()`);
};

exports.handlePostRequest = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
};
