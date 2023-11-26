import { setupServer } from "msw/node";
import { rest } from "msw";
import data from "../mock/data.json";
import { render } from "@testing-library/react";
import ManageItems from "./ManageItems";

const server = setupServer(
  rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  })
);

beforeEach(() => render(<ManageItems />));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
