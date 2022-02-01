import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: {
      type: Schema.Types.ObjectId,
      required: [true, 'Profile ID is required.'],
    },
    name: String,
    favorites: {
      type: Array,
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: 'Favorite could not be empty'
      }
    },
  },
  {
    timestamps: true,
  }
);

export const Favorite = mongoose.model("Favorite", schema);
