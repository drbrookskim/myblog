/**
 * Dr. Brooks Blog & Portal - Main Controller & Selection Translation Engine
 * Zero-dependency, accessible, responsive client script
 */

// Embedded Fallback Data (Enables local file:// opening without CORS restrictions)
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
      category: "사용자의 관점",
      excerpt: "사용자는 우리가 의도한 논리대로 움직이지 않는다. 인터페이스 너머 실제 인간이 느끼는 인지적 마찰과 감정의 흐름을 관찰하는 법.",
      date: "2026-07-02",
      readTime: "8 min",
      tags: ["사용자경험", "UX", "고객관점", "행동심리"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: true
    },
    {
      id: "human-limits",
      title: "인간의 한계와 인터페이스: 결핍이 만드는 새로운 세계",
      category: "인간의 한계",
      excerpt: "시각이 차단된 지하 창고의 형사, 보이지 않는 이산화탄소에 질식하는 조직. 인간의 신체적·심리적 한계는 소설의 모티프이자 서비스 설계의 출발점이 된다.",
      date: "2026-05-19",
      readTime: "7 min",
      tags: ["인간의한계", "심리", "소설과기획", "스토리텔링"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: true
    },
    {
      id: "writing-and-building",
      title: "글을 쓰고, 소설을 짓고, 웹 서비스를 만드는 이유",
      category: "에세이",
      excerpt: "텍스트로 사유를 정제하고, 소설로 인간의 심연을 직조하며, 코드로 실체화된 도구를 완성하는 삼각 순환의 창작론.",
      date: "2026-03-10",
      readTime: "5 min",
      tags: ["창작", "소설가", "기획자", "웹빌더"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: false
    },
    {
      id: "ten-years-reflection",
      title: "12년차 기획자가 깨달은 '오래 남는 제품'의 조건",
      category: "일과 직업",
      excerpt: "유행하는 프레임워크나 툴보다 더 중요한 것은 흔들리지 않는 중심축이다. 12년의 여정 동안 축적된 시행착오와 배움의 기록.",
      date: "2026-01-28",
      readTime: "10 min",
      tags: ["커리어", "회고", "12년차", "일의태도"],
      url: "https://brunch.co.kr/@drbrooks",
      platform: "브런치",
      featured: false
    }
  ]
};

