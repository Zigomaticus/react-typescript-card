import React, { FC } from "react";

// Components
import Button from "@mui/material/Button";

// Styles
import { Wrapper } from "./Item.styles";

// Types
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clikcedItem: CartItemType) => void;
};

const Item: FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
