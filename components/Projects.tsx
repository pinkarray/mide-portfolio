import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="sectionTitle">Featured Work</h2>
      <p className="sectionSubtitle">Products I designed, built and shipped</p>

      <div className={styles.list}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
