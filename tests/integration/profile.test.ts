import mongoose from "mongoose";
const mockingoose = require('mockingoose');
import request from "supertest";
import app from "../../src/api";
import _ from 'lodash';

let server;

const profiles = {
    correct: [
        {
            name: 'profile 1',
            nickname: "profile 1 nickname",
            email: 'profile1@example.com',
            capital: 1,
            divisa: 'profile-divisa-1',
            prefered_cryptocurrency: 'profile1-pfc',
        },
        {
            name: 'profile 2',
            nickname: "profile 2 nickname",
            email: 'profile2@example.com',
            capital: 2,
            divisa: 'profile-divisa-2',
            prefered_cryptocurrency: 'profile2-pfc',
        },
        {
            name: 'profile 3',
            nickname: "profile 3 nickname",
            email: 'profile3@example.com',
            capital: 3,
            divisa: 'profile-divisa-3',
            prefered_cryptocurrency: 'profile3-pfc',
        },
        {
            name: 'profile 4',
            nickname: "profile 4 nickname",
            email: 'profile4@example.com',
            capital: 4,
            divisa: 'profile-divisa-4',
            prefered_cryptocurrency: 'profile4-pfc',
        }
    ]
};

describe("/api/profiles", () => {
    beforeEach(async () => {
        server = app;
    });
    afterEach(() => {
        server.close();
        mockingoose.resetAll();
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
        it("all profiles in db should be returned", async () => {
            mockingoose.Profiles.toReturn(profiles.correct);
            const response = await request(server).get("/api/profiles");

            expect(response.body.profiles.length).toBe(profiles.correct.length);
        });
    });

    describe("a profile can be created", () => {
        const selectedProfile = profiles.correct[0];
        it("if the data was valid and the profile not existed from before", async () => {
            mockingoose.Profiles.toReturn(selectedProfile, 'create');

            const response = await request(server).post("/api/profiles").send(selectedProfile);
            delete response.body.profile._id;

            expect(response.body.profile).toEqual(_.pick(selectedProfile, 'email', 'name', 'nickname'));
        });
    });

    describe("return full existing profile on profile creation", () => {
        const selectedProfileFull = profiles.correct[0];
        const selectedProfile = _.pick(selectedProfileFull, 'email', 'name', 'nickname');
        it("name already exists", async () => {
            mockingoose.Profiles.toReturn(selectedProfileFull, 'findOne');

            const response = await request(server).post("/api/profiles").send(selectedProfile);
            delete response.body.profile._id;

            expect(response.body.profile).toEqual(selectedProfileFull);
        });
        it("email already exists", async () => {
            mockingoose.Profiles.toReturn(selectedProfileFull, 'findOne');

            const response = await request(server).post("/api/profiles").send(selectedProfile);
            delete response.body.profile._id;

            expect(response.body.profile).toEqual(selectedProfileFull);
        });
    })
});
