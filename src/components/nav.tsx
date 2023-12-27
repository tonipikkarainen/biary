// Navbar.js
import React from "react";
import { Logout } from "./logout";

type Props = {
  user: boolean;
};
export const Navbar = ({ user }: Props) => {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-gray-500 from-[#282a29] p-4">
      <div className="text-white">Logo</div>
      <div className="flex flex-row items-center space-x-4">
        <a href="/home" className="text-white">
          Home
        </a>
        {user && <Logout />}
      </div>
    </nav>
  );
};
