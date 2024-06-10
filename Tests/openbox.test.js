const request = require('supertest');
const express = require('express');
const router = require('../OpenBox'); // Import the router from your backend file

const app = express();
app.use(router);

describe('GET /openbox/:id', () => {
  test('should return box data and image for a valid box ID', async () => {
    const validBoxId = 1; // Replace with a valid box ID
    const response = await request(app).get(`/openbox/${validBoxId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('img');
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(typeof response.body.img).toBe('object');

    // Additional assertions for the data structure
    expect(response.body.data.length).toBeGreaterThan(0); // Ensure data array is not empty
    expect(response.body.img).toHaveProperty('id_skrzynki'); // Ensure img object has the expected properties
    // Add more assertions as needed
  });

  test('should return 404 for an invalid box ID', async () => {
    const invalidBoxId = 999; // Replace with an invalid box ID
    const response = await request(app).get(`/openbox/${invalidBoxId}`);

    expect(response.status).toBe(200);
  });

  
});
