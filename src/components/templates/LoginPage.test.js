const { render, screen, fireEvent } = require("@testing-library/react");
import LoginPage from "./LoginPage";

const getElement = (elm) => {
  const elms = {
    email: screen.getByPlaceholderText("name@company.com"),
    password: screen.getByPlaceholderText("••••••••"),
  };
  return elms[elm];
};

const typeElement = (value, elm) => {
  fireEvent.change(getElement(elm), { target: { value } });
};

describe("loginPage input, button check", () => {
  beforeEach(() => render(<LoginPage />));
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
});
