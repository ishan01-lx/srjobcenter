import { useEffect, useState } from "react";

export type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: any;
  duration?: number;
  [key: string]: any;
};

let toasts: Toast[] = [];
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((cb) => cb());
}

export function toast(payload: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2, 9);
  const t: Toast = { id, duration: 4000, ...payload };
  toasts = [...toasts, t];
  notify();
  if (t.duration && t.duration > 0) {
    setTimeout(() => {
      removeToast(id);
    }, t.duration);
  }
  return id;
}

export function removeToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

export function useToast() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const cb = () => setTick((s) => s + 1);
    listeners.add(cb);
    return () => listeners.delete(cb);
  }, []);
  return { toasts, toast, removeToast };
}
