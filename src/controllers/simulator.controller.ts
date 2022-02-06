import Simulator from "../models/simulator";
import {Request, Response} from 'express';

const index = async (request: Request, response: Response) => {
    const simulators = await Simulator.find().lean();

    response.json({simulators});
}

const show = async (request: Request, response: Response) => {
    const {profile_id} = request.params;
    const query = {profile_id};
    const data = await Simulator.find(query);

    response.json(data);
}

const store = async (request: Request, response: Response) => {
    const {profile_id} = request.params;
    const newData = {
        ...request.body,
        profile_id,
    };
    const simulator = await Simulator.create(newData);

    response.json(simulator);
}

export default {
    index,
    show,
    store,
}
