---
name: blog-quality-audit
description: "닥터브룩스 블로그의 링크 유효성, 데이터 정합성, 반응형 뷰포트 레이아웃, 웹 접근성, SEO 메타태그를 체계적으로 검증하는 품질 보증 스킬. 블로그 검증, 링크 점검, 버그 검사, 레이아웃 확인, 배포 전 품질 점검 요청 시 반드시 이 스킬을 사용할 것."
---

# Blog Quality Audit Skill

블로그 시스템의 완성도를 증거 기반으로 검증하는 품질 보증 및 테스트 자동화 스킬이다.

## 핵심 검증 축

### 1. 외부 링크 및 리소스 유효성 검증
- 필수 링크 상태 코드(HTTP 200) 및 URL 구조 점검:
  - 브런치 블로그: `https://brunch.co.kr/@drbrooks`
  - 소설 장편: `https://www.munpia.com/novel/detail/530809` (초강마패)
  - 소설 단편 1: `https://www.munpia.com/novel/detail/606595` (이산화탄소 조직)
  - 소설 단편 2: `https://www.munpia.com/novel/detail/606594` (우블리에트의 파수꾼)
  - 웹서비스: `https://drbrooks.pages.dev/`
- 모든 외부 링크에 `target="_blank" rel="noopener noreferrer"` 속성 적용 여부 확인.

### 2. 데이터-UI 경계면 교차 검증 (Cross-boundary Audit)
- `src/data/*.json`에 기재된 데이터 항목 개수와 렌더링된 카드의 개수 일치 여부.
- 제목, 설명글, 태그, 링크 속성이 DOM에 정확히 주입되었는지 확인.
- 데이터 누락 또는 `undefined`, `null` 텍스트 노출 방지.

### 3. 반응형 뷰포트 및 테마 검증
- 모바일(375px), 태블릿(768px), 데스크톱(1200px) 가로 스크롤(Overflow-x) 발생 여부.
- 라이트 모드 및 다크 모드 전환 시 텍스트 가독성(WCAG AA 명도 대비 4.5:1 이상) 유지 여부.
- 로컬 스토리지 테마 키(`theme-preference`) 저장 및 불러오기 동작 확인.

### 4. SEO & OpenGraph 메타데이터 검증
- `<title>`, `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:image">`, `<meta property="og:url">` 무결성 검증.
- 시맨틱 랜드마크(`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) 및 탭 버튼 `aria-selected` 속성 점검.

## 검증 워크플로우
1. 로컬 환경에서 정적 파일 및 데이터 파일 구조 검사
2. 검증 스크립트 실행 (Node.js 기반 테스트 스크립트 실행)
3. 결함 발견 시 구체적 결함 목록과 수정 방안 보고서 작성 (`_workspace/03_qa_audit_report.md`)
4. 모든 항목 PASS 시 최종 승인 보고
