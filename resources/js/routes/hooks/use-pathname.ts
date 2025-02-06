import { useMemo } from 'react';
import { usePage } from "@inertiajs/react";
// ----------------------------------------------------------------------

export function usePathname() {
  const pathname = usePage();

  return useMemo(() => pathname, [pathname]);
}
