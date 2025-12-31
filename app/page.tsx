'use client';

import React, { useState } from 'react';

export default function Home() {
  const [clearrentVideoIndex, setClearrentVideoIndex] = useState(0);

  const clearrentVideos = [
    { title: 'Tenant Onboarding & Browsing', src: '/videos/clearrent1.mp4' },
    { title: 'Landlord Verification', src: '/videos/clearrent2.mp4' },
    { title: 'Property Listing', src: '/videos/clearrent3.mp4' }
  ];

  const projects = [
    {
      id: 'clearrent',
      name: 'ClearRent',
      tagline: 'Rent Without Regret',
      description: "A direct landlord-to-tenant rental marketplace eliminating fraud in Nigeria's ₦2.25 trillion rental market.",
      role: 'Founder & Full-Stack Developer',
      tech: ['Flutter', 'Firebase', 'Cloudinary', 'OpenStreetMap', 'Node.js'],
      highlights: [
        'Built entire app solo — frontend, backend, business logic',
        'Landlord verification system with document upload & admin approval',
        'Real-time messaging and activity tracking dashboard',
        'Integration with 23+ Nigerian banks for payouts',
        'Transparent fee calculator addressing Nigeria\'s rental fraud crisis',
        'Ready for investor demos and app store launches'
      ],
      impact: '10+ test users, 5 properties listed, fully functional marketplace',
      status: 'MVP Complete — In Active Development',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    {
      id: 'mechlink',
      name: 'MechLink',
      tagline: 'Connect Vehicle Owners with Mechanics',
      description: 'A two-sided marketplace mobile app connecting vehicle owners with nearby mechanics for roadside assistance.',
      role: 'Lead Developer & Architect',
      tech: ['Flutter', 'Firebase', 'OpenStreetMap', 'Real-time Sync'],
      highlights: [
        'Architected two-sided marketplace with real-time job matching',
        'Live location tracking for mechanics and vehicles',
        'Mechanic proposals and rating/reputation system',
        'Cost-optimized by implementing OpenStreetMap instead of expensive mapping APIs',
        'Professional UI/UX design targeting investors',
        'Fully functional across user and mechanic workflows'
      ],
      impact: 'Complete marketplace logic, tested on multiple physical devices',
      status: 'In Development — Market Launch Planned',
      gradient: 'linear-gradient(135deg, #10b981, #14b8a6)'
    },
    {
      id: 'wellway',
      name: 'WellWay.Africa',
      tagline: 'E-Commerce Health & Wellness Platform',
      description: 'A full-stack e-commerce platform for health and wellness products with custom integrations.',
      role: 'Full-Stack Developer (Solo Build)',
      tech: ['WordPress', 'WooCommerce', 'Custom PHP', 'JavaScript', 'CSS'],
      highlights: [
        'Designed and built from scratch — responsive design across all devices',
        'Product catalog with advanced filtering and search',
        'Shopping cart and checkout optimization',
        'Integration with payment gateways',
        'Admin dashboard for product and order management',
        'SEO optimization and performance tuning'
      ],
      impact: '100+ products, 1000+ monthly visitors, high conversion rate',
      status: 'Live & Maintained',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
      link: 'https://wellway.africa'
    },
    {
      id: 'aventra',
      name: 'Aventra Provision',
      tagline: 'Medical/Pharmaceutical Product Showcase',
      description: 'A professional website for Aventra Provision (ophthalmic products), part of Fidson Healthcare Plc portfolio.',
      role: 'Web Developer & Designer',
      tech: ['WordPress', 'Custom Theme Development', 'JavaScript', 'Responsive Design'],
      highlights: [
        'Professional medical product showcase',
        'Content management for product information',
        'Brand-aligned design matching Fidson Healthcare standards',
        'Mobile-responsive across all devices',
        'Fast loading times and SEO optimization',
        'Integration with parent company branding'
      ],
      impact: 'Professional online presence for healthcare product line',
      status: 'Live & Maintained',
      gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
      link: 'https://aventraprovision.com'
    }
  ];

  const skills = {
    'Mobile Development': ['Flutter', 'Dart', 'React Native', 'Expo', 'Firebase'],
    'Backend & Databases': ['Node.js', 'Express.js', 'Firebase/Firestore', 'PostgreSQL', 'MongoDB'],
    'Web Development': ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'WordPress'],
    'DevOps & Deployment': ['Docker', 'Railway', 'Contabo', 'Git', 'Expo', 'App Store/Play Store'],
    'System Design': ['Two-sided Marketplaces', 'Real-time Communication', 'Payment Integration', 'Authentication & Security'],
    'Tools & Platforms': ['Figma', 'Cloudinary', 'Paystack', 'Firebase Console', 'GitHub']
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            dev.mide
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#projects" style={{ color: '#d1d5db', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}>Projects</a>
            <a href="#skills" style={{ color: '#d1d5db', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}>Skills</a>
            <a href="#contact" style={{ color: '#d1d5db', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, #1e3a5f 0%, #0f172a 50%)'
      }}>
        {/* Animated blobs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '400px',
          height: '400px',
          background: 'rgba(6, 182, 212, 0.15)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '350px',
          height: '350px',
          background: 'rgba(59, 130, 246, 0.15)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite 2s'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '40%',
          width: '300px',
          height: '300px',
          background: 'rgba(168, 85, 247, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'blob 7s infinite 4s'
        }} />

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            display: 'inline-block',
            marginBottom: '1.5rem',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            color: '#22d3ee',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            Full-Stack Developer & Founder
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            I Build <span style={{
              background: 'linear-gradient(to right, #22d3ee, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Digital Solutions</span> That Solve Real Problems
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6
          }}>
            Founder of ClearRent (rental marketplace eliminating fraud), architect of marketplace platforms, and builder of full-stack applications serving 15,000+ users. I solve problems through code.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              padding: '0.875rem 2rem',
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              color: 'white',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              View Projects
            </a>
            <a href="#contact" style={{
              padding: '0.875rem 2rem',
              border: '2px solid #22d3ee',
              color: '#22d3ee',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              transition: 'background-color 0.2s'
            }}>
              Get in Touch
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22d3ee', marginBottom: '0.25rem' }}>3+</p>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Years Building</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22d3ee', marginBottom: '0.25rem' }}>15K+</p>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Users Served</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#22d3ee', marginBottom: '0.25rem' }}>10+</p>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Production Apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.75rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '0.75rem'
        }}>Featured Work</h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#64748b',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '0 auto 4rem'
        }}>
          From marketplace platforms to healthcare e-commerce, I build products that deliver real value.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {projects.map((project, idx) => (
            <div key={project.id} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              {/* Project Info */}
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{project.name}</h3>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  background: project.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem'
                }}>
                  {project.tagline}
                </p>

                <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ color: '#22d3ee', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Role: {project.role}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tech.map(tech => (
                      <span key={tech} style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'rgba(6, 182, 212, 0.15)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        borderRadius: '0.25rem',
                        color: '#67e8f9',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ color: '#94a3b8', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Key Highlights:</p>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                    {project.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                        <span style={{ color: '#22d3ee' }}>→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: '#64748b', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: '600', color: '#e2e8f0' }}>Impact:</span> {project.impact}
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: '600', color: '#e2e8f0' }}>Status:</span>{' '}
                    <span style={{ color: '#22d3ee' }}>{project.status}</span>
                  </p>
                </div>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block',
                    padding: '0.625rem 1.25rem',
                    background: project.gradient,
                    color: 'white',
                    borderRadius: '0.375rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem'
                  }}>
                    Visit Live Site →
                  </a>
                )}
              </div>

              {/* Project Visual */}
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                {/* ClearRent - Portrait Carousel */}
                {project.id === 'clearrent' && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      position: 'relative',
                      width: '280px',
                      height: '560px',
                      borderRadius: '2rem',
                      overflow: 'hidden',
                      backgroundColor: '#000',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      border: '8px solid #1e293b'
                    }}>
                      {/* Phone notch */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '120px',
                        height: '25px',
                        backgroundColor: '#1e293b',
                        borderBottomLeftRadius: '1rem',
                        borderBottomRightRadius: '1rem',
                        zIndex: 10
                      }} />
                      
                      <video 
                        key={clearrentVideoIndex}
                        controls 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          backgroundColor: '#000'
                        }}
                        muted
                        playsInline
                      >
                        <source src={clearrentVideos[clearrentVideoIndex].src} type="video/mp4" />
                        Your browser doesn't support video
                      </video>
                      
                      {/* Video Counter */}
                      <div style={{
                        position: 'absolute',
                        top: '2.5rem',
                        right: '0.75rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        color: '#22d3ee',
                        fontWeight: '600'
                      }}>
                        {clearrentVideoIndex + 1} / {clearrentVideos.length}
                      </div>
                    </div>
                    
                    {/* Navigation & Title */}
                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <button
                          onClick={() => setClearrentVideoIndex((prev) => (prev - 1 + clearrentVideos.length) % clearrentVideos.length)}
                          style={{
                            backgroundColor: 'rgba(6, 182, 212, 0.2)',
                            border: '1px solid rgba(6, 182, 212, 0.5)',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '0.5rem',
                            color: '#22d3ee',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '0.875rem'
                          }}
                        >
                          ← Prev
                        </button>
                        <button
                          onClick={() => setClearrentVideoIndex((prev) => (prev + 1) % clearrentVideos.length)}
                          style={{
                            backgroundColor: 'rgba(6, 182, 212, 0.2)',
                            border: '1px solid rgba(6, 182, 212, 0.5)',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '0.5rem',
                            color: '#22d3ee',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '0.875rem'
                          }}
                        >
                          Next →
                        </button>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500' }}>
                        {clearrentVideos[clearrentVideoIndex].title}
                      </p>
                    </div>
                  </div>
                )}

                {/* MechLink - Portrait Single Video */}
                {project.id === 'mechlink' && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      position: 'relative',
                      width: '280px',
                      height: '560px',
                      borderRadius: '2rem',
                      overflow: 'hidden',
                      backgroundColor: '#000',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      border: '8px solid #1e293b'
                    }}>
                      {/* Phone notch */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '120px',
                        height: '25px',
                        backgroundColor: '#1e293b',
                        borderBottomLeftRadius: '1rem',
                        borderBottomRightRadius: '1rem',
                        zIndex: 10
                      }} />
                      
                      <video 
                        controls 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          backgroundColor: '#000'
                        }}
                        muted
                        playsInline
                      >
                        <source src="/videos/mechlink.mp4" type="video/mp4" />
                        Your browser doesn't support video
                      </video>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500', marginTop: '1rem' }}>
                      MechLink App Demo
                    </p>
                  </div>
                )}

                {/* WellWay - Landscape Browser */}
                {project.id === 'wellway' && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '560px',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      backgroundColor: '#000',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      border: '6px solid #1e293b'
                    }}>
                      {/* Browser bar */}
                      <div style={{
                        backgroundColor: '#1e293b',
                        padding: '0.5rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                        </div>
                        <div style={{
                          flex: 1,
                          backgroundColor: '#0f172a',
                          borderRadius: '0.25rem',
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.7rem',
                          color: '#64748b',
                          marginLeft: '0.5rem'
                        }}>
                          wellway.africa
                        </div>
                      </div>
                      
                      <video 
                        controls 
                        style={{
                          width: '100%',
                          height: 'auto',
                          aspectRatio: '16/9',
                          objectFit: 'cover',
                          backgroundColor: '#000',
                          display: 'block'
                        }}
                        muted
                        playsInline
                      >
                        <source src="/videos/wellway.mp4" type="video/mp4" />
                        Your browser doesn't support video
                      </video>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500', marginTop: '1rem' }}>
                      WellWay.Africa Website Demo
                    </p>
                  </div>
                )}

                {/* Aventra - Landscape Browser */}
                {project.id === 'aventra' && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '560px',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      backgroundColor: '#000',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      border: '6px solid #1e293b'
                    }}>
                      {/* Browser bar */}
                      <div style={{
                        backgroundColor: '#1e293b',
                        padding: '0.5rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                        </div>
                        <div style={{
                          flex: 1,
                          backgroundColor: '#0f172a',
                          borderRadius: '0.25rem',
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.7rem',
                          color: '#64748b',
                          marginLeft: '0.5rem'
                        }}>
                          aventraprovision.com
                        </div>
                      </div>
                      
                      <video 
                        controls 
                        style={{
                          width: '100%',
                          height: 'auto',
                          aspectRatio: '16/9',
                          objectFit: 'cover',
                          backgroundColor: '#000',
                          display: 'block'
                        }}
                        muted
                        playsInline
                      >
                        <source src="/videos/aventra.mp4" type="video/mp4" />
                        Your browser doesn't support video
                      </video>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500', marginTop: '1rem' }}>
                      Aventra Provision Website Demo
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.5) 50%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem' }}>
            Technical Expertise
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            textAlign: 'center',
            marginBottom: '3.5rem'
          }}>
            Full-stack capabilities across mobile, web, and backend systems
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.15)',
                transition: 'border-color 0.2s, transform 0.2s'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#22d3ee' }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {techs.map((tech) => (
                    <span key={tech} style={{
                      padding: '0.375rem 0.75rem',
                      backgroundColor: 'rgba(6, 182, 212, 0.15)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      borderRadius: '0.25rem',
                      color: '#67e8f9',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Let's Work Together</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '2.5rem',
            lineHeight: 1.6
          }}>
            Whether you're interested in ClearRent, building the next marketplace, or need a full-stack developer, let's talk.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:oredugbamide@gmail.com" style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              color: 'white',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
            }}>
              📧 Email Me
            </a>
            <a href="https://github.com/pinkarray" target="_blank" rel="noopener noreferrer" style={{
              padding: '1rem 2rem',
              border: '2px solid #22d3ee',
              color: '#22d3ee',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              backgroundColor: 'transparent'
            }}>
              GitHub Profile
            </a>
          </div>

          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #1e293b'
          }}>
            <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>Mide Oredugba • Full-Stack Developer & Founder</p>
            <p style={{ color: '#475569', fontSize: '0.9rem' }}>📧 oredugbamide@gmail.com • 📱 09060237734</p>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        a:hover {
          opacity: 0.9;
        }
        
        button:hover {
          background-color: rgba(6, 182, 212, 0.3) !important;
        }
        
        /* Responsive */
        @media (max-width: 900px) {
          section#projects > div > div > div {
            grid-template-columns: 1fr !important;
          }
          
          section#projects > div > div > div > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}