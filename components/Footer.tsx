"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaInfoCircle, FaUsers, FaBlog, FaEnvelope } from "react-icons/fa";

const linkIcons = [<FaHome />, <FaInfoCircle />, <FaUsers />, <FaBlog />, <FaEnvelope />];

const apessaLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "A Propos" },
  { href: "/resources", label: "Réseau des bénévoles" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-red-50 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Logo & copyright */}
        <motion.div
          className="flex flex-col items-center md:items-start md:w-1/3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/apessa.png"
            alt="Apessa Logo"
            className="w-[150px] md:w-[340px] h-auto"
          />
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} APESSA. Tous droits réservés.
          </p>
        </motion.div>

        {/* Links section */}
        <motion.div
          className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          {apessaLinks.map((link, i) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={link.href}
                className="flex items-center justify-center gap-2 text-gray-700 font-semibold hover:text-red-600 transition-colors duration-200"
              >
                {linkIcons[i]} {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
