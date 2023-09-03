import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

function RootLayout() {
  return (
    <div>
      <header>
        <nav style={{ gap: "30px", display: "flex", justifyContent: "end" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
