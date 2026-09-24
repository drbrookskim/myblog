---
name: content-architecture
description: "닥터브룩스 블로그의 콘텐츠 정보 구조(IA), 카테고리 분류, 프로필 및 작품 데이터 모델링을 수행하는 스킬. 블로그 구조 기획, 콘텐츠 추가/수정, 브런치 글 동기화, 소설 및 웹서비스 카탈로그 업데이트 요청 시 반드시 이 스킬을 사용할 것."
---

# Content Architecture Skill

닥터브룩스의 세 가지 페르소나(12년차 기획자, 소설 작가, 웹서비스 빌더)를 아우르는 블로그 정보 구조와 콘텐츠 데이터 모델을 설계하고 관리하는 스킬이다.

## 핵심 목적과 철학
- **단일 소스 진실(SSOT)**: 모든 콘텐츠(프로필, 에세이, 소설, 서비스)는 정형화된 JSON 파일로 관리되어 UI 변경 없이도 콘텐츠만 지속적으로 확장할 수 있어야 한다.
- **삼각 축의 조화**:
  1. `Thoughts & Essays`: 브런치 연재 글 및 기획 인사이트 (기획의 본질, 사용자의 관점, 인간의 한계)
  2. `Stories & Novels`: 문피아 연재 소설 (장편 <초강마패>, 단편 <이산화탄소 조직>, <우블리에트의 파수꾼>)
  3. `Interactive Services`: 실제 작동하는 프로덕트 (Dr. Brooks Services 모음)

## 표준 데이터 스키마

### 1. 프로필 스키마 (`src/data/profile.json`)
```json
{
  "name": "닥터브룩스 (Dr. Brooks)",
  "title": "12년차 제품기획자 · 소설가 · 서비스 빌더",
  "bio": "기획의 ‘본질’, 사용자의 ‘관점’, 그리고 인간의 ‘한계’에 대해 깊이 탐구합니다. 그에 관한 글도, 소설도, 웹 서비스도 만듭니다.",
  "links": {
    "brunch": "https://brunch.co.kr/@drbrooks",
    "services": "https://drbrooks.pages.dev/",
    "tistory": "https://drbrooks.tistory.com/",
    "twitter": "https://x.com/drbrookskim"
  },
  "tags": ["기획", "심리", "인간의 한계", "소설", "웹서비스", "AI/인텔리전스"]
}
```

### 2. 소설 작품 스키마 (`src/data/novels.json`)
```json
[
  {
    "id": "chogang-mapae",
    "title": "초강마패",
    "type": "장편",
    "genre": ["현대판타지", "SF"],
    "summary": "의문의 '마패'를 손에 넣은 흙수저 취준생이 초월적인 마패의 능력으로 부자가 된다.",
    "url": "https://www.munpia.com/novel/detail/530809",
    "platform": "문피아",
    "episodes": 25,
    "status": "연재중",
    "badge": "장편 연재"
  }
]
```

### 3. 웹서비스 카탈로그 스키마 (`src/data/services.json`)
```json
[
  {
    "id": "drbrooks-portal",
    "name": "Dr. Brooks Services",
    "tagline": "금융, 투자, AI, 생산성을 위한 인터랙티브 웹 서비스 모음",
    "description": "Autonomous Web Architecture 기반의 지능형 웹 애플리케이션 플랫폼",
    "url": "https://drbrooks.pages.dev/",
    "category": "Web Platform",
    "tags": ["AI", "Finance", "Productivity", "Cloudflare Pages"]
  }
]
```

### 4. 대표 글/에세이 스키마 (`src/data/articles.json`)
```json
[
  {
    "id": "essence-of-pm",
    "title": "기획의 본질과 사용자의 관점",
    "category": "기획 & 본질",
    "excerpt": "사용자가 겪는 진짜 불편과 인간의 인지적 한계를 파고드는 제품 기획자의 시선",
    "date": "2026-09-24",
    "readingTime": "5 min",
    "url": "https://brunch.co.kr/@drbrooks",
    "platform": "브런치"
  }
]
```

## 작업 절차
1. **요구사항 파악**: 신규 카테고리나 링크가 요청되면 스키마 필드와 매핑을 확인한다.
2. **데이터 파일 갱신**: `src/data/` 디렉토리 아래의 해당 JSON 파일을 갱신한다.
3. **무결성 점검**: 필수 키(`title`, `url`, `summary` 등)가 빠지지 않았는지 확인한다.
4. **결과 문서화**: `_workspace/01_architect_ia_spec.md`에 구조 설계 내역을 요약 기록한다.
