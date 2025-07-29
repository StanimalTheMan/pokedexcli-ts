import { createInterface } from "readline";
import { getCommands } from "./command.js";
import { State } from "./state.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

export function startREPL(state: State) {
  rl.prompt();
  rl.on("line", (input: string) => {
    if (input.length == 0) {
      rl.prompt();
    } else {
      const cleanedInput = cleanInput(input);
      //   console.log(`Your command was: ${cleanedInput[0]}`);
      const commands = state.commands;
      if (cleanedInput[0] in commands) {
        commands[cleanedInput[0]]["callback"](state);
      } else {
        console.log("Unknown command");
      }
      rl.prompt();
    }
  });
}

export function cleanInput(input: string): string[] {
  // remove excessive whitespace
  const cleanedInput = input.replace(/\s+/g, " ").trim().toLowerCase();
  return cleanedInput.split(" ");
}
