import { describe, it, expect, vi } from 'vitest';
import { simulateStreaming } from '../streaming';

describe('simulateStreaming', () => {
  it('should stream text word by word', async () => {
    const text = "Hello world this is a test";
    const updates: string[] = [];
    
    const result = await simulateStreaming(text, (current) => {
      updates.push(current);
    }, [1, 2]); // Short delay for testing

    expect(result).toBe(text);
    expect(updates.length).toBe(text.split(" ").length);
    expect(updates[0]).toBe("Hello");
    expect(updates[1]).toBe("Hello world");
    expect(updates[updates.length - 1]).toBe(text);
  });

  it('should handle empty text', async () => {
    const updates: string[] = [];
    const result = await simulateStreaming("", (current) => {
      updates.push(current);
    });
    
    expect(result).toBe("");
    expect(updates.length).toBe(0);
  });

  it('should handle single word', async () => {
    const text = "Word";
    const updates: string[] = [];
    const result = await simulateStreaming(text, (current) => {
      updates.push(current);
    }, [1, 2]);

    expect(result).toBe(text);
    expect(updates.length).toBe(1);
    expect(updates[0]).toBe("Word");
  });
});
