import { exit } from "process";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

export function startREPL() {
  rl.prompt();
  rl.on("line", (input: string) => {
    if (input.length == 0) {
      rl.prompt();
    } else {
      const cleanedInput = cleanInput(input);
      console.log(`Your command was: ${cleanedInput[0]}`);
      rl.prompt();
    }
  });
}

export function cleanInput(input: string): string[] {
  // remove excessive whitespace
  const cleanedInput = input.replace(/\s+/g, " ").trim().toLowerCase();
  return cleanedInput.split(" ");
}
