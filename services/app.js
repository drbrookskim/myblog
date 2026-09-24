/**
 * DR. BROOKS SERVICES — MAIN APPLICATION LOGIC
 * Descending Reverse Order (#12 -> #01)
 */

(function () {
  'use strict';

  // --- 1. Built-in Fallback Data (Guarantees Instant Load via file:// or http://) ---
  const DEFAULT_SERVICES = [
    {
      "id": 13,
      "slug": "epochwave",
      "title": "EpochWave",
      "titleEn": "EpochWave",
      "tagline": "1955 → 2026 역사와 시장의 파동 인터랙티브 아카이브",
      "taglineEn": "1955 → 2026 History & Market Wave Interactive Archive",
      "description": "영화 〈백 투 더 퓨처〉 콘셉트로 1955년부터 2026년까지 70년간의 한국사·세계사 48개 대사건과 한·미 4대 증시(코스피·코스닥·나스닥·다우)의 궤적을 레트로 퓨처리즘 타임서킷으로 탐색하는 인터랙티브 시계열 아카이브입니다.",
      "url": "https://epochwave.pages.dev/",
      "domain": "epochwave.pages.dev",
      "category": "market",
      "categoryLabel": "역사 & 시장 파동",
      "categoryEn": "History & Market Waves",
      "tags": ["History & Market", "70-Year Timeline", "4 Major Indices", "Cloudflare Pages", "Back to the Future"],
      "techStack": ["Cloudflare Pages", "Cloudflare Workers", "Retro Futurism UI", "Interactive Canvas Chart", "Time Circuits"],
      "highlights": [
        "1955~2026년 70년 한국사·세계사 48대 사건과 증시 맥락 연결",
        "코스피 · 코스닥 · 나스닥 · 다우 4대 증시 공식 시계열 데이터",
        "영화 〈백 투 더 퓨처〉 레트로 퓨처리즘 타임서킷 UI 인터랙션"
      ],
      "themeColor": "#f97316",
      "gradient": "linear-gradient(135deg, #ff8c00 0%, #ea580c 50%, #dc2626 100%)",
      "icon": "fa-solid fa-clock-rotate-left",
      "badge": "Release #13",
      "order": 13,
      "year": "2026"
    },
    {
      "id": 12,
      "slug": "moneyreport",
      "title": "Dr. Brooks Money & Knowledge Report",
      "titleEn": "Dr. Brooks Money & Knowledge Report",
      "tagline": "산업 핵심 시그널 & 밸류체인 심층 분석 리포트 아카이브",
      "taglineEn": "Industry Signal & Value-Chain Deep Analysis Report Archive",
      "description": "거시경제, 산업 밸류체인, 핵심 투자 시그널을 심층 분석한 리포트를 HTML 형식으로 발행·관리하며 GitHub 동기화 및 즉각적인 열람을 제공하는 아카이브입니다.",
      "url": "https://drbrooks-moneyreport.pages.dev/",
      "domain": "drbrooks-moneyreport.pages.dev",
      "category": "market",
      "categoryLabel": "산업 리포트 아카이브",
      "categoryEn": "Signal Intelligence",
      "tags": ["Industry Report", "Value Chain", "Signal Archive", "Cloudflare Pages"],
      "techStack": ["Cloudflare Pages", "GitHub API Sync", "HTML Signal Viewer", "Security PIN"],
      "highlights": [
        "Cloudflare Pages 기반 글로벌 엣지 초고속 배포",
        "보안 PIN 기반 GitHub 리포지토리 자동 동기화",
        "산업 밸류체인 리포트 전용 팝업 뷰어"
      ],
      "themeColor": "#8b5cf6",
      "gradient": "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      "icon": "fa-solid fa-file-invoice-dollar",
      "badge": "Release #12",
      "order": 12,
      "year": "2026"
    },
    {
      "id": 11,
      "slug": "buythedip",
      "title": "NOSTOS: Buy the Dip",
      "titleEn": "NOSTOS: Buy the Dip Simulator",
      "tagline": "눌림목 매수 & 다각적 매도 전략 AI 백테스팅 시뮬레이터",
      "taglineEn": "Dip-Buying & Multi-Exit Trading Strategy Backtest Simulator",
      "description": "주식 눌림목 매수와 트레일링 스탑, 타임컷, 손익비 기반의 다양한 청산 전략을 시각화하고 실시간 백테스팅 성과를 분석하는 전략 웹 대시보드입니다.",
      "url": "https://drbrookskim.github.io/buythedip/",
      "domain": "drbrookskim.github.io",
      "category": "trading",
      "categoryLabel": "전략 시뮬레이션",
      "categoryEn": "Trading Strategy",
      "tags": ["Trading Strategy", "Backtesting", "Buy the Dip", "Simulation", "Chart.js"],
      "techStack": ["Chart.js", "Chart.js Zoom/Annotation", "FontAwesome 6", "IBM Plex Mono"],
      "highlights": [
        "트레일링 스탑 · 타임컷 · 손익비 복합 매도 시뮬레이션",
        "인터랙티브 차트 줌/팬 및 전략 진입점 시각화",
        "시뮬레이션 매매 이력 로그 및 KPI 분석"
      ],
      "themeColor": "#f59e0b",
      "gradient": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      "icon": "fa-solid fa-arrow-trend-up",
      "badge": "Release #11",
      "order": 11,
      "year": "2026"
    },
    {
      "id": 10,
      "slug": "chartdeepdive",
      "title": "Chart Deep Dive",
      "titleEn": "Chart Deep Dive",
      "tagline": "종목 캔들 차트 기반 지표 · 패턴 · 고급 기법 심층 분석 엔진",
      "taglineEn": "Candlestick Chart Technical Analysis & Pattern Intelligence (KR/US)",
      "description": "한국(KR) 및 미국(US) 증시 종목을 검색하고 캔들 차트 위에 이동평균선, 보조지표, 차트 패턴을 겹쳐서 다차원 기술적 분석을 수행하는 엔진입니다.",
      "url": "https://chartdeepdive.vercel.app/",
      "domain": "chartdeepdive.vercel.app",
      "category": "stock",
      "categoryLabel": "차트 기술적 분석",
      "categoryEn": "Technical Analysis",
      "tags": ["Technical Analysis", "Candle Chart", "KR/US Stock", "Next.js", "Vercel"],
      "techStack": ["Next.js 14", "Vercel", "Turbopack", "Canvas Chart Engine"],
      "highlights": [
        "KR(국내) 및 US(해외) 시장 원클릭 통합 검색",
        "캔들 차트 기반 지표 및 패턴 오버레이 분석",
        "초고속 Next.js Turbopack 아키텍처"
      ],
      "themeColor": "#3b82f6",
      "gradient": "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      "icon": "fa-solid fa-magnifying-glass-chart",
      "badge": "Release #10",
      "order": 10,
      "year": "2026"
    },
    {
      "id": 9,
      "slug": "skillboard",
      "title": "NELCOME.md (SkillBoard)",
      "titleEn": "NELCOME SkillBoard Hub",
      "tagline": "AI 에이전트 스킬 & 프롬프트 커스터마이징 툴킷 대시보드",
      "taglineEn": "AI Agent Skills & Prompt Customization Toolkit Dashboard",
      "description": "Claude Code 및 Antigravity 에이전트가 사용하는 전문 스킬, 시스템 프롬프트, 도구 번들을 체계적으로 열람하고 다운로드/관리하는 스킬 보드입니다.",
      "url": "https://drbrookskim.github.io/skillboard/",
      "domain": "drbrookskim.github.io",
      "category": "ai",
      "categoryLabel": "에이전트 스킬 & 툴킷",
      "categoryEn": "AI Agents & Prompts",
      "tags": ["AI Skills", "Agent Hub", "Prompt Toolkit", "Dashboard", "JSZip"],
      "techStack": ["JSZip", "Space Grotesk", "Starbucks UI Tokens", "Vanilla JS"],
      "highlights": [
        "원클릭 스킬 ZIP 아카이브 자동 생성 및 다운로드",
        "카테고리별 에이전트 스킬 카드 갤러리",
        "프롬프트 템플릿 즉각 복사 및 커스터마이징 가이드"
      ],
      "themeColor": "#006241",
      "gradient": "linear-gradient(135deg, #006241 0%, #15803d 100%)",
      "icon": "fa-solid fa-wand-magic-sparkles",
      "badge": "Release #09",
      "order": 9,
      "year": "2026"
    },
    {
      "id": 8,
      "slug": "gitmark",
      "title": "gitmark",
      "titleEn": "gitmark PWA",
      "tagline": "GitHub 기반 지능형 북마크 & 아카이브 피드 PWA",
      "taglineEn": "GitHub Powered Smart Bookmark & Archive Feed PWA",
      "description": "유용한 개발 자료, 기술 아티클, 저장소를 체계적으로 아카이빙하고 Supabase 및 GitHub와 연동하여 스마트 피드로 관리하는 고성능 PWA입니다.",
      "url": "https://drbrookskim.github.io/gitmark/",
      "domain": "drbrookskim.github.io",
      "category": "developer",
      "categoryLabel": "개발자 툴 & 북마크",
      "categoryEn": "Developer & Tool",
      "tags": ["Bookmark", "GitHub", "Feed", "PWA", "Supabase"],
      "techStack": ["PWA", "Supabase JS", "Tabler Icons", "JetBrains Mono"],
      "highlights": [
        "오프라인 캐싱 및 설치형 웹앱(PWA) 지원",
        "Supabase 실시간 클라우드 북마크 동기화",
        "스타벅스 하우스 그린 모던 피드 카드 UI"
      ],
      "themeColor": "#10b981",
      "gradient": "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      "icon": "fa-solid fa-bookmark",
      "badge": "Release #08",
      "order": 8,
      "year": "2026"
    },
    {
      "id": 7,
      "slug": "pitl",
      "title": "PITL",
      "titleEn": "PITL (Autonomous Product Planning)",
      "tagline": "Starbucks Design System 기반 자율 제품 기획 워크스페이스",
      "taglineEn": "Starbucks Design System Autonomous Product Planning Workspace",
      "description": "아이디어 발상부터 요구사항 정의, 기능 명세 및 로드맵 설계까지 자율형 에이전트와 함께 완결하는 제품 기획 전용 인터랙티브 워크스페이스입니다.",
      "url": "https://drbrookskim.github.io/pitl/",
      "domain": "drbrookskim.github.io",
      "category": "productivity",
      "categoryLabel": "기획 & 생산성",
      "categoryEn": "Productivity & Planning",
      "tags": ["Product Planning", "Workspace", "Autonomous", "Design System"],
      "techStack": ["Starbucks Design System", "Marked.js", "CSS Grid", "FontAwesome"],
      "highlights": [
        "스타벅스 공식 하우스 그린 디자인 시스템 적용",
        "다차원 제품 기획 및 요구사항 명세 캔버스",
        "마크다운 실시간 렌더링 및 로드맵 가시화"
      ],
      "themeColor": "#00754A",
      "gradient": "linear-gradient(135deg, #00754A 0%, #1E3932 100%)",
      "icon": "fa-solid fa-compass-drafting",
      "badge": "Release #07",
      "order": 7,
      "year": "2026"
    },
    {
      "id": 6,
      "slug": "newsfinder",
      "title": "Signnith News Finder",
      "titleEn": "Signnith News Finder",
      "tagline": "On-Demand AI 실시간 금융/산업 뉴스 브리핑 검색 엔진",
      "taglineEn": "On-Demand AI Real-time Financial News Briefing Engine",
      "description": "온디맨드 AI와 연동하여 글로벌 증시 및 주요 산업의 최신 뉴스를 실시간으로 요약 브리핑하고 분석 이력을 관리하는 검색 도구입니다.",
      "url": "https://drbrookskim.github.io/newsfinder/",
      "domain": "drbrookskim.github.io",
      "category": "ai",
      "categoryLabel": "AI 뉴스 & 검색",
      "categoryEn": "AI & Search",
      "tags": ["AI News", "Real-time", "Stock Briefing", "Search", "i18n"],
      "techStack": ["Vite", "ES Modules", "AI Integration", "i18n Multi-language"],
      "highlights": [
        "AI 기반 실시간 핵심 뉴스 요약 브리핑",
        "KO / EN 다국어 즉각 스위칭 지원",
        "최근 분석 이력 드로어 및 원클릭 검색"
      ],
      "themeColor": "#6366f1",
      "gradient": "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
      "icon": "fa-solid fa-newspaper",
      "badge": "Release #06",
      "order": 6,
      "year": "2026"
    },
    {
      "id": 5,
      "slug": "thoughts",
      "title": "Dr. Brooks Thoughts",
      "titleEn": "Dr. Brooks Thoughts Archive",
      "tagline": "브런치 연동 지식 네트워크 그래프 & 생각 아카이브",
      "taglineEn": "Brunch Sync Interactive Knowledge Graph & Thought Archive",
      "description": "브런치 연재 글과 지식 노드를 옵시디언 스타일의 인터랙티브 네트워크 맵(Vis.js)으로 시각화하고 동기화하는 생각의 궤적 아카이브입니다.",
      "url": "https://drbrookskim.github.io/thoughts/",
      "domain": "drbrookskim.github.io",
      "category": "knowledge",
      "categoryLabel": "지식 그래프 & 아카이브",
      "categoryEn": "Knowledge Graph",
      "tags": ["Knowledge Graph", "Brunch Sync", "Archive", "Obsidian Style", "Vis.js"],
      "techStack": ["Vis.js Network", "Marked.js", "Canvas Particles", "FontAwesome"],
      "highlights": [
        "Obsidian 스타일 인터랙티브 3D 지식 그래프",
        "브런치 새 글 실시간 알림 및 동기화 수집 배너",
        "초고속 클라이언트 마크다운 파서 및 검색"
      ],
      "themeColor": "#38bdf8",
      "gradient": "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
      "icon": "fa-solid fa-diagram-project",
      "badge": "Release #05",
      "order": 5,
      "year": "2026"
    },
    {
      "id": 4,
      "slug": "equisense",
      "title": "EquiSense",
      "titleEn": "EquiSense (Equity Sense)",
      "tagline": "펀더멘털 · 해자 · 정성적 · 기술적 4단계 주식 분석 플랫폼",
      "taglineEn": "4-Layer Equity Intelligence: Fundamental, Moat, Qualitative, Technical",
      "description": "쉬운 한 줄 요약으로 시작해 기업의 펀더멘털, 경제적 해자, 정성적 가치, 기술적 지표까지 4단계로 깊이 있게 파고드는 주식 분석 서비스입니다.",
      "url": "https://drbrookskim.github.io/equisense/",
      "domain": "drbrookskim.github.io",
      "category": "stock",
      "categoryLabel": "주식 심층 분석",
      "categoryEn": "Stock Analysis",
      "tags": ["Stock Analysis", "4-Layer Intelligence", "Next.js", "Deep Dive"],
      "techStack": ["Next.js", "Turbopack", "Tailwind CSS", "Google Fonts"],
      "highlights": [
        "4-Layer 계층형 주식 분석 모델",
        "펀더멘털 및 경제적 해자 정밀 진단",
        "직관적인 시각적 리포트와 북마크 관리"
      ],
      "themeColor": "#e2a03f",
      "gradient": "linear-gradient(135deg, #e2a03f 0%, #b45309 100%)",
      "icon": "fa-solid fa-layer-group",
      "badge": "Release #04",
      "order": 4,
      "year": "2026"
    },
    {
      "id": 3,
      "slug": "signnith",
      "title": "SIGNNITH",
      "titleEn": "Signnith Signal Intelligence",
      "tagline": "실시간 주식 시장 시그널 & 수급 인텔리전스 대시보드",
      "taglineEn": "Real-time Market Signal & Volume Intelligence Dashboard",
      "description": "한국 및 글로벌 증시의 시장 수급, 핵심 지표, 다차원 센티먼트 데이터를 통합 집계하여 투자자에게 실시간 시장 시그널을 제공하는 대시보드입니다.",
      "url": "https://drbrookskim.github.io/signnith/",
      "domain": "drbrookskim.github.io",
      "category": "market",
      "categoryLabel": "시장 인텔리전스",
      "categoryEn": "Market Intelligence",
      "tags": ["Stock", "Signal", "Market Intelligence", "Dashboard", "D3.js"],
      "techStack": ["Supabase", "Chart.js", "D3.js", "Space Grotesk"],
      "highlights": [
        "실시간 시장 핵심 수급 시그널 수집",
        "D3 기반 인터랙티브 데이터 시각화",
        "고대비 다크모드 인텔리전스 UI"
      ],
      "themeColor": "#00d4aa",
      "gradient": "linear-gradient(135deg, #00d4aa 0%, #059669 100%)",
      "icon": "fa-solid fa-chart-line",
      "badge": "Release #03",
      "order": 3,
      "year": "2026"
    },
    {
      "id": 2,
      "slug": "todayswhisky",
      "title": "오늘의 위스키",
      "titleEn": "Today's Whiskey",
      "tagline": "MBTI & 바이오리듬 맞춤형 위스키 큐레이션 엔진",
      "taglineEn": "MBTI & Biorhythm Tailored Whiskey Curation Engine",
      "description": "MBTI 성향과 오늘의 감정 상태, 바이오리듬을 정밀 분석하여 개인에게 가장 완벽한 주류 한 잔과 시세/리뷰 정보를 추천하는 큐레이션 서비스입니다.",
      "url": "https://drbrookskim.github.io/todayswhisky/",
      "domain": "drbrookskim.github.io",
      "category": "lifestyle",
      "categoryLabel": "라이프스타일 & AI",
      "categoryEn": "Lifestyle & Curation",
      "tags": ["Lifestyle", "Curation", "MBTI", "Spirits", "Recommendation"],
      "techStack": ["React 18", "Tailwind CSS", "Babel", "Lucide Icons"],
      "highlights": [
        "MBTI + 당일 감정 상태 결합 매칭 알고리즘",
        "33종 엄선 위스키 스펙트럼 및 풍미 프로파일",
        "네이버 AI 시세 및 실시간 리뷰 연계"
      ],
      "themeColor": "#c8962a",
      "gradient": "linear-gradient(135deg, #c8962a 0%, #d97706 100%)",
      "icon": "fa-solid fa-whiskey-glass",
      "badge": "Release #02",
      "order": 2,
      "year": "2026"
    },
    {
      "id": 1,
      "slug": "exchangenow",
      "title": "환율 NOW",
      "titleEn": "Exchange NOW",
      "tagline": "실시간 교차환율 계산기 및 통화 리포트 PWA",
      "taglineEn": "Real-time Cross-Currency Calculator & Interactive Financial Report",
      "description": "THB, USD, VND, PHP, KRW 등 주요 아시아 통화를 실시간으로 교차 계산하고 인터랙티브 차트 및 통화 리포트를 제공하는 모던 금융 웹앱입니다.",
      "url": "https://drbrookskim.github.io/exchangenow/",
      "domain": "drbrookskim.github.io",
      "category": "finance",
      "categoryLabel": "금융 & 통화",
      "categoryEn": "Finance & Currency",
      "tags": ["Finance", "Currency", "PWA", "Real-time", "Calculator"],
      "techStack": ["JavaScript", "Chart.js", "PWA", "HTML5/CSS3"],
      "highlights": [
        "실시간 주요 통화 교차 환율 연동",
        "사칙연산 지원 커스텀 키패드 내장",
        "오프라인 및 모바일 최적화 PWA"
      ],
      "themeColor": "#0E9080",
      "gradient": "linear-gradient(135deg, #0E9080 0%, #14b8a6 100%)",
      "icon": "fa-solid fa-coins",
      "badge": "Release #01",
      "order": 1,
      "year": "2026"
    }
  ];

  // --- 2. Application State ---
  let allServices = [...DEFAULT_SERVICES];
  let currentCategory = 'all';
  let currentView = 'timeline'; // 'timeline' or 'grid'

  // --- 3. DOM Elements ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const categoryFilterGroup = document.getElementById('categoryFilterGroup');
  const viewTimelineBtn = document.getElementById('viewTimelineBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const timelineViewSection = document.getElementById('timelineViewSection');
  const gridViewSection = document.getElementById('gridViewSection');
  const timelineItemsContainer = document.getElementById('timelineItemsContainer');
  const gridItemsContainer = document.getElementById('gridItemsContainer');
  const emptyStateContainer = document.getElementById('emptyStateContainer');
  const filteredCountEl = document.getElementById('filteredCount');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Modal Elements
  const serviceDetailModal = document.getElementById('serviceDetailModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalIconWrap = document.getElementById('modalIconWrap');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalTagline = document.getElementById('modalTagline');
  const modalDesc = document.getElementById('modalDesc');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalDomain = document.getElementById('modalDomain');
  const modalLaunchBtn = document.getElementById('modalLaunchBtn');
  const modalCopyUrlBtn = document.getElementById('modalCopyUrlBtn');
  const toastContainer = document.getElementById('toastContainer');

  let currentModalService = null;

  // --- 4. Initialization ---
  async function init() {
    initTheme();
    setupEventListeners();
    await loadServicesData();
    render();
  }

  // --- 5. Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem('drbrooks-services-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', initialTheme);
    }

    // Listen to system theme change if no explicit choice was saved
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('drbrooks-services-theme')) {
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('drbrooks-services-theme', nextTheme);
    showToast(
      `테마가 ${nextTheme === 'dark' ? '다크 모드' : '라이트 모드'}로 변경되었습니다.`,
      nextTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
    );
  }

  // --- 6. Data Loading ---
  async function loadServicesData() {
    try {
      const response = await fetch('services.json?v=20260917_01');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          allServices = data;
        }
      }
    } catch (e) {
      console.log('Using embedded service catalog fallback.');
    }
    
    // Ensure Descending Reverse Order (#13 -> #01)
    allServices.sort((a, b) => b.order - a.order);
  }

  // --- 7. Event Listeners ---
  function setupEventListeners() {
    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // 'Escape' to close modal
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // Category Filter Tabs
    if (categoryFilterGroup) {
      categoryFilterGroup.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-tab');
        if (!btn) return;

        categoryFilterGroup.querySelectorAll('.filter-tab').forEach((tab) => {
          tab.classList.remove('active');
          tab.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        currentCategory = btn.dataset.category;
        render();
      });
    }

    // View Mode Toggles
    if (viewTimelineBtn) {
      viewTimelineBtn.addEventListener('click', () => switchView('timeline'));
    }
    if (viewGridBtn) {
      viewGridBtn.addEventListener('click', () => switchView('grid'));
    }

    // Reset Filters
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', resetAllFilters);
    }
    if (emptyResetBtn) {
      emptyResetBtn.addEventListener('click', resetAllFilters);
    }

    // Modal Events
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    if (modalCopyUrlBtn) {
      modalCopyUrlBtn.addEventListener('click', () => {
        if (currentModalService && currentModalService.url) {
          copyToClipboard(currentModalService.url, `${currentModalService.title} URL이 복사되었습니다.`);
        }
      });
    }

    // Back to Top
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function resetAllFilters() {
    currentCategory = 'all';

    if (categoryFilterGroup) {
      categoryFilterGroup.querySelectorAll('.filter-tab').forEach((tab, index) => {
        if (index === 0) {
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
        } else {
          tab.classList.remove('active');
          tab.setAttribute('aria-selected', 'false');
        }
      });
    }

    render();
  }

  function switchView(view) {
    currentView = view;
    if (view === 'timeline') {
      viewTimelineBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      timelineViewSection.classList.add('active');
      gridViewSection.classList.remove('active');
    } else {
      viewTimelineBtn.classList.remove('active');
      viewGridBtn.classList.add('active');
      timelineViewSection.classList.remove('active');
      gridViewSection.classList.add('active');
    }
  }

  // --- 8. Filter Logic ---
  function getFilteredServices() {
    return allServices.filter((service) => {
      if (currentCategory !== 'all') {
        if (currentCategory === 'finance') {
          if (!['finance', 'trading', 'stock'].includes(service.category) && service.id !== 1) return false;
        } else if (currentCategory === 'stock') {
          if (!['stock', 'trading'].includes(service.category) && service.id !== 13) return false;
        } else if (currentCategory === 'market') {
          if (!['market'].includes(service.category) && service.id !== 3 && service.id !== 12 && service.id !== 13) return false;
        } else if (currentCategory === 'ai') {
          if (!['ai'].includes(service.category) && service.id !== 6 && service.id !== 9) return false;
        } else if (currentCategory === 'productivity') {
          if (!['productivity', 'developer'].includes(service.category)) return false;
        } else if (currentCategory === 'knowledge') {
          if (!['knowledge'].includes(service.category) && service.id !== 13) return false;
        } else if (currentCategory === 'lifestyle') {
          if (!['lifestyle'].includes(service.category)) return false;
        } else {
          if (service.category !== currentCategory) return false;
        }
      }
      return true;
    });
  }

  // --- 9. Render Function ---
  function render() {
    const filtered = getFilteredServices();

    // Update Result Count
    if (filteredCountEl) {
      filteredCountEl.textContent = filtered.length;
    }

    // Toggle Reset Button
    const isFiltered = currentCategory !== 'all';
    if (resetFiltersBtn) {
      resetFiltersBtn.classList.toggle('hidden', !isFiltered);
    }

    // Handle Empty State
    if (filtered.length === 0) {
      if (timelineViewSection) timelineViewSection.classList.remove('active');
      if (gridViewSection) gridViewSection.classList.remove('active');
      if (emptyStateContainer) emptyStateContainer.classList.remove('hidden');
      return;
    }

    if (emptyStateContainer) emptyStateContainer.classList.add('hidden');
    switchView(currentView);

    // Render Timeline View
    if (timelineItemsContainer) {
      timelineItemsContainer.innerHTML = filtered.map(service => createTimelineCardHTML(service)).join('');
    }

    // Render Grid View
    if (gridItemsContainer) {
      gridItemsContainer.innerHTML = filtered.map(service => createGridCardHTML(service)).join('');
    }

    // Attach Event Listeners to rendered cards
    attachCardEvents();
  }

  // --- 10. Card Templates ---
  function createTimelineCardHTML(service) {
    const orderStr = String(service.order).padStart(2, '0');
    return `
      <div class="timeline-item" data-id="${service.id}">
        <div class="timeline-node">${orderStr}</div>
        <div class="showcase-card" style="--card-color: ${service.themeColor}; --card-gradient: ${service.gradient};">
          <div class="card-header">
            <div class="card-identity">
              <div class="card-icon-box" style="background: ${service.gradient};">
                <i class="${service.icon}"></i>
              </div>
              <div class="card-title-meta">
                <span class="card-seq-badge">${service.categoryLabel}</span>
                <h3 class="card-title">${service.title}</h3>
                <span class="card-tagline">${service.tagline}</span>
              </div>
            </div>
            <span class="card-cat-badge">#${orderStr}</span>
          </div>

          <p class="card-desc">${service.description}</p>

          <ul class="card-highlights">
            ${service.highlights.map(h => `<li><i class="fa-solid fa-check"></i> <span>${h}</span></li>`).join('')}
          </ul>

          <div class="card-tech-stack">
            ${service.techStack.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>

          <div class="card-footer">
            <a href="${service.url}" target="_blank" rel="noopener" class="btn-card-launch">
              <span>사이트 방문</span>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <button class="btn-card-detail" data-action="detail" data-id="${service.id}" title="상세 정보">
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button class="btn-card-detail" data-action="copy" data-url="${service.url}" title="링크 복사">
              <i class="fa-solid fa-copy"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function createGridCardHTML(service) {
    const orderStr = String(service.order).padStart(2, '0');
    return `
      <div class="showcase-card" style="--card-color: ${service.themeColor}; --card-gradient: ${service.gradient};" data-id="${service.id}">
        <div class="card-header">
          <div class="card-identity">
            <div class="card-icon-box" style="background: ${service.gradient};">
              <i class="${service.icon}"></i>
            </div>
            <div class="card-title-meta">
              <span class="card-seq-badge">${service.categoryLabel}</span>
              <h3 class="card-title">${service.title}</h3>
            </div>
          </div>
          <span class="card-cat-badge">#${orderStr}</span>
        </div>

        <span class="card-tagline">${service.tagline}</span>
        <p class="card-desc">${service.description}</p>

        <ul class="card-highlights">
          ${service.highlights.map(h => `<li><i class="fa-solid fa-check"></i> <span>${h}</span></li>`).join('')}
        </ul>

        <div class="card-tech-stack">
          ${service.techStack.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>

        <div class="card-footer">
          <a href="${service.url}" target="_blank" rel="noopener" class="btn-card-launch">
            <span>사이트 방문</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <button class="btn-card-detail" data-action="detail" data-id="${service.id}" title="상세 정보">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn-card-detail" data-action="copy" data-url="${service.url}" title="링크 복사">
            <i class="fa-solid fa-copy"></i>
          </button>
        </div>
      </div>
    `;
  }

  // --- 11. Interactive Card Actions ---
  function attachCardEvents() {
    document.querySelectorAll('.showcase-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        const isAlreadySelected = card.classList.contains('is-selected');
        document.querySelectorAll('.showcase-card').forEach(c => c.classList.remove('is-selected'));
        if (!isAlreadySelected) {
          card.classList.add('is-selected');
        }
      });
    });

    document.querySelectorAll('[data-action="detail"]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(e.currentTarget.dataset.id, 10);
        const service = allServices.find(s => s.id === id);
        if (service) openModal(service);
      });
    });

    document.querySelectorAll('[data-action="copy"]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = e.currentTarget.dataset.url;
        copyToClipboard(url, '서비스 URL이 클립보드에 복사되었습니다.');
      });
    });
  }

  // --- 12. Modal Open / Close ---
  function openModal(service) {
    currentModalService = service;

    if (modalCategoryBadge) modalCategoryBadge.textContent = service.categoryLabel;
    if (modalIconWrap) modalIconWrap.style.background = service.gradient;
    if (modalIcon) modalIcon.className = service.icon;
    if (modalTitle) modalTitle.textContent = service.title;
    if (modalTagline) modalTagline.textContent = service.tagline;
    if (modalDesc) modalDesc.textContent = service.description;

    if (modalHighlights) {
      modalHighlights.innerHTML = service.highlights.map(h => `<li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>`).join('');
    }

    if (modalTechStack) {
      modalTechStack.innerHTML = service.techStack.map(t => `<span class="tech-badge">${t}</span>`).join('');
    }

    if (modalDomain) modalDomain.textContent = service.domain;

    if (modalLaunchBtn) {
      modalLaunchBtn.href = service.url;
    }

    if (serviceDetailModal) {
      serviceDetailModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (serviceDetailModal) {
      serviceDetailModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
    currentModalService = null;
  }

  // --- 13. Toast Notification ---
  function showToast(message, iconClass = 'fa-solid fa-check') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px) scale(0.95)';
      setTimeout(() => toast.remove(), 320);
    }, 2600);
  }

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, 'fa-solid fa-copy');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg, 'fa-solid fa-copy');
    } catch (err) {
      showToast('복사에 실패했습니다.', 'fa-solid fa-triangle-exclamation');
    }
    document.body.removeChild(textArea);
  }

  // --- 14. Run on DOM Loaded ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
