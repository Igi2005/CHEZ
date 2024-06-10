const request = require('supertest');
const express = require('express');
const router = require('../MainPage'); 

describe('Router', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use('/api', router);
  });

  describe('GET /', () => {
    it('should return data from the skrzynki table', async () => {
      const response = await request(app).get('/api/');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('msg', 'Działa!');
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should return an error message if there is a database error', async () => {
      
      const mockFindMany = jest.fn().mockRejectedValue(new Error('Database error'));
      jest.mock('@prisma/client', () => ({
        PrismaClient: jest.fn().mockImplementation(() => ({
          skrzynki: {
            findMany: mockFindMany,
          },
        })),
      }));

      const response = await request(app).get('/api/');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('msg', 'Działa!');
      expect(response.body).toHaveProperty('data');
    });
  });
});
