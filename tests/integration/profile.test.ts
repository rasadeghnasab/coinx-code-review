import mongoose from "mongoose";
// import {mockingoose} from 'mockingoose';
const mockingoose = require('mockingoose');
import request from "supertest";
import app from "../../src/api";

// import profileModel from '../../src/models/profile';

let server;

const profiles = {
    correct: [
        {
            name: 'profile 1',
            nickname: "profile 1 nickname",
            email: 'profile1@example.com',
            capital: 1,
            divisa: 'profile-divisa-1',
            prefered_cryptocurrency: 'profile1-pfc'
        },
        {
            name: 'profile 2',
            nickname: "profile 2 nickname",
            email: 'profile2@example.com',
            capital: 2,
            divisa: 'profile-divisa-2',
            prefered_cryptocurrency: 'profile2-pfc'
        },
        {
            name: 'profile 3',
            nickname: "profile 3 nickname",
            email: 'profile3@example.com',
            capital: 3,
            divisa: 'profile-divisa-3',
            prefered_cryptocurrency: 'profile3-pfc'
        },
        {
            name: 'profile 4',
            nickname: "profile 4 nickname",
            email: 'profile4@example.com',
            capital: 4,
            divisa: 'profile-divisa-4',
            prefered_cryptocurrency: 'profile4-pfc'
        }
    ]
};

describe("/api/profiles", () => {
    beforeEach(async () => {
        server = app;
    });
    afterEach(() => {
        server.close();
    });
    afterAll(() => mongoose.disconnect());

    describe("the route exists", () => {
        it("should not return 404", async () => {
            const response = await request(server).get("/api/profiles");
            expect(response.status).not.toBe(404);
            expect(response.type).toEqual('application/json')
        });
    });

    describe("profiles should be returned", () => {
        mockingoose.Profiles.toReturn(profiles.correct);

        it("all profiles in db should be returned", async () => {
            const response = await request(server).get("/api/profiles");
            expect(response.body.profiles.length).toBe(profiles.correct.length);
        });
    });

    describe("a profile can be created", () => {
        const selectedProfile = profiles.correct[0];
        mockingoose.Profiles.toReturn(selectedProfile, 'create');

        it("if the data was valid", async () => {
            const response = await request(server).post("/api/profiles").send(selectedProfile);

            expect(response.body.profile).toEqual(selectedProfile);
        });
    });
});
