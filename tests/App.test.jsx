import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../src/App";
import { BrowserRouter } from "react-router";

describe("Spotify", () => {
  it("renders the App component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    screen.debug();
  });
});
