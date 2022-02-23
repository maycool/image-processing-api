import { resizeImage, checkExistance, createFolder } from '../resize';
// import supertest from 'supertest';
// import app from '../../app';

it('expect createFolder to be truthy', () => {
  expect(createFolder()).toBeTruthy();
});

it('expect checkExistance to be truthy', () => {
  expect(checkExistance('bird')).toBeTruthy();
});

it('expect resizeImage to be truthy', () => {
  expect(resizeImage('bird', 200, 150)).toBeTruthy();
});
// const request = supertest(app);
// describe('Test endpoint responses', () => {
//   it('gets the api endpoint', async (done) => {
//     const response = await request.get('/resize?image=bird&width=200&height=200');
//     expect(response.status).toBe(200);
//     done();
//   }
//   )
// });