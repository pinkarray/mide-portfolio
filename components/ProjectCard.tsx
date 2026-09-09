'use client';

import { useState } from 'react';
import type { Project } from '@/lib/projects';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const [index, setIndex] = useState(0);
  const videos = project.videos ?? [];
  const current = videos[index];

  return (
    <article className={flip ? `${styles.card} ${styles.flip}` : styles.card}>
      <div className={styles.media}>
        {current ? (
          <>
            {project.frame === 'browser' ? (
              <div className={styles.browser}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span className={styles.browserDot} />
                  <span className={styles.browserDot} />
                  <span className={styles.browserDot} />
                </div>
                <video
                  key={current.src}
                  className={styles.browserVideo}
                  controls
                  muted
                  playsInline
                  preload="none"
                  poster={current.poster}
                >
                  <source src={current.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            ) : (
              <div className={styles.phone}>
                <span className={styles.notch} aria-hidden="true" />
                <video
                  key={current.src}
                  className={styles.video}
                  controls
                  muted
                  playsInline
                  preload="none"
                  poster={current.poster}
                >
                  <source src={current.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <span className={styles.chin} aria-hidden="true" />
              </div>
            )}

            <p className={styles.caption}>{current.title}</p>

            {videos.length > 1 && (
              <div className={styles.dots} role="tablist" aria-label={`${project.name} clips`}>
                {videos.map((v, i) => (
                  <button
                    key={v.src}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={v.title}
                    className={i === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className={styles.noMedia}>
            <p className={styles.noMediaTitle}>{project.link ? 'See it live' : 'No public preview'}</p>
            <p className={styles.noMediaBody}>
              {project.previewNote ??
                'This product has not launched. Happy to walk through the architecture on request.'}
            </p>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.status} style={{ color: project.accent }}>
          {project.status}
        </p>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.role}>{project.role}</p>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.highlights}>
          {project.highlights.map((h) => (
            <li key={h} className={styles.highlight}>
              <span className={styles.bullet} style={{ backgroundColor: project.accent }} aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.chip}>
              {t}
            </span>
          ))}
        </div>

        <p className={styles.impact}>{project.impact}</p>

        <div className={styles.links}>
          {project.link && (
            <a className={styles.linkPrimary} href={project.link} target="_blank" rel="noopener noreferrer">
              Visit site
            </a>
          )}
          {project.repo && (
            <a className={styles.linkSecondary} href={project.repo} target="_blank" rel="noopener noreferrer">
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
