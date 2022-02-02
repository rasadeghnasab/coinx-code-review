import mongoose from "mongoose";

const {Schema} = mongoose;

const schema = new Schema(
    {
        profile_id: Schema.Types.ObjectId,
        dateRecorded: Date,
        cryptocurrency: String,
        euros: Number,
        price: Number,
        quantity: Number,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Simulators", schema);
