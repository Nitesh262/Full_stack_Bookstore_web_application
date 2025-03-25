import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try{
const book = await Book.find()
res.status(200).json(book) // 200 - success
    }catch(error){
console.log("Error",error)
res.status(500).json(error) // 500 - internal server error
    }
}