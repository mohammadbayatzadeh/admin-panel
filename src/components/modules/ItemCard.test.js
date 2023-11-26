import { act, fireEvent, render, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";
import { seperatePrice, shorten } from "../../functions/functions";
import "@testing-library/jest-dom";

const cardprops = {
  title: "product 11",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  category: "electronics",
  price: "25.26",
};

describe("card Component", () => {
  test("show all properties ", () => {
    render(<ItemCard {...cardprops} />);

    const image = screen.getByRole("img");
    expect(image.src).toContain(cardprops.image);
    expect(image).toBeInTheDocument();

    const title = screen.getByText(shorten(cardprops.title));
    expect(title).toBeInTheDocument();

    const splitPrice = seperatePrice(`${cardprops.price}`);

    const price = screen.getByText(`${splitPrice[0]}.${splitPrice[1]}€`);
    expect(price).toBeInTheDocument();

    const category = screen.getByText(cardprops.category);
    expect(category).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("ADD");
    act(() => {
      fireEvent.click(button);
    });
    expect(button).toHaveTextContent("selected");
    act(() => {
      fireEvent.click(button);
    });
    expect(button).toHaveTextContent("ADD");
  });
});
