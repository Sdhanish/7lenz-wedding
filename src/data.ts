/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, Service, PackageTier, JournalPost, FAQItem } from './types';

// Extend types to support Testimonials as well if needed, or define in data
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Golden Kasavu Symphony',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegant traditional celebration in Kochi, capturing the timeless beauty of heirloom gold jewelry, handwoven white Kasavu sarees, and heartfelt laughter under fresh jasmine canopies.',
    location: 'Grand Hyatt Bolgatty, Kochi',
    year: '2025',
    vibe: 'Timeless • Regal • Traditional'
  },
  {
    id: 'port-2',
    title: 'Kumarakom Backwater Whisper',
    category: 'destination',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    description: 'An intimate sunset exchange of vows on a wooden deck over Lake Vembanad. The orange sun setting behind palm trees painted the perfect backdrop for their quiet cinematic film.',
    location: 'Kumarakom Lake Resort',
    year: '2026',
    vibe: 'Romantic • Serene • Scenic'
  },
  {
    id: 'port-3',
    title: 'Frames of Heritage & Love',
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    description: 'A grand traditional Hindu marriage in Pathanamthitta. From the sacred step-by-step temple rituals to the playful moments of throwing flowers during the exchange of garlands.',
    location: 'Sree Vallabha Temple Ground',
    year: '2025',
    vibe: 'Vibrant • Authentic • Emotional'
  },
  {
    id: 'port-4',
    title: 'Vows in the Misty Tea Gardens',
    category: 'destination',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1200',
    description: 'An ethereal pre-wedding photoshoot amidst the endless, rolling green carpets of Munnar. Fog drifted gently between the couple, creating a pure cinematic dreamscape.',
    location: 'Windermere Estate, Munnar',
    year: '2026',
    vibe: 'Ethereal • Atmospheric • Cinematic'
  },
  {
    id: 'port-5',
    title: 'The Modern Monochromatic Couple',
    category: 'engagement',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    description: 'A highly art-directed engagement shoot in an architectural minimalist pavilion. Emphasizing clean shadows, tailored suits, and quiet, understated intimate gazes.',
    location: 'The Pavilion, Trivandrum',
    year: '2025',
    vibe: 'Minimalist • Vogue • Architectural'
  },
  {
    id: 'port-6',
    title: 'A Cinema of Gentle Touches',
    category: 'films',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200',
    description: 'Stills from the award-winning short cinematic film of Sandra & George. Every frame was crafted in ultra 4K using natural sunlight to preserve the honesty of their story.',
    location: 'Raviz Kovalam, Thiruvananthapuram',
    year: '2025',
    vibe: 'Cinematic • Poetic • Intimate'
  }
];

