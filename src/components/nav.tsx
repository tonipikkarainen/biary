// Navbar.js
import React from "react";
import { Logout } from "./logout";

type Props = {
  user: boolean;
};
export const Navbar = ({ user }: Props) => {
  return (
    <nav className="bg-slate-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">Logo</div>
          <div className="flex flex-row items-center">
            <a href="/home" className="text-white">
              Home
            </a>
            {user && <Logout />}
          </div>
        </div>
      </div>
    </nav>
  );
};
