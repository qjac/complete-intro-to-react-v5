import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Comet" animal="Cat" breed="American Shorthair" />
      <Pet name="Kirby" animal="Cat" breed="American Shorthair" />
      <Pet name="Bjorn" animal="Robot" breed="Floor Sweeper" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
