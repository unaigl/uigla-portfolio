import React, { Component } from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCards from "../components/Projects/ProjectCards";
import { prettyDOM } from "@testing-library/dom";

describe("<ProjectCards />", () => {
  const content = {
    imgPath: "../../Assets/Projects/Bubbles.png",
    title: "Lee",
    description: "Be water",
    libraries: "Be water",
    isBlog: true,
    ghLink:
      "https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md",
    demoLink:
      "https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md",
  };

  //Forbidden usage of `render` within testing framework `beforeEach` setupeslinttesting-library/no-render-in-setup
  /* beforeEach(() => {
    render(<ProjectCards content={content} />); 
  }); */
  const call = (mockHandler = null) => {
    return render(
      <ProjectCards content={content} toggleImportance={mockHandler} />
    );
  };

  it("button element is defined", () => {
    const view = call();
    const button = view.container.querySelector(".project-demo");
    expect(button).toBeDefined();
  });
  it("getting correctly child<button> text = Blog", () => {
    call();
    screen.queryByText("Blog");
  });
  it("onClick event fired", () => {
    const mockHandler = jest.fn();
    call(mockHandler);
    const button = screen.queryByText("Blog");

    fireEvent.click(button);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
