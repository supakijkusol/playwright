import { test, expect } from "@playwright/test";

test.describe('Test API - Reqres.in',() => {
    const baseURL = 'https://reqres.in/api'

    test('GET method',async ({request}) => {
        const response = await request.get(`${baseURL}/user/2`)
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.body())
        console.log("responseBody = ",responseBody)
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