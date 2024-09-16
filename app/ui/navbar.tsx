import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import Links from "./links/links";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 px-20 bg-white text-black shadow-xl opacity-70 fixed z-10 w-full">
      <Link className="flex items-center" href="/">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className="ml-2 font-semibold">Next App</span>
      </Link>
      <div className="flex space-x-10">
        <Links />
      </div>
    </nav>
  );
}
