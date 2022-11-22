const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    // return res.json(token);
    const decode = jwt.verify(token, "webBatch")
    req.userData = decode
    // return res.json(decode);
    next();
}