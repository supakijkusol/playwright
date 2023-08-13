const {test, expect} = require('@playwright/test')      // require() is a node js build-in function used to load modules present in separate files. Here we are loading "test" and "expect" modules from playwright package
const { hello, helloworld } = require('./demo/hello')   // call javascript function "hello.js"

console.log(hello());
console.log(helloworld());