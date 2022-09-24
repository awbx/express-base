"use strict";

let trustedEnvs = ["development", "testing"];

module.exports = (err, req, res, next) => {
    try {
        const env = req.app.get("config").name;

        const isTrustedEnv = trustedEnvs.includes(env);

        const error = {
            message: err.message,
        };

        if (!isTrustedEnv)
            error.message = "Something went wrong, please try again!";
        else {
            error.stack = err.stack;
            console.debug(err);
        }
        
        res.status(err.status || 500);
        res.json(error);
    } catch (err) {
        next(err);
    }
};
