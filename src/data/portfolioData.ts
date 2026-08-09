import type { Repository, Technology, ProblemSolution, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  fullName: "Behruz Sagdullayev",
  shortName: "BEHRUZ SAGDULLAYEV",
  brandName: "BEHRUZ.DEV",
  age: 16,
  role: "Junior Full-Stack Developer",
  roleDetail: "Junior Full-Stack Developer focused on C# / .NET",
  education: "IT Live",
  experiencePeriod: "Taxminan 1 yil (Amaliy ta'lim va loyihalar)",
  direction: "Full-Stack Development",
  mainFocus: "C# / .NET Backend Development",
  secondaryFocus: "Frontend Development",
  github: "https://github.com/neonBehruz",
  githubUsername: "neonBehruz",
  telegram: "https://t.me/Sagdullayev_Behruz",
  telegramUsername: "@Sagdullayev_Behruz",
  instagram: "https://www.instagram.com/sagdu11ayev_07/?hl=en",
  phone: "+998 99 191 93 77",
  email: "behruzsagdullayev0707@gmail.com",
  status: "Available for Learning & Projects",
  heroDescription: "Men 16 yoshli Full-Stack Development yo'nalishida rivojlanayotgan dasturchiman. IT Live'da taxminan 1 yildan beri dasturlashni o'rganib, amaliy loyihalar orqali C#, .NET, ASP.NET Core, ma'lumotlar bazalari va frontend texnologiyalarida tajriba orttirib kelmoqdaman.",
  aboutText: "Men Behruz Sagdullayev, 16 yoshli Junior Full-Stack Developer bo'lish yo'lida rivojlanayotgan dasturchiman. IT Live'da taxminan bir yildan beri Full-Stack Development yo'nalishida tahsil olib kelmoqdaman. Asosiy qiziqishim C# va .NET ekotizimi hamda backend development. Shu bilan birga React, TypeScript, HTML va CSS orqali frontend tomonini ham rivojlantiryapman. Men nazariyani faqat o'rganib qolmasdan, uni real loyihalar yaratish orqali mustahkamlashga harakat qilaman.",
  tagline: "Learning. Building. Debugging. Improving.",
  potentialTag: "Young developer with serious practical potential."
};

