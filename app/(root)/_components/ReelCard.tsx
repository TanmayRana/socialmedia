import React from "react";
import reelsData from "./Data/ReelData";
import Liked from "@/Icons/Like/liked.png";
import Commented from "@/Icons/Comment/commented.png";
import Link from "next/link";
import Image from "next/image";

const ReelCard = () => {
  return (
    <>
      {reelsData.map((reel) => (
        <Link
          href="/"
          key={reel.id}
          className="lg:w-[24.675%] md:w-[24.675%] sm:w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh] relative group"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <video
            src={reel.video}
            title="reel video"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] left-[50%] translate-x-[-50%]">
            <div className="flex items-center gap-x-1">
              <Image src={Liked} alt="like icon" className="w-6 h-6" />
              <p className="text-base text-white font-medium">
                {reel.likeCount}
              </p>
            </div>
            <div className="flex items-center gap-x-1">
              <Image src={Commented} alt="Commented icon" className="w-6 h-6" />
              <p className="text-base text-white font-medium">
                {reel.commentCount}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ReelCard;
