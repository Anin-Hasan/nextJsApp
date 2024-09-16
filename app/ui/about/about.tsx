import Image from "next/image";
import { Footer } from "flowbite-react";
import { MyFooter } from "../footer/footer";

export function About() {
  return (
    <>
      <div className="flex justify-center items-center p-20 gap-80">
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="text-2xl">About Agency</h1>
          <h1 className="text-4xl font-bold">
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
            atque? Esse, omnis ipsa facere distinctio, deserunt aliquid impedit
            dolore iure libero, eveniet fugit ducimus repellat accusamus? Optio
            error magni maxime?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis maiores iste similique odit, totam
            corrupti, molestiae est odio fugiat nesciunt impedit voluptatem
            reiciendis eligendi praesentium accusamus? Voluptatum excepturi
            illum vel!
          </p>
        </div>
        <Image
          src="/contact.jpg"
          width={500}
          height={500}
          alt="contact picture"
        />
      </div>
      <MyFooter />
    </>
  );
}
