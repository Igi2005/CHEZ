const request = require('supertest');
const express = require('express');
const router = require('../SignUpPage/index.js'); 
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use('/', router);

describe('POST /signup', () => {
    afterAll(async () => {
        //await prisma.users.deleteMany();
        await prisma.$disconnect();
    });

   
    test('Signup with new user details', async () => {
        const res = await request(app)
            .post('/signup')
            .send({
                UserName: 'John',
                UserSurname: 'Doe',
                UserEmail: 'john@example.com',
                UserPass: 'password123',
                UserNick: 'johndoe'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('msg', 'Podany adres email istnieje w bazie danych!');

        const user = await prisma.users.findUnique({
            where: { email: 'john@example.com' }
        });

        expect(user).not.toBeNull();
        expect(user.name).toBe('John');
        expect(user.surname).toBe('Doe');
        expect(user.nick).toBe('johndoe');
    }, 10000);

    test('Signup with existing email', async () => {
        await prisma.users.create({
            data: {
                name: 'Jane',
                surname: 'Smith',
                email: 'jeaaaww@example.com',
                password: 'password123',
                nick: 'jawwwwawsmith'
            }
        });

        const res = await request(app)
            .post('/signup')
            .send({
                UserName: 'John',
                UserSurname: 'Doe',
                UserEmail: 'jane@example.com', 
                UserPass: 'password123',
                UserNick: 'johndoe'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('msg', 'Podany adres email istnieje w bazie danych!');
    });
});