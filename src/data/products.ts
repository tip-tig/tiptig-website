export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  image: string;
  features: { title: string; text: string }[];
  specs?: { label: string; value: string }[];
  comingSoon?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: 'wire-feed-systems',
    name: 'Wire Feed Systems',
    description: 'The core of every TIP TIG setup. Our wire feed systems combine hot wire technology with a dynamic oscillation mechanism to deliver precise, high-quality welds.',
  },
  {
    slug: 'automated-welding',
    name: 'Automated & Collaborative Welding',
    description: 'From collaborative robots to mechanized carriages — automation solutions that integrate seamlessly with TIP TIG wire feed technology.',
  },
  {
    slug: 'specialty-systems',
    name: 'Specialty Systems',
    description: 'Purpose-built systems for weld overlay cladding, orbital welding, and advanced keyhole TIG applications.',
  },
  {
    slug: 'pipeline-equipment',
    name: 'Pipeline Equipment',
    description: 'Field-proven tools for pipeline construction — from orbital cutting to precision internal alignment.',
  },
];

export const products: Product[] = [
  // ── Wire Feed Systems ──
  {
    slug: 'allinone',
    name: 'TIP TIG AllinOne',
    category: 'Wire Feed Systems',
    categorySlug: 'wire-feed-systems',
    tagline: 'The flagship TIP TIG wire feed system for workshop and field applications.',
    description: 'The TIP TIG AllinOne is the standard configuration for most welding applications. It integrates hot wire technology and a four-drive-roll wire feed mechanism into a single, robust unit. Compatible with all major TIG power sources, it transforms any conventional TIG setup into a high-performance TIP TIG system.',
    image: '/images/products/allinone.jpg',
    features: [
      { title: 'Hot Wire Technology', text: 'Preheats the filler wire for improved wetting and reduced heat input into the base material.' },
      { title: 'Four Drive Rolls', text: 'Ensures consistent, precise wire feeding even with larger diameter wires.' },
      { title: 'Dynamic Wire Oscillation', text: 'Agitates the weld pool for superior fusion and elimination of porosity.' },
      { title: 'Universal Compatibility', text: 'Works with all major TIG/GTAW power sources — no proprietary welder required.' },
    ],
    specs: [
      { label: 'Wire Diameter', value: '0.8 – 1.6 mm' },
      { label: 'Wire Speed', value: '0 – 10 m/min' },
      { label: 'Hot Wire Current', value: '0 – 100 A' },
      { label: 'Frequency', value: '0 – 22 Hz' },
      { label: 'Supply Voltage', value: '42 V AC/DC' },
      { label: 'Dimensions', value: '440 × 220 × 350 mm' },
    ],
  },
  {
    slug: 'portable-allinone',
    name: 'TIP TIG Portable AllinOne',
    category: 'Wire Feed Systems',
    categorySlug: 'wire-feed-systems',
    tagline: 'Full TIP TIG performance in a compact, portable suitcase format.',
    description: 'The Portable AllinOne packs the same hot wire and oscillation technology as the standard AllinOne into a lightweight suitcase design. Built for field service, maintenance work, and any application where mobility matters without compromising weld quality.',
    image: '/images/products/portable-allinone.jpg',
    features: [
      { title: 'Suitcase Design', text: 'Compact, lightweight housing for easy transport to any job site.' },
      { title: 'Full Feature Set', text: 'Same hot wire, oscillation, and wire feed capabilities as the standard AllinOne.' },
      { title: 'Quick Setup', text: 'Designed for rapid deployment in field service and maintenance scenarios.' },
      { title: 'Rugged Construction', text: 'Built to withstand demanding field conditions.' },
    ],
    specs: [
      { label: 'Wire Diameter', value: '0.8 – 1.6 mm' },
      { label: 'Wire Speed', value: '0 – 10 m/min' },
      { label: 'Hot Wire Current', value: '0 – 100 A' },
      { label: 'Frequency', value: '0 – 22 Hz' },
      { label: 'Design', value: 'Portable suitcase' },
    ],
  },
  {
    slug: 'wire-feeder-small',
    name: 'Portable Wire Feeder Small',
    category: 'Wire Feed Systems',
    categorySlug: 'wire-feed-systems',
    tagline: 'Ultra-compact wire feeder for confined spaces and shipbuilding.',
    description: 'The Portable Wire Feeder Small is specifically designed for applications where access is severely limited — particularly in shipbuilding, inside vessels, and tight structural assemblies. Its minimal footprint allows welders to work in spaces where standard equipment cannot reach.',
    image: '/images/products/wire-feeder-small.jpg',
    features: [
      { title: 'Ultra-Compact', text: 'Minimal footprint designed for tight spaces and confined access.' },
      { title: 'Shipbuilding Optimized', text: 'Purpose-built for shipyard and vessel interior welding.' },
      { title: 'Lightweight', text: 'Easy to carry and position in challenging locations.' },
      { title: 'TIP TIG Compatible', text: 'Full integration with the TIP TIG control system.' },
    ],
  },
  {
    slug: 'wire-feeder-large',
    name: 'Portable Wire Feeder Large',
    category: 'Wire Feed Systems',
    categorySlug: 'wire-feed-systems',
    tagline: 'Extended-capacity portable wire feeder for demanding industrial applications.',
    description: 'The Portable Wire Feeder Large offers extended wire spool capacity for longer welding operations. Designed for heavy industrial use in shipbuilding and structural fabrication, it reduces downtime from spool changes while maintaining the portability needed for field operations.',
    image: '/images/products/wire-feeder-large.jpg',
    features: [
      { title: 'Extended Capacity', text: 'Larger wire spool capacity reduces downtime from spool changes.' },
      { title: 'Heavy-Duty Build', text: 'Engineered for continuous industrial welding operations.' },
      { title: 'Portable Design', text: 'Still portable enough for field and shipyard applications.' },
      { title: 'TIP TIG Compatible', text: 'Seamless integration with the TIP TIG control system.' },
    ],
  },

  // ── Automated & Collaborative Welding ──
  {
    slug: 'cobo-tiptig',
    name: 'COBO-TIPTIG',
    category: 'Automated & Collaborative Welding',
    categorySlug: 'automated-welding',
    tagline: 'Collaborative welding robot for safe, direct human interaction.',
    description: 'The COBO-TIPTIG is a collaborative welding robot that combines the precision of TIP TIG wire feed technology with the flexibility of cobot automation. Designed for safe, direct human interaction, it enables small and medium workshops to benefit from automated welding without the need for safety cages or complex programming.',
    image: '/images/products/cobo-tiptig.jpg',
    features: [
      { title: 'Safe Collaboration', text: 'Designed for direct human interaction — no safety cages required.' },
      { title: 'Easy Programming', text: 'Intuitive teach-in programming for quick setup of new weld paths.' },
      { title: 'TIP TIG Integration', text: 'Full hot wire and oscillation capabilities for superior weld quality.' },
      { title: 'Affordable Automation', text: 'Makes automated welding accessible for small and medium workshops.' },
    ],
  },
  {
    slug: 'welding-carriage',
    name: 'Welding Carriage – Flexible Track',
    category: 'Automated & Collaborative Welding',
    categorySlug: 'automated-welding',
    tagline: 'Mechanized welding system with flexible track for long seams.',
    description: 'The Welding Carriage with Flexible Track enables mechanized TIP TIG welding along curved and straight seams. The flexible magnetic track adapts to the workpiece geometry, making it ideal for vessels, tanks, and structural components where consistent travel speed is critical for weld quality.',
    image: '/images/products/welding-carriage.jpg',
    features: [
      { title: 'Flexible Track', text: 'Magnetic track adapts to curved and flat surfaces.' },
      { title: 'Consistent Travel Speed', text: 'Precise motorized control for uniform weld quality.' },
      { title: 'Versatile Mounting', text: 'Suitable for horizontal, vertical, and overhead welding positions.' },
      { title: 'TIP TIG Compatible', text: 'Integrates with any TIP TIG wire feed system.' },
    ],
  },

  // ── Specialty Systems ──
  {
    slug: 'cladding-cell',
    name: 'Compact Cladding Cell',
    category: 'Specialty Systems',
    categorySlug: 'specialty-systems',
    tagline: 'Flexible, cost-effective system for weld overlay cladding.',
    description: 'The Compact Cladding Cell is a turnkey system for weld overlay cladding operations. It combines TIP TIG wire feed technology with a rotating positioner and automated torch movement to deliver precise, high-quality corrosion-resistant overlays on pipes, vessels, and flanges.',
    image: '/images/products/cladding-cell.jpg',
    features: [
      { title: 'Turnkey System', text: 'Complete cladding setup including positioner, torch mount, and TIP TIG wire feeder.' },
      { title: 'Superior Overlay Quality', text: 'Low dilution rates with excellent corrosion resistance properties.' },
      { title: 'Compact Footprint', text: 'Space-efficient design suitable for workshop integration.' },
      { title: 'Flexible Configuration', text: 'Adaptable for pipes, flanges, valve bodies, and flat components.' },
    ],
  },
  {
    slug: 'orbital',
    name: 'TIP TIG Orbital',
    category: 'Specialty Systems',
    categorySlug: 'specialty-systems',
    tagline: 'Orbital welding system with TIP TIG wire feed technology.',
    description: 'TIP TIG Orbital brings the advantages of dynamic wire feeding and hot wire technology to orbital pipe welding. The system produces consistently high-quality welds on pipe-to-pipe and pipe-to-tubesheet joints, significantly reducing the need for rework compared to conventional orbital TIG welding.',
    image: '/images/products/orbital.jpg',
    features: [
      { title: 'Dynamic Wire Feed', text: 'TIP TIG oscillation technology for superior fusion in all positions.' },
      { title: 'Reduced Rework', text: 'Consistently high weld quality reduces inspection rejection rates.' },
      { title: 'Hot Wire Capability', text: 'Preheated filler wire for faster deposition and lower heat input.' },
      { title: 'Pipe & Tubesheet', text: 'Suitable for pipe-to-pipe and pipe-to-tubesheet orbital joints.' },
    ],
  },

  // ── Pipeline Equipment ──
  {
    slug: 'supercut',
    name: 'TIP TIG SuperCut',
    category: 'Pipeline Equipment',
    categorySlug: 'pipeline-equipment',
    tagline: 'Orbital pipe cutting machine for onshore and offshore operations.',
    description: 'The TIP TIG SuperCut is a portable orbital pipe cutting machine designed for precise, clean cuts on pipelines in both onshore and offshore environments. It delivers consistent bevel preparation for subsequent welding operations, eliminating the variability of manual cutting.',
    image: '/images/products/supercut.jpg',
    features: [
      { title: 'Orbital Cutting', text: 'Precise, consistent cuts around the full pipe circumference.' },
      { title: 'Bevel Preparation', text: 'Integrated beveling for immediate weld-ready joint preparation.' },
      { title: 'Field Portable', text: 'Designed for deployment on pipeline construction sites.' },
      { title: 'Onshore & Offshore', text: 'Proven performance in both land-based and marine environments.' },
    ],
  },
  {
    slug: 'iluc',
    name: 'Internal Line Up Clamp (ILUC)',
    category: 'Pipeline Equipment',
    categorySlug: 'pipeline-equipment',
    tagline: 'Precision internal alignment tool for pipeline welding.',
    description: 'The Internal Line Up Clamp (ILUC) ensures precise alignment of pipe ends prior to root pass welding. By clamping from the inside, it maintains perfect concentricity and gap control, which is critical for achieving consistent, high-quality root welds on pipeline joints.',
    image: '/images/products/iluc.jpg',
    features: [
      { title: 'Internal Clamping', text: 'Clamps from inside the pipe for unobstructed external welding access.' },
      { title: 'Precision Alignment', text: 'Ensures perfect concentricity and consistent root gap.' },
      { title: 'Multiple Sizes', text: 'Available in various diameters for different pipe specifications.' },
      { title: 'Quick Release', text: 'Fast setup and release for efficient pipeline production.' },
    ],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
