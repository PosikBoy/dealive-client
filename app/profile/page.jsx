"use client";
import "./page.css";
import ProfileInfo from "@/components/Profile/ProfileInfo/ProfileInfo";
// import MyOrders from "@/components/MyOrders/MyOrders";
// import ReviewForm from "@/components/ReviewForm/ReviewForm";
const Page = () => {
  return (
    <div className="profile-page">
      <ProfileInfo />
      {/* <ReviewForm />
      <MyOrders /> */}
    </div>
  );
};

export default Page;
