import { Project } from "../types";

// TODO: Move this to API
export const PROJECTS: Project[] = [
  {
    id: 'about-me',
    title: 'About Vastra Institute',
    date: '2026',
    subtext: 'Sagar Bansu, founder of Vastra Institute, blending design mastery with professional training.',
    description: `Sagar Bansu is a professional textile designer with over 5 years of active industry experience, specializing in repeat pattern development, screen printing setups, and commercial artwork refinement. Recently, Sagar founded Vastra Institute—a modern training and development hub designed to bridge the gap between creative concepts and real-world production constraints.\n\nAt Vastra Institute, we offer students, designers, and boutiques the exact technical and artistic training required to succeed in the competitive textile market. Under Sagar's guidance, Vastra Institute focuses on design development, helping students transform references and concepts into unique, print-ready artworks suitable for manufacturing.`,
  },
  {
    id: 'experience',
    title: "Experience",
    date: '5+ Years',
    subtext: '5+ years of continuous, hands-on design and technical experience in the textile industry.',
    description: `With more than 5 years of continuous industrial experience as a textile designer, Sagar Bansu has developed a deep understanding of the creative and technical workflows of textile manufacturing. His career is built on delivering high-quality, print-ready designs directly to screen printing houses and fabric mills.\n\nHis personal industrial experience includes:\n● Developing commercial designs from references (concept to final artwork)\n● Structuring repeat layouts for screen printing (half drop, mirror, block repeats)\n● Preparing color separations, chokes, and register systems for screen setups\n● Designing for domestic markets and overseas textile exporters\n● Analyzing fabric types and print behaviors under active mill conditions`,
  },
  {
    id: 'expertise',
    title: "Expertise",
    date: 'Specializations',
    subtext: 'Turning design concepts into refined, production-ready textile patterns.',
    description: `Sagar Bansu's expertise lies at the intersection of creative illustration and rigorous technical execution, ensuring every pattern is ready for the printing table.\n\nKey specializations include:\n● Design Development: Transforming visual concepts and customer swatches into original, marketable artworks\n● Repeat Pattern Creation: Crafting seamless repeats (all-over, borders, placement, and engineered prints)\n● Technical Screen Preparation: Managing color layers, separations, and ink requirements for commercial screen printing\n● Colorway Matching: Developing balanced color variations that match current fashion trends\n● Software Proficiency: Deep capability in industry-standard software tools including Photoshop, Illustrator, and CorelDRAW`,
  },
  {
    id: 'saree-design',
    title: 'Saree Design',
    date: 'Gallery',
    subtext: 'Explore my specialized Saree pattern designs built for production.',
    images: Array.from({ length: 23 }, (_, i) => `/projects/saree-design/${i + 1}.jpg`),
  },
  {
    id: 'front-back-design',
    title: 'Front Back Design',
    date: 'Gallery',
    subtext: 'A structured curation of front and back apparel designs.',
    images: Array.from({ length: 30 }, (_, i) => `/projects/front-back-design/${i + 1}.jpg`),
  },
  {
    id: 'repeat-pattern',
    title: 'Repeat Pattern',
    date: 'Gallery',
    subtext: 'Seamless repeat patterns including half drop, block, and placement.',
    images: Array.from({ length: 15 }, (_, i) => `/projects/repeat-pattern/${i + 1}.jpg`),
  },
  {
    id: 'allover-design',
    title: 'Allover Design',
    date: 'Gallery',
    subtext: 'Expansive allover designs ready for scalable fabric printing.',
    images: Array.from({ length: 21 }, (_, i) => `/projects/allover-design/${i + 1}.jpg`),
  },
  {
    id: 'pattern',
    title: 'Pattern',
    date: 'Gallery',
    subtext: 'Specific individual patterns exploring color balancing and texture.',
    images: Array.from({ length: 17 }, (_, i) => `/projects/pattern/${i + 1}.jpg`),
  },
  {
    id: 'link',
    title: 'Link',
    date: 'Resources',
    subtext: 'Explore additional project folders and resources.',
    folders: [
      { title: 'Drive 1', url: 'https://drive.google.com/drive/folders/1nGYgewPM8lit5GgiuCOO7gRYl-zNmt7f' },
      { title: 'Drive 2', url: 'https://drive.google.com/drive/folders/1ZOwnSuvKQSm2sEy8Le4N_op0kcb82KPW' }
    ],
  },
];
