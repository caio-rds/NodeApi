import { Router, Request, Response } from 'express';
import { CreateUser } from './controller/UserController';
import { GetPersonalProfile } from './controller/PersonalProfile'

const router = Router()
const users = new CreateUser();
const personal_profile = new GetPersonalProfile();

router.get('/health', (request: Request,response: Response) => {
    return response.json({'response': 'Health Checked;'})
});


router.get('/personprofile', personal_profile.handle);

router.post('/users', users.handle);


export { router }