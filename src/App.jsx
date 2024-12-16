import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { LoadingProvider } from "./context/LoadingContext";
import { FormProvider } from "./context/FormContext";
import ScrollProgress from "./components/ScrollProgress";
import LoadingState from "./components/LoadingState";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { measurePerformance, preloadImage } from "./utils/performance";

import Home from "./pages/Home";

// Lazy loading uchun funksiyani qayta ishlatamiz

// Sahifa yuklanayotganda loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingState
      type="bars"
      color="blue"
      size="large"
      text="Loading page..."
    />
  </div>
);

// 404 sahifasi
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
      >
        Go Home
      </a>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    const criticalImages = ["/logo.png", "/hero-bg.jpg"];
    criticalImages.forEach((src) => {
      preloadImage(src).catch((error) =>
        console.warn(`Failed to preload image ${src}:`, error)
      );
    });
  }, []);

  return (
    <LoadingProvider>
      <FormProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <ScrollProgress color="blue" />
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />

                    {/* Boshqa yo'nalishlar */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </Router>
      </FormProvider>
    </LoadingProvider>
  );
}

export default App;
