import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/register">
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/logout">
            <a>LogOut</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
