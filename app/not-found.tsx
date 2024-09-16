"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Image src={logo} alt="logo" width={80} height={80} />
      <h1 className="text-4xl font-semibold">404 Not Found</h1>
      <Link href="/">Go back home</Link>
    </div>
  );
}
