import React, { useState, useEffect } from "react";
import "@/styles/globals.css"; // Import your global CSS file
import "@/styles/custom-fonts.css";
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
      <div className="font-euclid-circular-b">
        {Component.name === "Home" ? (
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            absolute={true} // Add absolute prop only for Home component
          />
        ) : (
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
        <Component
          darkMode={darkMode}
          absolute={Component.name === "Home"} // Pass absolute prop based on component name
          {...pageProps}
        />
        <Footer />
      </div>
    </>
  );
}
