import asyncio
from playwright.async_api import async_playwright
import sys

# Define viewports
VIEWPORTS = {
    "mobile": {"width": 375, "height": 667},
    "tablet": {"width": 768, "height": 1024},
    "desktop": {"width": 1280, "height": 800}
}

async def check_section_visibility(page, section_id):
    try:
        section = await page.query_selector(f"#{section_id}")
        if not section:
            return False, f"Section #{section_id} not found"
        
        is_visible = await section.is_visible()
        if not is_visible:
            return False, f"Section #{section_id} is not visible"
            
        return True, ""
    except Exception as e:
        return False, str(e)

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        sections_to_check = ["about", "projects", "contact", "experience"]
        failed = False

        for name, viewport in VIEWPORTS.items():
            print(f"\n--- Testing {name} viewport ({viewport['width']}x{viewport['height']}) ---")
            context = await browser.new_context(viewport=viewport)
            page = await context.new_page()
            
            try:
                await page.goto("http://localhost:8080/", wait_until="networkidle")
                # Wait for potential animations
                await page.wait_for_timeout(1000)
                
                for section_id in sections_to_check:
                    success, msg = await check_section_visibility(page, section_id)
                    if success:
                        print(f"✅ Section #{section_id} is visible")
                    else:
                        print(f"❌ Section #{section_id} check failed: {msg}")
                        failed = True
            except Exception as e:
                print(f"❌ Error testing {name}: {e}")
                failed = True
            finally:
                await page.close()
                await context.close()
        
        await browser.close()
        if failed:
            sys.exit(1)

if __name__ == "__main__":
    asyncio.run(run_test())
