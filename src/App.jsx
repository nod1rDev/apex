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
import ErrorBoundary from "./Components/ErrorBoundary";

// Lazy load route components with performance tracking
const withLazyLoading = (importFn, name) => {
  return lazy(() =>
    measurePerformance(`Loading ${name}`, () =>
      importFn().then((module) => {
        console.log(`${name} loaded successfully`);
        return module;
      })
    )
  );
};

const Home = withLazyLoading(() => import("./pages/Home"), "Home");
const Services = withLazyLoading(() => import("./pages/Services"), "Services");
const VoiceRecording = withLazyLoading(
  () => import("./pages/services/VoiceRecording"),
  "VoiceRecording"
);
const DataCollection = withLazyLoading(
  () => import("./pages/services/DataCollection"),
  "DataCollection"
);
const AISolutions = withLazyLoading(
  () => import("./pages/services/AISolutions"),
  "AISolutions"
);
const ProjectManagement = withLazyLoading(
  () => import("./pages/services/ProjectManagement"),
  "ProjectManagement"
);
const Contact = withLazyLoading(() => import("./pages/Contact"), "Contact");
const Blog = withLazyLoading(() => import("./pages/Blog"), "Blog");
const BlogPost = withLazyLoading(() => import("./pages/BlogPost"), "BlogPost");
const CaseStudies = withLazyLoading(
  () => import("./pages/CaseStudies"),
  "CaseStudies"
);

// Loading fallback component with enhanced error handling
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingState
      type="bars"
      color="blue"
      size="large"
      text="Loading page..."
      onError={(error) => {
        console.error("Loading error:", error);
        // You can add additional error handling here
      }}
    />
  </div>
);

// 404 Page component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-8">
        The page youre looking for doesnt exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
      >
        Go Home
      </a>
    </div>
  </div>
);

function App() {
  // Preload critical images
  useEffect(() => {
    const criticalImages = [
      "/logo.png",
      "/hero-bg.jpg",
      // Add other critical images here
    ];

    criticalImages.forEach((src) => {
      preloadImage(src).catch((error) => {
        console.warn(`Failed to preload image ${src}:`, error);
      });
    });
  }, []);

  return (
    <ErrorBoundary>
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
                      <Route path="/services" element={<Services />} />
                      <Route
                        path="/services/voice-recording"
                        element={<VoiceRecording />}
                      />
                      <Route
                        path="/services/data-collection"
                        element={<DataCollection />}
                      />
                      <Route
                        path="/services/ai-solutions"
                        element={<AISolutions />}
                      />
                      <Route
                        path="/services/project-management"
                        element={<ProjectManagement />}
                      />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogPost />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/contact" element={<Contact />} />
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
    </ErrorBoundary>
  );
}

export default App;
