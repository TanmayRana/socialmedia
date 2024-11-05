"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function InputForm() {
  return (
    <form className="w-1/2 space-y-6  flex justify-center items-center">
      <div className="w-1/2 ">
        <Input type="email" placeholder="Email" />
        <Button className="float-end mt-4" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
