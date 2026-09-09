export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
  impact: string;
  status: string;
  accent: string;
  link?: string;
  repo?: string;
  previewNote?: string;
  videos?: { title: string; src: string; poster: string }[];
};

export const projects: Project[] = [
  {
    id: 'clearrent',
    name: 'ClearRent',
    tagline: 'Rent Without Regret',
    description:
      "A direct landlord-to-tenant rental marketplace built to cut the rental fraud out of Nigerian renting.",
    role: 'Founder & Frontend Engineer',
    tech: ['Next.js', 'React', 'TypeScript', 'Flutter', 'Firebase', 'Paystack'],
    highlights: [
      'Tenant and landlord web app in Next.js and TypeScript: 38 routes, server rendered with the Firebase Admin SDK',
      'A 110-token CSS custom property layer driving light and dark theming across 33 shared components',
      'Internal operations dashboard covering 24 routes for verification, payouts, refunds and Recharts analytics',
      'Paystack checkout end to end, including the redirect callback and payment state reconciliation',
      'Web push through Firebase Cloud Messaging and a service worker on both frontends',
      'Flutter mobile app on Google Play, sharing the same design language as the web',
    ],
    impact: 'Three surfaces, 60+ routes, one design system',
    status: 'In active development',
    accent: '#06b6d4',
    repo: 'https://github.com/pinkarray/ClearRent_webapp',
    videos: [
      { title: 'Tenant Onboarding & Browsing', src: '/videos/clearrent1.mp4', poster: '/posters/clearrent1.jpg' },
      { title: 'Landlord Verification', src: '/videos/clearrent2.mp4', poster: '/posters/clearrent2.jpg' },
      { title: 'Property Listing', src: '/videos/clearrent3.mp4', poster: '/posters/clearrent3.jpg' },
    ],
  },
  {
    id: 'security-platform',
    name: 'Security & Emergency Response Platform',
    tagline: 'Client confidential, pre-launch',
    description:
      'A security and emergency response product with a risk-assessment engine that turns questionnaire answers into personalized service recommendations.',
    role: 'Contract Lead Developer',
    tech: ['Flutter', 'Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Redis'],
    highlights: [
      'Won and delivered the build contract, managing subcontractors across mobile, backend and dashboard',
      'Built the Flutter mobile client, 218 files against a REST API',
      'Built the risk-assessment questionnaire flow behind the recommendation engine',
      'Took over the Express/TypeScript/PostgreSQL backend when the original contractor left',
      'Deployed and maintained backend and database infrastructure on Contabo for staged client testing',
    ],
    impact: '14 months, three codebases, a team of subcontractors',
    status: 'Delivered. Client has not launched publicly',
    accent: '#8b5cf6',
  },
  {
    id: 'mechlink',
    name: 'MechLink',
    tagline: 'Roadside help, matched in real time',
    description:
      'A two-sided marketplace connecting vehicle owners with nearby mechanics for roadside assistance.',
    role: 'Co-Founder & Mobile Engineer',
    tech: ['Flutter', 'Firebase', 'OpenStreetMap'],
    highlights: [
      'Real-time job matching with live location tracking',
      'Mechanic proposal workflow with ratings and reputation',
      'Built on OpenStreetMap rather than a commercial mapping API to keep running costs down',
    ],
    impact: 'Rider and mechanic apps, tested on physical devices',
    status: 'On hold',
    accent: '#10b981',
    videos: [{ title: 'Job Matching Flow', src: '/videos/mechlink.mp4', poster: '/posters/mechlink.jpg' }],
  },
  {
    id: 'astymin',
    name: 'Astymin',
    tagline: 'Amino acid and vitamin brand site',
    description:
      'A product site for Astymin, an amino acid and vitamin brand in the Fidson Healthcare portfolio.',
    role: 'Web Developer',
    tech: ['WordPress', 'Custom Theme', 'JavaScript', 'CSS'],
    highlights: [
      'Structured the site around four use cases: stress, fitness, recovery and growth',
      'Custom theme work held to Fidson brand and healthcare compliance standards',
      'Blog and content management handed over to the marketing team',
      'Responsive across devices, tuned for load time',
    ],
    impact: 'Live brand presence for a listed pharmaceutical company',
    status: 'Live',
    accent: '#f97316',
    link: 'https://astymin.com.ng',
    previewNote: 'Live site. Open it in a new tab to look around.',
  },
  {
    id: 'aventra',
    name: 'Aventra Provision',
    tagline: 'Medical product showcase',
    description:
      'A product site for Aventra Provision (ophthalmic products), part of the Fidson Healthcare portfolio.',
    role: 'Web Developer',
    tech: ['WordPress', 'Custom Theme', 'JavaScript'],
    highlights: [
      'Brand-compliant design meeting healthcare standards',
      'Content management for product information',
      'Responsive across devices, tuned for load time',
    ],
    impact: 'Live product line presence for a listed pharmaceutical company',
    status: 'Live',
    accent: '#ef4444',
    link: 'https://aventraprovision.com',
    videos: [{ title: 'Product Site', src: '/videos/aventra.mp4', poster: '/posters/aventra.jpg' }],
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ['React', 'Next.js (App Router)', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Radix UI', 'HTML/CSS', 'Design systems'],
  Mobile: ['Flutter', 'Dart', 'React Native', 'Expo'],
  Backend: ['Node.js', 'Express', 'Firebase/Firestore', 'Cloud Functions', 'PostgreSQL', 'MongoDB', 'Redis', 'Socket.io'],
  Tooling: ['Git', 'Vercel', 'Docker', 'Railway', 'Cloudinary', 'Paystack', 'Figma'],
};
