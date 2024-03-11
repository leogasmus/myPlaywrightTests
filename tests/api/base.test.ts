import { test, expect} from '@playwright/test'

test.describe('Api test', () => {
    const baseUrl = 'https://reqres.in/api';

    test('First test', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`);
        expect(response.status()).toBe(200)
    })
    


})