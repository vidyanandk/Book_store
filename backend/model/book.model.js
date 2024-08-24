import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
})

const Book=mongoose.model('Book',bookSchema);

export default Book;
