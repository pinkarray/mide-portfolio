import styles from './Hero.module.css';

const stats = [
  { value: '3+', label: 'Years Building' },
  { value: '15K+', label: 'Users Served' },
  { value: '60+', label: 'Routes Shipped' },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.badge}>Frontend Engineer · React · Next.js · TypeScript</p>

        <h1 className={styles.title}>
          I Build <span className="gradientText">Digital Solutions</span> That Solve Real Problems
        </h1>

        <p className={styles.subtitle}>
          I build production web and mobile frontends. Right now that means ClearRent: two Next.js
          frontends and a Flutter app sharing one design system. Before that, a React Native fintech
          app serving 15,000+ users.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondary}>
            Get in Touch
          </a>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label}>
              <p className={styles.statValue}>{s.value}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
