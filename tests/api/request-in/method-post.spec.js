import {test , expect} from'@playwright/test'

test.describe('Test API - Method POST - Reqres.in',() => {
    const baseURL = 'https://reqres.in/api'

    test('TC01-01 - Check response code and response time', async({request})=>{
        const response = await request.post(`${baseURL}/users`)
        expect(response.status()).toEqual(201)
        const responseBody = JSON.parse(await response.body())
        console.log("responseBody = ", responseBody)
    })

    test('TC01-02 - Insert new user', async({request}) =>{
        let testData =  {name: "morpheus", job: "leader" }
        const response = await request.post(`${baseURL}/users`, {
            data: {
                name: testData.name,
                job: testData.job 
            },
        })
        const responseBody = JSON.parse(await response.body())
        console.log("responseBody = ", responseBody)
        expect(responseBody.name).toEqual(testData.name)
        expect(responseBody.job).toEqual(testData.job)
        // expect(responseBody.createdaAt).toMatchText(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)

    })
})