// Bilingual Translations Corpus for Text Selection
const INITIAL_TRANSLATIONS = {
  exactMatches: {
    "닥터브룩스": "Dr. Brooks",
    "안녕하세요. 닥터브룩스입니다.": "Hello, I am Dr. Brooks.",
    "12년차 제품기획자": "12-Year Product Manager",
    "소설가": "Novelist / Fiction Writer",
    "웹 서비스 빌더": "Web Service Builder",
    "기획의 ‘본질’, 사용자의 ‘관점’, 그리고 인간의 ‘한계’에 대해 관심이 많습니다.": "I am deeply intrigued by the 'essence' of product planning, the user's 'perspective', and the 'limits' of humanity.",
    "기획의 ‘본질’, 사용자의 ‘관점’, 그리고 인간의 ‘한계' 에 대해 관심이 많습니다.": "I am deeply intrigued by the 'essence' of product planning, the user's 'perspective', and the 'limits' of humanity.",
    "그에 관한 글도, 소설도, 웹 서비스도 만듭니다.": "I write essays, author novels, and build web services exploring these themes.",
    "제품기획 경력": "Product Management Experience",
    "브런치 연재 글": "Essays Serialized on Brunch",
    "문피아 연재 소설": "Novels Serialized on Munpia",
    "웹 서비스 모음": "Interactive Web Services Suite",
    "글 (Essays)": "Essays & Thoughts",
    "기획의 본질과 사용자 경험, 일과 심리에 관한 깊이 있는 사유. 카카오 브런치에서 193편의 글을 연재하고 있습니다.": "Deep reflections on product essence, UX, career, and psychology. Serializing 193 essays on Kakao Brunch.",
    "브런치 블로그 방문 →": "Visit Brunch Blog →",
    "소설 (Novels)": "Novels & Stories",
    "인간의 한계와 감각, 조직의 역학을 다룬 이야기. 장편 《초강마패》, 단편 《이산화탄소 조직》, 《우블리에트의 파수꾼》을 집필했습니다.": "Stories delving into human limits, sensory perception, and corporate dynamics. Authored the full-length novel 'Chogang Mapae' and short stories 'CO2 Organization' and 'The Watcher of the Oubliette'.",
    "작품 쇼케이스 보기 →": "View Novel Showcase →",
    "웹 서비스 (Services)": "Web Services & Products",
    "생각을 구현한 실체. 금융 분석, 투자 시나리오, AI 생산성 툴 등 실제 사용자의 편익을 창출하는 지능형 웹 애플리케이션 모음입니다.": "Tangible realization of ideas. A suite of intelligent web applications delivering real user utility across financial analysis, investment scenarios, and AI productivity.",
    "Dr. Brooks Services →": "Explore Dr. Brooks Services →",
    "초강마패": "Chogang Mapae (The Transcendental Royal Badge)",
    "장편 웹소설": "Full-Length Web Novel",
    "의문의 '마패'를 손에 넣은 흙수저 취준생이 초월적인 마패의 능력으로 부자가 된다.": "An underprivileged job seeker obtains a mysterious royal badge ('Mapae') and rises to wealth through its transcendental powers.",
    "치열한 현실과 초월적 상상력의 만남. 의문의 마패를 손에 쥔 주인공이 한계를 돌파하며 부와 새로운 질서를 일궈나가는 흡인력 있는 현대판타지 서사.": "Where stark reality meets transcendental imagination. A compelling modern fantasy narrative of a protagonist breaking boundaries to forge wealth and a new order.",
    "작품 읽기 →": "Read on Munpia →",
    "이산화탄소 조직": "CO2 Organization (The Carbon Dioxide Workplace)",
    "직장 드라마": "Office Drama",
    "경력직이 새로운 조직에 합류한 뒤, 낯선 환경 속에서 겪게 되는 따돌림을 극복하며 자신만의 자리를 찾아가는 이야기.": "A story of an experienced hire overcoming ostracization in an unfamiliar corporate environment to carve out their own rightful place.",
    "12년차 기획자의 날카로운 관찰력이 돋보이는 소설. 보이지 않는 배제와 질식할 것 같은 조직 분위기(이산화탄소) 속에서 스스로의 전문성과 단단함으로 길을 찾는 경력직의 현실적 극복기.": "A novel shaped by the sharp observation of a 12-year PM. A realistic survival tale of an experienced recruit navigating invisible exclusion and a suffocating corporate climate (carbon dioxide) with quiet resilience and expertise.",
    "우블리에트의 파수꾼": "The Watcher of the Oubliette",
    "감각 추리 미스터리": "Sensory Mystery / Whodunit",
    "우연히 발견한 지하 창고에서 시각이 단절된 채, 청각만을 통해 사건을 해결해 나가는 형사의 이야기입니다.": "A gripping tale of a detective trapped in a subterranean vault without sight, solving an intricate crime relying purely on auditory senses.",
    "인간의 한계 상황에 대한 집요한 탐구. 빛 하나 들지 않는 '우블리에트(잊혀진 지하 감옥)'에서 오직 귀로 전달되는 소리의 파동과 단서만으로 어둠 속 진실을 꿰뚫는 감각적 하드보일드 미스터리.": "A relentless exploration of extreme human constraints. A hard-boiled sensory mystery penetrating the truth in pitch-black darkness relying solely on sound waves and auditory clues.",
    "금융, 투자, AI, 생산성을 위한 인터랙티브 웹 서비스 모음": "An interactive suite of web services for finance, investment, AI, and productivity.",
    "복잡한 데이터와 금융/AI 모델을 직관적인 UI로 재해석하여, 사용자가 능동적으로 인사이트를 도출할 수 있도록 돕는 지능형 웹 애플리케이션 플랫폼입니다.": "An intelligent web application platform reinterpreting complex financial/AI data into intuitive UIs, empowering users to actively extract insights.",
    "대표 서비스 포털": "Flagship Portal",
    "서비스 방문 →": "Visit Live Service →",
    "기획의 본질: 기능의 나열이 아니라 가치의 발견": "Essence of Planning: Discovering Value, Not Listing Features",
    "사용자의 관점: 기획자의 편견을 깨는 질문들": "User's Perspective: Questions That Break the Planner's Bias",
    "인간의 한계와 인터페이스: 결핍이 만드는 새로운 세계": "Human Limits & Interfaces: The New Worlds Born from Scarcity",
    "글을 쓰고, 소설을 짓고, 웹 서비스를 만드는 이유": "Why I Write Essays, Craft Novels, and Build Web Services",
    "12년차 기획자가 깨달은 '오래 남는 제품'의 조건": "Conditions of Enduring Products: Reflections from a 12-Year PM",
    "전체 (All)": "All",
    "글 & 생각 (Essays)": "Essays & Thoughts",
    "소설 (Novels)": "Novels & Stories",
    "웹서비스 (Services)": "Web Services",
    "소개 (About)": "About"
  },
  keywords: {
    "본질": "Essence",
    "관점": "Perspective",
    "한계": "Limits / Constraints",
    "기획": "Product Planning",
    "기획자": "Product Planner / PM",
    "사용자": "User",
    "소설": "Novel / Fiction",
    "단편": "Short Story",
    "장편": "Full-Length Novel",
    "문피아": "Munpia",
    "브런치": "Brunch",
    "서비스": "Service / Product",
    "금융": "Finance",
    "투자": "Investment",
    "생산성": "Productivity",
    "인텔리전스": "Intelligence",
    "추리": "Mystery / Detective",
    "형사": "Detective",
    "창고": "Vault / Storage",
    "경력직": "Experienced Hire",
    "조직": "Organization / Workplace",
    "따돌림": "Ostracization / Exclusion",
    "마패": "Royal Badge (Mapae)",
    "취준생": "Job Seeker",
    "우블리에트": "Oubliette (Underground Dungeon)"
  }
};

