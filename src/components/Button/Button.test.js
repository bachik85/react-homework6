import React from "react";
import {render} from "@testing-library/react";
import Button from "./Button";

describe("button tests", () => {
  test("rendering button", () => {
    const {getByTestId} = render(<Button onClick={() => {
    }}/>);
    const btnTestTemplate = getByTestId("btnTestTemplate");
    const defaultBtnClassName = "btnForm";
    expect(btnTestTemplate).toBeDefined();
    expect(btnTestTemplate.className).toBe(defaultBtnClassName);
  });
});
