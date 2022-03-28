import express from 'express';
import { router } from './routes';
import 'dotenv/config';

const server = express();

server.use(express.json())
server.use(router)

server.listen('5002', () => {
    console.log('Servidor On na porta 5002')
});

