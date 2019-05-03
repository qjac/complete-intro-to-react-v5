import { createContext } from "react";

// similar to a hook ["green", () => {}] has 2 args. current state and function. this function is empty.
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