export const REAL_REPOSITORIES: Repository[] = [
  {
    name: "Online-Test",
    html_url: "https://github.com/neonBehruz/Online-Test",
    homepage: "https://online-test-sandy.vercel.app",
    description: "Online test topshirish va bilimni baholash uchun yaratilgan to'liq platforma",
    language: "C#",
    stargazers_count: 1,
    category: "C# / .NET",
    technologies: ["C#", "ASP.NET Core", "React", "TypeScript", "Vercel"],
    purpose: "Foydalanuvchilarga onlayn test topshirish va natijalarni avtomatik hisoblash imkonini beruvchi jonli platforma.",
    features: [
      "Test savollari va variantlarini boshqarish",
      "Foydalanuvchi javoblarini baholash mantiqi",
      "Jonli Vercel hosting platformasiga ulangan",
      "Moslashuvchan interfeys va natijalar statistikasi"
    ],
    architecture: "Full-Stack Web App (ASP.NET Core API + React Frontend)",
    contribution: "Backend va Frontend qismlarini to'liq bog'lash va Vercel platformasiga joylashtirish.",
    whatILearned: "Vercel joylashtirish (deployment), API integratsiyasi va foydalanuvchi seanslarini boshqarish."
  },
  {
    name: "TestPlatform",
    html_url: "https://github.com/neonBehruz/TestPlatform",
    description: "Online test topshirish va bilimni baholash uchun mo'ljallangan platforma backend loyihasi",
    language: "C#",
    stargazers_count: 0,
    category: "C# / .NET",
    technologies: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "PostgreSQL"],
    purpose: "Foydalanuvchilarga onlayn test topshirish va natijalarni avtomatik hisoblash imkonini beradi.",
    features: [
      "Test savollarini boshqarish API",
      "Foydalanuvchi javoblarini baholash mantiqi",
      "EF Core orqali bazaga saqlash",
      "Natijalar statistikasini shakllantirish"
    ],
    architecture: "Layered Architecture (Controller, Service, Repository, EF Core Data Layer)",
    contribution: "Butunlay C# backend arxitekturasini loyihalash va RESTful endpointlarni ishlab chiqish.",
    whatILearned: "DbContext konfiguratsiyasi, relatsion ma'lumotlar modellari va REST API optimallashtirish."
  },
  {
    name: "edunova-bot",
    html_url: "https://github.com/neonBehruz/edunova-bot",
    description: "Edunova ta'lim loyihasi uchun Telegram bot backend mantiq ilovasi C# tilida",
    language: "C#",
    stargazers_count: 1,
    category: "C# / .NET",
    technologies: ["C#", ".NET", "Telegram Bot API", "Entity Framework Core"],
    purpose: "O'quvchilar va talabalar uchun ta'lim jarayonini Telegram orqali avtomatlashtirish bot xizmati.",
    features: ["Bot inline va keyboard menyulari", "Foydalanuvchilar ma'lumotlar bazasi integratsiyasi", "O'quv materiallarini uzatish"],
    architecture: "Asynchronous Event-Driven C# Bot Engine",
    contribution: "Telegram Bot API bilan integratsiya, mantiqiy ssenariylar va DB modelini yaratish.",
    whatILearned: "C# asinxron bot ishlab chiqish, Telegram API xatolarini ushlash va baza bilan integratsiya."
  },
  {
    name: "Gebula",
    html_url: "https://github.com/neonBehruz/Gebula",
    description: "C# va .NET ekotizimidagi amaliy backend xizmati va biznes mantiq arxitekturasi",
    language: "C#",
    stargazers_count: 0,
    category: "C# / .NET",
    technologies: ["C#", ".NET", "REST API", "PostgreSQL"],
    purpose: "C# backend arxitekturasini sinash va ma'lumotlar bilan ishlash mantiqini mustahkamlash.",
    features: ["CRUD operatsiyalar", "DTO ob'ektlari orqali ma'lumot uzatish", "Service qatlami mantiqi"],
    architecture: "Service & Repository Pattern",
    contribution: "Backend obyekt modelini tuzish va API interfeyslarini yaratish.",
    whatILearned: "C# tilida Repository va Service qatlamlarini to'g'ri ajratish va Dependency Injection."
  },
  {
    name: "Emax",
    html_url: "https://github.com/neonBehruz/Emax",
    description: "E-Commerce / tizim moduli backend ilovasi C# / .NET texnologiyasida",
    language: "C#",
    stargazers_count: 0,
    category: "C# / .NET",
    technologies: ["C#", ".NET", "ASP.NET Core", "REST API"],
    purpose: "Biznes obyektlari va foydalanuvchi ma'lumotlarini boshqaruvchi xizmat.",
    features: ["API Controllerlar", "Validatsiya va xatoliklarni qayta ishlash", "Ma'lumotlar saqlash"],
    architecture: "Web API Layered Structure",
    contribution: "Backend servislari va ma'lumotlar oqimini tashkillashtirish.",
    whatILearned: "ASP.NET Core request/response tayyorlash va middleware strukturasini tushunish."
  },
  {
    name: "Klassy-Cafe",
    html_url: "https://github.com/neonBehruz/Klassy-Cafe",
    homepage: "https://neonbehruz.github.io/Klassy-Cafe/",
    description: "Kafeteriya va restoran brendi uchun responsive va interaktiv veb-platforma",
    language: "JavaScript",
    stargazers_count: 1,
    category: "WEB PROJECTS",
    technologies: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
    purpose: "Kafe menyusi va stollarni bron qilish interfeysini ko'rsatish.",
    features: ["Bron qilish formasi", "Taomlar kategoriyasi filtri", "Animatsiyali CSS vizualizatsiya"],
    architecture: "Frontend Web Single-Page App",
    contribution: "HTML/CSS strukturasi va JS interaktiv mantiqlarini ishlab chiqish.",
    whatILearned: "Murakkab CSS maketlar va form elementlari validatsiyasi."
  },
  {
    name: "Loook",
    html_url: "https://github.com/neonBehruz/Loook",
    homepage: "https://neonbehruz.github.io/Loook/",
    description: "Restoran va taomlar buyurtmasi uchun dynamic responsive landing sahifasi",
    language: "JavaScript",
    stargazers_count: 1,
    category: "WEB PROJECTS",
    technologies: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
    purpose: "Restoran menyusi va taomlarni taqdim etuvchi zamonaviy veb-sayt.",
    features: ["Interaktiv menyu", "Slajder va galereya", "Mobil adaptiv interfeys"],
    architecture: "Component UI Structure",
    contribution: "Dizayn tayyorlash va JavaScript interaktivligini qo'shish.",
    whatILearned: "UI komponentlarini to'g'ri joylashtirish va UI aniqligiga erishish."
  },
  {
    name: "BurgerKing",
    html_url: "https://github.com/neonBehruz/BurgerKing",
    homepage: "https://neonbehruz.github.io/BurgerKing/",
    description: "BurgerKing brendi uslubidagi dinamik va zamonaviy web sahifa",
    language: "CSS",
    stargazers_count: 1,
    category: "FRONTEND",
    technologies: ["HTML", "CSS", "Flexbox", "GitHub Pages"],
    purpose: "Brend ranglari va zamonaviy menyular stilini amalda ko'rsatish.",
    features: ["Hero banner", "Menyu kartochkalari", "Responsive footer"],
    architecture: "Semantic HTML5 + Custom CSS System",
    contribution: "Klassik brend interfeysini raqamli veb shakliga o'tkazish.",
    whatILearned: "Brending stili va CSS animatsiyalari o'rtasidagi mutanosiblik."
  },
  {
    name: "Akademik-Nashr",
    html_url: "https://github.com/neonBehruz/Akademik-Nashr",
    homepage: "https://neonbehruz.github.io/Akademik-Nashr",
    description: "Akademik nashriyot va kitoblar taqdimoti veb-sahifasi",
    language: "HTML",
    stargazers_count: 1,
    category: "WEB PROJECTS",
    technologies: ["HTML", "CSS", "GitHub Pages"],
    purpose: "Ilmiy va akademik kitoblarni namoyish qilish.",
    features: ["Nashrlar katalogi", "Ma'lumot kartalari"],
    architecture: "Semantic Document Layout",
    contribution: "Maket va maket strukturasi.",
    whatILearned: "Matnli va ilmiy tarkibga ega sahifalarni to'g'ri formatlash."
  },
  {
    name: "Ingliz",
    html_url: "https://github.com/neonBehruz/Ingliz",
    homepage: "https://neonbehruz.github.io/Ingliz/",
    description: "Ingliz tili so'z boyligini oshirish va lug'at o'rganish veb-sahifasi",
    language: "HTML",
    stargazers_count: 1,
    category: "WEB PROJECTS",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    purpose: "So'zlar va iboralarni interaktiv ko'rinishda yodlashga yordam berish.",
    features: ["So'z kartochkalari", "Interaktiv test va lug'at"],
    architecture: "Interactive Frontend App",
    contribution: "Interfeys va lug'at mantig'i.",
    whatILearned: "Foydalanuvchi ta'limi uchun qulay UI tayyorlash."
  },
  {
    name: "IT-Live",
    html_url: "https://github.com/neonBehruz/IT-Live",
    homepage: "https://neonbehruz.github.io/IT-Live/",
    description: "IT Live ta'lim markazi davomida yaratilgan o'quv va amaliy loyihalar to'plami",
    language: "HTML",
    stargazers_count: 1,
    category: "OTHER",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    purpose: "Ta'lim jarayonidagi topshiriqlar va amaliy koddar to'plami.",
    features: ["O'quv mashqlari", "Kichik maketlar va komponentlar"],
    architecture: "Educational Repository",
    contribution: "IT Live ta'limidagi barcha amaliy ishlar.",
    whatILearned: "Full-Stack asoslari va dasturlash prinsiplari."
  },
  {
    name: "Clock",
    html_url: "https://github.com/neonBehruz/Clock",
    homepage: "https://neonbehruz.github.io/Clock/",
    description: "Dinamik JS va neon CSS stilidagi raqamli hamda analog soat ilovasi",
    language: "CSS",
    stargazers_count: 1,
    category: "FRONTEND",
    technologies: ["CSS", "JavaScript", "HTML", "GitHub Pages"],
    purpose: "Vaqtni jonli yangilanuvchi strelkalar va raqamlar bilan ko'rsatish.",
    features: ["Real-time JS interval", "Neon taymer stili"],
    architecture: "UI Timer Script",
    contribution: "JS Date API va CSS milliy soat dizayni.",
    whatILearned: "JS setInterval va CSS rotate transformatsiyalarini vaqtga bog'lash."
  },
  {
    name: "Stories",
    html_url: "https://github.com/neonBehruz/Stories",
    homepage: "https://neonbehruz.github.io/Stories/",
    description: "Interaktiv hikoyalar va maqolalar o'qish sahifasi",
    language: "CSS",
    stargazers_count: 1,
    category: "FRONTEND",
    technologies: ["HTML", "CSS", "GitHub Pages"],
    purpose: "Hikoya va ma'lumotlarni o'qish uchun qulay tipografik sahifa.",
    features: ["Karta ko'rinishidagi hikoyalar", "Zamonaviy matn dizayni"],
    architecture: "Typography & Card UI",
    contribution: "Dizayn va layout.",
    whatILearned: "Typografiya va o'qish qulayligi (readability) prinsiplari."
  },
  {
    name: "Woodendot",
    html_url: "https://github.com/neonBehruz/Woodendot",
    homepage: "https://neonbehruz.github.io/Woodendot/",
    description: "Mebel va dizayn studiyasi uchun minimalistik tayyorlangan veb-sahifa",
    language: "HTML",
    stargazers_count: 0,
    category: "WEB PROJECTS",
    technologies: ["HTML", "CSS", "GitHub Pages"],
    purpose: "Estetik va minimalistik mebel mahsulotlarini namoyish qilish.",
    features: ["Grid mahsulotlar galereyasi", "Minimalist visual stil"],
    architecture: "Clean HTML/CSS Layout",
    contribution: "Interfeys kodirovkasi va responsive moslashtirish.",
    whatILearned: "Minimalist dizayn prinsiplari va typografiya uyg'unligi."
  },
  {
    name: "Parallax-2",
    html_url: "https://github.com/neonBehruz/Parallax-2",
    homepage: "https://neonbehruz.github.io/Parallax-2/",
    description: "Parallax skroll effektiga ega 3D chuqurlikdagi veb-sahifa",
    language: "HTML",
    stargazers_count: 1,
    category: "FRONTEND",
    technologies: ["HTML5", "CSS3", "Parallax Scroll", "GitHub Pages"],
    purpose: "Skroll davomida fon va elementlarning har xil tezlikda harakatlanish chuqurligini sinash.",
    features: ["Multi-layer parallax", "Smooth scroll effekti", "Zamonaviy visual chuqurlik"],
    architecture: "Layered CSS Motion",
    contribution: "Qatlamli skroll mantiqini tuzish.",
    whatILearned: "CSS transform, perspective va z-index chuqurliklarini boshqarish."
  },
  {
    name: "Profile_tailwind.css",
    html_url: "https://github.com/neonBehruz/Profile_tailwind.css",
    homepage: "https://neonbehruz.github.io/Profile_tailwind.css/",
    description: "Tailwind CSS utilitasi orqali tayyorlangan dasturchi profil sahifasi",
    language: "CSS",
    stargazers_count: 1,
    category: "FRONTEND",
    technologies: ["CSS", "Tailwind CSS", "HTML", "GitHub Pages"],
    purpose: "Tailwind CSS utility-first yondashuvini tajriba qilish.",
    features: ["Responsive grid", "Dark mode va custom ranglar"],
    architecture: "Utility-First CSS",
    contribution: "Tailwind CSS orqali profil kartalarini loyihalash.",
    whatILearned: "Tailwind CSS sinflari bilan tezkor va moslashuvchan UI tuzish."
  },
  {
    name: "Portfolia",
    html_url: "https://github.com/neonBehruz/Portfolia",
    description: "Behruz Sagdullayevning shaxsiy interaktiv dasturchi portfoliosi",
    language: "TypeScript",
    stargazers_count: 1,
    category: "FRONTEND",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    purpose: "Barcha loyihalar, texnologiyalar va amaliy ko'nikmalarni interaktiv namoyish qilish.",
    features: ["3D/Glassmorphism interfeys", "GitHub repozitoriyalar integratsiyasi", "Moslashuvchan mobil dizayn"],
    architecture: "Modern Single Page React Application",
    contribution: "Dizayn va barcha komponentlarni ishlab chiqish.",
    whatILearned: "React modern component patterns va interaktiv UI dizayni."
  }
];

