// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    const env = req.app.get("env");
    const isDevOrTest = env === "development" || env === "testing";
    const error = {
        message: err.message,
    };
    // error.stack = is_dev ? err.stack : null;
    res.status(err.status || 500);
    res.json(isDevOrTest ? error : {});
};
