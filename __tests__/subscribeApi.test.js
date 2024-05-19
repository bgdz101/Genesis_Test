const request = require('supertest');
const app = require('../src/server.js');

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${randomString}@example.com`;
}

describe('POST /api/subscribe', () => {

    const email = generateRandomEmail();

    it('should subscribe an email and return 200 status', async () => {
        const response = await request(app)
            .post('/api/subscribe')
            .send({email: email})
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body.message).toEqual('Email successfully subscribed.');
    });

    it('should fail if email is already subscribed', async () => {
        // Assuming the email is already in the database from the previous test
        const response = await request(app)
            .post('/api/subscribe')
            .send({email: email})
            .expect('Content-Type', /json/)
            .expect(409);
        expect(response.body.error).toBe('Email already subscribed.');
    });
});

describe('GET /api/rate', () => {
    it('should return the exchange rate and 200 status', async () => {
        const response = await request(app)
            .get('/api/rate')
            .expect(200);
        expect(response.body.rate).toBeDefined();
    });
});