export const TECHNOLOGIES: Technology[] = [
  // FOUNDATION & LANGUAGES
  {
    id: "cpp",
    name: "C++",
    category: "FOUNDATION",
    purpose: "High-performance object-oriented system programming language.",
    iconName: "Code2",
    color: "#00599C",
    badge: "Core Language"
  },
  {
    id: "python",
    name: "Python",
    category: "FOUNDATION",
    purpose: "Scripting, bot logic development, and automation tasks.",
    iconName: "Terminal",
    color: "#3776AB",
    badge: "Scripting & Bot"
  },
  {
    id: "fundamentals",
    name: "Programming Fundamentals",
    category: "FOUNDATION",
    purpose: "Variables, conditions, algorithms, logic structuring, and clean code principles.",
    iconName: "BookOpen",
    color: "#10B981",
    badge: "Foundation"
  },
  {
    id: "oop",
    name: "OOP",
    category: "FOUNDATION",
    purpose: "Object-Oriented Programming (Abstraction, Encapsulation, Inheritance, Polymorphism).",
    iconName: "Box",
    color: "#F59E0B",
    badge: "Architecture"
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    category: "FOUNDATION",
    purpose: "Efficient data organization, searching, sorting, and algorithmic complexity.",
    iconName: "Sparkles",
    color: "#EC4899",
    badge: "Problem Solving"
  },

  // BACKEND / .NET
  {
    id: "csharp",
    name: "C#",
    category: "BACKEND",
    purpose: "Main object-oriented programming language for robust backend systems.",
    iconName: "Code2",
    color: "#A78BFA",
    badge: "Main Focus"
  },
  {
    id: "dotnet",
    name: ".NET / .NET Core",
    category: "BACKEND",
    purpose: "High-performance cross-platform framework for enterprise applications.",
    iconName: "Cpu",
    color: "#8B5CF6",
    badge: "Core Framework"
  },
  {
    id: "aspnet",
    name: "ASP.NET Core",
    category: "BACKEND",
    purpose: "Building modern scalable RESTful Web APIs & web applications.",
    iconName: "Globe",
    color: "#3B82F6",
    badge: "Web API"
  },
  {
    id: "webapi",
    name: "Web API",
    category: "BACKEND",
    purpose: "RESTful HTTP endpoint design, request validation, and JSON controllers.",
    iconName: "Network",
    color: "#60A5FA",
    badge: "REST API"
  },
  {
    id: "efcore",
    name: "Entity Framework Core",
    category: "BACKEND",
    purpose: "ORM for object-database mapping, migrations, and LINQ queries.",
    iconName: "Layers",
    color: "#EC4899",
    badge: "ORM"
  },
  {
    id: "linq",
    name: "LINQ",
    category: "BACKEND",
    purpose: "Language Integrated Query for strongly typed data manipulation in C#.",
    iconName: "Binary",
    color: "#C084FC",
    badge: "Data Queries"
  },
  {
    id: "jwt",
    name: "JWT Authentication",
    category: "BACKEND",
    purpose: "Secure stateless JSON Web Token authentication & role authorization.",
    iconName: "Key",
    color: "#F472B6",
    badge: "Security"
  },
  {
    id: "swagger",
    name: "Swagger / OpenAPI",
    category: "BACKEND",
    purpose: "Interactive REST API documentation and client endpoint testing.",
    iconName: "FileSpreadsheet",
    color: "#10B981",
    badge: "API Docs"
  },

  // DATABASE
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "DATABASE",
    purpose: "Advanced relational database for storing structured application data.",
    iconName: "Database",
    color: "#38BDF8",
    badge: "Primary DB"
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "DATABASE",
    purpose: "Relational database management system for web applications.",
    iconName: "Server",
    color: "#60A5FA",
    badge: "Relational DB"
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "DATABASE",
    purpose: "Lightweight embedded database for small applications and testing.",
    iconName: "HardDrive",
    color: "#A78BFA",
    badge: "Embedded DB"
  },
  {
    id: "sqlserver",
    name: "SQL Server",
    category: "DATABASE",
    purpose: "Microsoft relational database for enterprise application data.",
    iconName: "Database",
    color: "#EF4444",
    badge: "Enterprise DB"
  },

  // FRONTEND
  {
    id: "react",
    name: "React.js",
    category: "FRONTEND",
    purpose: "Building modern interactive component-based user interfaces.",
    iconName: "Atom",
    color: "#61DAFB",
    badge: "UI Library"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "FRONTEND",
    purpose: "Strongly typed programming language built on JavaScript.",
    iconName: "FileCode",
    color: "#3178C6",
    badge: "Type Safety"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "FRONTEND",
    purpose: "Core programming language for web client interactivity.",
    iconName: "Braces",
    color: "#F7DF1E",
    badge: "Web Core"
  },
  {
    id: "html5",
    name: "HTML5",
    category: "FRONTEND",
    purpose: "Semantic markup structure for accessible modern web pages.",
    iconName: "Layout",
    color: "#E34F26",
    badge: "Markup"
  },
  {
    id: "css3",
    name: "CSS3",
    category: "FRONTEND",
    purpose: "Styling, flexbox/grid layouts, keyframe animations, and glassmorphism.",
    iconName: "Palette",
    color: "#1572B6",
    badge: "Styling"
  },

  // TOOLS & CLOUD
  {
    id: "git",
    name: "Git & GitHub",
    category: "TOOLS",
    purpose: "Distributed version control system and repository hosting.",
    iconName: "GitBranch",
    color: "#F05032",
    badge: "Version Control"
  },
  {
    id: "docker",
    name: "Docker",
    category: "TOOLS",
    purpose: "Containerization platform for isolated application deployment.",
    iconName: "Box",
    color: "#38BDF8",
    badge: "Containerization"
  },
  {
    id: "azure",
    name: "Azure",
    category: "TOOLS",
    purpose: "Cloud computing services for hosting applications and cloud databases.",
    iconName: "Cloud",
    color: "#0089D6",
    badge: "Cloud Platform"
  }
];

