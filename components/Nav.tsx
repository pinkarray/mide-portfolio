'use client';

import { useState } from 'react';
import styles from './Nav.module.css';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Ayomide Oredugba, home">
          <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true">
            <defs>
              <linearGradient id="navAo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="url(#navAo)" />
            <g fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 43 L18 21 L26 43" />
              <path d="M13.5 35 L22.5 35" />
              <circle cx="44" cy="32" r="9.5" />
            </g>
          </svg>
          <span className={`${styles.logo} gradientText`}>dev.mide</span>
        </a>

        <div className={styles.desktopLinks}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={open ? `${styles.bar} ${styles.barTop}` : styles.bar} />
          <span className={open ? `${styles.bar} ${styles.barHidden}` : styles.bar} />
          <span className={open ? `${styles.bar} ${styles.barBottom}` : styles.bar} />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu} id="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
