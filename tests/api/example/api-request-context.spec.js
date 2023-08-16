import {test, exact, request, expect} from '@playwright/test';

test.describe('Public APIs',() => {
    test('Get a list of any or all public APIs currently cataloged in the project.', async ({request}) => {
        const response = await request.fetch('https://api.publicapis.org/entries', {
            method: 'get',
        })
        expect(response.status()).toEqual(200)                                      // check that status should be 200 OK
        // console.log('response = ', response);                                       // view API response short info
        const responseBody = JSON.parse(await response.body());                     // parse response to JSON
        // console.log('response body = ',responseBody)                                // view API response body
        await console.log('total data in response body = ',responseBody.count)            // view total data in response body
        await console.log('response body array 1 = ',responseBody.entries[0])             // view API response body array 1
        await console.log('=== check all parameters in API response body array 1 ===')
        // "entries" is title name of API response body
        expect(responseBody.entries[0].API).toEqual('AdoptAPet')                                                // check value of parameter "API"
        expect(responseBody.entries[0].Description).toEqual('Resource to help get pets adopted')                // check value of parameter "Description"
        expect(responseBody.entries[0].Auth).toEqual('apiKey')                                                  // check value of parameter "Auth"
        expect(responseBody.entries[0].HTTPS).toEqual(true)                                                     // check value of parameter "HTTPS"
        expect(responseBody.entries[0].Cors).toEqual('yes')                                                     // check value of parameter "Cors"
        expect(responseBody.entries[0].Link).toEqual('https://www.adoptapet.com/public/apis/pet_list.html')     // check value of parameter "Link"
        expect(responseBody.entries[0].Category).toEqual('Animals')                                             // check value of parameter "Category"
    })
})