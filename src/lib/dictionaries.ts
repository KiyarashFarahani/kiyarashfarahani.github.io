export type Locale = "en" | "fa" | "ja";

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
      p1: "I'm a developer with a passion for building clean, performant applications across platforms. I have experience with native Android apps, cross-platform projects and modern webites, I enjoy working across the full stack.",
      p2: "My work spans mobile development (Kotlin, Flutter), systems programming (C++) and web technologies (TypeScript, React, Next.js).",
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
      subtitle: "توسعه‌دهنده وب‌سایت و اپلیکیشن موبایل",
      cta: "پروژه‌ها",
      ctaContact: "تماس با من",
    },
    projects: {
      title: "پروژه‌ها",
      subtitle: "چند نمونه از پروژه‌هایی در حوزه‌های مختلف شامل اپلیکیشن موبایل، وب‌سایت و موارد دیگر",
      noDescription: "توضیحی ثبت نشده است.",
      archived: "آرشیو شده",
    },
    about: {
      title: "درباره من",
      p1: "توسعه‌دهنده‌ای هستم با اشتیاق به ساخت اپلیکیشن‌های تمیز و پرسرعت در پلتفرم‌های مختلف. تجربه ساخت اپلیکیشن‌های اندروید، پروژه‌های چندسکویی و وب‌سایت‌های مدرن را دارم و از کار در تمام بخش‌های محصول لذت می‌برم.",
      p2: "حوزه کاری من توسعه موبایل (Kotlin, Flutter)، برنامه‌نویسی سیستمی (C++) و تکنولوژی‌های وب (TypeScript, React, Next.js) را در بر می‌گیرد.",
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
  ja: {
    nav: {
      home: "ホーム",
      projects: "プロジェクト",
      about: "私について",
      reach: "コンタクト",
    },
    hero: {
      firstName: "キヤラシュ",
      lastName: "ファラハニ",
      subtitle: "ウェブサイト・モバイルアプリ開発者",
      cta: "プロジェクトを見る",
      ctaContact: "気軽に連絡する",
    },
    projects: {
      title: "プロジェクト",
      subtitle: "モバイル、ウェブ、システム開発で作ってきたプロジェクトをいくつか紹介します。",
      noDescription: "説明がありません。",
      archived: "アーカイブ済み",
    },
    about: {
      title: "私について",
      p1: "プラットフォームを問わず、クリーンで高速なアプリを作るのが好きな開発者です。ネイティブAndroid、クロスプラットフォーム、モダンなウェブサイトまで、フルスタックで作ることを楽しんでいます。",
      p2: "普段はモバイル開発（Kotlin / Flutter）、システムプログラミング（C++）、ウェブ技術（TypeScript / React / Next.js）を中心に開発しています。",
      technologies: "技術スタック",
      focusAreas: "得意分野",
      areas: [
        "モバイルアプリ開発",
        "フルスタックWebアプリケーション",
        "クロスプラットフォーム開発",
        "UI/UXデザイン",
      ],
    },
    reach: {
      title: "コンタクト",
      subtitle: "プロジェクトの相談でも、ちょっと挨拶したいだけでも、気軽に声をかけてください。",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
