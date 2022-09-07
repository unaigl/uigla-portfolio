import React, { Component } from "react";
import "@testing-library/jest-dom"; ///extend-expect
// import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import About from "../components/About/About";
import { prettyDOM } from "@testing-library/dom";

test("1er test", () => {
  const view = render(<About />);

  screen.getByText("Know Who"); // Con este metodo puede que te quedes con la duda de si te lanzara un throw
});
test("2er test", () => {
  const view = render(<About />);
  //   screen.debug();

  expect(view.container).toHaveTextContent("Know Who");
});
// test("3er test", () => {
//   const view = render(<About />);
//   const strong = view.container.querySelector("strong");
//   console.log(prettyDOM(strong));
//   //   console.log(view);
// });
