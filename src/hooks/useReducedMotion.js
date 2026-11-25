import { useSyncExternalStore } from 'react';

const query = '(prefers-reduced-motion: reduce)';
const subscribe = (callback) => {
  const preference = window.matchMedia(query);
  preference.addEventListener('change', callback);
  return () => preference.removeEventListener('change', callback);
};
const snapshot = () => window.matchMedia(query).matches;

export default function useReducedMotion() {
  return useSyncExternalStore(subscribe, snapshot, () => true);
}