export const JOURNEY_STEPS: JourneyMilestone[] = [
  {
    step: 1,
    title: "Programming Fundamentals",
    description: "Dasturlash mantig'i, o'zgaruvchilar, shartli operatorlar, tsikllar va ma'lumotlar tuzilmalari asoslarini puxta egallash.",
    status: "completed",
    technologies: ["Algorithms", "Flow Control", "Data Types"]
  },
  {
    step: 2,
    title: "C# Language & OOP",
    description: "Ob'ektga yo'naltirilgan dasturlash (OOP) prinsiplari: Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraktsiyani C# tilida amalda qo'llash.",
    status: "completed",
    technologies: ["C#", "OOP", "Interfaces", "Generics"]
  },
  {
    step: 3,
    title: ".NET Framework & CLI",
    description: ".NET ekotizimi, SDK buyruqlari, Solution va Proekt tuzilmalarini yaratish hamda NuGet paketlar bilan ishlash.",
    status: "completed",
    technologies: [".NET", "Dotnet CLI", "NuGet"]
  },
  {
    step: 4,
    title: "ASP.NET Core Web API",
    description: "Veb xizmatlar, HTTP metodlari (GET, POST, PUT, DELETE), Controllerlar va Routing mantiqini sozlash.",
    status: "completed",
    technologies: ["ASP.NET Core", "Web API", "Controllers"]
  },
  {
    step: 5,
    title: "REST API Design",
    description: "Standart RESTful API qoidalariga rioya qilgan holda javob status kodlari (200, 201, 400, 404, 500) va JSON formatlarini shakllantirish.",
    status: "completed",
    technologies: ["REST", "JSON", "Status Codes"]
  },
  {
    step: 6,
    title: "Entity Framework Core (EF Core)",
    description: "ORM vositasi orqali ma'lumotlar bazasi modellarini yaratish, DbContext va LINQ so'rovlari hamda Migratsiyalar yuritish.",
    status: "completed",
    technologies: ["EF Core", "LINQ", "Migrations"]
  },
  {
    step: 7,
    title: "Relational Database (PostgreSQL)",
    description: "PostgreSQL relatsion ma'lumotlar bazasi bilan ishlash, jadval munosabatlari (Foreign Key, Indexes) va query SQL operatsiyalari.",
    status: "completed",
    technologies: ["PostgreSQL", "SQL", "Table Relations"]
  },
  {
    step: 8,
    title: "Repository / Service / DTO Pattern",
    description: "Backend loyihalarni qatlamlarga bo'lish: Controller ➔ Service ➔ Repository pattern va DTO orqali ma'lumot xavfsizligini ta'minlash.",
    status: "completed",
    technologies: ["Repository Pattern", "Services", "DTOs"]
  },
  {
    step: 9,
    title: "Authentication & Authorization",
    description: "JWT (JSON Web Token) yaratish, parollarni hashlash hamda Role-based xavfsizlik va Auth Middleware joylashtirish.",
    status: "completed",
    technologies: ["JWT", "Password Hashing", "Authorization"]
  },
  {
    step: 10,
    title: "Frontend Development (React / Web UI)",
    description: "HTML, CSS, JavaScript va React orqali foydalanuvchi interfeyslarini yaratish va REST API backend bilan bog'lash.",
    status: "completed",
    technologies: ["React", "TypeScript", "JavaScript", "HTML/CSS"]
  },
  {
    step: 11,
    title: "Full-Stack Project Integration",
    description: "Backend va Frontend qismlarini birlashtirib, real amaliy loyihalar (TestPlatform, Gebula, Emax) yaratish.",
    status: "completed",
    technologies: ["Full-Stack", "API Integration", "Deployment Prep"]
  }
];

