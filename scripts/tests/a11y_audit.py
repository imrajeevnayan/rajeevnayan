import asyncio
import sys
from playwright.async_api import async_playwright

async def run_audit():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        print("--- Starting Accessibility Audit ---")
        try:
            await page.goto("http://localhost:8080/", wait_until="networkidle")
            
            # 1. Check for <html> lang attribute
            lang = await page.get_attribute("html", "lang")
            if not lang:
                print("❌ Accessibility Error: <html> tag missing lang attribute")
                sys.exit(1)
            print(f"✅ Found lang='{lang}'")
            
            # 2. Check for page title
            title = await page.title()
            if not title:
                print("❌ Accessibility Error: Page title is missing")
                sys.exit(1)
            print(f"✅ Found page title: {title}")
            
            # 3. Check for main landmarks
            main = await page.query_selector("main")
            if not main:
                print("⚠️ Warning: No <main> landmark found")
                
            # 4. Check images for alt text
            images = await page.query_selector_all("img")
            missing_alt = 0
            for img in images:
                alt = await img.get_attribute("alt")
                if alt is None: 
                    missing_alt += 1
            
            if missing_alt > 0:
                print(f"❌ Accessibility Error: {missing_alt} image(s) missing alt attribute")
                sys.exit(1)
            else:
                print("✅ All images have alt attributes")

            # 5. Check for button accessible names
            buttons = await page.query_selector_all("button")
            for btn in buttons:
                name = await btn.evaluate("node => node.innerText || node.getAttribute('aria-label') || node.getAttribute('title')")
                if not name or not name.strip():
                    print(f"❌ Accessibility Error: Button found without accessible name")
                    sys.exit(1)
            print("✅ All buttons have accessible names")
            
        except Exception as e:
            print(f"❌ Audit failed with error: {e}")
            sys.exit(1)
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run_audit())
