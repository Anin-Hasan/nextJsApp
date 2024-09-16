"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

const baseLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "login",
    url: "/login",
  },
];
export default function Links() {
  const pathname = usePathname();
  const isSession = false;
  const isAdmin = true;

  const links = [...baseLinks];

  if (isAdmin) {
    const loginIndex = links.findIndex((link) => link.title === "login");
    links.splice(loginIndex, 0, {
      title: "Admin",
      url: "/admin",
    });
  }
  return (
    <>
      {links.map((link) => (
        <Link
          href={link.url}
          key={link.title}
          className={clsx("hover:scale-110 duration-300", {
            "text-blue-600 text-base": pathname === link.url,
          })}
        >
          {isSession && link.title === "login" ? "Logout" : link.title}
        </Link>
      ))}
    </>
  );
}
