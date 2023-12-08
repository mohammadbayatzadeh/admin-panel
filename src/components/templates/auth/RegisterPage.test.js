import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import "@testing-library/jest-dom";
import { screen, render, fireEvent, act } from "@testing-library/react";
import { helper } from "../../../utils/functions";
import { ERR_MSG } from "../../../utils/constants";

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

  test("type in inputs", () => {
    typeElement("salam", "email");
    expect(getElement("email").value).toBe("salam");
    typeElement("123456", "password");
    expect(getElement("password").value).toBe("123456");
  });

  test("inEmpty calling check", () => {
    const isEmpty = jest.spyOn(helper, "isEmpty");
    helper.isEmpty(getElement("password").value);
    helper.isEmpty(getElement("email").value);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });
});

describe("error handling check", () => {
  beforeAll(() => {
    expect(screen.queryByText(ERR_MSG.PASSWORD)).not.toBeInTheDocument();
    expect(screen.queryByText(ERR_MSG.EMAIL)).not.toBeInTheDocument();
  });
  test("check email error handling", () => {
    typeElement("salam", "email");
    typeElement("1232", "password");
    act(() => {
      fireEvent.click(getElement("button"));
    });
    expect(screen.queryByText(ERR_MSG.EMAIL)).toBeInTheDocument();
  });
  test("password error handling", () => {
    typeElement("salam@gmail.com", "email");
    typeElement("1232", "password");
    act(() => {
      fireEvent.click(getElement("button"));
    });
    expect(screen.queryByText(ERR_MSG.PASSWORD)).toBeInTheDocument();
  });
});

describe('navigation testing')
