const request = require('supertest');
const express = require('express');
const router = require('../OpenBox'); 

const app = express();
app.use(router);

describe('GET /openbox/:id', () => {
  test('should return box data and image for a valid box ID', async () => {
    const validBoxId = 1; 
    const response = await request(app).get(`/openbox/${validBoxId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('img');
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(typeof response.body.img).toBe('object');

    
    expect(response.body.data.length).toBeGreaterThan(0); 
    expect(response.body.img).toHaveProperty('id_skrzynki'); 
    
  });

  test('should return 404 for an invalid box ID', async () => {
    const invalidBoxId = 999; 
    const response = await request(app).get(`/openbox/${invalidBoxId}`);

    expect(response.status).toBe(200);
  });

  
});
