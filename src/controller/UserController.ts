import { Request, Response } from 'express';


class CreateUser{
    handle(request: Request, response: Response) {
        const name = request.body.user;
        return response.status(200).json({
            response: `User ${name} created`,
        });
    };
}

export { CreateUser }