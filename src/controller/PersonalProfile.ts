import { Request, Response } from 'express';
const personalProfile = require('../database/Database');

class GetPersonalProfile{
    handle(request: Request, response: Response){
        return personalProfile.db('pioneira')['eng_etl_personalprofile'].find({})
    };
}

export { GetPersonalProfile }