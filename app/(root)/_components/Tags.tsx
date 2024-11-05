import Link from "next/link";
import React from "react";

const Tags = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center gap-1 flex-wrap">
        <Link
          href="/"
          className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: `url("https://source.unsplash.com/random/?adventures)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          href="/"
          className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: `url("https://source.unsplash.com/random/?mountains)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          href="/"
          className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: `url("https://source.unsplash.com/random/?nature)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          href="/"
          className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: `url("https://source.unsplash.com/random/?waterfall)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          href="/"
          className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: `url("https://source.unsplash.com/random/?animals)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
};

export default Tags;
