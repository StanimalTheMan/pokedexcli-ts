import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });
  return {
    readline: rl,
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: "",
  };
}
