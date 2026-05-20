"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Your portfolio ALWAYS stays mounted */}
      <div style={{ opacity: loading ? 0 : 1 }}>
        {children}
      </div>

      {/* Loader as overlay */}
      {loading && <Loader />}
    </>
  );
}