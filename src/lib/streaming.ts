
/**
 * Simulates a word-by-word streaming effect for a given text.
 * Calls the onUpdate callback with the current accumulated text at each step.
 */
export async function simulateStreaming(
  text: string,
  onUpdate: (currentText: string) => void,
  delayRange: [number, number] = [20, 50]
): Promise<string> {
  if (!text) return "";
  
  const words = text.split(" ");
  let currentText = "";
  
  for (let i = 0; i < words.length; i++) {
    currentText += (i === 0 ? "" : " ") + words[i];
    onUpdate(currentText);
    
    // Simulate network/rendering delay
    const [min, max] = delayRange;
    const delay = min + Math.random() * (max - min);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  return currentText;
}
