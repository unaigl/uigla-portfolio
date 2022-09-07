import React, { Component } from "react";
import "@testing-library/jest-dom"; ///extend-expect
// import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import About from "../components/About/About";
import { prettyDOM } from "@testing-library/dom";

describe("<About />", () => {
  const call = () => {
    return render(<About />);
  };

  test("1er test", () => {
    call();

    screen.getByText("Know Who"); // Con este metodo puede que te quedes con la duda de si te lanzara un throw
  });
  test("2er test", () => {
    const view = call();
    //   screen.debug();
    expect(view.container).toHaveTextContent("Know Who");
  });
  test("3er test", () => {
    const view = call();
    const strong = view.container.querySelector("strong");
    console.log(prettyDOM(strong));
    //   console.log(view);
  });
});
