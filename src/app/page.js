"use client";
import { useHeaderContext } from "@/context/HeaderContext";
import Index from "./home/page";

export default function Home() {
  const { darkMode } = useHeaderContext();
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Index />
    </div>
  );
}
