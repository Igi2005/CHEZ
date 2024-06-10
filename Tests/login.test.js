const request = require('supertest');
const express = require('express');
const router = require('../LoginPage/index.js'); 
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

const app = express();
app.use(express.json());
app.use(router);

describe('API Endpoints', () => {
    it('should respond with initial values on /openbox', async () => {
        const response = await request(app).get('/openbox');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ data: null, balans: null });
    });

    it('should log in a user with correct credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({ UserEmail: 'xiega@wp.pl', UserPass: 'qwerty' });
        
        prisma.users.findUnique = jest.fn().mockResolvedValue({
            name: 'Xiega',
            nick: 'Xiega'
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('Pomyslnie zalogowano się!');
        expect(response.body.user).toEqual({ nick: '' });
    });

    it('should respond with user data on /login/nickname after login', async () => {
        globalNick = 'Xiega';
        
        const response = await request(app).get('/login/nickname');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({ msg: 'zalogowano sie', data: 'Xiega', balans: 0 });
    });

    /*
        ilosc godzin zmarnowana tutaj: 2
    
    it('should log out the user on /login/logout', async () => {
        
        const res = await request(app)
            .post('/login')
            .send({ UserEmail: 'xiega@wp.pl', UserPass: 'qwerty' });

        const response = await request(app).get('/login/logout');
        

        expect(res.statusCode).toEqual(200);
        const nicknameRes = await request(app)
          .get('/login/nickname');
          
        expect(nicknameRes.body).toHaveProperty('msg', 'jeszcze sie nie zalogowano');
    });*/
}, 10000);