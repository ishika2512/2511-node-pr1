const { reviewService } = require("../services");

// create-review
const createreview = async (req, res) => {
  try {
    const reqBody = req.body;

    const reviewEx = await reviewService.getreviewByName(reqBody.review_name);
    if (reviewEx) {
      throw new Error(`please add other review this ${reviewEx.review_name} review already created.`);
    }

    const review = await reviewService.createreview(reqBody);

    res.status(200).json({
      success: true,
      message: "review create successfully!",
      data: {
        review,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-review
const reviewList = async (req, res) => {
  try {
    const getreview = await reviewService.getreviewList();

    res.status(200).json({
      success: true,
      message: "review List!",
      data: {
        getreview,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-review
const deleteRecord = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const cateExists = await reviewService.getreviewById(reviewId);
    if (!cateExists) {
      throw new Error("review not found!");
    }

    await reviewService.deletereview(reviewId);

    res.status(200).json({
      success: true,
      message: "review delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get review by id
const getreviewDetails = async (req, res) => {
  try {
    const getDetails = await reviewService.getreviewById(
      req.params.reviewId
    );
    if (!getDetails) {
      throw new Error("review not found!");
    }

    res.status(200).json({
      success: true,
      message: "review details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update review by id
const updatereview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;

    const cateExists = await reviewService.getreviewById(reviewId);
    if (!cateExists) {
      throw new Error("review not found!");
    }

    await reviewService.updateDetails(reviewId, req.body);

    res.status(200).json({
      success: true,
      message: "review details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createreview,
  reviewList, 
  deleteRecord,
  getreviewDetails,
  updatereview
};