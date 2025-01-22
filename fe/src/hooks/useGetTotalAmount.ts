import React, { useEffect, useState } from "react";
import { useCart } from "../store/cart";

export const useGetTotalAmount = () => {
  const [total, setTotal] = useState(0);
  const subscriptionBoxes = useCart((state) => state.subscriptionBoxes);

  useEffect(() => {
    const totalFromBoxes = subscriptionBoxes
      .map((box) => box.boxPrice)
      .reduce((acc, price) => acc + price, 0);
    setTotal(Math.round(totalFromBoxes * 100) / 100);
  }, [subscriptionBoxes]);

  return { total };
};
