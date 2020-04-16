import * as supertest from 'supertest';
import { testHeaders, testCredentials } from './testConstants';
import ensureDto from '../../util/ensureDto';
import { LoginResponseSchema, LoginResponseDto } from '../../dto/LoginResponse.dto';

export default async function testLogin(agent: supertest.SuperTest<supertest.Test>): Promise<LoginResponseSchema> {
  const response = await agent.post('/auth/login')
    .set('x-gym', testHeaders['x-gym'])
    .set('x-scope', testHeaders['x-scope'])
    .set('x-unit', testHeaders['x-unit'])
    .send(testCredentials);

  expect(response.status).toBe(200);
  await expect(() => ensureDto<LoginResponseSchema>(LoginResponseDto, response.body));

  return response.body;
}
