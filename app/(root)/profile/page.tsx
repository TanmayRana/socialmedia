import React from "react";
import Profile from "../_components/Profile";
import MobileProfile from "../_components/MobileProfile";

const page = () => {
  return (
    <>
      <div className="md:w-[] lg:w-[] sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4 lg:px-14 md:px-12 sm:px-7 px-2">
        {/* Profile for large screen */}
        <Profile />

        {/* Profile for small screen */}
        <MobileProfile />
      </div>
    </>
  );
};

export default page;
