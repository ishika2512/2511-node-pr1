const { newsService } = require("../services");

// create-news
const createnews = async (req, res) => {
  try {
    const reqBody = req.body;

    const newsEx = await newsService.getnewsByName(reqBody.news_name);
    if (newsEx) {
      throw new Error(`please add other news this ${newsEx.news_name} news already created.`);
    }

    const news = await newsService.createnews(reqBody);

    res.status(200).json({
      success: true,
      message: "news create successfully!",
      data: {
        news,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-news
const newsList = async (req, res) => {
  try {
    const getnews = await newsService.getnewsList();

    res.status(200).json({
      success: true,
      message: "news List!",
      data: {
        getnews,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-news
const deleteRecord = async (req, res) => {
  try {
    const newsId = req.params.newsId;
    const cateExists = await newsService.getnewsById(newsId);
    if (!cateExists) {
      throw new Error("news not found!");
    }

    await newsService.deletenews(newsId);

    res.status(200).json({
      success: true,
      message: "news delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get news by id
const getnewsDetails = async (req, res) => {
  try {
    const getDetails = await newsService.getnewsById(
      req.params.newsId
    );
    if (!getDetails) {
      throw new Error("news not found!");
    }

    res.status(200).json({
      success: true,
      message: "news details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update news by id
const updatenews = async (req, res) => {
  try {
    const newsId = req.params.newsId;

    const cateExists = await newsService.getnewsById(newsId);
    if (!cateExists) {
      throw new Error("news not found!");
    }

    await newsService.updateDetails(newsId, req.body);

    res.status(200).json({
      success: true,
      message: "news details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createnews,
  newsList, 
  deleteRecord,
  getnewsDetails,
  updatenews
};