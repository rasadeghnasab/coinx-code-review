import mongoose from "mongoose";
import Profile from "../models/profile";
import Simulator from "../models/simulator";
import Favorite from "../models/favorite";
import {DB_URL} from "../config";

(async () => {

    await mongoose
        .connect(`${DB_URL}`, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log(`✅ Connected to DB ${DB_URL}`))
        .catch((error) => {
            console.log(`Failed to connect to the mongodb: ${error}`)
            process.exit(1)
        });

    const profile = new Profile({
        name: `Name (string)`,
        nickname: `Nickname (string)`,
        email: `email@email.com`,
        capital: 123,
        divisa: `String`,
        prefered_cryptocurrency: `String`,
    });
    profile.save().then(
        (result) => {
            console.log(result)
        }
    ).catch((error) => {
        console.log({error})
    });

    console.log('hi')

    const query = {_id: profile._id};
    const idProfile = await Profile.findOne(query).then((profile: any) => {
        return profile?._id;
    });
    //
    // console.log(idProfile);
    //
    // const simulator = new Simulator({
    //     profile_id: idProfile,
    //     name: `String`,
    //     start_date: `01/05/2021`,
    //     check_date: `01/05/2021`,
    //     cryptocurrency: `String`,
    //     divisa: `String`,
    //     crypto_price_start: 123,
    //     crypto_price_check: 123,
    // });
    // await simulator.save();
    //
    // const favorite = new Favorite({
    //     profile_id: idProfile,
    //     name: `String`,
    //     favorites: [
    //         `Fav 1`,
    //         `Fav 2`,
    //         `Fav 3`,
    //     ],
    // });
    // await favorite.save();

    mongoose.disconnect();
})();

process.exit(0)