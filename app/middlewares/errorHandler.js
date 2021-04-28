"use strict";
module.exports = (err, req, res, next) => {
    const is_dev = req.app.get("env") === "development";
    const error = {
        message: err.message,
    };
    // error.stack = is_dev ? err.stack : null;
    res.status(err.status || 500);
    res.json(is_dev ? error : {});
};
