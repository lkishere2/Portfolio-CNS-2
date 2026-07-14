import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VerticalNav from "./components/VerticalNav";
import CustomCursor from "./components/CustomCursor";

import HomePage from "./pages/home/HomePage";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week5 from "./pages/Week5";
import Week6 from "./pages/Week6";
import Summary from "./pages/Summary";
import SecretPage from "./pages/secret/SecretPage";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      sessionStorage.removeItem("introPlayed");
    }
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isSecretPage = location.pathname === "/secret";

  return (
    <>
      <ScrollHandler />
      <CustomCursor />
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden w-full">
        {!isSecretPage && <Header />}
        {!isSecretPage && <VerticalNav />}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/week1" element={<Week1 />} />
            <Route path="/week2" element={<Week2 />} />
            <Route path="/week3" element={<Week3 />} />
            <Route path="/week4" element={<Week4 />} />
            <Route path="/week5" element={<Week5 />} />
            <Route path="/week6" element={<Week6 />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/secret" element={<SecretPage />} />
          </Routes>
        </div>
        {!isSecretPage && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}