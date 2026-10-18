const {test, expect} = require('@playwright/test');



test('Browser First Playwright Test', async ({browser})=>
{
//playwright code
const context =await browser.newContext();
sloMo : 3000;
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//get title 
console.log(await page.title())
//css type fill method 
//await page.locator("#username").fill("learning");
await page.locator('#username').fill("rahulshettyacademy123");
sloMo: 3000;
await page.locator('#password').fill("Learning@830$3mK2");
//await page.getByLabel('Admin');
await page.locator('#terms').click();
await page.locator('#signInBtn').click();
console.log(await page.locator("[style*='block']").textContent());
});

/*test('Page First Playwright Test', async ({page})=>
{
//playwright code
//const context =await browser.newContext();
//const page = await context.newPage();
await page.goto("https://google.com");
//get title 
console.log(await page.title())
await expect(page).toHaveTitle("Google")
});*/