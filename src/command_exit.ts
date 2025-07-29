import { State } from "./state.js";

export function commandExit(commands: State) {
  console.log("Closing the Pokedex... Goodbye!");
  commands.readline.close();
  process.exit(0);
}
