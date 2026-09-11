/**
 * L'AURUM ATELIER — AUTHENTIC ASTROLOGY & INTENTION BRACELET DATASET
 * 
 * Complete 22-piece private intention catalogue extracted directly from
 * client product specifications, authentic photography, and metaphysical benefits.
 */

export const BRAND_CONFIG = {
  name: "L'AURUM ATELIER",
  tagline: "Fine Astrology & Intention Bracelets",
  heroTitle: "Bracelets Designed With Intention",
  heroSubtitle: "A curated digital showcase of fine astrology-inspired wristwear, hand-strung with natural mineral stones to honor intentions of clarity, abundance, inner strength, and harmony.",
  heroBadge: "Private Intention Showcase · Non-Commercial Catalogue",
  heroImage: "assets/images/products/hero-pedestal-bracelet.jpg",
  heroImageAlt: "L'AURUM Atelier Fine Intention Bracelet Showcase",
  craftsmanshipImage: "assets/images/products/dhanyog-studio.jpg",
  enquiryEmail: "concierge@laurum-atelier.com",
  enquiryWhatsApp: "+1 (555) 019-2834",
  whatsappNumberDigits: "15550192834",
  wellnessDisclaimer: "These descriptions reflect the intended spiritual and wellness positioning of the collection and are not medical advice or guarantees of health outcomes.",
  year: new Date().getFullYear()
};

export const INTENTION_PILLARS = [
  {
    id: "prosperity-career",
    eyebrow: "Intentional Prosperity",
    title: "ABUNDANCE",
    subtitle: "Wealth, Dhanyog & Career",
    description: "Harmonizing personal energy with professional opportunity, abundance, and grounded financial momentum.",
    stonePreview: "Citrine · Pyrite · Green Jade · Aventurine",
    image: "assets/images/products/dhanyog-studio.jpg",
    icon: "✦"
  },
  {
    id: "justice-protection",
    eyebrow: "Inner Fortitude",
    title: "PROTECTION",
    subtitle: "Shielding, Strength & Truth",
    description: "Grounded minerals curated to support energetic shielding, protective boundaries, and unwavering confidence.",
    stonePreview: "Black Obsidian · Hematite · Tiger Eye · Tourmaline",
    image: "assets/images/products/triple-protection-studio.jpg",
    icon: "✦"
  },
  {
    id: "health-wellness",
    eyebrow: "Mindful Vitality",
    title: "WELLNESS",
    subtitle: "Vitality, Balance & Recovery",
    description: "Mineral vibrations designed to anchor habits of mindful holistic well-being, recovery, and inner calm.",
    stonePreview: "Lava · Amethyst · Bloodstone · Moonstone",
    image: "assets/images/products/better-health-studio.jpg",
    icon: "✦"
  },
  {
    id: "love-harmony",
    eyebrow: "Harmonious Union",
    title: "HARMONY",
    subtitle: "Love, Union & Emotional Peace",
    description: "Gentle mineral harmonies that serve as tactile reminders to nurture self-love, emotional calm, and blessed union.",
    stonePreview: "Rose Quartz · Citrine · Rhodochrosite · Moonstone",
    image: "assets/images/products/early-marriage-studio.jpg",
    icon: "✦"
  }
];

export const BRACELET_CATEGORIES = [
  { id: "all", label: "Complete Collection (22)" },
  { id: "prosperity-career", label: "Prosperity & Career" },
  { id: "health-wellness", label: "Health & Vitality" },
  { id: "love-harmony", label: "Love & Emotional Peace" },
  { id: "justice-protection", label: "Protection & Strength" },
  { id: "focus-wisdom", label: "Focus & Intellect" }
];

