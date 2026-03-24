export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  image: string;
  images?: string[];
  features: { title: string; text: string }[];
  specs?: { label: string; value: string; imperial?: string }[];
  video?: string;
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
    tagline: 'The flagship TIP TIG wire feed system — engineered for precision, built for demanding workshop and field environments.',
    description: 'The TIP TIG AllinOne combines hot wire technology with a dynamic wire oscillation mechanism and a four-drive-roll feeder in a single, compact unit. It connects to any standard TIG/GTAW power source — no proprietary equipment required — and delivers consistently higher deposition rates, lower heat input, and virtually porosity-free welds compared to conventional TIG welding.',
    image: '/images/products/allinone.jpg',
    features: [
      { title: 'Hot Wire Technology', text: 'Resistive preheating of the filler wire increases deposition rates and reduces heat input into the base material — resulting in less distortion and a wider process window.' },
      { title: 'Four Drive Rolls', text: 'A robust four-roll drive mechanism maintains consistent wire feed pressure across the full diameter range, eliminating slippage and ensuring repeatable results.' },
      { title: 'Dynamic Wire Oscillation', text: 'Controlled wire agitation stirs the weld pool for superior sidewall fusion, improved tie-in, and the elimination of gas porosity — even in critical applications.' },
      { title: 'Universal Compatibility', text: 'Connects directly to any water-cooled TIG/GTAW power source on the market. No proprietary welder, no lock-in — integrate TIP TIG into your existing setup.' },
    ],
    specs: [
      { label: 'Hot Wire Current', value: '80 – 100 A' },
      { label: 'Duty Cycle', value: '100 A / 100 %' },
      { label: 'Supply Voltage', value: '100 – 240 V' },
      { label: 'Mains Frequency', value: '50 Hz / 60 Hz' },
      { label: 'Protection Class', value: 'IP 23' },
      { label: 'Dimensions (H × W × D)', value: '525 × 352 × 600 mm', imperial: '20.66 × 13.85 × 23.62 in' },
      { label: 'Weight', value: '34 kg', imperial: '74 lbs' },
      { label: 'Standards', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },
  {
    slug: 'portable-allinone',
    name: 'TIP TIG Portable AllinOne',
    category: 'Wire Feed Systems',
    categorySlug: 'wire-feed-systems',
    tagline: 'Full TIP TIG performance in a rugged, portable suitcase — engineered for field service and on-site welding.',
    description: 'The Portable AllinOne delivers the same hot wire technology, dynamic wire oscillation, and four-drive-roll feeding as the standard AllinOne — housed in a robust, lightweight suitcase. At just 31 kg, it is purpose-built for field service, maintenance shutdowns, and any application where mobility is essential without compromising weld quality or process capability.',
    image: '/images/products/portable-allinone.jpg',
    features: [
      { title: 'Suitcase Design', text: 'A compact, impact-resistant housing with integrated carry handle makes transport effortless — from the workshop to elevated platforms, confined spaces, and remote job sites.' },
      { title: 'Full Feature Set', text: 'Identical hot wire, oscillation, and wire feed capabilities as the standard AllinOne. No compromises on process performance despite the reduced footprint.' },
      { title: 'Quick Setup', text: 'Connects to any water-cooled TIG/GTAW power source in minutes. Designed for rapid deployment during planned shutdowns, turnarounds, and emergency repairs.' },
      { title: 'Rugged Construction', text: 'Reinforced housing and sealed connectors protect the electronics in harsh industrial environments — dust, moisture, and vibration.' },
    ],
    specs: [
      { label: 'Hot Wire Current', value: '80 – 100 A' },
      { label: 'Duty Cycle', value: '100 A / 100 %' },
      { label: 'Supply Voltage', value: '100 – 240 V' },
      { label: 'Mains Frequency', value: '50 Hz / 60 Hz' },
      { label: 'Protection Class', value: 'IP 23' },
      { label: 'Dimensions (H × W × D)', value: '500 × 366 × 625 mm', imperial: '19.7 × 14.4 × 24.6 in' },
      { label: 'Weight', value: '31 kg', imperial: '68 lbs' },
      { label: 'Standards', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },
  {
    slug: 'wire-feeder-small',
    name: 'Portable Wire Feeder Small',
    category: 'Wire Feed Systems',
    categorySlug: 'wire-feed-systems',
    tagline: 'Ultra-compact, manhole-compatible wire feeder at just 17.5 kg — engineered for confined spaces, shipbuilding, and vessel interiors.',
    description: 'The Portable Wire Feeder Small is purpose-built for applications where access is severely limited. Compact enough to pass through standard manholes, it reaches spaces that conventional wire feeders cannot — inside pressure vessels, between structural frames, and through narrow access points. At just 17.5 kg and 213 × 330 × 457 mm, it delivers the same hot wire and oscillation performance as the full-size AllinOne.',
    image: '/images/products/wire-feeder-small.jpg',
    images: ['/images/products/wire-feeder-small.jpg', '/images/products/wire-feeder-small-pcb.jpg'],
    features: [
      { title: 'Manhole-Compatible Design', text: 'The smallest TIP TIG wire feeder at just 213 × 330 × 457 mm — compact enough to pass through standard manholes and into pressure vessels, tanks, and confined structural assemblies where no other wire feeder fits.' },
      { title: 'Shipbuilding & Vessel Interiors', text: 'Specifically designed for the demands of shipyard fabrication — confined tank sections, double bottoms, and pipe penetrations where space and weight are critical.' },
      { title: 'Just 17.5 kg', text: 'Light enough to carry by hand to elevated work positions, scaffolding, and remote welding locations without the need for lifting equipment.' },
      { title: 'Full TIP TIG Performance', text: 'Hot wire technology and dynamic wire oscillation — identical process capability to the standard AllinOne, regardless of the compact housing.' },
    ],
    specs: [
      { label: 'Hot Wire Current', value: '80 – 100 A' },
      { label: 'Duty Cycle', value: '100 A / 100 %' },
      { label: 'Supply Voltage', value: '100 – 240 V' },
      { label: 'Mains Frequency', value: '50 Hz / 60 Hz' },
      { label: 'Protection Class', value: 'IP 66' },
      { label: 'Dimensions (H × W × D)', value: '213 × 330 × 457 mm', imperial: '8.4 × 13 × 18 in' },
      { label: 'Weight', value: '17.5 kg', imperial: '38.5 lbs' },
      { label: 'Standards', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },
  {
    slug: 'wire-feeder-large',
    name: 'Portable Wire Feeder Large',
    category: 'Wire Feed Systems',
    categorySlug: 'wire-feed-systems',
    tagline: 'Extended-capacity portable wire feeder at 20 kg — built for longer runs in shipbuilding and heavy fabrication.',
    description: 'The Portable Wire Feeder Large accommodates larger wire spools for extended welding operations, significantly reducing downtime from spool changes during long seams and multi-pass welds. At 20 kg and with IP 66 protection, it is built for continuous use in demanding shipyard and structural fabrication environments while remaining portable enough for field deployment.',
    image: '/images/products/wire-feeder-large.jpg',
    images: ['/images/products/wire-feeder-large.jpg', '/images/products/wire-feeder-large-complete.jpg'],
    features: [
      { title: 'Extended Spool Capacity', text: 'Accepts larger wire spools for longer uninterrupted welding runs — fewer spool changes mean less downtime and more consistent weld quality on long seams.' },
      { title: 'Heavy-Duty Construction', text: 'Reinforced housing with IP 66 protection, engineered for continuous operation in harsh industrial environments — shipyards, offshore platforms, and heavy structural fabrication.' },
      { title: 'Portable at 20 kg', text: 'Despite its extended capacity, the Large feeder remains field-portable. Carry it to the workpiece rather than bringing the workpiece to the workshop.' },
      { title: 'Full TIP TIG Performance', text: 'Hot wire technology and dynamic wire oscillation — identical process capability to the standard AllinOne, with the added benefit of extended run times.' },
    ],
    specs: [
      { label: 'Hot Wire Current', value: '80 – 100 A' },
      { label: 'Duty Cycle', value: '100 A / 100 %' },
      { label: 'Supply Voltage', value: '100 – 240 V' },
      { label: 'Mains Frequency', value: '50 Hz / 60 Hz' },
      { label: 'Protection Class', value: 'IP 66' },
      { label: 'Dimensions (H × W × D)', value: '203 × 432 × 559 mm', imperial: '8 × 17 × 22 in' },
      { label: 'Weight', value: '20 kg', imperial: '44 lbs' },
      { label: 'Standards', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },

  // ── Automated & Collaborative Welding ──
  {
    slug: 'cobo-tiptig',
    name: 'COBO-TIPTIG',
    category: 'Automated & Collaborative Welding',
    categorySlug: 'automated-welding',
    tagline: 'Collaborative welding automation with TIP TIG quality — no safety cages, no complex programming.',
    description: 'The COBO-TIPTIG brings the advantages of TIP TIG wire feed technology to collaborative robot welding. Each system is configured individually to match the specific application — from single-piece production to small batch runs. The cobot works safely alongside the operator, learns new weld paths through intuitive teach-in programming, and delivers the same hot wire and oscillation-driven weld quality that defines the TIP TIG process.',
    image: '/images/products/cobo-tiptig.jpg',
    features: [
      { title: 'Safe Human-Robot Collaboration', text: 'Force-limited cobot technology allows the operator to work directly alongside the robot — no safety cages, no light curtains. The robot stops immediately on contact, enabling seamless integration into existing workshop layouts.' },
      { title: 'Intuitive Teach-In Programming', text: 'The operator guides the robot arm manually along the desired weld path. No G-code, no offline programming — new parts can be taught in minutes, making the system viable even for single-piece and small batch production.' },
      { title: 'Full TIP TIG Process Quality', text: 'Hot wire preheating and dynamic wire oscillation deliver the same superior weld quality as manual TIP TIG — higher deposition rates, lower heat input, and virtually porosity-free results, now with robotic consistency.' },
      { title: 'Custom-Configured Systems', text: 'Every COBO-TIPTIG is tailored to the application. Robot reach, positioner, torch mount, and process parameters are configured to match your specific workpieces and production requirements.' },
    ],
  },
  {
    slug: 'welding-carriage',
    name: 'Welding Carriage – Flexible Track',
    category: 'Automated & Collaborative Welding',
    categorySlug: 'automated-welding',
    tagline: 'Mechanized TIP TIG welding along curved and straight seams — up to 300 % faster than conventional TIG, with perfect repeatability.',
    description: 'The Welding Carriage with Flexible Track turns TIP TIG into a fully mechanized process. A flexible magnetic rail conforms to the workpiece geometry while a motorized carriage maintains precise, constant travel speed along the seam. Combined with dynamic wire feeding, hot wire technology, and AVC (Arc Voltage Control), the system delivers up to 300 % faster welding speeds and up to 400 % higher deposition rates compared to conventional TIG — with dilution reduced by up to 80 %. All components are pre-installed, tested, and weld-proven.',
    image: '/images/products/welding-carriage.jpg',
    features: [
      { title: 'Dynamic Wire Feed & Hot Wire', text: 'Sinusoidal wire oscillation creates a controllable weld pool even in positional welding. Hot wire preheating increases deposition rates and reduces the risk of weld defects — perfect bead appearance with no spatter.' },
      { title: 'Up to 300 % Faster', text: 'Mechanized travel speed control combined with TIP TIG wire feed technology delivers up to 300 % faster welding speeds and up to 400 % improvement in deposition rate compared to conventional TIG welding.' },
      { title: 'Turnkey System with Smart Controls', text: 'All components pre-installed and test-welded. AVC (Arc Voltage Control), comprehensive data logging, real-time feedback on actual values, remote diagnostics via network, and semi-automated calibration — ready to produce from day one.' },
      { title: 'Flexible Track, All Positions', text: 'The magnetic rail adapts to curved and flat surfaces in horizontal, vertical, and overhead positions. Manual override on all weld parameters ensures the operator retains full control when needed.' },
    ],
    video: '/videos/welding-carriage.mp4',
  },

  // ── Specialty Systems ──
  {
    slug: 'cladding-cell',
    name: 'Compact Cladding Cell',
    category: 'Specialty Systems',
    categorySlug: 'specialty-systems',
    tagline: 'PLC-controlled turnkey cladding system with TIP TIG hot wire — for ring grooves, tee joints, and weld overlay up to 1200 mm diameter.',
    description: 'The Compact Cladding Cell is a fully automated weld overlay system built around TIP TIG hot wire technology. PLC-controlled with AVC, stepper-driven X/Z/OSC axes, a 3500 kg turntable, and optional laser tracking, it delivers precise corrosion-resistant overlays on pipes, vessels, flanges, and valve bodies up to 1200 mm diameter and 2000 mm height. All parameters are adjustable on the fly from a hand-held pendant — with real-time position measurement, data logging with heat input calculation, and remote diagnostics.',
    image: '/images/products/cladding-cell.jpg',
    features: [
      { title: 'PLC Control with AVC', text: 'Fully automated welding with Arc Voltage Control, constant surface speed, and override of amps, wire feed speed, and table speed during welding. 50 internal programs, 2 GB compact flash storage, and multi-language HMI with metric/imperial switching.' },
      { title: 'Stepper-Driven 3-Axis Motion', text: 'X axis (1300 mm travel), Z axis (1300 mm travel), and oscillation axis (100 mm travel) — all stepper-controlled for precise, repeatable torch positioning. Real-time position measurement ensures accuracy on every pass.' },
      { title: '3500 kg Turntable', text: '1200 mm table with 3500 kg capacity, bore torch access at 110 mm, and constant surface speed control. Handles parts up to 1200 mm diameter and 2000 mm height. Optional slip ring for preheating.' },
      { title: 'Ring Grooves & Laser Tracking', text: 'Designed for ring groove welding, tee joints, X joints, and upper/lower minor bore applications. Optional laser tracking enables easy-to-use seam following without programming.' },
    ],
    specs: [
      { label: 'Control', value: 'PLC with AVC' },
      { label: 'Welding Process', value: 'TIP TIG Hot Wire' },
      { label: 'X Axis Travel', value: '1300 mm', imperial: '51.2 in' },
      { label: 'Z Axis Travel', value: '1300 mm', imperial: '51.2 in' },
      { label: 'Oscillation Travel', value: '100 mm', imperial: '3.9 in' },
      { label: 'Turntable Capacity', value: '3500 kg', imperial: '7716 lbs' },
      { label: 'Table Size', value: '1200 mm', imperial: '47.2 in' },
      { label: 'Max Part Diameter', value: '1200 mm', imperial: '47.2 in' },
      { label: 'Max Part Height', value: '2000 mm', imperial: '78.7 in' },
      { label: 'Bore Torch', value: '110 mm', imperial: '4.3 in' },
      { label: 'Cabinet Housing', value: 'IP 52' },
      { label: 'Programs', value: '50 (internal) + 2 GB CF' },
      { label: 'Data Connection', value: 'Ethernet' },
      { label: 'Languages', value: 'EN, DE, NO, IT' },
    ],
  },
  {
    slug: 'orbital',
    name: 'TIP TIG Orbital',
    category: 'Specialty Systems',
    categorySlug: 'specialty-systems',
    tagline: 'The most compact orbital welding system with TIP TIG hot wire — for pipes from 4" to 60", up to 300 % faster than conventional TIG.',
    description: 'TIP TIG Orbital combines dynamic wire feeding and hot wire technology with orbital pipe welding in the most compact system available. Covering pipe sizes from 4" to 60" (101.6 – 1524 mm), it delivers up to 300 % faster welding speeds and up to 400 % higher deposition rates compared to conventional orbital TIG — with dilution reduced by up to 80 %. All components are pre-installed and test-welded, with AVC, comprehensive data logging, remote diagnostics, and semi-automated calibration.',
    image: '/images/products/orbital.jpg',
    features: [
      { title: 'Dynamic Wire Feed & Hot Wire', text: 'Sinusoidal wire oscillation creates a controllable weld pool even in positional welding around the pipe circumference. Hot wire preheating increases deposition rates — perfect bead appearance with no spatter, even at high travel speeds.' },
      { title: 'Most Compact Orbital System', text: 'More welding capacity than any other orbital welding system in a compact, pre-installed package. All components proofed and test-welded — quick setup on site with immediate production capability.' },
      { title: 'Smart Controls & Remote Access', text: 'AVC (Arc Voltage Control), manual override on all weld parameters, comprehensive data logging with real-time feedback, remote diagnostics via network, multi-language HMI with metric/imperial switching, and semi-automated calibration.' },
      { title: '4" to 60" Pipe Range', text: 'High-precision weld heads for small and large diameter applications. Configurable for pipe-to-pipe, pipe-to-tubesheet, and straight-line welding with the flexible track option.' },
    ],
    specs: [
      { label: 'Pipe Size Range', value: '101.6 – 1524 mm', imperial: '4" – 60"' },
      { label: 'Filler Wire Size', value: '0.8, 0.9, 1.0, 1.2 mm', imperial: '.030", .035", .040", .045"' },
      { label: 'Welding Process', value: 'TIP TIG Hot Wire' },
    ],
    video: '/videos/orbital.mp4',
  },

  // ── Pipeline Equipment ──
  {
    slug: 'supercut',
    name: 'TIP TIG SuperCut',
    category: 'Pipeline Equipment',
    categorySlug: 'pipeline-equipment',
    tagline: 'Portable orbital pipe cutting machine for 6" – 48" pipes — built for hostile field conditions onshore and offshore.',
    description: 'The TIP TIG SuperCut is a portable pipe and pipeline cutting machine covering 6" to 48" (DN 150 – 1200) pipe diameters. Engineered with high-grade aluminum components, atmospheric anti-corrosion finishes, and a semi-sealed, self-lubricating closed-loop drive system, it is purpose-built for the hostile conditions of pipeline maintenance and construction — dirt, sand, water, and extreme weather. From offshore drilling rigs to river and harbor construction, the SuperCut delivers precise, repeatable cuts where it matters most.',
    image: '/images/products/supercut.jpg',
    images: ['/images/products/supercut.jpg', '/images/products/supercut-system.jpg', '/images/products/supercut-field.jpg'],
    features: [
      { title: 'Wide Pipe Range', text: '6" to 48" (DN 150 – 1200) capacity included — covers the majority of onshore and offshore pipeline diameters with a single machine.' },
      { title: 'Hostile-Environment Design', text: 'Semi-sealed, self-lubricating closed-loop system with high-grade aluminum construction and atmospheric anti-corrosion package. Built to operate reliably in dirt, sand, water, and salt spray.' },
      { title: 'Field Portable', text: 'Lightweight, compact design for rapid deployment on offshore drilling rigs, pipeline right-of-ways, and construction sites in rivers and harbors — no workshop required.' },
      { title: 'Precision Orbital Cuts', text: 'Consistent, clean cuts around the full pipe circumference with integrated bevel preparation — delivering weld-ready joints that eliminate the variability of manual cutting.' },
    ],
    specs: [
      { label: 'Pipe Size Range', value: 'DN 150 – 1200', imperial: '6" – 48"' },
      { label: 'Drive System', value: 'Semi-sealed, self-lubricating closed loop' },
      { label: 'Construction', value: 'High-grade aluminum with anti-corrosion package' },
    ],
  },
  {
    slug: 'iluc',
    name: 'Internal Line Up Clamp (ILUC)',
    category: 'Pipeline Equipment',
    categorySlug: 'pipeline-equipment',
    tagline: 'Pneumatic internal pipe alignment and purge system for 4" to 60" — precision fit-up for flawless root passes.',
    description: 'The TIP TIG Internal Line Up Clamp (ILUC) works inside the pipe to simultaneously align and purge two pipe joints for external welding. Pneumatically operated, it ensures perfect concentricity, consistent root gap, and an inert purge atmosphere — the three critical prerequisites for defect-free root passes on pipeline joints. Available for pipe sizes from 4" to 60" (101.6 mm to 1524 mm).',
    image: '/images/products/iluc.jpg',
    features: [
      { title: 'Align & Purge in One', text: 'Combines internal pipe alignment and gas purging in a single tool — clamp the joint and establish an inert atmosphere simultaneously, eliminating a separate purge setup.' },
      { title: 'Pneumatic Operation', text: 'Air-powered clamping delivers consistent, controllable force across the full pipe diameter range. No hydraulic fluids, no contamination risk near the weld zone.' },
      { title: '4" to 60" Pipe Range', text: 'Covers pipe diameters from 101.6 mm to 1524 mm (4" to 60") — from process piping to large-diameter transmission pipelines, onshore and offshore.' },
      { title: 'Unobstructed External Access', text: 'Internal clamping leaves the entire pipe circumference free for welding — no external clamps, dogs, or tack welds interfering with the root pass.' },
    ],
    specs: [
      { label: 'Pipe Size Range', value: '101.6 – 1524 mm', imperial: '4" – 60"' },
      { label: 'Operation', value: 'Pneumatic' },
      { label: 'Function', value: 'Alignment + Purging' },
    ],
    video: '/videos/iluc.mp4',
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
