"use client";
import { Button, Label, Textarea } from "flowbite-react";
const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-36 w-full gap-4">
      <h1 className="font-semibold">Contact Us</h1>
      <form className="flex w-72 flex-col gap-4 text-gray-900">
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <input
            id="email2"
            type="email"
            placeholder="Your Name"
            required
            className="p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Email" />
          </div>
          <input
            id="email2"
            type="email"
            placeholder="Email"
            required
            className="p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Phone Number (optional)" />
          </div>
          <input
            id="email2"
            type="email"
            placeholder="Phone Number"
            className="p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a message..."
            rows={4}
            className="p-4 border rounded-md"
          />
        </div>
        <Button
          type="submit"
          size="xl"
          pill
          className="text-black text-xl hover:bg-blue-400 hover:text-white duration-300 py-2 "
        >
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
