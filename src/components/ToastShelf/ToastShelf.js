import { useCallback, useContext } from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import useEscapeKey from "../../hooks/use-escape-key";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, setToasts } = useContext(ToastContext);

  const handleClose = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(newToasts);
  };

  const clearAllToasts = useCallback(() => setToasts([]), [setToasts]);

  useEscapeKey(clearAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast toast={toast} onClose={handleClose} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
