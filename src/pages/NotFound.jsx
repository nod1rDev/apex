import React from "react";

function NotFound() {
  return (
    <div className="bg-[#1f1f1f] text-[#f9f4e8] min-h-screen flex flex-col items-center justify-center">
      {/* Matn */}
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">
        Oops! The page you are looking for doesn't exist.
      </p>
      {/* Home tugmasi */}
      <a
        href="/"
        className="px-6 py-3 bg-[#f9f4e8] text-[#1f1f1f] font-semibold rounded hover:bg-[#d9cdbc] transition-all"
      >
        Go to Home
      </a>
    </div>
  );
}

export default NotFound;
