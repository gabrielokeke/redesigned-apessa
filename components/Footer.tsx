"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const apessaLinks = [
  { href: "/", label: "Accueil" },
  { href: "/apropos", label: "A Propos" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/reseaux", label: "Reseau des benevoles" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-red-50 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left: Logo + Copyright */}
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
            width={170}
            height={25}
            className="w-[170px] md:w-[340px] h-auto"
          />
          <p className="text-gray-600 text-sm text-start md:text-left">
            © {new Date().getFullYear()} APESSA. Tous droits réservés.
          </p>
        </motion.div>

        {/* Middle: First 3 links */}
        <motion.nav
          className="flex flex-col justify-center md:justify-center md:w-1/3 gap-6 flex-wrap text-gray-700 font-semibold text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          {apessaLinks.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </motion.nav>

        {/* Right: Last 3 links */}
        <motion.nav
          className="flex flex-col justify-center md:justify-end md:w-1/3 gap-6 flex-wrap text-gray-700 font-semibold text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        >
          {apessaLinks.slice(3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </motion.nav>
      </div>
    </footer>
  );
}