export const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    id: "ef-migration",
    title: "EF Core Migration & Primary Key Errors",
    category: "EF Core / Database",
    problem: "Baza modellarini yangilashda 'The entity type requires a primary key to be defined' xatoligi yuzaga keldi va migratsiya muvaffaqiyatsiz bo'ldi.",
    debug: "Model obyektidagi id maydoni nomlanishi [Key] atributiga yoki standart 'Id' konventsiyasiga to'g'ri kelmasligi tahlil qilindi.",
    solution: "Model sinfida [Key] atributini joylashtirildi va Fluent API OnModelCreating metodida HasKey() aniq ko'rsatildi.",
    lesson: "EF Core konventsiyalari hamda DbContext konfiguratsiyasida Primary Key va jadval munosabatlarini aniq belgilash zarurligi o'rganildi."
  },
  {
    id: "postgres-conn",
    title: "PostgreSQL Connection & Npgsql Exception",
    category: "PostgreSQL",
    problem: "ASP.NET Core ilovasi ishga tushganda PostgreSQL ma'lumotlar bazasiga ulanish red-error bergandi.",
    debug: "appsettings.json faylidagi ConnectionString parametrlaridagi Host, Port va Password sozlari hamda Npgsql drayver sozlari tekshirildi.",
    solution: "Connection string to'g'ri formatga keltirildi hamda DbContext servisi Program.cs faylida AddDbContext Pool orqali ro'yxatdan o'tkazildi.",
    lesson: "Maxfiy ulanish ma'lumotlarini to me'yorda boshqarish va baza drayveri xatolarini zudlik bilan lokalizatsiya qilish ko'nikmasi shakllandi."
  },
  {
    id: "automapper-mapping",
    title: "AutoMapper Unmapped Property Exception",
    category: "ASP.NET Core / DTO",
    problem: "Entity ob'ektini DTO ob'ektiga o'g'irish vaqtida ba'zi maydonlar null bo'lib qolishi yoki AutoMapperException berishi.",
    debug: "MappingProfile sinfida CreateMap<Source, Destination>() mosligi va maydon nomlari farqliligi aniqlandi.",
    solution: "Profile ichida ForMember() orqali turlicha nomlangan maydonlar uchun ko'rsatgichlar aniq ko mezonlab berildi.",
    lesson: "DTO va Entity strukturalaridagi nomlanishlarni standartlashtirish va mapping profillarini aniq sozlash tushunchasi mustahkamlandi."
  },
  {
    id: "cors-frontend",
    title: "CORS (Cross-Origin Resource Sharing) Policy Error",
    category: "Frontend & Backend Integration",
    problem: "React frontend ilovasidan ASP.NET Core REST API endpointlariga Fetch so'rovi yuborilganda brauzer CORS bloki yuzaga keldi.",
    debug: "Brauzer konsolidagi 'Access-Control-Allow-Origin' sarlavhasi yo'qligi haqidagi xabarnoma ko'rib chiqildi.",
    solution: "Program.cs faylida AddCors() servisi qo'shilib, UseCors() middleware qatlami to'g'ri tartibda (UseRouting dan so'ng) joylashtirildi.",
    lesson: "Middleware bajarilish ketma-ketligi va tarmoq xavfsizlik siyosatlarining ishlash mexanizmi o'rganildi."
  }
];

export const FUTURE_ROADMAP = [
  { title: "Advanced ASP.NET Core", desc: "Custom Middlewares, Filters, and High-Performance Async Work", icon: "Zap" },
  { title: "Advanced PostgreSQL", desc: "Indexes, Query Performance, Views & Stored Functions", icon: "Database" },
  { title: "Automated Testing", desc: "Unit Testing with xUnit / NUnit & Integration Tests", icon: "CheckCircle" },
  { title: "Docker Containerization", desc: "Containerizing ASP.NET Core & PostgreSQL for consistency", icon: "Box" },
  { title: "CI/CD Pipelines", desc: "Automated builds and GitHub Actions deployments", icon: "Workflow" },
  { title: "Cloud Services", desc: "Deploying production-grade services to cloud providers", icon: "Cloud" },
  { title: "Redis Caching", desc: "Distributed caching layer for high speed data access", icon: "Layers" },
  { title: "Advanced Architecture", desc: "Clean Architecture, CQRS patterns & Domain Events", icon: "GitFork" },
  { title: "Production Deployment", desc: "Nginx reverse proxy, SSL certificates & production monitoring", icon: "ShieldCheck" }
];
