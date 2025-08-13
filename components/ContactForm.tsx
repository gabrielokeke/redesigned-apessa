"use client";

import { useState } from "react";
import { LuMail, LuSend, LuCircle, LuCheck } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  username: string;
  email: string;
  text: string;
}

interface Alert {
  type: "success" | "error" | "";
  message: string;
  visible: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    text: "",
  });

  const [alert, setAlert] = useState<Alert>({
    type: "",
    message: "",
    visible: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setAlert({
          type: "success",
          message: result.message || "Message envoyé !",
          visible: true,
        });
        setFormData({ username: "", email: "", text: "" });
      } else {
        throw new Error(result.message || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Échec de l'envoi du message.";

      setAlert({
        type: "error",
        message: errorMessage,
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setAlert({ type: "", message: "", visible: false });
    }, 5000);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg shadow-lg border border-gray-200 bg-white"
      >
        {/* Header */}
        <header className="bg-red-600 p-6 rounded-t-lg shadow-md">
          <h2 className="text-center flex justify-center items-center gap-2 text-2xl font-extrabold text-white">
            Contactez-nous ! <LuMail size={28} className="text-white" />
          </h2>
        </header>

        {/* Form content */}
        <div className="p-6">
          {/* Alert display */}
          <AnimatePresence>
            {alert.visible && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mb-6 rounded px-4 py-3 text-center font-semibold flex items-center justify-center gap-2 ${
                  alert.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                role="alert"
              >
                {alert.type === "success" ? (
                  <LuCheck size={20} />
                ) : (
                  <LuCircle size={20} />
                )}
                {alert.message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact form */}
          <form noValidate onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label
                htmlFor="username"
                className="block mb-2 font-semibold text-gray-700"
              >
                Noms & Prénoms
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            {/* Email field */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Adresse Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            {/* Message field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label
                htmlFor="text"
                className="block mb-2 font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="text"
                name="text"
                rows={4}
                value={formData.text}
                onChange={handleChange}
                className="w-full rounded border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full rounded px-6 py-3 font-bold text-white transition flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-red-600 cursor-not-allowed opacity-70"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isSubmitting ? "Envoi..." : "Envoyer le message"} <LuSend />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