/**
 * SelectionTranslator
 * Detects user text selection via mouse drag and displays an intelligent floating tooltip with the English translation.
 */
class SelectionTranslator {
  constructor(translations) {
    this.translations = translations || INITIAL_TRANSLATIONS;
    this.tooltip = null;
    this.createTooltipElement();
    this.bindEvents();
  }

  createTooltipElement() {
    if (document.getElementById("selectionTooltip")) {
      this.tooltip = document.getElementById("selectionTooltip");
      return;
    }

    this.tooltip = document.createElement("div");
    this.tooltip.className = "translation-tooltip";
    this.tooltip.id = "selectionTooltip";
    this.tooltip.innerHTML = `
      <div class="tooltip-header">
        <span class="tooltip-lang-badge">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          EN Version
        </span>
        <div class="tooltip-actions">
          <button class="tooltip-action-btn" id="tooltipCopyBtn" title="영문 복사">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span id="tooltipCopyText">복사</span>
          </button>
          <button class="tooltip-action-btn" id="tooltipCloseBtn" title="닫기">✕</button>
        </div>
      </div>
      <div class="tooltip-body" id="tooltipTranslatedText"></div>
      <div class="tooltip-original" id="tooltipOriginalText"></div>
    `;
    document.body.appendChild(this.tooltip);

    this.tooltip.querySelector("#tooltipCloseBtn").addEventListener("click", () => this.hideTooltip());
    this.tooltip.querySelector("#tooltipCopyBtn").addEventListener("click", () => this.copyTranslation());
  }

