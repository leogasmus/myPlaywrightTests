import { test, expect } from '@playwright/test'

test.describe.parallel('Api test', () => {
    const baseUrl = 'https://reqres.in/api';

    test('Get: Verify correct posts endpoint status', async ({ request }) => {
        const response = await request.get('/posts');
        expect(response.status()).toBe(200);
    });

    test('Get post by ID', async ({ request }) => {
        const response = await request.get('/posts/3');
        const body = JSON.parse(await response.text());

        expect(response.status()).toBe(200);
        expect(body.id).toBe(3);
        expect(body.userId).toBe(1);
        expect(body.title).toMatch(new RegExp('exercitationem'));
    });

    test('Create new post', async ({ request }) => {

        const myNewPost = {
            title: 'My fine post',
            body: 'Hello post',
            userId: 21,
        }
        let response = await request.post('/posts', {
            data: myNewPost
        });
        let body = JSON.parse(await response.text());
    
        expect(response.status()).toBe(201);
        expect(body.userId).toBe(21);
        expect(body.id).toBe(101);
        expect(body.title).toMatch(myNewPost.title);
        expect(body.body).toMatch(myNewPost.body);

    });
    


})