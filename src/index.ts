import { Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import fs from "fs";

puppeteer.use(StealthPlugin());

const USERNAME = "";
const PASSWORD = "";
const SEARCH_KEYWORD = "";
const URL = "https://www.instagram.com/accounts/onetap/?next=%2F";

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL);
  await login(page, USERNAME, PASSWORD);
  await search(page, SEARCH_KEYWORD);
  await getAllPosts(page);
};

const login = async (page: Page, username: string, password: string) => {
  await page.waitForSelector('input[name="username"]');
  await delay(generaterandomNumber());
  await page.type('input[name="username"]', username);
  await delay(generaterandomNumber());
  await page.type('input[name="password"]', password);
  await delay(generaterandomNumber());
  await page.click('button[type="submit"]');
};

const search = async (page: Page, keyword: string) => {
  await delay(generaterandomNumber());

  await clickButtonCustom(
    page,
    "div[class='x9f619 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c']",
    1
  );
  await delay(generaterandomNumber());
  await page.waitForSelector('input[aria-label="Search input"]');
  await page.type('input[aria-label="Search input"]', keyword);
  await delay(generaterandomNumber());

  await clickButtonCustom(
    page,
    "span[class='x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft']",
    1
  );
};

const getAllPosts = async (page: Page) => {
  // CLICK ON THE POST
  const post_selector = `div[class="_aagw"]`;
  await page.waitForSelector(post_selector);
  await delay(1350);
  await page.evaluate((s: any) => {
    //@ts-ignore
    document.querySelectorAll(s)[0].click();
  }, post_selector);

  let i = 0;
  while (true) {
    i = 1;
    // GET THE CAPTION OF CURRENT POST
    const caption_selector = `h1[class='_ap3a _aaco _aacu _aacx _aad7 _aade']`;
    // const username_selector = `a[class='x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _acan _acao _acat _acaw _aj1- _ap30 _a6hd']`;
    //  const name_selector = `a[class='x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _aaqk _a6hd']`;
    await page.waitForSelector(caption_selector);
    // await page.waitForSelector(username_selector);
    // await page.waitForSelector(name_selector);
    await delay(generaterandomNumber());
    const post_data = await page.evaluate(
      (_caption_selector: any) => {
        //@ts-ignore
        const caption = document.querySelector(_caption_selector).innerText;
        // const username = document.querySelector(_username_selector).innerText;
        // const name = document.querySelector(_name_selector).innerText;
        return { caption };
      },
      caption_selector
      // username_selector,
      // name_selector
    );
    console.log("result");
    console.log(post_data);

    // NEXT POST
    const next_btn_selector = "button[class='_abl-']";
    await clickButtonCustom(page, next_btn_selector, i == 0 ? 0 : 1);
  }
};

const clickButtonCustom = async (
  page: Page,
  selector: string,
  index: number
) => {
  await page.waitForSelector(selector);
  await delay(generaterandomNumber());
  await page.evaluate(
    (s: any, _index: number) => {
      //@ts-ignore
      document.querySelectorAll(s)[_index].click();
    },
    selector,
    index
  );
};

const addPostsData = async (data: any) => {
  fs.writeFileSync("posts.json", data, "utf8");
};

const generaterandomNumber = () => {
  return Math.floor(Math.random() * 3000 + 1000);
};

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

main();
