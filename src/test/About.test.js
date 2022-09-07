import React from "react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import About from "../components/About/About";

test("1er test", () => {
  const view = render(<About />);
  console.log(view);
});
