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
    const route = "/contact";
    // await act(() =>
    //   render(
    //     // <Suspense fallback="test loading ">
    //     <MemoryRouter initialEntries={[route]}>
    //       <RoutesMap />
    //     </MemoryRouter>
    //     // </Suspense>
    //   )
    // );
    // await waitFor(() =>
    //   expect(screen.findByText("Information")).toBeInTheDocument()
    // );
  });
});
