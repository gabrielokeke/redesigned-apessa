"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const apessaLinks = [
    { href: "/", label: "Accueil" },
    { href: "/apropos", label: "A Propos" },
    { href: "/partenaires", label: "Partenaires" },
    { href: "/reseaux", label: "Reseau des benevoles" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md md:px-10 overflow-hidden">
        {/* Logo */}
        <div>
          <img
            src="/apessa.png"
            alt="logo"
            width={170}
            height={25}
            className="w-[170px] md:w-[340px] h-auto"
          />
        </div>

        <div className="hidden gap-2 text-sm font-bold md:flex">
          {apessaLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-6 py-2 hover:text-red-500 transition-all duration-200 ${
                  isActive ? "" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          type="button"
        >
          <span className="h-0.5 w-6 bg-black  transition-all duration-300"></span>
          <span className="h-0.5 w-6 bg-black  transition-all duration-300"></span>
          <span className="h-0.5 w-6 bg-black   transition-all duration-300"></span>
        </button>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40  bg-opacity-50 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile sidebar navigation"
      >
        <div className="flex items-center justify-between py-6 px-3">
          <img
            src="/apessa.png"
            alt="logo"
            width={170}
            height={25}
            className="w-[170px] md:w-[340px] h-auto"
          />
          <button
            onClick={closeSidebar}
            aria-label="Close menu"
            className="rounded-full p-2 hover:bg-gray-300 hover:rounded-full"
            type="button"
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {apessaLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeSidebar}
                className={`rounded-md px-4 py-1 text-[16px] hover:text-red-500 font-bold transition-all duration-200 ${
                  isActive ? "" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
