import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

const getElement = (elm) => {
  const elms = {
    email: screen.getByPlaceholderText("name@company.com"),
    password: screen.getByPlaceholderText("••••••••"),
    button: screen.getByRole("button", { type: "submit" }),
  };
  return elms[elm];
};

const typeElement = (value, elm) => {
  fireEvent.change(getElement(elm), { target: { value } });
};

beforeEach(() =>
  render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>
  )
);
describe("test inputs typing", () => {
  test("inputs must initially empty", () => {
    expect(getElement("email").value).toBe("");
    expect(getElement("password").value).toBe("");
  });
});
