const { render, screen, fireEvent, act } = require("@testing-library/react");
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
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

//mocking navigation
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

beforeEach(() =>
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  )
);

describe("loginPage input, button check", () => {
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

describe("testing navigate", () => {
  test("navigation after filling valid inputs", () => {
    typeElement("salam@gmail.com", "email");
    typeElement("12345687", "password");
    act(() => {
      fireEvent.click(getElement("button"));
    });
    expect(mockUsedNavigate).toHaveBeenCalledWith("/");
  });
});

describe("error handling tests", () => {
  beforeEach(() => {
    expect(screen.queryByText(ERR_MSG.EMAIL)).not.toBeInTheDocument();
    expect(screen.queryByText(ERR_MSG.PASSWORD)).not.toBeInTheDocument();
  });

  test("email error handling", () => {
    typeElement("salam", "email");
    typeElement("12345678", "password");
    act(() => {
      fireEvent.click(getElement("button"));
    });
    expect(screen.queryByText(ERR_MSG.EMAIL)).toBeInTheDocument();
  });

  test("password error handling", () => {
    typeElement("salam@gmail.com", "email");
    typeElement("1234", "password");
    act(() => {
      fireEvent.click(getElement("button"));
    });
    expect(screen.queryByText(ERR_MSG.PASSWORD)).toBeInTheDocument();
  });
});
