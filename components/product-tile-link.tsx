'use client';

import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';

export function ProductTileLink({ href, children }: { href: string; children: ReactNode }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    // Touch taps use the same full-page navigation as the homepage feed,
    // avoiding the client router's failing RSC transition on this build.
    event.preventDefault();
    window.location.assign(href);
  }

  return <Link className="catalog-tile" href={href} onClick={handleClick}>{children}</Link>;
}
