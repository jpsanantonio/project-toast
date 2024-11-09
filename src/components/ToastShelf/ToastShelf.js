import { useContext } from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, setToasts } = useContext(ToastContext);

  const handleClose = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(newToasts);
  };

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
