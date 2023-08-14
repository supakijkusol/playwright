import {test, exact, request, expect} from '@playwright/test';

test.describe('Public APIs',() => {
    test('Get a list of any or all public APIs currently cataloged in the project.', async ({request}) => {
        const reponseObj = await request.fetch('https://api.publicapis.org/entries', {
            method: 'get',
        })
        console.log('reponseObj', reponseObj);
        expect(reponseObj.status()).toEqual(200)
        
        
    })
})