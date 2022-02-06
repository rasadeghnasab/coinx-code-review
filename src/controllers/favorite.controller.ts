import Favorite from "../models/favorite";
import {Request, Response} from 'express';

const index = async (request: Request, response: Response) => {
    const favorites = await Favorite.find().populate('Profiles');

    response.json({favorites});
}

const show = async (request: Request, response: Response) => {
    const {profile_id} = request.params;

    let query = {profile_id};
    const data = await Favorite.find(query);

    response.json(data);
}

export default {
    index,
    show,
}