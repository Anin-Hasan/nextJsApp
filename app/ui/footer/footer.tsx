import { Footer } from "flowbite-react";

export function MyFooter() {
  return (
    <Footer container className="flex justify-between p-28">
      <Footer.Copyright href="#" by="Anin™" year={2024} />
      <Footer.LinkGroup className="flex gap-4">
        <Footer.Link href="/about" className="hover:text-blue-700 duration-300">
          About
        </Footer.Link>
        <Footer.Link href="#" className="hover:text-blue-700 duration-300">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#" className="hover:text-blue-700 duration-300">
          Licensing
        </Footer.Link>
        <Footer.Link
          href="/contact"
          className="hover:text-blue-700 duration-300"
        >
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
