import * as React from 'react';

const MOBILE_BREAKPOINT = 768;
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

type LegacyMediaQueryList = {
  addListener: (listener: (event: MediaQueryListEvent) => void) => void;
  removeListener: (listener: (event: MediaQueryListEvent) => void) => void;
};

function subscribe(onStoreChange: () => void) {
  const mediaQueryList = window.matchMedia(MOBILE_QUERY);

  if (mediaQueryList.addEventListener) {
    mediaQueryList.addEventListener('change', onStoreChange);
    return () => mediaQueryList.removeEventListener('change', onStoreChange);
  }

  const legacyMediaQueryList =
    mediaQueryList as unknown as LegacyMediaQueryList;
  legacyMediaQueryList.addListener(onStoreChange);
  return () => legacyMediaQueryList.removeListener(onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
