import { test, expect } from '@playwright/test';

test.describe('AI Chat Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open chat and receive streaming response', async ({ page }) => {
    // 1. Verify the chat trigger button is visible
    const chatTrigger = page.locator('button[aria-label="Open AI Chat"]');
    await expect(chatTrigger).toBeVisible();
    
    // 2. Open the chat
    await chatTrigger.click();
    
    // 3. Verify chat interface is open
    const chatInput = page.locator('input[aria-label="AI chat input"]');
    await expect(chatInput).toBeVisible();
    
    // 4. Send a message
    const testMessage = "What are your core Java skills?";
    await chatInput.fill(testMessage);
    await page.keyboard.press('Enter');
    
    // 5. Verify the message appears in the chat
    await expect(page.getByText(testMessage)).toBeVisible();
    
    // 6. Verify streaming response starts appearing
    // We look for a bot message container
    const botMessage = page.locator('.bg-surface-2').last();
    await expect(botMessage).toBeVisible({ timeout: 10000 });
    
    // Capture initial text
    const initialText = await botMessage.innerText();
    
    // Wait for streaming to progress (the simulateStreaming function adds delays)
    await page.waitForTimeout(1000);
    
    // Capture text after a delay to verify it has grown
    const laterText = await botMessage.innerText();
    
    expect(laterText.length).toBeGreaterThan(initialText.length);
  });

  test('should display suggested queries and allow refining them', async ({ page }) => {
    await page.locator('button[aria-label="Open AI Chat"]').click();
    
    // Find a suggestion button (e.g., "Tech Stack")
    const suggestion = page.getByRole('button', { name: 'Tech Stack', exact: false });
    await expect(suggestion).toBeVisible();
    
    // Click the "Refine" button (Edit2 icon in the source)
    const refineBtn = page.locator('button[title="Refine prompt"]').first();
    await refineBtn.click();
    
    // Check if the input is filled with the suggested text but NOT sent
    const chatInput = page.locator('input[aria-label="AI chat input"]');
    const inputValue = await chatInput.inputValue();
    expect(inputValue.toLowerCase()).toContain('tech stack');
    
    // Ensure no bot message was sent yet (only the initial greeting exists)
    const botMessages = page.locator('.bg-surface-2');
    await expect(botMessages).toHaveCount(1);
  });
});
