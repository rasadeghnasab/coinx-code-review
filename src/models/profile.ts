import mongoose from "mongoose";

const {Schema} = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    capital: Number,
    divisa: String,
    prefered_cryptocurrency: String,
});

export default mongoose.model("Profiles", schema);