  bindEvents() {
    // Mouse Drag Selection
    document.addEventListener("mouseup", (e) => {
      if (this.tooltip && this.tooltip.contains(e.target)) return;
      setTimeout(() => this.handleSelection(e), 20);
    });

    // Touch Selection on Mobile Devices
    document.addEventListener("touchend", (e) => {
      if (this.tooltip && this.tooltip.contains(e.target)) return;
      setTimeout(() => this.handleSelection(e), 60);
    });

    // Close on Outside Click
    document.addEventListener("mousedown", (e) => {
      if (this.tooltip && !this.tooltip.contains(e.target)) {
        const selection = window.getSelection();
        if (!selection || selection.toString().trim() === "") {
          this.hideTooltip();
        }
      }
    });

    // Close on Escape Key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hideTooltip();
    });
  }

  handleSelection(e) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      this.hideTooltip();
      return;
    }

    const text = selection.toString().trim();
    if (!text || text.length < 2) {
      this.hideTooltip();
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) {
      this.hideTooltip();
      return;
    }

    const translation = this.translate(text);
    if (!translation) {
      this.hideTooltip();
      return;
    }

    this.showTooltip(translation, text, rect);
  }

  translate(koreanText) {
    const clean = koreanText.replace(/\s+/g, " ").trim();
    const normalized = clean.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

    // 1. Exact Match
    if (this.translations.exactMatches[clean]) {
      return this.translations.exactMatches[clean];
    }
    if (this.translations.exactMatches[normalized]) {
      return this.translations.exactMatches[normalized];
    }

    // 2. Substring or Partial Match
    for (const [key, val] of Object.entries(this.translations.exactMatches)) {
      if (clean.length > 5 && key.includes(clean)) {
        return val;
      }
      if (key.length > 5 && clean.includes(key)) {
        return val;
      }
    }

    // 3. Keyword Match
    if (this.translations.keywords[clean]) {
      return this.translations.keywords[clean];
    }

    // 4. Combined Keywords Match
    let foundKeywords = [];
    for (const [k, v] of Object.entries(this.translations.keywords)) {
      if (clean.includes(k) && !foundKeywords.includes(v)) {
        foundKeywords.push(v);
      }
    }
    if (foundKeywords.length > 0) {
      return foundKeywords.join(" · ");
    }

    // 5. Intelligent Fallback for arbitrary phrases
    return `"${clean}" (English translation will appear here)`;
  }

  showTooltip(translatedText, originalText, rect) {
    const translatedEl = this.tooltip.querySelector("#tooltipTranslatedText");
    const originalEl = this.tooltip.querySelector("#tooltipOriginalText");
    const copyText = this.tooltip.querySelector("#tooltipCopyText");

    translatedEl.textContent = translatedText;
    const truncatedOriginal = originalText.length > 38 ? originalText.slice(0, 38) + "..." : originalText;
    originalEl.textContent = `선택: "${truncatedOriginal}"`;
    copyText.textContent = "복사";

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    this.tooltip.style.display = "block";
    this.tooltip.style.visibility = "hidden";
    
    // Calculate layout dimensions
    const tooltipWidth = this.tooltip.offsetWidth;
    const tooltipHeight = this.tooltip.offsetHeight;
    this.tooltip.style.visibility = "visible";

    let left = rect.left + scrollX + (rect.width / 2) - (tooltipWidth / 2);
    // Boundary check for viewport width
    left = Math.max(16, Math.min(left, window.innerWidth - tooltipWidth - 24));

    // Place tooltip above selection by default
    let top = rect.top + scrollY - tooltipHeight - 12;

    // Flip below if not enough room on top
    if (rect.top - tooltipHeight - 12 < 10) {
      top = rect.bottom + scrollY + 12;
    }

    this.tooltip.style.left = `${left}px`;
    this.tooltip.style.top = `${top}px`;

    requestAnimationFrame(() => {
      this.tooltip.classList.add("show");
    });
  }

  hideTooltip() {
    if (!this.tooltip) return;
    this.tooltip.classList.remove("show");
  }

  copyTranslation() {
    const text = this.tooltip.querySelector("#tooltipTranslatedText").textContent;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        const copyText = this.tooltip.querySelector("#tooltipCopyText");
        copyText.textContent = "완료!";
        setTimeout(() => { copyText.textContent = "복사"; }, 2000);
      });
    }
  }
}

/**
 * BlogApp
 * Main application coordinator managing themes, data, tabs, and translators.
 */
class BlogApp {
  constructor() {
    this.data = INITIAL_DATA;
    this.translations = INITIAL_TRANSLATIONS;
    this.currentTab = "all";
    this.initTheme();
    this.initElements();
    this.bindEvents();
    this.loadData();
    this.handleInitialHash();
    this.translator = new SelectionTranslator(this.translations);
  }

