import {
  Blogging,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  Gaming,
  Google,
  Reading,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  SkillPhotoshop,
  SkillSketch,
  SkillTrello,
  SkillWireframe,
  SkillXd,
  Travelling,
  Udemy,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Jul 2019",
      endDate: "",
      position: "Freelance Designer",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: CompanyLogo1,
        name: "J Creative Solutions",
        info: "Digital agency in Minsk, Belarus",
      },
      description:
        "Created visuals for digital marketing channels such as social media, promo web and online ads. Developed visual language from scratch or following the branding guidelines. Designed presentations for clients and indoor purposes.",
      links: [
        {
          label: "Agency projects",
          url: "",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "Mar 2014",
      endDate: "Feb 2017",
      position: "SEO Specialist → Lead SEO Specialist",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: CompanyLogo2,
        name: "JOZ.by",
        info: "Online bookstore in Minsk, Belarus",
      },
      description:
        "Improved website performance and user experience of the biggest online bookstore OZ in Belarus, being a part of the marketing team, I interpreted Google Analytics data to IT, content and marketing colleagues. Advised on tech and content optimization strategy, automated processes, provided reports, increased organic traffic up to 150%.",
      links: [
        {
          label: "Annual company report 2016",
          url: "",
        },
      ],
    },
    {
      id: "prof_exp_3",
      startDate: "Aug 2012",
      endDate: "Nov 2013",
      position: "Content Specialist",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        logo: CompanyLogo3,
        name: "21vek Private Ltd.",
        info: "E-commerce store in Minsk, Belarus",
      },
      description:
        "Added and modified the product information, prepared images and text for the website, developed categories filters, ensure all info is correct in the catalogue with the goal of improving online shopper experience.",
      links: [],
    },
    {
      id: "prof_exp_4",
      startDate: "Aug 2011",
      endDate: "Nov 2014",
      position: "Software Support Engineer",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        logo: CompanyLogo4,
        name: "Integral",
        info: "Microelectronics factory in Minsk, Belarus",
      },
      description:
        "Supported retail accounting system LS Trade, troubleshoot technical problems.",
      links: [],
    },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Interface Design: Web & Mobile",
      institution: "IT-Academy",
      degree: "Diploma",
      startDate: "2022",
      endDate: "2023",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Fundamentals of UX/UI",
      institution: "Skillshare",
      degree: "Beginner Course",
      startDate: "2021",
      endDate: "2022",
    },
    {
      id: "edu_3",
      icon: DiamondLgOrange,
      course: "CG Artist",
      institution: "Polygon CG School",
      degree: "Graduate",
      startDate: "2018",
      endDate: "2021",
    },
    {
      id: "edu_4",
      icon: DiamondLgPink,
      course: "Graphic Design",
      institution: "Belarusian State Academy of Arts",
      degree: "Postgraduate Diploma",
      startDate: "2015",
      endDate: "2018",
    },
    {
      id: "edu_5",
      icon: DiamondLgYellow,
      course: "SEO Specialist Workshop",
      institution: "ARTOX Media",
      degree: "",
      startDate: "2015",
      endDate: "2017",
    },
    {
      id: "edu_6",
      icon: DiamondLgBlue,
      course: "Information Technology Software",
      institution:
        "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor Degree",
      startDate: "2011",
      endDate: "2015 ",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillFigma,
      name: "Figma",
      description: "UI Design, Protoyping",
    },
    {
      id: "skill_2",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_3",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_4",
      icon: SkillPhotoshop,
      name: "Adobe Photoshop",
      description: "Picture Edit & Transformation",
    },
    {
      id: "skill_5",
      icon: SkillSketch,
      name: "Sketch",
      description: "UI Design & Prototyping",
    },
    {
      id: "skill_6",
      icon: SkillTrello,
      name: "Trello",
      description: "Project Management Knowledge",
    },
    {
      id: "skill_7",
      icon: SkillWireframe,
      name: "Wireframing",
      description: "Creating wireframes prior to design",
    },
    {
      id: "skill_8",
      icon: SkillXd,
      name: "Adobe XD",
      description: "Adobe Tool for UI Design",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: Coursera,
      provider: "Coursera",
      course: "UI/UX Advance Course",
      startDate: "Dec 2021",
      endDate: "Feb 2022",
    },
    {
      id: "cert_award_2",
      icon: Google,
      provider: "Google",
      course: "Google UX Design Professional Certificate",
      startDate: "Mar 2021",
      endDate: "Jun 2021",
    },
    {
      id: "cert_award_3",
      icon: Udemy,
      provider: "Udemy",
      course: "Fundamental of UI/UX for Students",
      startDate: "Jun 2020",
      endDate: "Sept 2020",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Blogging,
      name: "Blogging",
    },
  ],
};

export default DATA;