export const services: Service[] = [
  {
    id: 'srv-1',
    title: 'Wedding Photography',
    tagline: 'Authentic emotions preserved in fine-art frames.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    description: 'Combining candid honesty with a polished editorial look. We cover everything from your quiet early morning preparations to the electric energy of the dance floor, using state-of-the-art dual-camera setups to ensure no fleeting tear or laugh is missed.',
    details: [
      'Luxury & Fine-Art Candid Photography',
      'Timeless Traditional Photography with master lighting',
      'Bridal, Groom, and Family Portraits',
      'Full Wedding-Day Storytelling coverage',
      'High-resolution edited and color-graded digital gallery',
      'Premium custom-bound coffee-table heirloom albums'
    ]
  },
  {
    id: 'srv-2',
    title: 'Wedding Cinematic Films',
    tagline: 'Your love story, composed like premium cinema.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200',
    description: 'We do not just record events; we compose motion pictures. Our cinematic films use master-grade 4K camera bodies, anamorphic lenses, professional field sound recorders, and drone coverage to capture the grand scale and the intimate whispers of your celebration.',
    details: [
      'Cinematic wedding feature films (15-25 minutes)',
      'High-impact trailers & 60-second social media teasers',
      'Same-day-edit highlight reels to screen at the reception',
      'Dual-operator professional drone cinematic coverage',
      'Studio-grade sound recording for vows & speeches',
      'Color-graded & mixed by master film editors'
    ]
  },
  {
    id: 'srv-3',
    title: 'Pre-Wedding & Couple Shoots',
    tagline: 'Celebrate your shared anticipation in scenic wonder.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1200',
    description: 'Let us step away from the crowd to paint an artistic prelude to your union. Whether it’s the mist of Munnar, the heritage streets of Fort Kochi, or a remote island in Kumarakom, we design a comfortable, relaxed environment for your authentic dynamic to shine.',
    details: [
      'Outdoor couple sessions at hand-picked locations',
      'Cinematic Save-the-Date video announcements',
      'Drone-assisted aerial pre-wedding photography',
      'Dynamic styling consultation and concept planning',
      'Full digital catalog with cinematic custom grades',
      'Rapid teaser delivery (within 7 days) for announcements'
    ]
  },
  {
    id: 'srv-4',
    title: 'Newborn, Maternity & Family',
    tagline: 'Preserving the purest chapters of your family story.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    description: 'Safe, warm, and comforting sessions designed for newborns, expectant mothers, and multi-generational families. We focus on soft natural light and genuine interactions to document your milestones as timeless heirlooms.',
    details: [
      'Extremely safe and comfortable newborn sessions',
      'Elegant, light-filled maternity portraiture',
      'Playful kids milestone and childhood sessions',
      'Grand multi-generation festival family photos',
      'Beautiful canvas print-ready high resolution deliverables'
    ]
  },
  {
    id: 'srv-5',
    title: 'Baptism & Special Events',
    tagline: 'Documenting your sacred milestones with quiet respect.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    description: 'From church baptisms and Holy Communions to milestone birthdays, Mehendi, Haldi, or corporate gala launches, we provide complete cinematic and photography coverage that respects the flow of the ceremony.',
    details: [
      'Respectful church ceremony & altar photo coverage',
      'Candid guest moments and venue decoration framing',
      'Fast-paced highlight films and event teasers',
      'Custom event album design with clean, high-density layouts',
      'Flexible hourly and multi-cam coverage models'
    ]
  }
];

