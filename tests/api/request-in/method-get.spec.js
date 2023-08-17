import { test, expect } from "@playwright/test";

test.describe('Test API - Method GET - Reqres.in',() => {
    const baseURL = 'https://reqres.in/api'

    test('GET method',async ({request}) => {
        console.log("======= GET : Request API ========")
        const response = await request.get(`${baseURL}/user/2`)
        expect(response.status()).toEqual(200)
        console.log("======= JSON Response Body ========")
        const responseBody = JSON.parse(await response.body())
        // const responseBody = JSON.parse(await response.text())
        console.log("responseBody = ",responseBody)
        console.log("======= Response Body ========")
        console.log("data.id = ",responseBody.data.id)
        console.log("data.name = ",responseBody.data.name)
        console.log("data.year = ",responseBody.data.year)
        console.log("data.color = ",responseBody.data.color)
        console.log("data.pantone_value = ",responseBody.data.pantone_value)
        expect(responseBody.data.id).toEqual(2)
        expect(responseBody.data.name).toEqual("fuchsia rose")
        expect(responseBody.data.year).toEqual(2001)
        expect(responseBody.data.color).toEqual("#C74375")
        expect(responseBody.data.pantone_value).toEqual("17-2031")
    })

})