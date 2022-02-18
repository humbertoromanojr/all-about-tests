const request = require('supertest');
const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
    beforeEach( async () => {
        await truncate();
    })

    it('should authenticate with valid credentials', async () => {
       const user = await User.create({ 
           name: 'JR Dev', 
           email: 'astronomi@gmail.com', 
           password: '321321' 
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '321321'
            });

       expect(response.status).toBe(200);
    });

    it('should not authenticate with valid credentials', async () => {
        const user = await User.create({ 
            name: 'JR Dev', 
            email: 'astronomi@gmail.com', 
            password: '321321' 
         });
 
         const response = await request(app)
             .post('/sessions')
             .send({
                 email: user.email,
                 password: '121212'
             });
 
        expect(response.status).toBe(401);
    });

    it('should return jwt token when authenticate', async () => {
        const user = await User.create({ 
            name: 'JR Dev', 
            email: 'astronomi@gmail.com', 
            password: '321321' 
         });
 
         const response = await request(app)
             .post('/sessions')
             .send({
                 email: user.email,
                 password: '321321'
             });
 
        expect(response.body).toHaveProperty('token');
     });
});