import { State } from "./state.js";

export function commandHelp(commands: State) {
  console.log(`Welcome to the Pokedex!
    Usage:

    help: Displays a help message
    exit: Exit the Pokedex)`);
}
