"use strict";

const getHome = async (req, res, next) => {
    try {
        // This is just an example, feel free to change it !
        let homeData = {
            title: "Express Base",
            description: "This is an express base created by @awbx !",
            config: req.app.get("config"),
        };

        res.status(200);
        res.json(homeData);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getHome,
};
