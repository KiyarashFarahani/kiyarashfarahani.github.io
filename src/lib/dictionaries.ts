export type Locale = "en" | "fa";

export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About Me",
      reach: "Reach Me",
    },
    hero: {
      firstName: "Kiyarash",
      lastName: "Farahani",
      subtitle: "Website & Mobile Application Developer",
      cta: "View Projects",
      ctaContact: "Get in Touch",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of projects I've built across mobile, web, and systems programming.",
      noDescription: "No description provided.",
      archived: "Archived",
    },
    about: {
      title: "About Me",
      p1: "I'm a developer from Iran with a passion for building clean, performant applications across platforms. From native Android apps to cross-platform Flutter projects and modern web experiences, I enjoy working across the full stack.",
      p2: "My work spans mobile development (Kotlin, Flutter), systems programming (C++), web technologies (TypeScript, React, Next.js), and smart contract development (Solidity). I'm driven by curiosity and a desire to ship things that people actually use.",
      technologies: "Technologies",
      focusAreas: "Focus Areas",
      areas: [
        "Mobile Application Development",
        "Full-Stack Web Applications",
        "Cross-Platform Solutions",
        "UI/UX Design",
      ],
    },
    reach: {
      title: "Reach Me",
      subtitle: "Got a project in mind or just want to say hello? Feel free to reach out.",
    },
  },
  fa: {
    nav: {
      home: "خانه",
      projects: "پروژه‌ها",
      about: "درباره من",
      reach: "تماس",
    },
    hero: {
      firstName: "کیارش",
      lastName: "فراهانی",
      subtitle: "توسعه‌دهنده وب و اپلیکیشن موبایل",
      cta: "مشاهده پروژه‌ها",
      ctaContact: "تماس با من",
    },
    projects: {
      title: "پروژه‌ها",
      subtitle: "مجموعه‌ای از پروژه‌هایی که در حوزه‌های موبایل، وب و برنامه‌نویسی سیستمی ساخته‌ام.",
      noDescription: "توضیحی ثبت نشده است.",
      archived: "آرشیو شده",
    },
    about: {
      title: "درباره من",
      p1: "توسعه‌دهنده‌ای از ایران هستم با علاقه به ساخت اپلیکیشن‌های تمیز و پرسرعت در پلتفرم‌های مختلف. از اپ‌های نیتیو اندروید تا پروژه‌های چندسکویی با فلاتر و تجربه‌های مدرن وب، از کار روی تمام بخش‌های محصول لذت می‌برم.",
      p2: "حوزه کاری من شامل توسعه موبایل (کاتلین، فلاتر)، برنامه‌نویسی سیستمی (C++)، تکنولوژی‌های وب (تایپ‌اسکریپت، ری‌اکت، نکست‌جی‌اس) و توسعه قرارداد هوشمند (سالیدیتی) است. کنجکاوی و اشتیاق به ساخت محصولاتی که واقعاً استفاده می‌شوند، انگیزه اصلی من است.",
      technologies: "تکنولوژی‌ها",
      focusAreas: "حوزه‌های تمرکز",
      areas: [
        "توسعه اپلیکیشن موبایل",
        "اپلیکیشن‌های وب فول‌استک",
        "راهکارهای چندسکویی",
        "طراحی رابط و تجربه کاربری",
      ],
    },
    reach: {
      title: "تماس با من",
      subtitle: "ایده‌ای در ذهن داری یا فقط می‌خوای سلام کنی؟ خوشحال می‌شم ازت بشنوم.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
