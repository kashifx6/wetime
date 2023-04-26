import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router
import "@/styles/globals.css"; // Import your global CSS file
import "@/styles/custom-fonts.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const isHomeComponent = router.pathname === "/"; // Use router.pathname to determine if Component is Home component

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
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          absolute={isHomeComponent} // Use isHomeComponent to determine if absolute prop should be passed
        />
        <Component
          darkMode={darkMode}
          {...(isHomeComponent && { absolute: true })} // Pass absolute prop only if Component is Home component
          {...pageProps}
        />
        <Footer />
      </div>
    </>
  );
}
