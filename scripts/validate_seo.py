import asyncio
import json
import re
from pathlib import Path
from playwright.async_api import async_playwright

async def validate_social_consistency(page):
    errors = []
    
    # Check Instagram and X URLs in Footer
    footer_links = await page.evaluate("""() => {
        const links = Array.from(document.querySelectorAll('footer a'));
        return links.map(a => a.href);
    }""")
    
    if not any("instagram.com/imrajeevnayan" in href for href in footer_links):
        errors.append("Instagram link missing from footer")
    if not any("x.com/imrajeevnayan" in href for href in footer_links):
        errors.append("X link missing from footer")
        
    # Check Contact Section
    contact_links = await page.evaluate("""() => {
        const links = Array.from(document.querySelectorAll('#contact a'));
        return links.map(a => a.href);
    }""")
    
    if not any("instagram.com/imrajeevnayan" in href for href in contact_links):
        errors.append("Instagram link missing from contact section")
    if not any("x.com/imrajeevnayan" in href for href in contact_links):
        errors.append("X link missing from contact section")
        
    # Check JSON-LD sameAs array
    json_ld_same_as = await page.evaluate("""() => {
        const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        for (const s of scripts) {
            const data = JSON.parse(s.textContent);
            const items = Array.isArray(data) ? data : [data];
            for (const item of items) {
                if (item["@type"] === "Person" && item.sameAs) {
                    return item.sameAs;
                }
            }
        }
        return [];
    }""")
    
    if not any("instagram.com/imrajeevnayan" in url for url in json_ld_same_as):
        errors.append("Instagram missing from JSON-LD sameAs")
    if not any("x.com/imrajeevnayan" in url for url in json_ld_same_as):
        errors.append("X missing from JSON-LD sameAs")
        
    return errors

async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 1800})
        page = await context.new_page()

        print("--- Testing SEO & Social Consistency ---")
        try:
            await page.goto("http://localhost:8080/", wait_until="domcontentloaded")
            await page.wait_for_timeout(2000)
            
            # Check Canonical
            canonical = await page.evaluate('document.querySelector("link[rel=\'canonical\']").href')
            if canonical != "https://rajeevnayan.in/":
                print(f"❌ Canonical error: {canonical}")
            else:
                print("✅ Canonical validated")
                
            # Check hreflang consistency
            hreflangs = await page.evaluate("""() => {
                const links = Array.from(document.querySelectorAll('link[rel="alternate"]'));
                return links.map(l => ({ hreflang: l.hreflang, href: l.href }));
            }""")
            
            expected_langs = ["en", "hi", "de", "x-default"]
            found_langs = [h['hreflang'] for h in hreflangs if h['hreflang']]
            
            missing_langs = [l for l in expected_langs if l not in found_langs]
            if missing_langs:
                print(f"❌ Missing hreflang tags: {missing_langs}")
            else:
                print("✅ All expected hreflang tags found")
                
            # Verify hreflang links exist (simulate check for base routes)
            for h in hreflangs:
                if not h['href'].startswith('https://rajeevnayan.in'):
                     print(f"❌ Invalid hreflang domain: {h['href']}")
            
            # Check consistency
            cons_errors = await validate_social_consistency(page)
        except Exception as e:
            print(f"Error during validation: {e}")
            cons_errors = [str(e)]

        await browser.close()
        if cons_errors:
            exit(1)

if __name__ == "__main__":
    asyncio.run(main())
