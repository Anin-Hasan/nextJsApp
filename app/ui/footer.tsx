// make a footer component

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 px-20 bg-gray-800 text-white">
      <Link className="flex items-center" href="/">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className="ml-2 font-semibold">Create Next App</span>
      </Link>
      <div className="flex space-x-4">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </footer>
  );
}
