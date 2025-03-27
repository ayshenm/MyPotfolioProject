"use client"; // Client Component olmalıdır

import { useState, useEffect } from "react";
import { BounceLoader, HashLoader, MoonLoader } from "react-spinners";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const timer = setTimeout(() => setLoading(false), 2000); // 2 saniyə sonra gizlənsin
  //     return () => clearTimeout(timer);
  //   }, []);

  //   useEffect(() => {
  //     // Yükləmə müddətini simulyasiya edir (2 saniyə)
  //     setTimeout(() => {
  //       setLoading(false);
  //       window.scrollTo(0, 0); // Yükləmə bitəndə yuxarı qaytarır
  //     }, 2000);
  //   }, []);

  useEffect(() => {
    // İlk açılışda səhifəni yuxarı qaytarır
    // document.documentElement.scrollTop = 0;
    // document.body.scrollTop = 0;

    // Yükləmə müddəti (1.5 saniyə)
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (!loading) return null; // Yüklənmə bitəndə heç nə göstərmə

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#030014] z-[9999]">
      <HashLoader color="#4a90e2" size={60} />
    </div>
  );
}
