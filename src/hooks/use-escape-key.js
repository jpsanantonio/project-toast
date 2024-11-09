import { useEffect } from "react";

export default function useEscapeKey(callback) {
  if (typeof callback !== "function") {
    throw new Error("useEscapeKey must be used with a function");
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      callback();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}