export const BRACELET_DATA = [
  {
    id: "BR02-076",
    code: "BR02-076",
    name: "Study & Concentration Bracelet",
    category: "focus-wisdom",
    categoryLabel: "Focus & Intellect",
    positioning: "Crystals that Support Focus, Memory & Success",
    tagline: "Designed to support students and lifelong learners by enhancing concentration, memory and mental clarity for academic and personal growth.",
    shortDescription: "A vibrant arrangement of Amethyst, Lapis Lazuli, Malachite, and Green Jade designed to support memory retention and mental stamina.",
    fullDescription: "Designed for lifelong learners, students, and focused creators. This composition pairs cognitive amplifying stones like Clear Quartz and Citrine with calming Amethyst and intellect-enhancing Lapis Lazuli to anchor clear academic poise.",
    stones: [
      { name: "Clear Quartz", description: "Amplifies energy and concentration" },
      { name: "Green Jade", description: "Attracts harmony and good luck" },
      { name: "Lapis Lazuli", description: "Enhances wisdom and intellect" },
      { name: "Citrine", description: "Boosts confidence and motivation" },
      { name: "Amethyst", description: "Calms the mind and improves focus" },
      { name: "Yellow Tiger Eye", description: "Promotes clarity and determination" },
      { name: "Malachite", description: "Encourages transformation and learning" }
    ],
    attributes: [
      "Improves Focus",
      "Supports Memory",
      "Enhances Learning",
      "Boosts Productivity",
      "Supports Academic Success"
    ],
    image: "assets/images/products/study-concentration-studio.jpg",
    posterImage: "assets/images/products/study-concentration-poster.jpg",
    imageAlt: "Study & Concentration Bracelet (BR02-076) - Focus & Memory",
    isFeatured: true
  },
  {
    id: "BR02-033",
    code: "BR02-033",
    name: "Early Marriage & Union Bracelet",
    category: "love-harmony",
    categoryLabel: "Love & Emotional Peace",
    positioning: "Aligned with Love. Blessed with Commitment.",
    tagline: "A sacred blend of three powerful stones to invite love, harmony and a beautiful union.",
    shortDescription: "A gentle, radiant triad of natural Rose Quartz, golden Citrine, and Clear Quartz dedicated to heart-opening commitment and emotional warmth.",
    fullDescription: "Aligned with love and blessed with commitment. This piece offers an elegant tactile sanctuary of Rose Quartz for unconditional warmth, Citrine for radiant joy, and Clear Quartz to clarify your deepest relational intentions.",
    stones: [
      { name: "Clear Quartz", description: "Amplifies intention and positive energy" },
      { name: "Citrine", description: "Attracts happiness and abundance" },
      { name: "Rose Quartz", description: "Opens the heart to love and emotional healing" }
    ],
    attributes: [
      "Invites Love",
      "Emotional Healing",
      "Blessed Union",
      "Positive Energy"
    ],
    image: "assets/images/products/early-marriage-studio.jpg",
    posterImage: "assets/images/products/early-marriage-poster.jpg",
    imageAlt: "Early Marriage & Union Bracelet (BR02-033) - Love & Commitment",
    isFeatured: true
  },
  {
    id: "BR02-028",
    code: "BR02-028",
    name: "Dhanyog Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Attract Prosperity. Invite Abundance. Live in Harmony.",
    tagline: "Balance Your Energy. Align Your Intentions. Manifest Your Dhanyog.",
    shortDescription: "A revered multi-mineral alignment uniting Citrine, Pyrite, Green Jade, and Aventurine to invite prosperity and grounded balance.",
    fullDescription: "Prosperity begins with balanced energy. The Dhanyog Bracelet combines seven synergistic natural stones selected to anchor intentions of wealth, willpower, focus, and energetic harmony in daily practice. Wear your intention. Create your reality.",
    stones: [
      { name: "Citrine", description: "Attracts abundance" },
      { name: "Clear Quartz", description: "Amplifies energy" },
      { name: "Pyrite", description: "Invites prosperity" },
      { name: "Green Jade", description: "Promotes harmony" },
      { name: "Green Aventurine", description: "Attracts opportunity" },
      { name: "Yellow Tiger Eye", description: "Enhances confidence" },
      { name: "Golden Hematite", description: "Boosts willpower" }
    ],
    attributes: [
      "Attracts Wealth",
      "Promotes Balance",
      "Enhances Focus",
      "Provides Protection",
      "Boosts Inner Strength",
      "Invites Positive Energy"
    ],
    image: "assets/images/products/dhanyog-studio.jpg",
    posterImage: "assets/images/products/dhanyog-poster.jpg",
    imageAlt: "Dhanyog Bracelet (BR02-028) - Natural Stones & Abundance",
    isFeatured: true
  },
  {
    id: "BR02-026",
    code: "BR02-026",
    name: "Court Case Victory & Settlement Bracelet",
    category: "justice-protection",
    categoryLabel: "Protection & Strength",
    positioning: "Focus. Strength. Justice. Success.",
    tagline: "Stay Grounded. Think Clear. Win with Confidence.",
    shortDescription: "A powerful combination of Black Tourmaline, Smoky Quartz, Lapis Lazuli, and Garnet for legal focus, protection, and inner courage.",
    fullDescription: "Fairness. Focus. Faith. Victory. Designed to support individuals navigating complex legal proceedings, negotiations, or decisions. Combines grounding stones that dispel negativity with truth-seeking minerals that encourage clear thinking. You deserve justice. Stay strong. Keep going.",
    stones: [
      { name: "Citrine", description: "Attracts success and abundance" },
      { name: "Smoky Quartz", description: "Dispels negativity and stress" },
      { name: "Lapis Lazuli", description: "Enhances wisdom and truth" },
      { name: "Garnet", description: "Boosts courage and determination" },
      { name: "Yellow Tiger Eye", description: "Enhances focus and confidence" },
      { name: "Black Tourmaline", description: "Protects against negative energies" }
    ],
    attributes: [
      "Enhances Focus",
      "Protects From Negativity",
      "Supports Legal Success",
      "Promotes Clear Thinking",
      "Brings Positive Outcomes",
      "Strengthens Inner Power"
    ],
    image: "assets/images/products/court-case-victory-studio.jpg",
    posterImage: "assets/images/products/court-case-victory-poster.jpg",
    imageAlt: "Court Case Victory Bracelet (BR02-026) - Justice & Strength",
    isFeatured: true
  },
  {
    id: "BR02-062",
    code: "BR02-062",
    name: "PCOD & Fertility Wellness Bracelet",
    category: "health-wellness",
    categoryLabel: "Health & Vitality",
    positioning: "Harmony. Balance. Nurture. Support Your Journey to Wellness.",
    tagline: "A gentle reminder to love, heal & flourish.",
    shortDescription: "Soothing Moonstone, calming Howlite, Rose Quartz, and Strawberry Quartz assembled to honor feminine rhythm and emotional balance.",
    fullDescription: "Harmony. Balance. Nurture. Handcrafted with gentle mineral stones to serve as an everyday mindfulness talisman, supporting emotional calm, reduced stress, and nurturing self-love on your personal wellness journey.",
    stones: [
      { name: "Howlite", description: "Calms the mind and reduces stress" },
      { name: "Rose Quartz", description: "Promotes self-love and emotional healing" },
      { name: "Moonstone", description: "Supports hormonal balance" },
      { name: "Strawberry Quartz", description: "Encourages fertility and reproductive health" }
    ],
    attributes: [
      "Natural Stones",
      "Handmade With Care",
      "Supports Hormonal Balance",
      "Promotes Wellness & Inner Peace"
    ],
    disclaimer: "These descriptions reflect the intended spiritual/wellness positioning of the collection and are not medical advice or guarantees of health outcomes.",
    image: "assets/images/products/pcod-fertility-studio.jpg",
    posterImage: "assets/images/products/pcod-fertility-poster.jpg",
    imageAlt: "PCOD & Fertility Wellness Bracelet (BR02-062) - Harmony & Balance",
    isFeatured: true
  },
  {
    id: "BR02-066",
    code: "BR02-066",
    name: "Quit Addiction & Inner Freedom Bracelet",
    category: "health-wellness",
    categoryLabel: "Health & Vitality",
    positioning: "Break Free. Heal Deeply. Live Fully.",
    tagline: "Empower your mind. Strengthen your soul. Choose freedom every day.",
    shortDescription: "A transformative 10-stone composition including Lepidolite, Selenite, Smoky Quartz, and Black Obsidian to anchor sobriety and emotional poise.",
    fullDescription: "One day at a time. You are stronger than you think. Engineered as an intentional anchor during personal recovery and lifestyle transformation. Each stone supports clearing urges, restoring self-worth, and grounding the soul in mindful clarity.",
    stones: [
      { name: "Smoky Quartz", description: "Helps release negative emotions" },
      { name: "Sodalite", description: "Promotes rational thinking" },
      { name: "Lepidolite", description: "Relieves stress and anxiety" },
      { name: "Selenite", description: "Promotes mental clarity" },
      { name: "Citrine", description: "Attracts positivity and abundance" },
      { name: "Red Carnelian", description: "Boosts motivation and courage" },
      { name: "Amethyst", description: "Supports emotional healing" },
      { name: "Black Obsidian", description: "Shields from negativity" },
      { name: "Clear Quartz", description: "Amplifies positive energy" },
      { name: "Rose Quartz", description: "Encourages self-love and compassion" }
    ],
    attributes: [
      "Supports Addiction Recovery",
      "Calms Mind & Reduces Cravings",
      "Emotional Balance & Inner Strength",
      "Protects from Negativity & Stress",
      "Encourages Healing & Personal Growth"
    ],
    image: "assets/images/products/quit-addiction-studio.jpg",
    posterImage: "assets/images/products/quit-addiction-poster.jpg",
    imageAlt: "Quit Addiction Bracelet (BR02-066) - Freedom & Healing",
    isFeatured: true
  },
  {
    id: "BR02-065",
    code: "BR02-065",
    name: "Politician & Leadership Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Lead with Wisdom. Inspire with Integrity.",
    tagline: "Empowering leaders with clarity, confidence and compassion.",
    shortDescription: "Sacred 7 Mukhi Rudraksha paired with Blue Lace Agate, Lapis Lazuli, and Tiger Eye for authoritative poise and persuasive communication.",
    fullDescription: "Strong mind. Clear vision. Compassionate leadership. Designed for public figures, executives, and leaders who speak before audiences and carry organizational responsibility. Anchors calm speech, strategic decision making, and elevated public reputation.",
    stones: [
      { name: "7 Mukhi Nepal Rudraksha", description: "Brings wisdom and inner strength" },
      { name: "Black Obsidian", description: "Shields from negative energy" },
      { name: "Yellow Tiger Eye", description: "Enhances confidence" },
      { name: "Citrine", description: "Attracts success and abundance" },
      { name: "Blue Lace Agate", description: "Promotes calm communication" },
      { name: "Lapis Lazuli", description: "Enhances wisdom and truth" },
      { name: "Amethyst", description: "Promotes calm and clarity" },
      { name: "Red Jasper", description: "Boosts stamina and determination" },
      { name: "Green Jade", description: "Attracts harmony and prosperity" },
      { name: "Moonstone", description: "Enhances intuition and emotional stability" }
    ],
    attributes: [
      "Enhances Leadership Ability",
      "Improves Focus & Decision Making",
      "Builds Trust & Strong Relationships",
      "Provides Protection & Grounding",
      "Supports Success & Reputation"
    ],
    image: "assets/images/products/politician-leadership-studio.jpg",
    posterImage: "assets/images/products/politician-leadership-poster.jpg",
    imageAlt: "Politician & Leadership Bracelet (BR02-065) - Wisdom & Integrity",
    isFeatured: true
  },
  {
    id: "BR02-029",
    code: "BR02-029",
    name: "Diabetic Control & Health Balance Bracelet",
    category: "health-wellness",
    categoryLabel: "Health & Vitality",
    positioning: "Balance Your Body. Stabilize Your Health. Live Better.",
    tagline: "Natural Support for Healthy Blood Sugar Balance.",
    shortDescription: "Bloodstone, Red Carnelian, Amethyst, and Green Aventurine arranged as a daily wellness reminder for mindful metabolic balance.",
    fullDescription: "Balanced today. Healthy tomorrow. A natural step towards a better you. Handcrafted to serve as an everyday tactile anchor, encouraging regular wellness discipline, stress reduction, and vital lifestyle equilibrium.",
    stones: [
      { name: "Red Carnelian", description: "Improves metabolism" },
      { name: "Bloodstone", description: "Detoxifies and purifies" },
      { name: "Clear Quartz", description: "Enhances energy" },
      { name: "Amethyst", description: "Supports hormonal balance" },
      { name: "Green Aventurine", description: "Supports overall well-being" }
    ],
    attributes: [
      "Supports Healthy Blood Sugar Balance",
      "Boosts Immune Function",
      "Improves Metabolism",
      "Promotes Heart Health",
      "Reduces Stress & Enhances Well-Being"
    ],
    disclaimer: "These descriptions reflect the intended spiritual/wellness positioning of the collection and are not medical advice or guarantees of health outcomes.",
    image: "assets/images/products/diabetic-control-studio.jpg",
    posterImage: "assets/images/products/diabetic-control-poster.jpg",
    imageAlt: "Diabetic Control Bracelet (BR02-029) - Metabolic Balance",
    isFeatured: false
  },
  {
    id: "BR02-001",
    code: "BR02-001",
    name: "Activate Luck Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Wear Positivity. Attract Abundance. Activate Luck.",
    tagline: "A radiant blend designed to attract good fortune and align positive opportunities.",
    shortDescription: "A luminous union of vibrant Turquoise, golden Citrine, Moonstone, and Clear Quartz dedicated to serendipity and favorable timing.",
    fullDescription: "Wear positivity. Attract abundance. Activate luck. Combining energetic stones that elevate optimistic frequency and shield against self-doubt, inviting fortuitous encounters and joyful breakthroughs.",
    stones: [
      { name: "Citrine", description: "Attracts abundance" },
      { name: "Moonstone", description: "Enhances intuition" },
      { name: "Clear Quartz", description: "Amplifies energy" },
      { name: "Turquoise", description: "Promotes protection" }
    ],
    attributes: [
      "Attracts Good Luck",
      "Balances Energy",
      "Enhances Focus",
      "Inspires Positivity"
    ],
    image: "assets/images/products/activate-luck-studio.jpg",
    posterImage: "assets/images/products/activate-luck-poster.jpg",
    imageAlt: "Activate Luck Bracelet (BR02-001) - Good Fortune",
    isFeatured: true
  },
  {
    id: "BR02-081",
    code: "BR02-081",
    name: "Triple Protection Bracelet",
    category: "justice-protection",
    categoryLabel: "Protection & Strength",
    positioning: "Shield Your Energy. Stay Grounded. Live Fearless.",
    tagline: "Protection. Strength. Balance. Wear your shield. Embrace your power.",
    shortDescription: "The revered defensive trio uniting Black Obsidian, lustrous Hematite, and golden Yellow Tiger Eye for complete energetic shielding.",
    fullDescription: "Protection. Strength. Balance. Wear your shield. Embrace your power. Black Obsidian dispels external environmental negativity, Hematite anchors deep rooted focus, and Yellow Tiger Eye empowers your inner confidence against doubt.",
    stones: [
      { name: "Black Obsidian", description: "Shields from negativity" },
      { name: "Hematite", description: "Enhances focus and grounding" },
      { name: "Yellow Tiger Eye", description: "Boosts courage and confidence" }
    ],
    attributes: [
      "Protects Your Energy Field",
      "Promotes Emotional Stability",
      "Supports Grounding and Inner Strength"
    ],
    image: "assets/images/products/triple-protection-studio.jpg",
    posterImage: "assets/images/products/triple-protection-poster.jpg",
    imageAlt: "Triple Protection Bracelet (BR02-081) - Shield & Grounding",
    isFeatured: true
  },
  {
    id: "BR02-013",
    code: "BR02-013",
    name: "Better Health & Well-Being Bracelet",
    category: "health-wellness",
    categoryLabel: "Health & Vitality",
    positioning: "Balance Your Body, Calm Your Mind. Elevate Your Life.",
    tagline: "Harmony for Body, Mind & Spirit. Feel better. Live better. Be your best.",
    shortDescription: "Porous black Lava stone paired with Amethyst, Citrine, Lapis Lazuli, and Green Aventurine for grounding wellness and stamina.",
    fullDescription: "Harmony for Body, Mind & Spirit. Hand-strung with natural volcanic Lava stone and high-frequency healing crystals to facilitate deep breathing, emotional equilibrium, and enduring vitality in day-to-day living.",
    stones: [
      { name: "Lava", description: "Provides strength and emotional stability" },
      { name: "Amethyst", description: "Promotes calmness and mental clarity" },
      { name: "Citrine", description: "Attracts abundance and positivity" },
      { name: "Green Aventurine", description: "Brings luck and emotional balance" },
      { name: "Lapis Lazuli", description: "Enhances wisdom and self-awareness" },
      { name: "Black Obsidian", description: "Protects against negative energies" },
      { name: "Clear Quartz", description: "Amplifies energy and intention clearly" }
    ],
    attributes: [
      "Supports Overall Health",
      "Reduces Stress & Anxiety",
      "Promotes Inner Balance",
      "Boosts Energy & Vitality",
      "Protects Mind & Body",
      "Enhances Focus & Well-Being"
    ],
    image: "assets/images/products/better-health-studio.jpg",
    posterImage: "assets/images/products/better-health-poster.jpg",
    imageAlt: "Better Health & Well-Being Bracelet (BR02-013) - Body Mind Spirit",
    isFeatured: true
  },
  {
    id: "BR02-003",
    code: "BR02-003",
    name: "Anger Control & Emotional Peace Bracelet",
    category: "love-harmony",
    categoryLabel: "Love & Emotional Peace",
    positioning: "Calm your mind. Channel your energy. Choose peace.",
    tagline: "Embrace calm. Embrace you. A soothing antidote to tension and turbulent emotions.",
    shortDescription: "Soft Rose Quartz, soothing Green Aventurine, Lapis Lazuli, and Obsidian aligned to cool heated reactions and restore centered poise.",
    fullDescription: "Calm your mind. Channel your energy. Choose peace. Embrace calm. Embrace you. Rose Quartz softens reactive impulses with unconditional compassion, while Black Obsidian absorbs agitated energy and Green Aventurine invites tranquil harmony.",
    stones: [
      { name: "Rose Quartz", description: "Promotes love and emotional healing" },
      { name: "Black Obsidian", description: "Absorbs negativity and protects" },
      { name: "Clear Quartz", description: "Amplifies energy and intentions" },
      { name: "Green Aventurine", description: "Brings luck and opportunities" },
      { name: "Lapis Lazuli", description: "Enhances wisdom and self-awareness" },
      { name: "Citrine", description: "Attracts success and positivity" }
    ],
    attributes: [
      "Calms Your Mind",
      "Emotional Balance",
      "Positive Energy",
      "Inner Strength",
      "Peace & Harmony"
    ],
    image: "assets/images/products/anger-control-studio.jpg",
    posterImage: "assets/images/products/anger-control-poster.jpg",
    imageAlt: "Anger Control Bracelet (BR02-003) - Calm & Peace",
    isFeatured: false
  },
  {
    id: "BR02-075",
    code: "BR02-075",
    name: "Stress & Anxiety Relief Bracelet",
    category: "love-harmony",
    categoryLabel: "Love & Emotional Peace",
    positioning: "Calm Mind. Open Heart. Inner Peace.",
    tagline: "A gentle duo of Amethyst and Rhodochrosite dedicated to deep breath, tranquility, and soft release.",
    shortDescription: "Harmonious blend of calming violet Amethyst and heart-soothing pink Rhodochrosite designed to release emotional tension.",
    fullDescription: "Calm mind. Open heart. Inner peace. Crafted with rhythmic patterns of calming Amethyst to still racing thoughts and Rhodochrosite to dissolve anxiety through compassionate self-acceptance and emotional tenderness.",
    stones: [
      { name: "Amethyst", description: "Promotes calmness and emotional balance" },
      { name: "Rhodochrosite", description: "Encourages self-love and emotional healing" }
    ],
    attributes: [
      "Reduces Stress & Anxiety",
      "Promotes Emotional Healing",
      "Supports Inner Peace & Calm",
      "Encourages Positive Energy"
    ],
    image: "assets/images/products/stress-anxiety-relief-studio.jpg",
    posterImage: "assets/images/products/stress-anxiety-relief-poster.jpg",
    imageAlt: "Stress & Anxiety Relief Bracelet (BR02-075) - Serenity",
    isFeatured: true
  },
  {
    id: "BR02-058",
    code: "BR02-058",
    name: "Money Magnet Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Attract Wealth. Create Abundance. Live Your Purpose.",
    tagline: "Align Your Energy. Attract Prosperity. Live Abundantly.",
    shortDescription: "An eight-mineral abundance powerhouse pairing Pyrite, Citrine, Green Aventurine, and Malachite for exponential financial attraction.",
    fullDescription: "Natural stones. Powerful energy. Limitless possibilities. Align your energy. Attract prosperity. Live abundantly. Green Aventurine attracts uncalculated luck, Pyrite fuels executive willpower, Malachite breaks stagnant financial patterns, and Citrine anchors joy in wealth.",
    stones: [
      { name: "Green Aventurine", description: "Attracts opportunity" },
      { name: "Pyrite", description: "Enhances willpower" },
      { name: "Clear Quartz", description: "Amplifies intention" },
      { name: "Malachite", description: "Supports transformation" },
      { name: "Yellow Tiger Eye", description: "Boosts confidence" },
      { name: "Hematite", description: "Promotes focus" },
      { name: "Citrine", description: "Attracts abundance" },
      { name: "Amethyst", description: "Brings clarity" }
    ],
    attributes: [
      "Attracts Wealth",
      "Financial Growth",
      "Balances Energy",
      "Protects from Negativity",
      "Perfect for Success Seekers"
    ],
    image: "assets/images/products/money-magnet-studio.jpg",
    posterImage: "assets/images/products/money-magnet-poster.jpg",
    imageAlt: "Money Magnet Bracelet (BR02-058) - Wealth & Abundance",
    isFeatured: true
  },
  {
    id: "BR02-040",
    code: "BR02-040",
    name: "Government Job & Career Power Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Power & Protection for Your Career Journey.",
    tagline: "Focus · Protection · Success. Designed for civil service, public examinations, and career milestones.",
    shortDescription: "Vibrant Turquoise, golden Citrine, and protective Black Tourmaline assembled to enhance examination focus and interview confidence.",
    fullDescription: "Power & Protection for Your Journey. Focus. Protection. Success. Designed to support aspirants preparing for competitive examinations and recruitment selections by maintaining emotional calm, sharp memory retention, and resilient protective shielding.",
    stones: [
      { name: "Citrine", description: "Attracts abundance" },
      { name: "Turquoise", description: "Promotes confidence" },
      { name: "Black Tourmaline", description: "Shields from negative energy" }
    ],
    attributes: [
      "Enhances Focus",
      "Protective Shield",
      "Supports Exam Success",
      "Confidence in Selection"
    ],
    image: "assets/images/products/government-job-studio.jpg",
    posterImage: "assets/images/products/government-job-poster.jpg",
    imageAlt: "Government Job Bracelet (BR02-040) - Power & Success",
    isFeatured: false
  },
  {
    id: "BR02-077",
    code: "BR02-077",
    name: "Success Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Focus · Confidence · Achievement",
    tagline: "Wear your intentions. Achieve your dreams. A powerful blend of natural stones to align your energy with success.",
    shortDescription: "A triad of deep Red Agate, luminous Green Jade, and golden Citrine to empower ambitious milestones and sustained drive.",
    fullDescription: "Focus. Confidence. Achievement. Wear your intentions. Achieve your dreams. Red Agate fuels primal stamina and courage, Green Jade attracts good fortune and harmonious timing, and golden Citrine infuses each step with joyful certainty.",
    stones: [
      { name: "Red Agate", description: "Boosts courage and motivation" },
      { name: "Green Jade", description: "Attracts luck and prosperity" },
      { name: "Citrine", description: "Enhances positivity" }
    ],
    attributes: [
      "Focus",
      "Confidence",
      "Achievement",
      "Success"
    ],
    image: "assets/images/products/success-studio.jpg",
    posterImage: "assets/images/products/success-poster.jpg",
    imageAlt: "Success Bracelet (BR02-077) - Achievement & Focus",
    isFeatured: true
  },
  {
    id: "BR02-018",
    code: "BR02-018",
    name: "Business Man & Enterprise Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Focus Your Mind. Make Smart Moves. Achieve More.",
    tagline: "Success is a Habit. Wear Your Intent. Think clear. Act bold. Achieve greatness.",
    shortDescription: "A calculated composition of Green Aventurine, Amethyst, Turquoise, and Obsidian designed for entrepreneurs, investors, and traders.",
    fullDescription: "Focus your mind. Make smart moves. Achieve more. Success is a habit. Wear your intent. Think clear. Act bold. Achieve greatness. Formulated specifically to elevate analytical acuity, intuitive business instincts, and protective resilience in high-stakes negotiations.",
    stones: [
      { name: "Green Aventurine", description: "Attracts luck and opportunities" },
      { name: "Amethyst", description: "Enhances focus and decision making" },
      { name: "Clear Quartz", description: "Amplifies energy and intentions" },
      { name: "Turquoise", description: "Encourages clear communication" },
      { name: "Black Obsidian", description: "Protects against negativity" },
      { name: "Citrine", description: "Attracts abundance and success" }
    ],
    attributes: [
      "Boosts Focus & Productivity",
      "Provides Protection",
      "Enhances Clarity",
      "Attracts Success & Prosperity",
      "Promotes Balance & Confidence",
      "Supports Goals & Ambition"
    ],
    image: "assets/images/products/business-man-studio.jpg",
    posterImage: "assets/images/products/business-man-poster.jpg",
    imageAlt: "Business Man Bracelet (BR02-018) - Entrepreneurship & Strategy",
    isFeatured: true
  },
  {
    id: "BR02-030",
    code: "BR02-030",
    name: "Debt & Loan Clearance Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Release the Burden. Clear the Path. Welcome Freedom.",
    tagline: "Clear Debt. Attract Abundance. Build a Secure and Prosperous Future.",
    shortDescription: "Garnet, Smoky Quartz, Hematite, and Clear Quartz designed to dissolve debt anxiety and cultivate disciplined financial momentum.",
    fullDescription: "Clear debt. Clear mind. Create freedom. You deserve a life of financial freedom. Release the burden. Clear the path. Welcome freedom. Smoky Quartz cleanses financial dread, deep red Garnet stimulates persistent grit, and Hematite anchors strict, grounded budget discipline.",
    stones: [
      { name: "Clear Quartz", description: "Amplifies energy" },
      { name: "Smoky Quartz", description: "Dispels negativity" },
      { name: "Garnet", description: "Boosts determination" },
      { name: "Hematite", description: "Promotes grounding" }
    ],
    attributes: [
      "Supports Debt Clearance",
      "Attracts Financial Stability",
      "Protects from Financial Stress",
      "Promotes Peace of Mind",
      "Opens Doors to New Opportunities"
    ],
    image: "assets/images/products/debt-loan-clearance-studio.jpg",
    posterImage: "assets/images/products/debt-loan-clearance-poster.jpg",
    imageAlt: "Debt & Loan Clearance Bracelet (BR02-030) - Financial Relief",
    isFeatured: true
  },
  {
    id: "BR02-050",
    code: "BR02-050",
    name: "Job Manifestation Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Align Energy. Attract Opportunity. Achieve Success.",
    tagline: "Handcrafted with natural mineral stones to align frequencies with new career milestones.",
    shortDescription: "Handcrafted with natural Red Jasper, Pyrite, Green Aventurine, and Citrine to align energy and attract professional opportunities.",
    fullDescription: "A focused intention piece designed to align your energetic frequency with career progression, abundance, and positive interview momentum. Each stone is carefully positioned to resonate with professional confidence and success.",
    stones: [
      { name: "Red Jasper", description: "Enhances confidence" },
      { name: "Green Aventurine", description: "Brings luck and opportunity" },
      { name: "Pyrite", description: "Attracts abundance" },
      { name: "Citrine", description: "Promotes positivity" }
    ],
    attributes: [
      "Natural Mineral Stones",
      "Handcrafted Detailing",
      "Positive Career Energy",
      "Unisex Intention Design"
    ],
    image: "assets/images/products/job-manifestation-studio.jpg",
    posterImage: "assets/images/products/job-manifestation-poster.jpg",
    imageAlt: "Job Manifestation Bracelet (BR02-050) - Career & Success",
    isFeatured: false
  },
  {
    id: "BR02-089",
    code: "BR02-089",
    name: "Intuitive Tarot Reading & Psychic Guidance Bracelet",
    category: "justice-protection",
    categoryLabel: "Protection & Strength",
    positioning: "Align Your Energy. Trust Your Intuition.",
    tagline: "One Bracelet. Infinite Guidance. Tap into clarity, protection, and inner wisdom every day.",
    shortDescription: "Four grounding and amplifying mineral stones curated for intuitive insight, energetic shielding, and clarity.",
    fullDescription: "One Bracelet. Infinite Guidance. Crafted to support practitioners, readers, and seekers in tapping into clarity, shielding against negative energy, and connecting with grounded inner wisdom throughout daily practices.",
    stones: [
      { name: "Clear Quartz", description: "Amplifies intentions" },
      { name: "Black Tourmaline", description: "Shields against negative energy" },
      { name: "Sodalite", description: "Enhances intuition and insight" },
      { name: "Hematite", description: "Promotes focus and grounding" }
    ],
    attributes: [
      "Natural Mineral Stones",
      "Handcrafted Composition",
      "Energy Alignment",
      "Intuitive Guidance"
    ],
    image: "assets/images/products/intuitive-tarot-studio.jpg",
    posterImage: "assets/images/products/intuitive-tarot-poster.jpg",
    imageAlt: "Intuitive Tarot Reading Bracelet (BR02-089) - Intuition & Guidance",
    isFeatured: false
  },
  {
    id: "BR02-059",
    code: "BR02-059",
    name: "Name & Fame Bracelet",
    category: "prosperity-career",
    categoryLabel: "Prosperity & Career",
    positioning: "Wear Your Legacy. Live Your Light.",
    tagline: "Crafted with powerful natural stones to ignite your confidence and elevate your presence. Be seen. Be heard. Be remembered.",
    shortDescription: "A regal spectrum of Sunstone, Red Carnelian, Lapis Lazuli, Citrine, and Pyrite for magnetic charisma and renown.",
    fullDescription: "Wear your legacy. Live your light. Crafted with powerful natural stones to ignite your confidence and elevate your presence. Be seen. Be heard. Be remembered. Designed for creators, performers, and public visionaries to project authoritative light and magnetic goodwill.",
    stones: [
      { name: "Red Carnelian", description: "Boosts confidence and motivation" },
      { name: "Lapis Lazuli", description: "Enhances wisdom and self-expression" },
      { name: "Citrine", description: "Attracts abundance and success" },
      { name: "Sunstone", description: "Brings positivity and vitality" },
      { name: "Yellow Tiger Eye", description: "Enhances courage and focus" },
      { name: "Pyrite", description: "Attracts wealth and protection" }
    ],
    attributes: [
      "Enhances Recognition",
      "Builds Self-Confidence",
      "Improves Social Presence",
      "Supports Career Growth",
      "Provides Energy Protection",
      "Brings Positivity & Success"
    ],
    image: "assets/images/products/name-fame-studio.jpg",
    posterImage: "assets/images/products/name-fame-poster.jpg",
    imageAlt: "Name & Fame Bracelet (BR02-059) - Recognition & Charisma",
    isFeatured: true
  },
  {
    id: "BR02-082",
    code: "BR02-082",
    name: "Weight Loss & Vitality Bracelet",
    category: "health-wellness",
    categoryLabel: "Health & Vitality",
    positioning: "Support Your Goals. Love Your Journey.",
    tagline: "5 Stones. 5 Powers. 1 You.",
    shortDescription: "Red Agate, Green Aventurine, Sunstone, Clear Quartz, and Black Obsidian united on natural stone to support disciplined vitality.",
    fullDescription: "Support your goals. Love your journey. 5 stones. 5 powers. 1 you. Formulated to act as an aesthetic, tactile mindfulness reminder throughout the day, inspiring mindful nourishment, regular movement, metabolic motivation, and body-loving gratitude.",
    stones: [
      { name: "Red Agate", description: "Boosts metabolism" },
      { name: "Green Aventurine", description: "Supports healthy habits" },
      { name: "Sunstone", description: "Promotes motivation" },
      { name: "Clear Quartz", description: "Enhances clarity" },
      { name: "Black Obsidian", description: "Blocks negative energy" }
    ],
    attributes: [
      "Boosts Metabolism",
      "Supports Healthy Habits",
      "Promotes Motivation",
      "Enhances Clarity",
      "Blocks Negative Energy"
    ],
    disclaimer: "These descriptions reflect the intended spiritual/wellness positioning of the collection and are not medical advice or guarantees of health outcomes.",
    image: "assets/images/products/weight-loss-studio.jpg",
    posterImage: "assets/images/products/weight-loss-poster.jpg",
    imageAlt: "Weight Loss & Vitality Bracelet (BR02-082) - Wellness & Motivation",
    isFeatured: true
  }
];
