/**
 * ToastView (View)
 * ────────────────
 * Displays temporary toast notifications.
 */

/**
 * Shows a toast message for 3 seconds.
 * @param {string} message - The message to display
 * @param {string} [toastId="toast"] - ID of the toast element
 */
export function showToast(message, toastId = "toast") {
  const toast = document.getElementById(toastId);

  if (!toast) {
    console.warn(`ToastView: Element #${toastId} not found`);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
