"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import InstagramLogo from "@/assets/logo/instagram.png";
import InstagramIcon from "@/assets/logo/icon.png";

import SearchLogo from "@/assets/navlogo/search.png";
import ExploreLogo from "@/assets/navlogo/explore.png";
import ReelsLogo from "@/assets/navlogo/reel.png";
import MessagesLogo from "@/assets/navlogo/message.png";
import NotificationsLogo from "@/assets/navlogo/like.png";
import CreateLogo from "@/assets/navlogo/create.png";
import HomeLogo from "@/assets/navlogo/home.png";
import ThreadsLogo from "@/assets/navlogo/threads.png";
import MoreLogo from "@/assets/navlogo/more.png";
import { useUser } from "@clerk/nextjs";

const LargeNav = () => {
  const sidebarItems = [
    {
      name: "Search",
      link: "/search",
      icon: SearchLogo,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: ExploreLogo,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: ReelsLogo,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: MessagesLogo,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: NotificationsLogo,
    },
    {
      name: "Create",
      link: "/create",
      icon: CreateLogo,
    },
  ];

  const { user } = useUser();

  return (
    <>
      <div className="w-full h-full relative ">
        <Link
          href="/"
          className="mb-10 px-2 lg:block md:hidden sm:hidden hidden"
        >
          <Image
            src={InstagramLogo}
            alt="Instagram Logo"
            className="w-28 h-auto"
          />
        </Link>
        <Link href="/" className="mb-10 px-2 lg:hidden md:block sm:block block">
          <Image
            src={InstagramIcon}
            alt="Instagram Logo"
            className="w-28 h-auto"
          />
        </Link>
        <div className="w-full h-auto flex items-start flex-col gap-y-2">
          <Link
            href="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-600/60 rounded-md ease-out duration-500 group"
          >
            <Image
              src={HomeLogo}
              alt="home logo"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden hidden">
              Home
            </p>
          </Link>
          {/* Loop other navlink */}
          {sidebarItems.map((item, index) => (
            <Link
              href={item.link}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-600/60 rounded-md ease-out duration-500 group"
              key={index}
            >
              <Image
                src={item.icon}
                alt="home logo"
                className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
              />
              <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
                {item.name}
              </p>
            </Link>
          ))}
          {/* Profile Section */}
          <Link
            href="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-600/60 rounded-md ease-out duration-500 group"
          >
            <Image
              src={user?.imageUrl || "/assets/ProfileImage.png"}
              alt="home logo"
              className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300"
              width={100}
              height={100}
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              profile
            </p>
          </Link>
        </div>

        {/* Treads and more */}
        <div className="w-full h-auto absolute bottom-0 left-0 px-0">
          <Link
            href="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-600/60 rounded-md ease-out duration-500 group"
          >
            <Image
              src={ThreadsLogo}
              alt="home logo"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              Threads
            </p>
          </Link>
          <Link
            href="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-600/60 rounded-md ease-out duration-500 group"
          >
            <Image
              src={MoreLogo}
              alt="home logo"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              More
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
