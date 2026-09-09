import { skills } from '@/lib/projects';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="sectionTitle">Technical Expertise</h2>
      <p className="sectionSubtitle">What I reach for, and what I have shipped with</p>

      <div className={styles.grid}>
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className={styles.group}>
            <h3 className={styles.groupTitle}>{group}</h3>
            <ul className={styles.items}>
              {items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