export const packageTiers: PackageTier[] = [
  {
    id: 'pkg-essential',
    name: 'Essential',
    subtitle: 'Pure, high-fidelity storytelling of your absolute essential moments.',
    coverage: '1 Day (Up to 8 Hours)',
    team: '1 Lead Candid Photographer & 1 Cinematographer',
    deliverables: [
      '300+ Color-graded high-resolution photos',
      '50 Premium retouched signature portrait prints',
      '3-Minute Cinematic Wedding Trailer',
      '15-Minute Wedding Highlights Film',
      'Secure Online Gallery with 1-Year Cloud Storage'
    ],
    timeline: '30-45 Days',
    priceEstimate: '₹1,20,000',
    highlights: [
      'Excellent for intimate weddings and local celebrations',
      'Natural light-focused candid capture',
      'Full digital delivery'
    ]
  },
  {
    id: 'pkg-premium',
    name: 'Premium',
    subtitle: 'The gold standard of luxury coverage, capturing every heartbeat of your celebration.',
    coverage: '2 Days (Up to 16 Hours total)',
    team: '2 Lead Candid Photographers, 2 Cinematographers & 1 Assistant',
    deliverables: [
      '600+ Exquisitely graded high-resolution photos',
      '100 Signature retouched portraits',
      '1 Premium custom-designed leather-bound Layflat Wedding Album (12" x 15")',
      '5-Minute Cinematic Wedding Trailer in 4K',
      '25-Minute Cinema Documentary Film',
      '1 Dedicated Instagram Reels Teaser (60s)',
      'Drone Aerial Cinematic Coverage (Weather permitting)',
      'High-speed wooden USB Box with signature prints'
    ],
    timeline: '25-30 Days',
    priceEstimate: '₹2,50,000',
    highlights: [
      'Our most popular choice for traditional Indian celebrations',
      'Comprehensive drone coverage for majestic aerials',
      'Custom master album design included'
    ]
  },
  {
    id: 'pkg-luxury',
    name: 'Luxury',
    subtitle: 'Uncompromised, cinematic masterpiece with a complete storytelling team.',
    coverage: '3 Days (Full Event Coverage)',
    team: '3 Lead Photographers, 3 Cinematographers, 1 Drone Specialist & 1 Creative Director',
    deliverables: [
      '1000+ Masterfully edited high-resolution photos',
      'All raw catalog files delivered via cloud',
      '2 Custom-designed, premium presentation wedding albums',
      '1 Parents miniature companion album',
      '60-Second Same-Day Edit Highlight film screened at the reception',
      '8-Minute Cinematic Couture Trailer',
      'Full Length (45m+) Multi-cam Cinema Master File',
      '3 Custom Instagram reels and short-form storytelling edits',
      'Unrestricted Drone 4K coverage and specialty lenses',
      'Lifetime cloud back-up and custom leather presentation casket'
    ],
    timeline: '15-20 Days',
    priceEstimate: '₹4,80,000',
    highlights: [
      'Uncompromising luxury, perfect for grand destination weddings',
      'Same-day edit highlight movie screened at your wedding reception',
      'Personal creative director direction for all shoots'
    ]
  },
  {
    id: 'pkg-custom',
    name: 'Custom',
    subtitle: 'Tailor-made production engineered precisely to your vision, scale, and destinations.',
    coverage: 'Fully Flexible (Hourly or Multi-Day)',
    team: 'Bespoke assembly from our top-tier crew',
    deliverables: [
      'Select any deliverables from our active catalogs',
      'Choose from premium metal, wooden, or acrylic album sleeves',
      'Add multi-city pre-wedding shoots, underwater footage, or same-day edits',
      'Specify multi-country destination coverage guidelines'
    ],
    timeline: 'Custom Agreed Timeline',
    priceEstimate: 'Contact for Proposal',
    highlights: [
      'Designed for elite multi-cultural and destination events',
      'A-la-carte service selection',
      'Dedicated relationship director'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Choosing 7 Lenz was the single best decision we made for our wedding. They did not just capture photos; they documented our souls. Looking through the album is like traveling back in time to feel the exact warmth of that sunset.',
    author: 'Anjali & Rahul',
    role: 'Bride & Groom',
    location: 'Kumarakom Lake Resort, Kerala',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't-2',
    quote: 'Their calm, warm, and highly professional demeanor made us feel completely at ease. My husband is extremely camera-shy, but 7 Lenz made him laugh naturally. The cinematic film is a true work of fine-art cinema.',
    author: 'Sandra & George',
    role: 'Bride & Groom',
    location: 'Raviz Kovalam, Thiruvananthapuram',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't-3',
    quote: 'From the spectacular Munnar tea garden pre-wedding shoot to our three-day traditional Hindu ceremony, the crew brought unmatched artistic taste, absolute focus, and premium delivery. Highly recommended!',
    author: 'Deepika & Vignesh',
    role: 'Bride & Groom',
    location: 'Grand Hyatt Bolgatty, Kochi',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=150'
  }
];

export const journalPosts: JournalPost[] = [
  {
    id: 'post-1',
    title: 'The Ultimate Guide to Kerala Backwater Destination Weddings',
    slug: 'kerala-backwater-destination-weddings',
    category: 'Wedding Planning',
    readTime: '6 min read',
    date: 'June 12, 2026',
    excerpt: 'Exploring Kumarakom, Alappuzha, and Kochi. How to plan timelines around natural sunset reflections, humidity management, and choosing the perfect water-bound entrance.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600',
    content: [
      'Kerala’s backwaters represent one of the world’s most magical, romantic wedding landscapes. The quiet waters, palm canopies, and floating houseboats form a sensory escape that is both intimate and grand.',
      'When planning a celebration at Kumarakom or Alappuzha, timing is everything. The golden hour on the water lasts for a brief 20-30 minutes, but it provides a soft, warm reflection that looks incredibly flattering on skin tones. We always suggest setting the ceremony start time exactly 90 minutes before official sunset to secure the absolute finest light.',
      'Additionally, coordinating boat arrivals for your guests or a spectacular entry for the couple requires precision. In this article, we break down our favorite venue corners, soundproofing tips for outdoor water decks, and how we map camera angles to ensure the dramatic Kerala sunset is captured perfectly.'
    ]
  },
  {
    id: 'post-2',
    title: 'What to Wear for Your Cinematic Pre-Wedding Session: Styling & Color Psychology',
    slug: 'styling-pre-wedding-session',
    category: 'Bride & Groom Tips',
    readTime: '4 min read',
    date: 'May 28, 2026',
    excerpt: 'How to match your attire to the landscape. Selecting contrast scales, avoiding pattern clashes, and leaning into flowy, cinematic fabrics that catch the breeze.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600',
    content: [
      'In a cinematic pre-wedding shoot, your attire acts as a primary tool of visual storytelling. It should harmonize with the landscape, creating contrast without causing visual noise that distracts from your faces.',
      'For forest and mountain landscapes like Munnar or Vagamon, we highly recommend rich warm solids—burnt oranges, mustard yellows, and deep crimsons. These colors contrast spectacularly with the dark green tea bushes and blue mountain fog.',
      'If you are shooting near beaches or water bodies like Kovalam, opt for fluid fabrics like silk or chiffon in ivory, emerald, or pastel blue. These catch the coastal wind beautifully, introducing majestic motion into our high-speed cinematic lenses.'
    ]
  },
  {
    id: 'post-3',
    title: 'Candid vs. Traditional: Decoding the True Cost and Artistic Value of Wedding Photography',
    slug: 'candid-vs-traditional-wedding-photography',
    category: 'Photography Prep',
    readTime: '5 min read',
    date: 'April 14, 2026',
    excerpt: 'Why both are indispensable. Understanding how candid shooters document pure raw reactions, while traditional masters compose family portraits with structural perfection.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    content: [
      'Couples are often asked to choose between candid and traditional coverage. At 7 Lenz, we believe this is a false choice. A truly premium wedding catalog demands both—each serving a distinct role in your family archive.',
      'Candid photography requires the patience of a street photographer. The candid shooter blends into the background, watching for the quick tear rolling down a father’s cheek, the secret squeeze of hands, or the chaotic joy of children playing with rice. It is raw, unscripted, and deeply emotional.',
      'Traditional photography, on the other hand, is architectural and formal. It ensures that your grandmother is framed perfectly, that lighting is immaculate, and that every family member is documented looking their absolute best. We explain how our team balances these two schools of art synchronously on your big day.'
    ]
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is 7 Lenz based, and do you travel for destination weddings?',
    answer: 'We are based out of Pathanamthitta and Kochi, Kerala, but our cameras travel globally. We regularly cover destination weddings across India (Goa, Jaipur, Udaipur, Bangalore) and international celebrations (Dubai, Singapore, Maldives). Travel and accommodation arrangements are customized and built transparently into our packages.',
    category: 'Logistics'
  },
  {
    id: 'faq-2',
    question: 'How long does it take to deliver our final photos and cinematic film?',
    answer: 'We prioritize both perfection and punctuality. You will receive a high-impact curated "teaser set" of 15-20 photos within 48-72 hours of your wedding. Your complete, fully edited digital catalog and cinematic trailer are delivered within 20 to 35 days, while custom-designed premium printed albums are completed within 45 days.',
    category: 'Deliverables'
  },
  {
    id: 'faq-3',
    question: 'How many team members will cover our event?',
    answer: 'Our team size depends entirely on the scale of your wedding and the package selected. For intimate gatherings, a crew of 2-3 elite operators is ideal to remain unobtrusive. For grand multi-event celebrations, we deploy 6-8 specialists (including dedicated candid shooters, cinematic operators, drone captains, and lighting directors) to capture every perspective.',
    category: 'Logistics'
  },
  {
    id: 'faq-4',
    question: 'Do you design custom layflat wedding albums, and what are the materials?',
    answer: 'Yes! Our custom coffee-table books are crafted in partnership with premium binding houses. We use heavy-duty archival layflat paper, custom leather, organic linen, or high-definition acrylic covers. Every single page layout is designed from scratch by our internal art directors—never using pre-made templates.',
    category: 'Products'
  },
  {
    id: 'faq-5',
    question: 'Can we customize our packages or request specific editing styles?',
    answer: 'Absolutely. Every love story is original, and your coverage should be too. We offer our Custom package where you can select your preferred shooting days, add pre-wedding sessions, same-day edit showcases, and specify your color-grade preferences (such as warm-vintage, timeless true-color, or deep filmic-mood).',
    category: 'Customization'
  }
];
