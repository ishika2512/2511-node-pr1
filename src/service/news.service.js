const { news } = require("../model");

//  Create news
const createnews = async (reqBody) => {
    return news.create(reqBody);
};

const getnewsByName = async (news_name) => {
    return news.findOne({ news_name });
};

const getnewsList = async (filter, options) => {
    return news.find();
};

const deletenews = async (newsId) => {
    return news.findByIdAndDelete(newsId);
};

const getnewsById = async (newsId) => {
    return news.findById(newsId);
};

const updateDetails = async () => {
    return news.findByIdAndUpdate();
};

module.exports = {
    createnews,
    getnewsByName,
    getnewsList,
    deletenews,
    getnewsById,
    updateDetails
};