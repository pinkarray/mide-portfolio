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
        <span className={`${styles.logo} gradientText`}>dev.mide</span>

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
