const router = require("express").Router();

router.get("/", async (req, res, next) => {
    try {
        res.json("Express App");
    } catch (err) {
        next(err);
    }
});

module.exports = router;
