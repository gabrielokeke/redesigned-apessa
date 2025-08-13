"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaInfoCircle, FaHandshake, FaUsers, FaBlog, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const linkIcons = [
  <FaHome />,
  <FaInfoCircle />,
  <FaHandshake />,
  <FaUsers />,
  <FaBlog />,
  <FaEnvelope />,
];

function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const apessaLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "A Propos" },
    { href: "partenaires", label: "Partenaires", isScroll: true },
    { href: "/resources", label: "Reseau des benevoles" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Top navbar */}
      <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md md:px-10">
        <img src="/apessa.png" alt="APESSA Logo" width={170} height={25} className="w-[170px] md:w-[340px] h-auto" />

        {/* Desktop links */}
        <div className="hidden md:flex gap-4 font-bold text-sm">
          {apessaLinks.map(({ href, label, isScroll }, i) => (
            isScroll ? (
              <ScrollLink
                key={href}
                to={href}
                smooth={true}
                duration={600}
                offset={-80} // to account for fixed navbar height
                className={`flex items-center gap-1 px-4 py-2 rounded-md transition-colors duration-200 hover:text-red-500 cursor-pointer`}
              >
                {linkIcons[i]} {label}
              </ScrollLink>
            ) : (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1 px-4 py-2 rounded-md transition-colors duration-200 hover:text-red-500 ${
                  pathname === href ? "text-red-600" : "text-black"
                }`}
              >
                {linkIcons[i]} {label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleSidebar} aria-label="Toggle menu">
          {isSidebarOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={closeSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-4">
                <img src="/apessa.png" alt="APESSA Logo" width={170} height={25} className="w-[170px] h-auto" />
                <button onClick={closeSidebar} aria-label="Close menu">
                  <HiOutlineX size={28} />
                </button>
              </div>

              <nav className="flex flex-col p-4 space-y-3 font-bold">
                {apessaLinks.map(({ href, label, isScroll }, i) =>
                  isScroll ? (
                    <ScrollLink
                      key={href}
                      to={href}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onClick={closeSidebar}
                      className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 hover:text-red-500 cursor-pointer"
                    >
                      {linkIcons[i]} {label}
                    </ScrollLink>
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeSidebar}
                      className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 hover:text-red-500 ${
                        pathname === href ? "text-red-600" : "text-black"
                      }`}
                    >
                      {linkIcons[i]} {label}
                    </Link>
                  )
                )}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
