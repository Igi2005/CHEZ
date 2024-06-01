const request = require('supertest');
const express = require('express');
const router = require('../LoginPage/index.js'); // Adjust the path to your routes file
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
        
        // Mock the PrismaClient to return a specific user
        prisma.users.findUnique = jest.fn().mockResolvedValue({
            name: 'Xiega',
            balans: 100,
            nick: ''
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('Pomyslnie zalogowano się!');
        expect(response.body.user).toEqual({ nick: '' });
    });

    it('should respond with user data on /login/nickname after login', async () => {
        globalNick = 'Xiega';
        globalBalans = 100;
        
        const response = await request(app).get('/login/nickname');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ msg: 'zalogowano sie', data: 'Xiega', balans: 100 });
    });

    it('should log out the user on /login/logout', async () => {
        //globalNick = 'Xiega';
        //globalBalans = 100;

        const response = await request(app).get('/login/logout');
        expect(response.statusCode).toBe(200);
        expect(globalNick).toBeNull();
        expect(globalBalans).toBeNull();
    });
}, 10000);