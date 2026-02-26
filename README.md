Setup
To run project locally you need following utilities 
- Open this project in VS Code (as it has the best plugin support for PlayWright framework) 
- Download VS Code - Install suggested VS Code plugins (Playwright and ESLint) 
- Prepare .env file in the project root directory (or ask colleagues for valid one) 
- In the project directory there is config file which specifies login/password and base URL for the application(environment) which is going to be used for tests. 

Scripts
Project contains list of targets defined in the package.json file:

npm run test - run all tests for all web clients (desktop, Android mobile, iPhone)
npm run test:desktop - run all tests only for desktop client (Google Chrome)
npm run test:android - run all tests only for Android (Mobile Chrome)
npm run test:iphone - run all tests only for iPhone (Mobile Safari)
npm run test:update - run all tests in update mode (all snapshot files will be updated during the test)
npm run test:ignore - run all tests without checking snapshots match (all snapshot files will be ignored)
npm run test:ui - run all tests in UI mode
npm run test:report - show all tests result reports
npm run lint - verify all *.ts files in the project
npm run format - format all project files
Project Structure
Project contains following folders:

common - common actions/logic which is used across all tests (global setup, global teardown, etc.)
tests - folder with tests
playwright - playwright output, tests results (empty after project clone, but created when tests are run)

Fixing Tests
If some tests fail the one have several options:
 - Look why test fails, decide whether - the test itself is incorrect or obsolete and fix the test
 - or this is bug that test has found and create JIRA issue 
 - Delete the test if is not relevant anymore 
 - Skip test if you don't know how to fix it now and need to postpone fixing 
 - test.skip('Test', ...) instead of test('Test', ...) 
 - If test fails only because of screenshots matching: - Either update screenshots by calling - npm run test:update 
 - or specify locators-exclusions that should be masked when the screenshot is taken - page.screenshot({clip: {...}, mask: {...}) 
 - or run npm run test:ignore when not-matching screenshots are expected and should be ignored - npm run test:ignore 
 - or disable screenshot match check for this test if screen changes often and supporting and fixing test requires too much time

Resources
Playwright root
Assertions
Locators
Other locators
Best Practices
