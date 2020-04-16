import 'dotenv/config';
import * as supertest from 'supertest';
import HTTPServer from '../httpServer';
import routes from '../httpServer/routes';

let server: HTTPServer;
let agent: supertest.SuperTest<supertest.Test>;

beforeAll(() => {
  server = new HTTPServer(routes);
  agent = supertest.agent(server.server);
});

afterAll((done) => {
  server.server.close();
  setTimeout(() => done(), 100);
});

describe('HTTP Server', () => {
  test('Healthcheck', async () => {
    const response = await agent.get('/');
    expect(response.status).toBe(200);
    expect(response.body);
  });

  test('httpServer', async () => {
    const response = await agent.get('/');
    expect(response.status).toBe(200);
    expect((response.body as any).status).toBe('OK');
  });
});
