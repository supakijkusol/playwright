Repository 
  - git clone http://git.bdms.co.th/Supakid.Ku/

Version required for developing automation test script (Lastest)

- NodeJS

Check Version
- check nodejs version
    - node -v
- check npm version
	- npm --version
- check Playwright version
    - npm playwright -v

Install / Update nodejs and npm version

- go to NodeJS web page
	- https://nodejs.org/en/download
- click Windows Installer for download nodejs and npm latest version
	- ex. file "node-v18.17.1-x64.msi"
- install Playwright
    - npm init playwright@latest
        - select JavaScript
        - create end-to-end test = "tests"
        - add a GitHub Actions workflow = "true"
        - install Playwright browser = "true"
- install Codegen
    - npx playwright codegen

Extensions

- Playwright Test for VSCode
- GitHub Actions
- Prettier - Code formatter
- Color Highlight

Structure

- folder ".github" lets you manage your workflow, view the workflow run history, and helps with authoring workflows
- folder "node_modules" is location of all libraries of NodeJS
- folder "playwright-report" is location HTML report files
- folder "test-result" is location of ??
- folder "tests" is location of all test script
- folder "tests-examples" is location of example script
- file ".gitignore" is file for specify files / folders not push to Git
- file "package-lock.json" is NodeJS configuration file
- file "package.json" is NodeJS configuration file
- file "playwright.config.js" is configuration file of Playwright


Step to execution test on local

1. open Visual Studio Code
2. go to menu Terminal >> New Terminal
3. dir to directory D:\Work\Automation_Test\Playwright\training\tests
3. run test script
    - headless mode (not show screen)
        - command : npx playwright test .\example.spec.js
    - head mode (show screen)
        - command : npx playwright test --headed                        // run all script in folder
        - command : npx playwright test .\example.spec.js --headed      // run this script in folder
    - debug mode
        - command : npx playwright test .\example.spec.js --debug
        - command : npx playwright test .\example.spec.js:11 --debug    // debug start at code line 11
    - view report : View HTML report at http://localhost:9323
            - Head mode
            - Trace 
        - command : npx playwright show-report
