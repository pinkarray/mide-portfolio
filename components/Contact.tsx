import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <h2 className="sectionTitle">Let&apos;s Work Together</h2>
      <p className={styles.blurb}>
        I am open to frontend and mobile roles, and to contract work. If you want to talk through
        anything above, or see code that is not public, get in touch.
      </p>

      <div className={styles.actions}>
        <a className={styles.primary} href="mailto:oredugbamide@gmail.com">
          oredugbamide@gmail.com
        </a>
        <a
          className={styles.secondary}
          href="https://github.com/pinkarray"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/pinkarray
        </a>
      </div>

      <p className={styles.footer}>Ayomide Oredugba, Lagos, Nigeria</p>
    </section>
  );
}
