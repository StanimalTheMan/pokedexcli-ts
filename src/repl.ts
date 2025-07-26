export function cleanInput(input: string): string[] {
  // remove excessive whitespace
  const cleanedInput = input.replace(/\s+/g, " ").trim().toLowerCase();
  return cleanedInput.split(" ");
}
