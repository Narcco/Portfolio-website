// Single source of truth for the entire website
const siteData = {
  profile: {
    name: "Arad Hazari",
    title: "Life Sciences Student - Research-Oriented - Pre-Med",
    intro:
      "I am a Life Sciences student with strong academic performance and a growing focus on research, leadership, and clinical experience. My interests lie in biology, medicine, and long-term academic excellence.",
    gpa: 3.94,
    university: "York University",
    highlights: [
      "Top academic standing with a 3.94/4.0 GPA",
      "Research-oriented mindset with scientific rigor",
      "Leadership experience through student organizations",
      "Long-term focus on medicine and biology",
      "Strong foundation in quantitative reasoning",
      "Committed to continuous growth and discipline",
    ],
    focus: [
      "Build research depth and lab experience",
      "Expand clinical exposure and service",
      "Strengthen scientific communication skills",
      "Maintain academic excellence with balance",
    ],
    skills: [
      "Biology",
      "Chemistry",
      "Scientific Writing",
      "Data Interpretation",
      "Leadership",
      "Organization",
      "Public Speaking",
      "Teamwork",
    ],
    metrics: [
      { label: "GPA", value: "3.94 / 4.0" },
      { label: "Research", value: "Active" },
      { label: "Leadership", value: "Founder" },
    ],
  },

  navigation: [
    { label: "Home", href: "index.html" },
    { label: "Academics", href: "academics.html" },
    { label: "Experience", href: "experience.html" },
    { label: "Contact", href: "contact.html" },
  ],

  academics: {
    degree: "BSc Life Sciences",
    gpa: 3.94,
    scale: "4.0",
    university: "York University",
    highlights: [
      "High academic standing with consistent top performance",
      "Strong background in biology, chemistry, and quantitative reasoning",
      "Focused on long-term academic and research excellence",
    ],
    coursework: [
      "Cell Biology",
      "Genetics",
      "Biochemistry",
      "Organic Chemistry",
      "Statistics for Life Sciences",
      "Human Physiology",
      "Research Methods",
      "Microbiology",
    ],
    awards: [
      "Dean's List (multiple terms)",
      "High Academic Standing",
      "Merit-based recognition for performance",
    ],
    activities: [
      "Study Success Club - Founder & President",
      "Peer academic mentoring",
      "Volunteer tutoring and guidance",
    ],
    focus: [
      "Biomedical research foundations",
      "Clinical exposure and patient care context",
      "Scientific writing and communication",
    ],
  },

  experienceAreas: {
    Research:
      "Hands-on research assistance, data interpretation, and scientific method.",
    Leadership:
      "Organizing teams, mentoring peers, and driving academic initiatives.",
    Clinical:
      "Patient-focused exposure and healthcare environment experience.",
    Volunteering:
      "Community service with emphasis on empathy and responsibility.",
  },

  experienceHighlights: [
    "Research and leadership experiences aligned with pre-med goals",
    "Clear progression in responsibility and impact",
    "Focus on service, discipline, and academic growth",
  ],

  experienceMetrics: [
    { label: "Total Roles", value: "2+" },
    { label: "Core Areas", value: "Research, Leadership" },
    { label: "Focus", value: "Academic + Clinical Growth" },
  ],

  experiences: [
    {
      category: "Research",
      title: "Undergraduate Research Assistant",
      organization: "York University",
      period: "2025 - Present",
      description:
        "Engaged in undergraduate-level research with an emphasis on scientific thinking, data interpretation, and academic rigor.",
      highlights: [
        "Assisted with literature review and data analysis tasks",
        "Practiced accurate record-keeping and lab discipline",
        "Supported team collaboration and research communication",
      ],
      tags: ["Research", "Biology"],
    },
    {
      category: "Leadership",
      title: "Founder & President",
      organization: "Study Success Club",
      period: "2025 - Present",
      description:
        "Founded and led an academic-focused student organization aimed at improving study habits, discipline, and academic performance.",
      highlights: [
        "Designed study frameworks for student success",
        "Led regular sessions and peer mentoring",
        "Built a community centered on accountability",
      ],
      tags: ["Leadership", "Education"],
    },
  ],

  contact: {
    email: "aradhz@my.yorku.ca",
    location: "Toronto, Ontario",
    availability: [
      "Weekdays after classes",
      "Weekend mornings for longer meetings",
      "Open to virtual or in-person chats",
    ],
    responseTime: "Typically within 24-48 hours.",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "ResearchGate", href: "#" },
      { label: "Google Scholar", href: "#" },
    ],
    faq: [
      {
        q: "What types of opportunities are you looking for?",
        a: "Research assistant roles, clinical exposure, and leadership opportunities.",
      },
      {
        q: "Are you open to collaboration?",
        a: "Yes - I welcome collaborations related to life sciences and education.",
      },
      {
        q: "Do you provide tutoring or mentoring?",
        a: "I'm open to mentoring students in study strategies and discipline.",
      },
    ],
  },
};

/* Apply local overrides (dashboard edits) */
const overrideRaw = localStorage.getItem("siteDataOverride");

if (overrideRaw) {
  const override = JSON.parse(overrideRaw);

  if (override.profile) {
    siteData.profile = {
      ...siteData.profile,
      ...override.profile,
    };
  }

  if (override.academics) {
    siteData.academics = {
      ...siteData.academics,
      ...override.academics,
    };
  }

  if (override.experiences) {
    siteData.experiences = [...override.experiences];
  }
}
