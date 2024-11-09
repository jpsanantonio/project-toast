import { createContext, useCallback, useState } from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    (message, variant) =>
      setToasts([...toasts, { id: crypto.randomUUID(), variant, message }]),
    [toasts, setToasts]
  );

  const dismissToast = useCallback(
    (id) => setToasts(toasts.filter((toast) => toast.id !== id)),
    [toasts, setToasts]
  );

  const clearAllToasts = useCallback(() => setToasts([]), [setToasts]);

  useEscapeKey(clearAllToasts);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, dismissToast, clearAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
