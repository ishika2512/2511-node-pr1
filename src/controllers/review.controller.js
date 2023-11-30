const { reviewService } = require("../services");

// create
const createReview = async (req, res) => {
    try {
        const reqBody = req.body;

        const review = await reviewService.createReview(reqBody);
        res.status(200).json({
            success: true,
            message: "Review create successfully!",
            data: { review },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get review list
const reviewList = async (req, res) => {
    try {
        const getList = await reviewService.reviewList();
        res.status(200).json({
            success: true,
            message: "Get review list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update review recode
const updateRecode = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;

        const reviewEx = await reviewService.getreviewById(reviewId);
        if (!reviewEx) {
            throw new Error("Review not found");
        }

        await reviewService.updateRecode(reviewId, req.body);
        res.status(200).json({
            success: true,
            message: "Review detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete reviwe recode
const deleteRecode = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;

        const reviewEx = await reviewService.getreviewById(reviewId);
        if (!reviewEx) {
            throw new Error("Review not found");
        };

        await reviewService.deleteRecode(reviewId, req.body);
        res.status(200).json({
            success: true,
            message: "Review detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createReview,
    reviewList,
    updateRecode,
    deleteRecode
};