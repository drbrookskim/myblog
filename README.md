# 닥터브룩스 (Dr. Brooks) — 공식 블로그 & 포털

> **"기획의 ‘본질’, 사용자의 ‘관점’, 그리고 인간의 ‘한계’에 대해 관심이 많습니다. 그에 관한 글도, 소설도, 웹 서비스도 만듭니다."**

닥터브룩스의 세 가지 페르소나(12년차 제품기획자, 소설가, 웹 서비스 빌더)를 아우르는 모던 에디토리얼 블로그 및 통합 포털입니다.

- **공식 도메인 (Cloudflare Pages):** [https://drbrooks.pages.dev/](https://drbrooks.pages.dev/)
- **GitHub 저장소:** [https://github.com/drbrookskim/myblog.git](https://github.com/drbrookskim/myblog.git)
- **13개 웹 서비스 허브:** [https://drbrooks.pages.dev/services/](https://drbrooks.pages.dev/services/)
- **브런치 블로그:** [https://brunch.co.kr/@drbrooks](https://brunch.co.kr/@drbrooks)
- **LinkedIn 자격증 & 이력:** [https://www.linkedin.com/in/donghyun-kim-68ab2523/details/certifications/](https://www.linkedin.com/in/donghyun-kim-68ab2523/details/certifications/)

---

## 🏛️ 핵심 3대 축 (Three Pillars)

1. **글 & 생각 (Essays):** 기획의 본질과 사용자 경험, 일과 심리에 관한 깊이 있는 사유 (카카오 브런치 193편 연재).
2. **소설 (Novels):** 인간의 한계와 감각, 조직의 역학을 탐구한 문학 작품 (문피아 연재: 장편 《초강마패》, 단편 《이산화탄소 조직》, 《우블리에트의 파수꾼》).
3. **웹 서비스 (Services):** 생각을 구현한 실체. 금융 분석, 투자 시나리오, AI 생산성 툴 등 실제 사용자의 편익을 창출하는 13개 지능형 웹 애플리케이션 허브 (`/services/`).

---

## ✨ 주요 기능 및 특징 (Key Features)

- **Apple Design & Editorial Typography:** `Inter`, `Noto Sans KR`, `JetBrains Mono` 기반의 단단하고 가독성 높은 에디토리얼 레이아웃.
- **다크/라이트 듀얼 테마 시스템:** 시스템 환경설정 감지 및 `localStorage` 영구 저장을 지원하는 무깜빡임(Zero-flicker) 테마 엔진.
- **드래그 실시간 영어 번역 툴팁 (Selection Translator):** 본문 텍스트 마우스 드래그 선택 시 영문 번역 팝오버를 즉각 띄워주는 바이링구얼 리딩 인터랙션.
- **5개 카테고리 탭 필터링:** 전체(All), 글 & 생각(Essays), 소설(Novels), 웹서비스(Services), 소개(About) 즉각 전환.
- **Dr. Brooks Services 허브 포털 내장 (`/services/`):** 13개 인터랙티브 웹 애플리케이션 타임라인/그리드 뷰 포털 및 3D 아키텍처 상세페이지(`/services/about.html`) 보존 및 연계.
- **Zero-Dependency 정적 아키텍처:** Cloudflare Pages 글로벌 엣지 네트워크에서 초고속 로딩을 지원하는 경량 자립형 웹.

---

## 📁 디렉토리 구조 (Directory Structure)

```text
myblog/
├── index.html            # 블로그 메인 진입점 (drbrooks.pages.dev/)
├── about.html            # 소개 및 3D 아키텍처 상세페이지
├── README.md             # 프로젝트 개요 및 배포 가이드
├── CLAUDE.md             # 하네스 및 유지보수 규칙
├── src/
│   ├── styles/
│   │   └── main.css      # 글래스모피즘, 반응형 토큰, 다크/라이트 테마
│   ├── scripts/
│   │   └── main.js       # 탭 내비게이션, 드래그 번역기, 렌더링 엔진
│   └── data/
│       ├── profile.json  # 프로필 및 링크 메타데이터
│       ├── novels.json   # 문피아 연재 소설 3편 데이터
│       ├── services.json # 서비스 포털 연계 데이터
│       ├── articles.json # 브런치 주요 글 큐레이션
│       └── translations.json # 드래그 번역 사전 (키워드 및 문장)
├── services/             # Dr. Brooks Services 13개 포털 허브 (/services/)
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── services.json
│   └── about.html
└── scripts/
    └── verify-blog.js    # 데이터 무결성 및 링크 교차 검증 스크립트
```

---

## 🚀 배포 및 동기화 (Deployment)

### Cloudflare Pages 배포
```bash
# drbrooks 프로젝트로 즉각 배포
npx wrangler pages deploy . --project-name=drbrooks
```

### GitHub 원격 저장소 동기화
```bash
git add .
git commit -m "feat: update blog content and features"
git push origin main
```
