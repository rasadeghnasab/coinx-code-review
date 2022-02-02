import Favorite from "../models/favorite";
import {Request, Response} from 'express';

const index = async (request: Request, response: Response) => {
    const favorites = await Favorite.find().populate('Profiles');
    console.log(favorites);

    response.json({favorites});
}

const show = async (request: Request, response: Response) => {
    console.log(request.params);
    const {profile_id} = request.params;

    let query = {profile_id};
    console.log(query);
    const data = await Favorite.find(query);

    response.json(data);
}

export default {
    index,
    show,
}