import Profile from "../models/profile";
import {Request, Response} from 'express';

const index = async (request: Request, response: Response) => {
    const profiles = await Profile.find().lean();
    // console.log({profiles});

    response.json({profiles});
}

const store = async (request: Request, response: Response) => {
    const {email, name, nickname} = request.body;

    let profile = await Profile.findOne({
        $or: [{email}, {nickname}],
    }).exec();

    if (!profile) {
        profile = await Profile.create({name, email, nickname});
    }

    response.json({profile});
}

export default {
    index,
    store,
}