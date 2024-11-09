import { createContext, useCallback, useState, useMemo } from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const value = useMemo(() => ({ toasts, setToasts }), [toasts]);

  const clearAllToasts = useCallback(() => setToasts([]), [setToasts]);

  useEscapeKey(clearAllToasts);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
