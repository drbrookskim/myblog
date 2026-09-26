/**
 * Dr. Brooks Blog & Portal - Core Application Logic
 * 
 * Main UI: Connected Node Editorial Timeline matching design specification
 * Feature Detail Popups: Apple-style fluid modal dialogs for Essays, Novels, Web Services, and Certifications
 */

const INITIAL_DATA = {
  profile: {
    name: "닥터브룩스",
    englishName: "Dr. Brooks Kim",
    avatar: "http://t1.daumcdn.net/brunch/service/user/4XCX/image/ZwU9Gubgwzh5Ofks9tJJ6vuqnwY.png",
    title: "12년차 제품기획자 · 소설가 · 웹 서비스 빌더",
    headline: "기획의 ‘본질’, 사용자의 ‘관점’, 그리고 인간의 ‘한계’에 대해 관심이 많습니다.",
    subheadline: "그에 관한 글도, 소설도, 웹 서비스도 만듭니다.",
    bio: "복잡한 비즈니스와 기술 환경 속에서 본질적인 가치를 발굴하는 12년차 제품기획자이자, 인간의 내면과 결핍을 탐구하는 이야기 작가, 그리고 유용한 도구를 직접 만들어 배포하는 웹 서비스 빌더입니다.",
    links: {
      brunch: "https://brunch.co.kr/@drbrooks",
      services: "https://drbrooks.pages.dev/services/",
      tistory: "https://drbrooks.tistory.com/",
      twitter: "https://x.com/drbrookskim"
    },
    stats: {
      careerYears: 12,
      brunchArticles: 193,
      publishedNovels: 3,
      certifications: 7,
      servicesBuilt: "Interactive Suite"
    },
    keywords: ["기획의 본질", "사용자 관점", "인간의 한계", "현대소설", "SF/미스터리", "인텔리전스 웹"]
  },
  novels: [
    {
      id: "chogang-mapae",
      title: "초강마패",
      type: "장편",
      badge: "장편 웹소설",
      genre: ["현대판타지", "SF", "추리"],
      summary: "의문의 '마패'를 손에 넣은 흙수저 취준생이 초월적인 마패의 능력으로 부자가 된다.",
      description: "치열한 현실과 초월적 상상력의 만남. 의문의 마패를 손에 쥔 주인공이 한계를 돌파하며 부와 새로운 질서를 일궈나가는 흡인력 있는 현대판타지 서사.",
      url: "https://www.munpia.com/novel/detail/530809",
      cover: "https://cdn1.munpia.com/v2/files/cover/2026/0103/22/FDhUSfvXMAA",
      platform: "문피아",
      episodes: "25화 연재중",
      tags: ["현대판타지", "SF", "대체역사", "추리", "노력가", "성장"]
    },
    {
      id: "co2-organization",
      title: "이산화탄소 조직",
      type: "단편",
      badge: "직장 드라마",
      genre: ["일반소설", "오피스 드라마"],
      summary: "경력직이 새로운 조직에 합류한 뒤, 낯선 환경 속에서 겪게 되는 따돌림을 극복하며 자신만의 자리를 찾아가는 이야기.",
      description: "12년차 기획자의 날카로운 관찰력이 돋보이는 소설. 보이지 않는 배제와 질식할 것 같은 조직 분위기(이산화탄소) 속에서 스스로의 전문성과 단단함으로 길을 찾는 경력직의 현실적 극복기.",
      url: "https://www.munpia.com/novel/detail/606595",
      cover: "https://cdn1.munpia.com/v2/files/tcover/2026/0924/23/FYxApCbV8AA",
      platform: "문피아",
      episodes: "3화 완독",
      tags: ["오피스", "경력직", "조직심리", "인간관계", "리얼리즘"]
    },
    {
      id: "oubliette-watcher",
      title: "우블리에트의 파수꾼",
      type: "단편",
      badge: "감각 추리 미스터리",
      genre: ["추리", "미스터리", "현대판타지"],
      summary: "우연히 발견한 지하 창고에서 시각이 단절된 채, 청각만을 통해 사건을 해결해 나가는 형사의 이야기입니다.",
      description: "인간의 한계 상황에 대한 집요한 탐구. 빛 하나 들지 않는 '우블리에트(잊혀진 지하 감옥)'에서 오직 귀로 전달되는 소리의 파동과 단서만으로 어둠 속 진실을 꿰뚫는 감각적 하드보일드 미스터리.",
      url: "https://www.munpia.com/novel/detail/606594",
      cover: "https://cdn1.munpia.com/v2/files/tcover/2026/0924/23/FYw--wmdcAA",
      platform: "문피아",
      episodes: "3화 완독",
      tags: ["추리", "감각단절", "형사물", "심리미스터리", "인간의 한계"]
    }
  ],
  services: [
    {
      id: "drbrooks-portal",
      name: "Dr. Brooks Services",
      tagline: "금융, 투자, AI, 생산성을 위한 인터랙티브 웹 서비스 모음",
      description: "복잡한 데이터와 금융/AI 모델을 직관적인 UI로 재해석하여, 사용자가 능동적으로 인사이트를 도출할 수 있도록 돕는 지능형 웹 애플리케이션 플랫폼입니다.",
      category: "Interactive Portal",
      badge: "대표 서비스 포털",
      url: "https://drbrooks.pages.dev/services/",
      features: [
        "금융 데이터 및 투자 시나리오 분석 도구",
        "AI 모델 기반 인텔리전스 및 추론 어시스턴트",
        "반응형 인터랙티브 차트 및 시뮬레이션 환경",
        "경량 자립형 웹 아키텍처 (Cloudflare Pages 기반)"
      ],
      techStack: ["Autonomous Web Architecture", "Cloudflare Pages", "Vanilla JS", "Tailwind CSS", "Interactive Canvas/Charts"],
      links: {
        live: "https://drbrooks.pages.dev/services/",
        about: "https://drbrooks.pages.dev/services/about.html"
      }
    },
    {
      id: "investment-intelligence",
      name: "Financial & Investment Studio",
      tagline: "의사결정자를 위한 정밀 재무/투자 시뮬레이터",
      description: "12년차 기획자의 사용자 경험 설계가 투영된 금융 데이터 분석 툴킷. 인간의 인지적 편향을 보완하고 데이터에 기반한 합리적 판단을 유도합니다.",
      category: "Fintech & Data",
      badge: "투자 인텔리전스",
      url: "https://drbrooks.pages.dev/services/",
      features: ["포트폴리오 스트레스 테스트", "수익률 다각도 시각화", "투자 가설 검증 샌드박스"],
      techStack: ["Interactive Visualization", "Real-time Metrics", "Web Worker"],
      links: {
        live: "https://drbrooks.pages.dev/services/"
      }
    },
    {
      id: "productivity-agents",
      name: "Productivity & AI Tools",
      tagline: "기획자의 시간과 집중력을 극대화하는 생산성 유틸리티",
      description: "기획의 본질에 집중할 수 있도록 반복 작업을 자동화하고, 사고의 확장을 돕는 인터랙티브 워크스페이스 유틸리티 모음입니다.",
      category: "AI & Productivity",
      badge: "생산성 도구",
      url: "https://drbrooks.pages.dev/services/",
      features: ["텍스트 및 아이디어 구조화", "빠른 프로토타이핑 워크플로우", "인터페이스 테스트 툴킷"],
      techStack: ["Modern Web APIs", "Markdown Engine", "Local Persistence"],
      links: {
        live: "https://drbrooks.pages.dev/services/"
      }
    }
  ],
  articles: [
    {
      id: "planning-essence",
      title: "기획의 본질: 기능의 나열이 아니라 가치의 발견",
      category: "기획의 본질",
      excerpt: "왜 많은 제품들이 수많은 기능을 쏟아붓고도 실패하는가. 제품기획자가 집착해야 할 진짜 문제는 '무엇을 만들까'가 아니라 '어떤 결핍을 해결할 것인가'이다.",
      date: "2026-08-15",
      readTime: "6 min",
      tags: ["제품기획", "본질", "PM", "프로덕트"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: true
    },
    {
      id: "user-perspective",
      title: "사용자의 관점: 기획자의 편견을 깨는 질문들",
      category: "사용자 관점",
      excerpt: "내부 회의실에서 완벽해 보였던 가설은 왜 실제 사용자 앞에서는 무너지는가. 사용자의 침묵과 망설임 속에서 진짜 의도를 읽어내는 관찰의 기술.",
      date: "2026-07-28",
      readTime: "8 min",
      tags: ["사용자경험", "UX", "고객관점", "인터뷰"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: true
    },
    {
      id: "human-limits",
      title: "인간의 한계: 피로와 감정, 그리고 시스템의 설계",
      category: "인간의 한계",
      excerpt: "실수는 개인의 부주의가 아니라 시스템의 결함이다. 인지적 과부하 상태에 놓인 인간의 심리와 이를 지탱하는 안전한 아키텍처에 관하여.",
      date: "2026-06-19",
      readTime: "7 min",
      tags: ["인간공학", "심리학", "한계", "시스템"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: true
    },
    {
      id: "fiction-and-reality",
      title: "기획자가 소설을 쓰는 이유: 허구 속에서 만나는 가장 순수한 인간",
      category: "소설과 기획",
      excerpt: "데이터와 지표가 말해주지 않는 인간의 결핍과 욕망. 소설이라는 렌즈를 통해 인간을 깊이 이해할 때, 비로소 살아 숨쉬는 서비스를 만들 수 있다.",
      date: "2026-05-11",
      readTime: "5 min",
      tags: ["소설", "창작", "글쓰기", "사유"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: false
    },
    {
      id: "twelve-years-retrospect",
      title: "12년의 기획, 기술의 유행이 지나간 자리에 남는 것",
      category: "기획의 본질",
      excerpt: "웹 2.0부터 모바일 혁명, 그리고 생성형 AI까지. 수많은 파도 속에서 변하지 않는 것은 결국 '사람의 문제를 해결한다'는 가장 단순하고 명쾌한 원칙이었다.",
      date: "2026-04-03",
      readTime: "10 min",
      tags: ["커리어", "회고", "12년차", "일의태도"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: false
    }
  ],
  certifications: [
    {
      id: "claude-code-in-action",
      title: "Claude Code in Action",
      issuer: "Anthropic",
      recipient: "Douglas KIM",
      category: "Agentic Coding & AI",
      badge: "Agentic AI",
      description: "Anthropic의 차세대 에이전틱 코딩 CLI 도구 Claude Code의 실무 워크플로우 및 자동화 개발 역량 인증",
      url: "https://verify.skilljar.com/c/yqhchan89t2o"
    },
    {
      id: "mcp-advanced",
      title: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      recipient: "Douglas KIM",
      category: "MCP Architecture",
      badge: "Advanced MCP",
      description: "Model Context Protocol의 고급 아키텍처, 서버-클라이언트 통신, 분산 컨텍스트 및 보안 통합 역량 인증",
      url: "https://verify.skilljar.com/c/e3hgwrzowgy4"
    },
    {
      id: "mcp-intro",
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      recipient: "Douglas KIM",
      category: "MCP Architecture",
      badge: "Core Protocol",
      description: "LLM과 외부 도구/데이터 소스를 표준 규격으로 연결하는 Model Context Protocol의 핵심 메커니즘 인증",
      url: "https://verify.skilljar.com/c/wvt9rqqkjhyo"
    },
    {
      id: "ai-fluency-foundations",
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      recipient: "Douglas KIM",
      category: "AI Fluency",
      badge: "Core Framework",
      description: "학계 전문가와 공동 설계한 4D AI Fluency 프레임워크 및 안전하고 윤리적인 AI 상호작용 역량 인증",
      url: "https://verify.skilljar.com/c/m5rvbzv8icbk"
    },
    {
      id: "teaching-ai-fluency",
      title: "Teaching AI Fluency",
      issuer: "Anthropic",
      recipient: "Douglas KIM",
      category: "AI Education",
      badge: "Pedagogy",
      description: "조직과 학습자에게 AI 역량(Fluency)을 체계적으로 전파하고 교육하기 위한 실전 교수법 인증",
      url: "https://verify.skilljar.com/c/q7zp293pij42"
    },
    {
      id: "ai-fluency-educators",
      title: "AI Fluency for educators",
      issuer: "Anthropic",
      recipient: "Douglas KIM",
      category: "AI Education",
      badge: "Educator",
      description: "교육 현장에서의 책임감 있는 AI 협업 설계, 교육과정 통합 및 비판적 사고 유도 역량 인증",
      url: "https://verify.skilljar.com/c/sdqvigevzabf"
    },
    {
      id: "ai-fluency-students",
      title: "AI Fluency for students",
      issuer: "Anthropic",
      recipient: "Douglas KIM",
      category: "AI Fluency",
      badge: "Applied Learning",
      description: "학업 성취 및 커리어 설계를 위한 실용적인 AI 도구 활용 및 문제 해결 협업 역량 인증",
      url: "https://verify.skilljar.com/c/mmu4jytqzemu"
    }
  ]
};

/**
 * Main application coordinator managing themes, data, and interactive feature detail popups.
 */
class BlogApp {
  constructor() {
    this.data = INITIAL_DATA;
    this.currentModal = null;
    this.initTheme();
    this.initElements();
    this.bindEvents();
    this.loadData();
    this.handleInitialHash();
  }

  initTheme() {
    const savedTheme = localStorage.getItem("drbrooks-theme");
    const manualTheme = localStorage.getItem("drbrooks-theme-manual");

    // Determine Day vs Night from current local time (06:00 ~ 18:30 is day)
    const now = new Date();
    const hours = now.getHours() + now.getMinutes() / 60;
    const isDay = hours >= 6 && hours < 18.5;
    const dayNightTheme = isDay ? "light" : "dark";

    const initialTheme = manualTheme || dayNightTheme || savedTheme || "light";

    document.documentElement.setAttribute("data-theme", initialTheme);
    this.updateThemeToggleIcon(initialTheme);
  }

  setTheme(theme, isManual = false) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("drbrooks-theme", theme);
    if (isManual) {
      localStorage.setItem("drbrooks-theme-manual", theme);
    }
    this.updateThemeToggleIcon(theme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    this.setTheme(nextTheme, true);

    if (window.weatherSky) {
      window.weatherSky.handleThemeToggle(nextTheme);
    }
  }

  updateThemeToggleIcon(theme) {
    if (!this.themeToggleBtn) return;
    if (theme === "dark") {
      this.themeToggleBtn.innerHTML = `
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      `;
      this.themeToggleBtn.setAttribute("aria-label", "라이트 모드로 전환");
    } else {
      this.themeToggleBtn.innerHTML = `
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      `;
      this.themeToggleBtn.setAttribute("aria-label", "다크 모드로 전환");
    }
  }

  initElements() {
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.timelineItems = document.querySelectorAll(".timeline-item");
    this.modalBackdrop = document.getElementById("detailModalBackdrop");
    this.modalDialog = document.getElementById("detailModalDialog");
    this.modalTitle = document.getElementById("modalTitle");
    this.modalCategoryBadge = document.getElementById("modalCategoryBadge");
    this.modalBody = document.getElementById("modalBody");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
  }

  bindEvents() {
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());
    }

    // Timeline item click & keydown handlers (Novels & Certifications open modals, Essays & Services are direct links)
    this.timelineItems.forEach(item => {
      const pillar = item.getAttribute("data-pillar");
      if (pillar === "novels" || pillar === "certifications") {
        item.addEventListener("click", () => this.openModal(pillar));
        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.openModal(pillar);
          }
        });
      }
    });

    // Modal close events
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener("click", () => this.closeModal());
    }

    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener("click", (e) => {
        if (e.target === this.modalBackdrop) {
          this.closeModal();
        }
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.currentModal) {
        this.closeModal();
      }
    });

    window.addEventListener("hashchange", () => this.handleInitialHash());
  }

  async loadData() {
    try {
      const [profileRes, novelsRes, servicesRes, articlesRes, certsRes] = await Promise.all([
        fetch("src/data/profile.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/novels.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/services.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/articles.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/certifications.json").then(r => r.ok ? r.json() : null)
      ]);

      if (profileRes) this.data.profile = profileRes;
      if (novelsRes) this.data.novels = novelsRes;
      if (servicesRes) this.data.services = servicesRes;
      if (articlesRes) this.data.articles = articlesRes;
      if (certsRes) this.data.certifications = certsRes;
    } catch (e) {
      console.log("Using embedded dataset (local environment)");
    }
  }

  handleInitialHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash === "essays") {
      window.open("https://brunch.co.kr/@drbrooks", "_blank", "noopener,noreferrer");
    } else if (hash === "services") {
      window.location.href = "./services/";
    } else if (["novels", "certifications"].includes(hash)) {
      this.openModal(hash, false);
    }
  }

  openModal(pillar, updateHash = true) {
    if (!this.modalBackdrop || !this.modalBody) return;

    this.currentModal = pillar;
    let categoryBadgeText = "";
    let titleText = "";
    let contentHtml = "";

    switch (pillar) {
      case "essays":
        categoryBadgeText = "ESSAYS & THOUGHTS";
        titleText = "Essays on the Essence (글 & 생각)";
        contentHtml = this.renderEssaysModal();
        break;

      case "novels":
        categoryBadgeText = "LITERATURE & FICTION";
        titleText = "Novels (소설 작품 쇼케이스)";
        contentHtml = this.renderNovelsModal();
        break;

      case "services":
        categoryBadgeText = "AUTONOMOUS WEB";
        titleText = "Web Services (지능형 웹 서비스 포털)";
        contentHtml = this.renderServicesModal();
        break;

      case "certifications":
        categoryBadgeText = "ANTHROPIC & MCP CREDENTIALS";
        titleText = "Certifications (공인 AI & MCP 자격증)";
        contentHtml = this.renderCertificationsModal();
        break;

      default:
        return;
    }

    this.modalCategoryBadge.textContent = categoryBadgeText;
    this.modalTitle.textContent = titleText;
    this.modalBody.innerHTML = contentHtml;

    // Show modal & prevent background scrolling
    this.modalBackdrop.classList.add("active");
    this.modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (updateHash) {
      history.pushState(null, null, `#${pillar}`);
    }
  }

  closeModal() {
    if (!this.modalBackdrop) return;

    this.modalBackdrop.classList.remove("active");
    this.modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    this.currentModal = null;

    // Clear hash without reloading
    if (window.location.hash) {
      history.pushState(null, null, window.location.pathname + window.location.search);
    }
  }

  renderEssaysModal() {
    const articles = this.data.articles || [];
    return `
      <div class="modal-banner">
        <p class="modal-banner-desc">
          기획의 본질과 사용자 경험, 일과 심리에 관한 사유. 카카오 브런치에서 193편의 글을 연재하고 있습니다.
        </p>
        <a href="https://brunch.co.kr/@drbrooks" target="_blank" rel="noopener noreferrer" class="btn-primary-sm">
          브런치 블로그 방문 (@drbrooks) &rarr;
        </a>
      </div>
      <div class="modal-card-list">
        ${articles.map(article => this.createArticleCard(article)).join("")}
      </div>
    `;
  }

  renderNovelsModal() {
    const novels = this.data.novels || [];
    return `
      <div class="modal-banner">
        <p class="modal-banner-desc">
          인간의 한계와 감각, 조직의 역학을 탐구한 문학 작품입니다. 장편 1작품, 단편 2작품을 문피아에서 열람하실 수 있습니다.
        </p>
      </div>
      <div class="modal-card-list">
        ${novels.map(novel => this.createNovelCard(novel, true)).join("")}
      </div>
    `;
  }

  renderServicesModal() {
    const services = this.data.services || [];
    return `
      <div class="modal-banner">
        <p class="modal-banner-desc">
          생각에만 머물지 않고 실제로 작동하는 프로덕트를 만듭니다. Cloudflare Pages 기반의 13개 인터랙티브 웹 서비스 쇼케이스 포털을 탐색해 보세요.
        </p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px;">
          <a href="services/" target="_blank" rel="noopener noreferrer" class="btn-primary-sm">
            Dr. Brooks Services 허브 포털 열기 (/services/) &rarr;
          </a>
          <a href="about.html" target="_blank" rel="noopener noreferrer" class="btn-primary-sm" style="background-color: var(--surface-alt); color: var(--text-primary); border: 1px solid var(--border-subtle);">
            3D 아키텍처 상세 보기 (/about.html) &rarr;
          </a>
        </div>
      </div>
      <div class="modal-card-list">
        ${services.map(service => this.createServiceCard(service)).join("")}
      </div>
    `;
  }

  renderCertificationsModal() {
    const certs = this.data.certifications || [];
    return `
      <div class="modal-banner">
        <p class="modal-banner-desc">
          Anthropic 및 Model Context Protocol(MCP) 공식 인증 체계를 이수하고 검증받은 전문 자격증 7건 목록입니다. (수료자: Douglas KIM)
        </p>
      </div>
      <div class="modal-grid-cert">
        ${certs.map(cert => this.createCertificationCard(cert)).join("")}
      </div>
    `;
  }

  createNovelCard(novel, expanded = true) {
    return `
      <article class="novel-card" id="novel-${novel.id}">
        <div class="novel-cover-wrapper">
          <img src="${novel.cover}" alt="${novel.title} 표지" class="novel-cover" loading="lazy" onerror="this.src='https://placehold.co/220x320/1e293b/ffffff?text=${encodeURIComponent(novel.title)}'" />
        </div>
        <div class="novel-content">
          <div class="novel-badge-bar">
            <span class="badge-tag">${novel.badge}</span>
            <span class="badge-episodes">${novel.episodes} · ${novel.platform}</span>
          </div>
          <h4 class="novel-title">${novel.title}</h4>
          <p class="novel-summary">${expanded ? novel.description : novel.summary}</p>
          <div class="novel-tags">
            ${novel.tags.map(t => `<span class="novel-tag-item">#${t}</span>`).join("")}
          </div>
          <div class="novel-action-row">
            <a href="${novel.url}" target="_blank" rel="noopener noreferrer" class="btn-primary-sm">
              문피아에서 작품 읽기 &rarr;
            </a>
          </div>
        </div>
      </article>
    `;
  }

  createServiceCard(service) {
    return `
      <article class="service-card" id="service-${service.id}">
        <div class="service-header">
          <div>
            <h4 class="service-name">${service.name}</h4>
            <div class="service-tagline">${service.tagline}</div>
          </div>
          <span class="badge-tag">${service.badge}</span>
        </div>
        <p class="service-desc">${service.description}</p>
        <ul class="service-features-list">
          ${service.features.map(f => `<li class="service-feature-item">${f}</li>`).join("")}
        </ul>
        <div class="service-tech-tags">
          ${service.techStack.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
        <div style="display: flex; gap: 12px; margin-top: auto; flex-wrap: wrap;">
          <a href="${service.url}" target="_blank" rel="noopener noreferrer" class="btn-primary-sm">
            서비스 방문 &rarr;
          </a>
          ${service.links && service.links.about ? `
            <a href="${service.links.about}" target="_blank" rel="noopener noreferrer" class="btn-primary-sm" style="background-color: var(--surface-alt); color: var(--text-primary); border: 1px solid var(--border-subtle);">
              상세 아키텍처 보기
            </a>
          ` : ""}
        </div>
      </article>
    `;
  }

  createArticleCard(article) {
    return `
      <article class="article-card" id="article-${article.id}">
        <div class="article-meta">
          <span class="article-category">${article.category}</span>
          <span>•</span>
          <span>${article.date}</span>
          <span>•</span>
          <span>${article.readTime}</span>
        </div>
        <h4 class="article-title">${article.title}</h4>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-footer">
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            ${article.tags.map(t => `<span class="tech-tag">#${t}</span>`).join("")}
          </div>
          <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="pillar-link" style="font-size: 0.88rem;">
            브런치에서 읽기 &rarr;
          </a>
        </div>
      </article>
    `;
  }

  createCertificationCard(cert) {
    return `
      <div class="cert-card">
        <div>
          <div class="cert-card-top">
            <span class="cert-badge">${cert.badge}</span>
            <span class="cert-issuer">${cert.issuer}</span>
          </div>
          <h4 class="cert-title">${cert.title}</h4>
          <p class="cert-desc">${cert.description}</p>
        </div>
        <div class="cert-footer">
          <span class="cert-recipient">수료자: ${cert.recipient}</span>
          <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="cert-verify-link" title="Skilljar 공식 인증서 검증">
            공식 인증 검증 ↗
          </a>
        </div>
      </div>
    `;
  }
}

/**
 * Procedural Sky Cloud Generator
 * Dynamically generates a random, diverse ensemble of clouds on each page refresh/load:
 * - 긴 구름 (Elongated / Stratus band)
 * - 짧은 구름 (Compact / Chubby cotton puff)
 * - 작은 구름 (Small / Delicate high wisp)
 * - 큰 구름 (Towering / Cumulus congestus billow)
 * - 흩어져있는 구름 (Scattered / Fractus loose cluster)
 */
class ProceduralSkyGenerator {
  constructor(containerSelector = ".clouds-drift-stage") {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    this.generate();
  }

  generate() {
    if (!this.container) return;
    this.container.innerHTML = "";

    // Total clouds on this refresh: 8 to 11
    const count = Math.floor(Math.random() * 4) + 8;

    // Guaranteed archetypes to ensure diversity on every refresh
    const archetypes = ["elongated", "compact", "small", "towering", "scattered"];
    
    // Fill remaining slots randomly
    const allTypes = [...archetypes];
    while (allTypes.length < count) {
      allTypes.push(archetypes[Math.floor(Math.random() * archetypes.length)]);
    }

    // Shuffle the types
    allTypes.sort(() => Math.random() - 0.5);

    // Altitude distribution slots (3% to 86%)
    const slotHeight = 83 / count;

    allTypes.forEach((type, index) => {
      // Stratified vertical altitude with organic jitter
      const baseTop = 3 + index * slotHeight;
      const topPercent = Math.min(88, Math.max(3, baseTop + (Math.random() * (slotHeight * 0.6) - slotHeight * 0.3)));

      // Horizontal phase distribution (spread across the viewport on load)
      const phase = ((index + Math.random() * 0.4) / count) % 1;

      const cloudEl = this.createCloudElement(type, topPercent, phase);
      this.container.appendChild(cloudEl);
    });
  }

  createCloudElement(type, topPercent, phase) {
    const wrapper = document.createElement("div");
    wrapper.className = `sky-cloud cloud-procedural-${type}`;

    // Cloud archetype configuration
    let config;
    switch (type) {
      case "elongated": // 긴 구름
        config = {
          width: Math.floor(Math.random() * 180) + 520, // 520px - 700px
          duration: Math.floor(Math.random() * 35) + 115, // 115s - 150s
          opacity: (Math.random() * 0.15 + 0.75).toFixed(2),
          svg: this.getElongatedSvg()
        };
        break;
      case "compact": // 짧은 구름
        config = {
          width: Math.floor(Math.random() * 80) + 200, // 200px - 280px
          duration: Math.floor(Math.random() * 25) + 95, // 95s - 120s
          opacity: (Math.random() * 0.15 + 0.80).toFixed(2),
          svg: this.getCompactSvg()
        };
        break;
      case "small": // 작은 구름
        config = {
          width: Math.floor(Math.random() * 60) + 100, // 100px - 160px
          duration: Math.floor(Math.random() * 40) + 125, // 125s - 165s
          opacity: (Math.random() * 0.15 + 0.58).toFixed(2),
          svg: this.getSmallSvg()
        };
        break;
      case "towering": // 큰 구름
        config = {
          width: Math.floor(Math.random() * 180) + 520, // 520px - 700px
          duration: Math.floor(Math.random() * 30) + 105, // 105s - 135s
          opacity: (Math.random() * 0.10 + 0.88).toFixed(2),
          svg: this.getToweringSvg()
        };
        break;
      case "scattered": // 흩어져있는 구름
      default:
        config = {
          width: Math.floor(Math.random() * 140) + 360, // 360px - 500px
          duration: Math.floor(Math.random() * 30) + 90, // 90s - 120s
          opacity: (Math.random() * 0.15 + 0.72).toFixed(2),
          svg: this.getScatteredSvg()
        };
        break;
    }

    const delay = (phase * config.duration).toFixed(1);
    const bobType = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
    const bobDuration = Math.floor(Math.random() * 10) + 16; // 16s - 25s
    const isFlipped = Math.random() > 0.5;

    wrapper.style.top = `${topPercent.toFixed(1)}%`;
    wrapper.style.width = `${config.width}px`;
    wrapper.style.opacity = config.opacity;
    wrapper.style.animation = `cloud-drift-ltr ${config.duration}s linear infinite`;
    wrapper.style.animationDelay = `-${delay}s`;

    const bobContainer = document.createElement("div");
    bobContainer.className = "cloud-bob";
    bobContainer.style.animation = `cloud-gentle-bob-${bobType} ${bobDuration}s ease-in-out infinite`;
    if (isFlipped) {
      bobContainer.style.transform = "scaleX(-1)";
    }

    bobContainer.innerHTML = config.svg;
    wrapper.appendChild(bobContainer);

    return wrapper;
  }

  // 긴 구름 (Elongated / Stratus band)
  getElongatedSvg() {
    return `
      <svg class="cloud-svg" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#cloudSoftBlur)">
          <ellipse cx="300" cy="85" rx="275" ry="24" fill="url(#cloudGradSunlit)" />
          <ellipse cx="120" cy="65" rx="55" ry="28" fill="url(#cloudPuffHighlight)" />
          <ellipse cx="210" cy="54" rx="65" ry="32" fill="url(#cloudPuffHighlight)" />
          <ellipse cx="310" cy="48" rx="75" ry="35" fill="url(#cloudPuffHighlight)" />
          <ellipse cx="410" cy="56" rx="65" ry="30" fill="url(#cloudPuffHighlight)" />
          <ellipse cx="495" cy="68" rx="50" ry="25" fill="url(#cloudPuffHighlight)" />
          <ellipse cx="545" cy="78" rx="35" ry="18" fill="url(#cloudPuffHighlight)" />
          <ellipse cx="55" cy="78" rx="35" ry="18" fill="url(#cloudPuffHighlight)" />
        </g>
      </svg>
    `;
  }

  // 짧은 구름 (Compact / Chubby cotton puff)
  getCompactSvg() {
    return `
      <svg class="cloud-svg" viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#cloudSoftBlur)">
          <ellipse cx="130" cy="115" rx="112" ry="32" fill="url(#cloudGradSunlit)" />
          <circle cx="130" cy="65" r="54" fill="url(#cloudPuffHighlight)" />
          <circle cx="80" cy="82" r="44" fill="url(#cloudPuffHighlight)" />
          <circle cx="180" cy="82" r="44" fill="url(#cloudPuffHighlight)" />
          <circle cx="42" cy="104" r="30" fill="url(#cloudPuffHighlight)" />
          <circle cx="218" cy="102" r="30" fill="url(#cloudPuffHighlight)" />
        </g>
      </svg>
    `;
  }

  // 작은 구름 (Small / High wisp)
  getSmallSvg() {
    return `
      <svg class="cloud-svg" viewBox="0 0 180 80" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#cloudSoftBlur)">
          <ellipse cx="90" cy="56" rx="76" ry="16" fill="url(#cloudGradSunlit)" />
          <circle cx="65" cy="40" r="24" fill="url(#cloudPuffHighlight)" />
          <circle cx="105" cy="36" r="26" fill="url(#cloudPuffHighlight)" />
          <circle cx="140" cy="44" r="19" fill="url(#cloudPuffHighlight)" />
          <circle cx="36" cy="46" r="18" fill="url(#cloudPuffHighlight)" />
        </g>
      </svg>
    `;
  }

  // 큰 구름 (Towering / Cumulus congestus)
  getToweringSvg() {
    return `
      <svg class="cloud-svg" viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#cloudSoftBlur)">
          <ellipse cx="270" cy="175" rx="245" ry="50" fill="url(#cloudGradSunlit)" />
          <circle cx="270" cy="85" r="82" fill="url(#cloudPuffHighlight)" />
          <circle cx="180" cy="110" r="70" fill="url(#cloudPuffHighlight)" />
          <circle cx="360" cy="115" r="66" fill="url(#cloudPuffHighlight)" />
          <circle cx="100" cy="148" r="52" fill="url(#cloudPuffHighlight)" />
          <circle cx="440" cy="145" r="54" fill="url(#cloudPuffHighlight)" />
          <circle cx="45" cy="165" r="38" fill="url(#cloudPuffHighlight)" />
          <circle cx="495" cy="162" r="38" fill="url(#cloudPuffHighlight)" />
        </g>
      </svg>
    `;
  }

  // 흩어져있는 구름 (Scattered / Fractus loose cluster)
  getScatteredSvg() {
    return `
      <svg class="cloud-svg" viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#cloudSoftBlur)">
          <!-- Cluster 1: Left Main -->
          <ellipse cx="110" cy="85" rx="70" ry="22" fill="url(#cloudGradSunlit)" />
          <circle cx="95" cy="62" r="28" fill="url(#cloudPuffHighlight)" />
          <circle cx="135" cy="65" r="25" fill="url(#cloudPuffHighlight)" />
          <!-- Cluster 2: Mid-Right Detached -->
          <ellipse cx="285" cy="55" rx="55" ry="18" fill="url(#cloudGradSunlit)" />
          <circle cx="275" cy="38" r="24" fill="url(#cloudPuffHighlight)" />
          <circle cx="305" cy="42" r="20" fill="url(#cloudPuffHighlight)" />
          <!-- Cluster 3: Far-Right Trailing Wisp -->
          <ellipse cx="405" cy="88" rx="40" ry="14" fill="url(#cloudGradSunlit)" />
          <circle cx="400" cy="76" r="16" fill="url(#cloudPuffHighlight)" />
          <!-- Cluster 4: Top-Left Floating Pufflet -->
          <circle cx="40" cy="42" r="14" fill="url(#cloudPuffHighlight)" />
          <ellipse cx="50" cy="46" rx="20" ry="8" fill="url(#cloudGradSunlit)" />
        </g>
      </svg>
    `;
  }
}

/**
 * WeatherSkyManager (기상 상태 및 밤낮 테마 통합 관리자)
 * 1. 실시간 기상 API (Open-Meteo) 연동으로 현재 날씨, 기온, 낮/밤(is_day) 감지
 * 2. 낮/밤 구분에 따라 라이트/다크 테마 자동 전환 (Day = Light Theme, Night = Dark Theme)
 * 3. 기상 상태(맑음, 흐림, 비, 눈, 안개)에 따라 배경 그라데이션 및 파티클(별무리, 빗방울, 눈송이, 안개) 동적 제어
 * 4. 상단 네비게이션 버튼을 통해 실시간 자동 모드 및 수동 프리셋 순환 감상 지원
 */
class WeatherSkyManager {
  constructor() {
    this.skyPhaseBtn = document.getElementById("skyPhaseBtn");
    this.skyPhaseIcon = document.getElementById("skyPhaseIcon");
    this.skyPhaseText = document.getElementById("skyPhaseText");

    this.starsStage = document.getElementById("weatherStarsStage");
    this.rainStage = document.getElementById("weatherRainStage");
    this.snowStage = document.getElementById("weatherSnowStage");

    // WMO Weather interpretation codes mapping
    this.weatherMap = {
      0: { id: "clear", label: "맑음", icon: "☀️", nightIcon: "🌙" },
      1: { id: "cloudy", label: "구름조금", icon: "🌤️", nightIcon: "☁️" },
      2: { id: "cloudy", label: "구름많음", icon: "⛅", nightIcon: "☁️" },
      3: { id: "cloudy", label: "흐림", icon: "☁️", nightIcon: "☁️" },
      45: { id: "fog", label: "안개", icon: "🌫️", nightIcon: "🌫️" },
      48: { id: "fog", label: "짙은 안개", icon: "🌫️", nightIcon: "🌫️" },
      51: { id: "rain", label: "이슬비", icon: "🌧️", nightIcon: "🌧️" },
      53: { id: "rain", label: "보슬비", icon: "🌧️", nightIcon: "🌧️" },
      55: { id: "rain", label: "가랑비", icon: "🌧️", nightIcon: "🌧️" },
      61: { id: "rain", label: "약한 비", icon: "🌧️", nightIcon: "🌧️" },
      63: { id: "rain", label: "가을비", icon: "🌧️", nightIcon: "🌧️" },
      65: { id: "rain", label: "강한 비", icon: "🌧️", nightIcon: "🌧️" },
      71: { id: "snow", label: "약한 눈", icon: "❄️", nightIcon: "❄️" },
      73: { id: "snow", label: "눈", icon: "❄️", nightIcon: "❄️" },
      75: { id: "snow", label: "함박눈", icon: "❄️", nightIcon: "❄️" },
      77: { id: "snow", label: "싸락눈", icon: "❄️", nightIcon: "❄️" },
      80: { id: "rain", label: "소나기", icon: "🌧️", nightIcon: "🌧️" },
      81: { id: "rain", label: "강한 소나기", icon: "🌧️", nightIcon: "🌧️" },
      82: { id: "rain", label: "폭우", icon: "🌧️", nightIcon: "🌧️" },
      85: { id: "snow", label: "눈보라", icon: "❄️", nightIcon: "❄️" },
      86: { id: "snow", label: "대설", icon: "❄️", nightIcon: "❄️" },
      95: { id: "thunder", label: "뇌우", icon: "⛈️", nightIcon: "⛈️" },
      96: { id: "thunder", label: "뇌우", icon: "⛈️", nightIcon: "⛈️" },
      99: { id: "thunder", label: "우박 뇌우", icon: "⛈️", nightIcon: "⛈️" }
    };

    // Preset list for interactive user cycling
    this.presets = [
      { id: "auto", isAuto: true, label: "실시간 자동", icon: "🔄" },
      { id: "clear-day", weather: "clear", isDay: true, skyPhase: "midday", theme: "light", label: "맑음 · 낮", icon: "☀️" },
      { id: "clear-night", weather: "clear", isDay: false, skyPhase: "night", theme: "dark", label: "맑음 · 밤", icon: "🌙" },
      { id: "cloudy-day", weather: "cloudy", isDay: true, skyPhase: "afternoon", theme: "light", label: "흐림 · 낮", icon: "⛅" },
      { id: "rain-day", weather: "rain", isDay: true, skyPhase: "afternoon", theme: "light", label: "가을비 · 낮", icon: "🌧️" },
      { id: "rain-night", weather: "rain", isDay: false, skyPhase: "night", theme: "dark", label: "밤비 · 밤", icon: "🌧️" },
      { id: "snow-day", weather: "snow", isDay: true, skyPhase: "morning", theme: "light", label: "첫눈 · 낮", icon: "❄️" },
      { id: "snow-night", weather: "snow", isDay: false, skyPhase: "night", theme: "dark", label: "밤눈 · 밤", icon: "❄️" },
      { id: "fog-day", weather: "fog", isDay: true, skyPhase: "morning", theme: "light", label: "안개 · 낮", icon: "🌫️" }
    ];

    this.currentPresetIndex = 0; // Starts in real-time Auto mode
    this.liveWeather = null;

    this.init();
  }

  init() {
    this.initAtmosphericStages();
    this.fetchLiveWeather();

    if (this.skyPhaseBtn) {
      this.skyPhaseBtn.addEventListener("click", () => this.cyclePhase());
    }

    // Auto refresh live weather every 10 minutes
    setInterval(() => {
      if (this.currentPresetIndex === 0) {
        this.fetchLiveWeather();
      }
    }, 10 * 60 * 1000);
  }

  initAtmosphericStages() {
    // 1. Generate Starfield (45 organic twinkling stars)
    if (this.starsStage && this.starsStage.children.length === 0) {
      const starFragment = document.createDocumentFragment();
      for (let i = 0; i < 45; i++) {
        const star = document.createElement("div");
        star.className = "sky-star";
        star.style.left = `${(Math.random() * 96 + 2).toFixed(1)}%`;
        star.style.top = `${(Math.random() * 65 + 3).toFixed(1)}%`;
        const size = (Math.random() * 1.8 + 1.2).toFixed(1);
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${(Math.random() * 4).toFixed(1)}s`;
        star.style.animationDuration = `${(Math.random() * 2.5 + 2.5).toFixed(1)}s`;
        starFragment.appendChild(star);
      }
      this.starsStage.appendChild(starFragment);
    }

    // 2. Generate Rain Stage (65 slanted smooth raindrops)
    if (this.rainStage && this.rainStage.children.length === 0) {
      const rainFragment = document.createDocumentFragment();
      for (let i = 0; i < 65; i++) {
        const drop = document.createElement("div");
        drop.className = "raindrop";
        drop.style.left = `${(Math.random() * 106 - 3).toFixed(1)}%`;
        drop.style.height = `${Math.floor(Math.random() * 14 + 18)}px`;
        drop.style.animationDuration = `${(Math.random() * 0.45 + 0.65).toFixed(2)}s`;
        drop.style.animationDelay = `-${(Math.random() * 1.5).toFixed(2)}s`;
        drop.style.opacity = (Math.random() * 0.4 + 0.5).toFixed(2);
        rainFragment.appendChild(drop);
      }
      this.rainStage.appendChild(rainFragment);
    }

    // 3. Generate Snow Stage (42 soft drifting snowflakes)
    if (this.snowStage && this.snowStage.children.length === 0) {
      const snowFragment = document.createDocumentFragment();
      for (let i = 0; i < 42; i++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        flake.style.left = `${(Math.random() * 102 - 1).toFixed(1)}%`;
        const size = (Math.random() * 4 + 2.5).toFixed(1);
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.animationDuration = `${(Math.random() * 4 + 5.5).toFixed(2)}s`;
        flake.style.animationDelay = `-${(Math.random() * 6).toFixed(2)}s`;
        flake.style.opacity = (Math.random() * 0.45 + 0.45).toFixed(2);
        snowFragment.appendChild(flake);
      }
      this.snowStage.appendChild(snowFragment);
    }
  }

  async fetchLiveWeather() {
    try {
      const cached = sessionStorage.getItem("drbrooks-weather-cache");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < 15 * 60 * 1000) {
          this.liveWeather = parsed.data;
          this.applyLiveWeather();
          return;
        }
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      // Open-Meteo free API (Seoul default coordinates)
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current=temperature_2m,weather_code,is_day&timezone=auto",
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error("HTTP error " + res.status);
      const data = await res.json();

      if (data && data.current) {
        this.liveWeather = {
          temperature: Math.round(data.current.temperature_2m * 10) / 10,
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day === 1
        };
        sessionStorage.setItem(
          "drbrooks-weather-cache",
          JSON.stringify({
            data: this.liveWeather,
            timestamp: Date.now()
          })
        );
      }
    } catch (e) {
      console.warn("Using offline day/night fallback weather:", e);
      // Offline fallback from system local hour
      const now = new Date();
      const hour = now.getHours();
      const isDay = hour >= 6 && hour < 18.5;
      this.liveWeather = {
        temperature: 21,
        weatherCode: 0,
        isDay: isDay
      };
    }

    this.applyLiveWeather();
  }

  applyLiveWeather() {
    if (this.currentPresetIndex !== 0) return; // Retain user manual preset if active

    if (!this.liveWeather) return;

    const weatherInfo = this.weatherMap[this.liveWeather.weatherCode] || this.weatherMap[0];
    const isDay = this.liveWeather.isDay;
    const theme = isDay ? "light" : "dark";
    const skyPhase = isDay ? this.getSkyPhaseFromHour() : "night";

    this.applyState({
      weather: weatherInfo.id,
      isDay: isDay,
      theme: theme,
      skyPhase: skyPhase,
      icon: isDay ? weatherInfo.icon : weatherInfo.nightIcon,
      label: `${weatherInfo.label} ${this.liveWeather.temperature}°C · ${isDay ? "낮" : "가을밤"} (자동)`
    });
  }

  getSkyPhaseFromHour() {
    const now = new Date();
    const totalMinutes = now.getHours() * 60 + now.getMinutes();

    if (totalMinutes >= 360 && totalMinutes < 540) return "morning";
    if (totalMinutes >= 540 && totalMinutes < 900) return "midday";
    if (totalMinutes >= 900 && totalMinutes < 1050) return "afternoon";
    if (totalMinutes >= 1050 && totalMinutes < 1170) return "sunset";
    return "night";
  }

  cyclePhase() {
    this.currentPresetIndex = (this.currentPresetIndex + 1) % this.presets.length;
    const preset = this.presets[this.currentPresetIndex];

    if (preset.isAuto) {
      localStorage.removeItem("drbrooks-theme-manual");
      if (this.liveWeather) {
        this.applyLiveWeather();
      } else {
        this.fetchLiveWeather();
      }
    } else {
      this.applyState({
        weather: preset.weather,
        isDay: preset.isDay,
        theme: preset.theme,
        skyPhase: preset.skyPhase,
        icon: preset.icon,
        label: preset.label
      });
    }
  }

  applyState({ weather, isDay, theme, skyPhase, icon, label }) {
    const root = document.documentElement;
    root.setAttribute("data-weather", weather);
    root.setAttribute("data-is-day", isDay ? "true" : "false");
    root.setAttribute("data-sky-phase", skyPhase);

    // Synchronize Light/Dark theme according to Day/Night
    if (window.blogApp) {
      window.blogApp.setTheme(theme, false);
    } else {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("drbrooks-theme", theme);
    }

    // Update Nav Action Button UI
    if (this.skyPhaseIcon) {
      this.skyPhaseIcon.textContent = icon;
    }
    if (this.skyPhaseText) {
      this.skyPhaseText.textContent = label;
    }
    if (this.skyPhaseBtn) {
      this.skyPhaseBtn.setAttribute("title", `현재: ${label} | 클릭하여 다른 날씨/시간대로 전환`);
    }
  }

  handleThemeToggle(newTheme) {
    const isDay = newTheme === "light";
    document.documentElement.setAttribute("data-is-day", isDay ? "true" : "false");
    document.documentElement.setAttribute("data-sky-phase", isDay ? "midday" : "night");

    if (this.currentPresetIndex === 0 && this.liveWeather) {
      const weatherInfo = this.weatherMap[this.liveWeather.weatherCode] || this.weatherMap[0];
      const icon = isDay ? weatherInfo.icon : weatherInfo.nightIcon;
      if (this.skyPhaseIcon) this.skyPhaseIcon.textContent = icon;
      if (this.skyPhaseText) {
        this.skyPhaseText.textContent = `${weatherInfo.label} ${this.liveWeather.temperature}°C · ${isDay ? "낮" : "가을밤"}`;
      }
    }
  }
}

// Backward compatibility alias
class SkyTimeController extends WeatherSkyManager {}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.blogApp = new BlogApp();
  window.weatherSky = new WeatherSkyManager();
  window.skyTime = window.weatherSky;
  window.proceduralSky = new ProceduralSkyGenerator();
  window.refreshClouds = () => window.proceduralSky && window.proceduralSky.generate();
});
