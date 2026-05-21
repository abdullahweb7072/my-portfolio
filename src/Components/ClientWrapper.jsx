"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Match this with loader total animation time
    const t = setTimeout(() => setLoading(false), 4300);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Portfolio stays mounted */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
      </div>

      {/* Loader overlay */}
      {loading && <Loader />}
    </>
  );
}