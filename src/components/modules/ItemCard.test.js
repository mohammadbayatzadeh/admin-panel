import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";
import "@testing-library/jest-dom";
import { helper } from "../../utils/functions";

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

    const title = screen.getByText(helper.shorten(cardprops.title));
    expect(title).toBeInTheDocument();

    const splitPrice = helper.seperatePrice(`${cardprops.price}`);

    const price = screen.getByText(`${splitPrice[0]}.${splitPrice[1]}€`);
    expect(price).toBeInTheDocument();

    const category = screen.getByText(cardprops.category);
    expect(category).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("ADD");
    fireEvent.click(button);
    expect(button).toHaveTextContent("selected");
    fireEvent.click(button);
    expect(button).toHaveTextContent("ADD");
  });
});
