import mongoose from "mongoose";

const {Schema} = mongoose;

const schema = new Schema(
    {
        profile_id: {
            type: Schema.Types.ObjectId,
            ref: 'Profiles'
        },
        name: {
            type: String,
            required: [true, "Name field is required."],
            minlength: [5, "Name can not be shorter than 5 characters."],
            maxlength: [50, "Name can not be longer than 50 characters."],
        },
        favorites: {
            type: Array,
            validate: {
                validator: function (value: String) {
                    return value.length > 0;
                },
                message: 'Favorites could not be empty'
            }
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Favorites", schema);
