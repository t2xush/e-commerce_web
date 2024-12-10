import { Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProfileFieldCard from "../../../components/ProfileFieldCard";
import PersonalDetails from "./PersonalDetails";
import BusinessDetails from "./BusinessDetails";
import PickupAddress from "./PickupAddress";
import BankDetails from "./BankDetails";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { fetchSellerProfile } from "../../../state/seller/sellerSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const { seller } = useAppSelector((store) => store);
  const handleOpen = (formName: string) => {
    setOpen(true);
    setSelectedForm(formName);
  };
  const handleClose = () => setOpen(false);

  const [selectedForm, setSelectedForm] = useState("personalDetails");
  const dispatch=useAppDispatch();

  const renderSelectedForm = () => {
    switch (selectedForm) {
      case "personalDetails":
        return <PersonalDetails />;
      case "businessDetails":
        return <BusinessDetails />;
      case "pickupAddress":
        return <PickupAddress />;
      case "bankDetails":
        return <BankDetails />;
    }
  };

     useEffect(()=>{
  dispatch(fetchSellerProfile(localStorage.getItem("jwt")||""))
   },[])

  return (
    <div className="lg:px-20 pt-3 pb-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
          <div>
            <Button
              onClick={() => handleOpen("personalDetails")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGJjQE6IYjUPC2nxSFbDnEqIjMKR03q97Sg&s"
          />
          <div>
            <ProfileFieldCard
              keys="Seller Name"
              value={seller.profile?.sellerName}
            />
            <Divider />
            <ProfileFieldCard
              keys="Seller Email"
              value={seller.profile?.email}
            />
            <Divider />
            <ProfileFieldCard
              keys="Seller Mobile"
              value={seller.profile?.mobile}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Business Details</h1>
          <div>
            <Button
              variant="contained"
              onClick={() => handleOpen("businessDetails")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard
              keys="Business Name/Brand Name"
              value={seller.profile?.businessDetails.businessName}
            />
            <Divider />
            <ProfileFieldCard
              keys="GSTIN"
              value={seller.profile?.gstin || "not provided"}
            />
            <Divider />
            <ProfileFieldCard
              keys="Account Status"
              value={seller.profile?.accountStatus}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Pickup Address</h1>
          <div>
            <Button
              variant="contained"
              onClick={() => handleOpen("pickupAddress")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard
              keys="Address"
              value={seller.profile?.pickupAddress.address || "not provided"}
            />
            <Divider />
            <ProfileFieldCard
              keys="City"
              value={seller.profile?.pickupAddress.city}
            />
            <Divider />
            <ProfileFieldCard
              keys="state"
              value={seller.profile?.pickupAddress.state}
            />
            <Divider />
            <ProfileFieldCard
              keys="Mobile"
              value={seller.profile?.pickupAddress.mobile || "not provided"}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Bank Details</h1>
          <div>
            <Button
              variant="contained"
              onClick={() => handleOpen("bankDetails")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard
              keys="Account Holder Name"
              value={seller.profile?.bankDetails.accountHolderName}
            />
            <Divider />
            <ProfileFieldCard
              keys="Account Number"
              value={seller.profile?.bankDetails.accountNumber}
            />
            <Divider />
            <ProfileFieldCard
              keys="IFSC CODE"
              value={seller.profile?.bankDetails.ifscCode}
            />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{renderSelectedForm()}</Box>
      </Modal>
    </div>
  );
};

export default Profile;
