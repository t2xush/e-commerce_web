import React, { useState } from "react";
import SellerAccountForm from "./SellerAccountForm";
import SellerLoginForm from "./SellerLoginForm";
import { Button } from "@mui/material";

const BecomeSeller = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleShowPage = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md">
        {!isLogin ? <SellerAccountForm /> : <SellerLoginForm />}
        <div className="mt-10 space-y-2">
          <h1 className="text-center text-sm font-medium">have account</h1>
          <Button
            onClick={handleShowPage}
            fullWidth
            sx={{ py: "11px" }}
            variant="outlined"
          >
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </section>
      <section className="hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="space-y-2 font-bold text-center">
            <p className="text-2xl">Join the Marketplace revolution </p>
            <p className="text-lg text-primary-color">Boost your sales today</p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/seller-concept-professional-worker-supermarket-shop-store-stocktacking-merchandising-cash-accounting-calculations-client-service-payment-operation-vector-illustration_613284-3114.jpg?t=st=1732628907~exp=1732632507~hmac=1025677fe0da0cce6a3bc5f77859b9a9b8d83c3212355f63e3f4d3b83bae54cf&w=1480"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;
