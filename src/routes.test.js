import {
  act,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { Suspense } from "react";
import "@testing-library/jest-dom";
import RoutesMap from "./routes";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("check routes render successfully", () => {
  test("full app rendering/navigating", async () => {
    const route = "/";
    await act(async () =>
      render(
        <Suspense fallback="test loading ">
          <MemoryRouter initialEntries={[route]}>
            <RoutesMap />
          </MemoryRouter>
        </Suspense>
      )
    );
    // const text = await screen.findByText("Sales Analytics");
  });
});
