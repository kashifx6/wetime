import React, { useState, useEffect } from "react";
import "@/styles/globals.css"; // Import your global CSS file
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Render your Navbar component */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Component  darkMode={darkMode} {...pageProps} />
      <Footer />
    </>
  );
}
