import { createInterface, type Interface } from "readline";
import { getCommands } from "./command.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  commands: Record<string, CLICommand>;
  readline: Interface;
};

export function initState() {
  return {
    commands: getCommands(),
    readline: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex > ",
    }),
  };
}
