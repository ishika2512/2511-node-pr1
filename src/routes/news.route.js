const express = require("express");
const { newsValidation } = require("../validation");
const { newsController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create news
router.post(
    "/create-news",
    validate(newsValidation.createnews),
    newsController.createnews
);

// news list
router.get(
    "/list",
    newsController.newsList
);

// delete-news
router.delete(
    "/delete/:newsId",
    newsController.deleteRecord
);

// get news by id
router.get(
    "/get-details/:newsId",
    newsController.getnewsDetails
);

// update news by id
router.put(
    "/update-news/:newsId",
    newsController.updatenews
);

module.exports = router;
