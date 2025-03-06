# 📸 Instagram Data Mining Automation 🤖

[![GitHub Repo stars](https://img.shields.io/github/stars/abhinavrajdevx/instagram_data_mining_automation?style=social)](https://github.com/abhinavrajdevx/instagram_data_mining_automation)
[![GitHub issues](https://img.shields.io/github/issues/abhinavrajdevx/instagram_data_mining_automation)](https://github.com/abhinavrajdevx/instagram_data_mining_automation/issues)
[![GitHub license](https://img.shields.io/github/license/abhinavrajdevx/instagram_data_mining_automation)](https://github.com/abhinavrajdevx/instagram_data_mining_automation/blob/main/LICENSE)

---

## 🚀 Overview

This project automates the process of mining data from Instagram using Puppeteer and TypeScript. It logs in, searches for a specified keyword, and extracts post captions. 🕵️‍♂️✨

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" width="500">
</p>

## 🛠️ Features

-   **Automated Login:** Logs into Instagram with provided credentials. 🔑
-   **Keyword Search:** Searches for specific keywords on Instagram. 🔍
-   **Post Data Extraction:** Extracts captions from Instagram posts. 📝
-   **Puppeteer Stealth:** Uses `puppeteer-extra-plugin-stealth` to avoid detection. 🕶️
-   **Randomized Delays:** Simulates human behavior with randomized delays. ⏳
-   **TypeScript Powered:** Built with TypeScript for type safety and maintainability. 💻

## 📦 Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/abhinavrajdevx/instagram_data_mining_automation.git](https://www.google.com/search?q=https://github.com/abhinavrajdevx/instagram_data_mining_automation.git)
    cd instagram_data_mining_automation
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    Open `index.ts` and set the following variables:

    ```typescript
    const USERNAME = "your_username";
    const PASSWORD = "your_password";
    const SEARCH_KEYWORD = "search_keyword";
    ```

4.  **Build and run the script:**

    ```bash
    npm run dev
    ```

## 📜 Code Breakdown

### `index.ts`

```typescript
import { Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import fs from "fs";

puppeteer.use(StealthPlugin());

// ... (Constants and functions)

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL);
  await login(page, USERNAME, PASSWORD);
  await search(page, SEARCH_KEYWORD);
  await getAllPosts(page);
};

// ... (login, search, getAllPosts, etc.)

main();
```

-   **main():** The main function that initializes Puppeteer, navigates to Instagram, and calls the login, search, and data extraction functions.
-   **login():** Logs into Instagram using the provided username and password.
-   **search():** Searches for the specified keyword on Instagram.
-   **getAllPosts():** Extracts captions from each post found during the search.
-   **clickButtonCustom():** A utility function to click buttons using custom selectors.
-   **generaterandomNumber() and delay():** Utility functions to simulate human behavior.
-   Lists the project dependencies and the dev script to build and run the TypeScript code.

### ⚠️ Disclaimer
-   Use this script responsibly and ethically. Respect Instagram's terms of service and avoid excessive scraping.
-   This script might break if Instagram changes its website structure.
-   Always be mindful of privacy and data protection.

### 🤝 Contributing
-   Contributions are welcome! Feel free to submit pull requests or open issues. 🐛✨
