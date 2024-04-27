import React from "react";
import logo from "../../assets/axa-logo.png";

function Layout({ children }) {
  return (
    <main className="w-full flex">
      <div className="hidden lg:w-[20%] lg:block min-h-screen bg-blue-400 p-5">
        <img src={logo} className="w-40 mb-4" />
        <h2 className="text-2xl font-bold text-white drop-shadow-md	">
          Test Frontend AXA
        </h2>
        <h2 className="text-1xl font-bold text-white drop-shadow-md	">
          Social Media Dashborad
        </h2>
        <p className="text-sm text-white drop-shadow-md	">
          by: Reynaldy Saputra
        </p>
      </div>

      <div className="w-[100%] lg:w-[80%]">{children}</div>
    </main>
  );
}

export default Layout;
