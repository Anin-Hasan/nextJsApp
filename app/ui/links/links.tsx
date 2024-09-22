"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { handleGithubLogout } from "@/lib/action";
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
    title: "Blog",
    url: "/blog",
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

type session = { session: any };

export default function Links(session: session) {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(!!session.session?.user);
  const isAdmin = true;

  const links = [...baseLinks];

  if (isAdmin) {
    const loginIndex = links.findIndex((link) => link.title === "login");
    links.splice(loginIndex, 0, {
      title: "Admin",
      url: "/admin",
    });
  }
  const handleLogout = async () => {
    await handleGithubLogout();
    setIsLoggedIn(false);
  };
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
          {isLoggedIn && link.title === "login" ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            link.title
          )}
        </Link>
      ))}
    </>
  );
}
