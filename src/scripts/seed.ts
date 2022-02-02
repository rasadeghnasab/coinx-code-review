import mongoose from "mongoose";
import Profile from "../models/Profile";
import Simulator from "../models/Simulator";
import Favorite from "../models/Favorite";
import {DB_URL} from "../config";

(async () => {

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const profile = new Profile({
        name: `name (String)`,
        email: `email@email.com (String)`,
        nickname: `Nickname (String)`,
        capital: `123`,
        divisa: `String`,
        prefered_cryptocurrency: `String`,
    });
    await profile.save();

    const query = {_id: "6093abb3dfd9da1deeae56f2"};
    const idProfile = await Profile.findOne(query).then((e) => {
        return e?._id;
    });

    const simulator = new Simulator({
        profile_id: idProfile,
        name: `String`,
        start_date: `01/05/2021`,
        check_date: `01/05/2021`,
        cryptocurrency: `String`,
        divisa: `String`,
        crypto_price_start: 123,
        crypto_price_check: 123,
    });
    await simulator.save();

    const favorite = new Favorite({
        profile_id: idProfile,
        name: `String`,
        favorites: [
            'fav 1',
            'fav 2',
            'fav 5',
        ]
    });
    await favorite.save();

    mongoose.disconnect();
})();
