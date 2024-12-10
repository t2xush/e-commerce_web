import { Divider } from "@mui/material";
import React from "react";

interface PricingCardProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}

const PricingCard :React.FC<PricingCardProps>= ({ subtotal, discount, shipping, total }) => {
  return (
    <div>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>€{subtotal}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>€{discount}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>€0.0</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Plateform</span>
          <span>Free</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-primary-color">
        <span>Total</span>
        <span>€{total}</span>
      </div>
    </div>
  );
};

export default PricingCard;
