const request = require('supertest');
const express = require('express');
const router = require('../SignUpPage/index.js'); // Replace 'yourRouterFile' with the actual file name where your router is defined.
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
        expect(res.body).toHaveProperty('msg', 'Pomyślnie dodano do bazy danych!');

        const user = await prisma.users.findUnique({
            where: { email: 'john@example.com' }
        });

        expect(user).not.toBeNull();
        expect(user.name).toBe('John');
        expect(user.surname).toBe('Doe');
        expect(user.nick).toBe('johndoe');
    }, 10000);

    test('Signup with existing email', async () => {
        // Create a user with known email
        await prisma.users.create({
            data: {
                name: 'Jane',
                surname: 'Smith',
                email: 'jane@example.com',
                password: 'password123',
                nick: 'janesmith'
            }
        });

        const res = await request(app)
            .post('/signup')
            .send({
                UserName: 'John',
                UserSurname: 'Doe',
                UserEmail: 'jane@example.com', // Same email as above
                UserPass: 'password123',
                UserNick: 'johndoe'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('msg', 'Podany adres email istnieje w bazie danych!');
    });
});