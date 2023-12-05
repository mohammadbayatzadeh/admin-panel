const { render, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import { helper } from "../../../utils/functions";

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

describe("loginPage input, button check", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )
  );

  test("inputs must initialy empty", () => {
    expect(getElement("email").value).toBe("");
    expect(getElement("password").value).toBe("");
  });

  test("input type", () => {
    typeElement("salam", "email");
    expect(getElement("email").value).toBe("salam");
    typeElement("123456", "password");
    expect(getElement("password").value).toBe("123456");
  });

  test("button must be disable", () => {
    expect(getElement("button").disabled).toBeTruthy();
  });
  test("button must enable with filled inputs", () => {
    typeElement("salam", "email");
    typeElement("123456", "password");
    expect(getElement("button").disabled).toBeFalsy();
  });

  test("check the usEmpty calling", () => {
    //spyOn
    const isEmpty = jest.spyOn(helper, "isEmpty");
    helper.isEmpty(getElement("email").value);
    expect(isEmpty).toHaveBeenCalledTimes(1);
  });
});
