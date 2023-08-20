const { bookService, emailService } = require("../services");

const createBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const bookExists = await bookService.getBookByEmail(reqBody.email);
        if (bookExists) {
            throw new Error("Book already created by this email!");
        }
        res.status(200).json({
            success: true,
            message: "Book create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get book list */
const getBookList = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Get book list successfully!",
            data: 'Test',
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createBook, 
    getBookList
};