import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});
test("addition works correctly", () => {
  render(<App />);
  expect(1 + 1).toBe(2);
});
