import image from '../routes/api/image';
import routes from '../routes/middleware_route';
import supertest from 'supertest';

const request = supertest(image);
const request2 = supertest(routes);

describe('Test Endpoint response for image route', () => {
    it('gets endpoint response1', () => {
        request.get('/api').expect(200);
    });
});
describe('Test Endpoint response for middleware route', () => {
    it('gets endpoint response2', () => {
        request2.get('/api/image').expect(200);
    });
});