  initTheme() {
    const savedTheme = localStorage.getItem("drbrooks-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initialTheme);
    this.updateThemeIcon(initialTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("drbrooks-theme", nextTheme);
    this.updateThemeIcon(nextTheme);
  }

  updateThemeIcon(theme) {
    const btn = document.getElementById("themeToggleBtn");
    if (!btn) return;
    if (theme === "dark") {
      btn.innerHTML = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`;
      btn.setAttribute("aria-label", "라이트 모드로 전환");
    } else {
      btn.innerHTML = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`;
      btn.setAttribute("aria-label", "다크 모드로 전환");
    }
  }

  initElements() {
    this.feedContainer = document.getElementById("feedContent");
    this.tabButtons = document.querySelectorAll(".tab-btn");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
  }

  bindEvents() {
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());
    }

    this.tabButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const tab = e.currentTarget.getAttribute("data-tab");
        this.switchTab(tab);
      });
    });

    window.addEventListener("hashchange", () => this.handleInitialHash());
  }

  async loadData() {
    try {
      // Attempt to load live JSON files if hosted on a web server
      const [profileRes, novelsRes, servicesRes, articlesRes, transRes] = await Promise.all([
        fetch("src/data/profile.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/novels.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/services.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/articles.json").then(r => r.ok ? r.json() : null),
        fetch("src/data/translations.json").then(r => r.ok ? r.json() : null)
      ]);

      if (profileRes) this.data.profile = profileRes;
      if (novelsRes) this.data.novels = novelsRes;
      if (servicesRes) this.data.services = servicesRes;
      if (articlesRes) this.data.articles = articlesRes;
      if (transRes) {
        this.translations = transRes;
        if (this.translator) this.translator.translations = transRes;
      }
    } catch (e) {
      console.log("Using embedded dataset (local environment)");
    }
    this.render();
  }

  handleInitialHash() {
    const hash = window.location.hash.replace("#", "");
    if (["all", "essays", "novels", "services", "about"].includes(hash)) {
      this.switchTab(hash, false);
    } else {
      this.render();
    }
  }

  switchTab(tabName, updateHash = true) {
    this.currentTab = tabName;
    this.tabButtons.forEach(b => {
      const isTarget = b.getAttribute("data-tab") === tabName;
      b.classList.toggle("active", isTarget);
      b.setAttribute("aria-selected", isTarget ? "true" : "false");
    });

    if (updateHash) {
      history.pushState(null, null, `#${tabName}`);
    }

    this.render();
  }

  render() {
    if (!this.feedContainer) return;

    switch (this.currentTab) {
      case "essays":
        this.renderEssays();
        break;
      case "novels":
        this.renderNovels();
        break;
      case "services":
        this.renderServices();
        break;
      case "about":
        this.renderAbout();
        break;
      case "all":
      default:
        this.renderAll();
        break;
    }
  }

  renderAll() {
    const html = `
      <div class="feed-section">
        <div class="section-header">
          <h3 class="section-title">소설 작품 쇼케이스</h3>
          <p class="section-subtitle">기획자의 관찰력과 인간의 한계를 다룬 문피아 연재 작품</p>
        </div>
        <div class="cards-grid" style="margin-bottom: 48px;">
          ${this.data.novels.map(n => this.createNovelCard(n)).join("")}
        </div>

        <div class="section-header">
          <h3 class="section-title">인터랙티브 웹 서비스</h3>
          <p class="section-subtitle">금융, 투자, AI, 생산성을 위한 지능형 웹 애플리케이션 플랫폼</p>
        </div>
        <div class="cards-grid single-col" style="margin-bottom: 48px;">
          ${this.data.services.slice(0, 1).map(s => this.createServiceCard(s)).join("")}
        </div>

        <div class="section-header">
          <div style="display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
              <h3 class="section-title">생각과 기록 (브런치 아카이브)</h3>
              <p class="section-subtitle">기획의 본질과 인간의 심연에 대한 193편의 연재 기록</p>
            </div>
            <a href="https://brunch.co.kr/@drbrooks" target="_blank" rel="noopener noreferrer" class="pillar-link">
              브런치 전체보기 &rarr;
            </a>
          </div>
        </div>
        <div class="cards-grid">
          ${this.data.articles.slice(0, 4).map(a => this.createArticleCard(a)).join("")}
        </div>
      </div>
    `;
    this.feedContainer.innerHTML = html;
  }

  renderNovels() {
    const html = `
      <div class="feed-section">
        <div class="section-header">
          <h3 class="section-title">소설 작품 (Novels & Stories)</h3>
          <p class="section-subtitle">문피아 연재 장편 및 감각적 리얼리티를 다룬 단편 작품 모음</p>
        </div>
        <div class="cards-grid single-col">
          ${this.data.novels.map(n => this.createNovelCard(n, true)).join("")}
        </div>
      </div>
    `;
    this.feedContainer.innerHTML = html;
  }

  renderServices() {
    const html = `
      <div class="feed-section">
        <div class="section-header">
          <h3 class="section-title">Dr. Brooks Services</h3>
          <p class="section-subtitle">Autonomous Web Architecture 기반 인터랙티브 인텔리전스 플랫폼</p>
        </div>
        <div class="cards-grid single-col">
          ${this.data.services.map(s => this.createServiceCard(s)).join("")}
        </div>
      </div>
    `;
    this.feedContainer.innerHTML = html;
  }

  renderEssays() {
    const html = `
      <div class="feed-section">
        <div class="section-header">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
            <div>
              <h3 class="section-title">글과 생각 (Essays & Thoughts)</h3>
              <p class="section-subtitle">브런치 193편의 글 중 기획과 사용자, 인간의 한계를 다룬 핵심 글 모음</p>
            </div>
            <a href="https://brunch.co.kr/@drbrooks" target="_blank" rel="noopener noreferrer" class="btn-primary-sm">
              브런치 프로필 방문 (193편) &rarr;
            </a>
          </div>
        </div>
        <div class="cards-grid">
          ${this.data.articles.map(a => this.createArticleCard(a)).join("")}
        </div>
      </div>
    `;
    this.feedContainer.innerHTML = html;
  }

  renderAbout() {
    const html = `
      <div class="feed-section">
        <div class="about-card">
          <h3>안녕하세요. 닥터브룩스입니다.</h3>
          <div class="about-quote">
            "12년차 제품기획자. 기획의 ‘본질’, 사용자의 ‘관점’, 그리고 인간의 ‘한계’에 대해 관심이 많습니다.<br>
            그에 관한 글도, 소설도, 웹 서비스도 만듭니다."
          </div>

          <h3>1. 기획의 본질 (The Essence)</h3>
          <p>
            12년 동안 다양한 IT 프로덕트를 기획하고 이끌며 수많은 기술과 트렌드의 명멸을 목격했습니다.
            화려한 프레임워크나 복잡한 기능보다 중요한 것은 '사용자가 진정으로 해결하고자 하는 결핍'에 닿아있는가입니다.
            기획의 본질에 대해 치열하게 고민하고 그 과정에서 얻은 인사이트를 브런치와 블로그에 정제된 글로 남깁니다.
          </p>

          <h3>2. 인간의 한계와 소설 (The Human Condition)</h3>
          <p>
            기획자가 다루는 대상은 결국 불완전하고 감정적인 '인간'입니다.
            인간의 신체적 한계, 감각의 결핍, 그리고 조직 내에서의 고립과 따돌림 같은 한계 상황을 소설이라는 형식으로 탐구합니다.
            장편 <초강마패>의 초월적 마패, 단편 <우블리에트의 파수꾼>의 시각 단절 형사, <이산화탄소 조직>의 경력직 생존기는 모두 인간의 조건에 대한 집요한 관찰에서 출발했습니다.
          </p>

          <h3>3. 사용자의 관점을 실현한 웹 서비스 (Autonomous Web)</h3>
          <p>
            생각에만 머물지 않고 실제로 작동하는 프로덕트를 만듭니다.
            Cloudflare Pages와 현대적인 인터랙티브 웹 아키텍처를 기반으로, 금융 분석, 투자 시뮬레이션, 인텔리전스 및 생산성을 돕는 웹 서비스를 직접 구축하여 서비스하고 있습니다.
          </p>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border-light); display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="https://brunch.co.kr/@drbrooks" target="_blank" rel="noopener noreferrer" class="btn-primary-sm">브런치 바로가기</a>
            <a href="https://drbrooks.pages.dev/services/" target="_blank" rel="noopener noreferrer" class="btn-primary-sm" style="background-color: var(--surface-alt); color: var(--text-primary); border: 1px solid var(--border-subtle);">웹 서비스 포털</a>
            <a href="https://www.munpia.com/novel/detail/530809" target="_blank" rel="noopener noreferrer" class="btn-primary-sm" style="background-color: var(--surface-alt); color: var(--text-primary); border: 1px solid var(--border-subtle);">초강마패 보러가기</a>
          </div>
        </div>
      </div>
    `;
    this.feedContainer.innerHTML = html;
  }

  createNovelCard(novel, expanded = false) {
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
              작품 읽기 &rarr;
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
        <div style="display: flex; gap: 12px; margin-top: auto;">
          <a href="${service.url}" target="_blank" rel="noopener noreferrer" class="btn-primary-sm">
            서비스 방문 &rarr;
          </a>
          ${service.links && service.links.about ? `
            <a href="${service.links.about}" target="_blank" rel="noopener noreferrer" class="btn-primary-sm" style="background-color: var(--surface-alt); color: var(--text-primary); border: 1px solid var(--border-subtle);">
              소개 보기
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
          <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="pillar-link" style="font-size: 0.82rem;">
            읽기 &rarr;
          </a>
        </div>
      </article>
    `;
  }
}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.blogApp = new BlogApp();
});
