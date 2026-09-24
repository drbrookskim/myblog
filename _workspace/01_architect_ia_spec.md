# Phase 1: Content Architecture & IA Specification
**에이전트**: `blog-architect`
**일자**: 2026-09-24

---

## 1. 브랜드 정체성 및 포지셔닝
- **주인공**: 닥터브룩스 (Dr. Brooks Kim)
- **페르소나 3각 축**:
  1. **12년차 제품기획자**: 기획의 ‘본질’, 사용자의 ‘관점’을 탐구하는 노련한 프로덕트 매니저
  2. **소설가**: 인간의 ‘한계’와 내면을 서사로 풀어내는 스토리텔러 (<초강마패>, <이산화탄소 조직>, <우블리에트의 파수꾼>)
  3. **웹 서비스 빌더**: 아이디어를 실물 도구로 구현하는 엔지니어링 빌더 (Dr. Brooks Services)
- **핵심 슬로건**: "안녕하세요. 닥터브룩스입니다. 12년차 제품기획자. 기획의 ‘본질’, 사용자의 ‘관점’, 그리고 인간의 ‘한계' 에 대해 관심이 많습니다. 그에 관한 글도, 소설도, 웹 서비스도 만듭니다."

---

## 2. 정보 구조 (IA: Information Architecture)

```
[Dr. Brooks Portal & Blog]
  ├── [Hero Banner] : 핵심 정체성 인트로, 아바타, 3대 축 하이라이트 지표
  ├── [Global Navigation / Filter Tabs]
  │     ├── [전체 (All)] : 주요 에세이, 소설 3작품, 웹서비스 통합 피드
  │     ├── [글 & 생각 (Essays)] : 브런치 193편 연재 아카이브 및 대표 에세이
  │     ├── [소설 (Novels)] : 초강마패(장편), 이산화탄소 조직(단편), 우블리에트의 파수꾼(단편)
  │     ├── [웹서비스 (Services)] : Dr. Brooks Services 인터랙티브 플랫폼 및 도구 모음
  │     └── [소개 (About)] : 12년차 기획자의 철학과 커리어 스토리
  └── [Footer] : 브런치, 문피아, Pages, Tistory, X 링크 및 카피라이트
```

---

## 3. 데이터 자산 현황
| 영역 | 자산명 | 링크 / 출처 | 데이터 파일 |
|------|--------|------------|------------|
| 프로필 | 닥터브룩스 | 브런치 프로필 (@drbrooks) | `src/data/profile.json` |
| 글 | 브런치 블로그 (193편) | `https://brunch.co.kr/@drbrooks` | `src/data/articles.json` |
| 소설 (장편) | 초강마패 | `https://www.munpia.com/novel/detail/530809` | `src/data/novels.json` |
| 소설 (단편) | 이산화탄소 조직 | `https://www.munpia.com/novel/detail/606595` | `src/data/novels.json` |
| 소설 (단편) | 우블리에트의 파수꾼 | `https://www.munpia.com/novel/detail/606594` | `src/data/novels.json` |
| 웹서비스 | Dr. Brooks Services | `https://drbrooks.pages.dev/` | `src/data/services.json` |

---

## 4. `ui-designer-dev` 인계 사항
1. **타이포그래피**: 국문 본문은 Pretendard 기반으로 높은 가독성을 유지하고, 타이틀 및 인용구에는 세리프(Noto Serif KR 또는 Georgia)를 포인트로 배합하여 문학성과 전문성을 동시에 전달할 것.
2. **다크 모드**: 눈이 편안한 슬레이트 다크(`#0f172a` ~ `#1e293b`)와 라이트 웜그레이(`#f8fafc`)를 제공할 것.
3. **독립 실행성**: 번들러 없이도 즉시 브라우저에서 실행되면서, Cloudflare Pages나 GitHub Pages에 정적 배포 가능하도록 자립형 바닐라 스택으로 완성할 것.
