import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="space-x-2">
      <Button>Primary</Button>
      <Button className="bg-gray-700 hover:bg-gray-800 focus:ring-gray-500 ">Primary</Button>
      <Button className="bg-pink-500 hover:bg-pink-600 focus:ring-pink-300">Secondary</Button>
    </div>
  )
}